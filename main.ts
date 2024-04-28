// @ts-nocheck
import { drawCircle2BLMap, drawEdgeMap2BLMap, drawGridLines2BLMap, drawLabel, drawLineString2BLMap, drawMultiPoint2BLMap, drawPlaneMBR2BLMap, drawPlaneMPS2BLMap, drawPoint2BLMap, drawPolygon2BLMap, drawQuadTree2BLMap, drawRectangle2BLMap, drawTriangleEdge2BLMap, innerIcon, removeAllOverlay } from './src/BLDraw.ts';
import * as BLDraw from './src/BLDraw.ts';
import { createToolBar } from './helpers/toolBar.ts';
import { mockPoints } from './src/Mock.ts';

import * as RVGeo from './src/index.ts';
import axios from 'axios';

import { createEditor } from './editor.js';

window.RVGeo = RVGeo;
window.BLDraw = BLDraw;

function tobd09(lon,lat){
  let gcj02 = coordtransform.wgs84togcj02(lon,lat)
  return coordtransform.gcj02tobd09(gcj02[0],gcj02[1])
}
function tobd09s(lonlats){
  return lonlats.map((lonlat) => tobd09(lonlat[0],lonlat[1]))
}

window.tobd09 = tobd09
window.tobd09s = tobd09s


const myMBR1 = [
  -109.04885344551185,
  36.988099165319085,
  -102.05550147177286,
  41.01069002801907
] as [number, number, number, number];

/**
 * parse csv data
 * @param data 
 * @returns 
 */
function parseData(data:string){
  let lines = data.split('\n');
  let result = [];
  for(let line of lines){
      let nums = line.split(',');
      let row = [];
      for(let num of nums){
          // 读取整型 若有 NAN 则替换为 0
          let n = parseInt(num);
          if(isNaN(n)){
              n = 0;
          }
          row.push(n);
      }
      result.push(row);
  }
  // 去掉最后一行
  result.pop();
  return result;
}


function parseData2(
  arr1D: number[],
  width: number,
  isEqualWidth: boolean = true,
  fixLength?: number
): number[][] {
  let result = [];
  for(let i = 0; i < arr1D.length; i += width){
    result.push(arr1D.slice(i, i + width));
  }

  // 若需要确保每长宽相等则 挑选较小的一边作为长宽
  if(isEqualWidth){
    let min = Math.min(result.length, result[0].length);
    if(fixLength){
      min = fixLength;
    }
    result = result.slice(0, min).map((row) => row.slice(0, min));
  }
  return result;
}

const canvas = document.getElementById('myCanvas0') as HTMLCanvasElement;
const ctx = canvas.getContext('2d')!;
// 设置变换
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
// console.log('canvas', canvas.width, canvas.height);

declare const BMapGL: any;
// GL版命名空间为BMapGL
// 按住鼠标右键，修改倾斜角和角度
let map = new BMapGL.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMapGL.Point(-105.7220660521329,39.0119712026557), 8);  // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
var scaleCtrl = new BMapGL.ScaleControl();  // 添加比例尺控件
map.addControl(scaleCtrl);

window.map = map;

createEditor().then((editor) => {
  function customModify(code: string){
    // 只保留函数体
    let start = code.indexOf('{');
    let end = code.lastIndexOf('}');
    let result = code.substring(start+1, end);
    // 去掉缩进 两个空格
    result = result.split('\n').map((line) => {
      return line.substring(2);
    }).join('\n');
    // 在第一行添加 'use strict';
    result = "const RVGeo = window.RVGeo;\n" + result;
    editor.setValue(result);
  }

  // 注册工具条
  createToolBar(document.querySelector<HTMLDivElement>('#toolbar')!, [
    { name: '绘制多点及其重心', action: example1},
    { name: '绘制三角网', action: example2},
    { name: '绘制凸包', action: example3},
    { name: '计算面积', action: example4},
    { name: '绘制Voronoi', action: example5},
    { name: '多边形求交', action: example6},
    { name: '线段求交', action: example7},
    { name: '点线关系', action: example8},
    { name: '四叉树', action: example10},
    { name: 'Alpha Complex', action: example11},
    { name: '栅格', action: example9},
    { name: 'Perlin Noise', action: example12},
    { name: 'Countour', action: example13},
    { name: 'Pyramid', action: example14},
    { name: 'FFT', action: example15},
    { name: '影像直方图', action: example16},
  ],[{ name: 'clear', action: clear},], customModify);
});



function clear(){
  removeAllOverlay(map);
  // 找到所有的canvas标签并清空
  let ctx = canvas.getContext('2d')!;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // 填充白色
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// 全局模拟数据（点集合）
let ps = mockPoints(30, myMBR1);
let mps = new RVGeo.MultiPoint(ps);

function example1(){ // 绘制多点及其重心
  removeAllOverlay(map)
  let icon = innerIcon(0);
  drawPoint2BLMap(mps.centroid(), map);
  drawMultiPoint2BLMap(mps, map, icon);
}

function example2(){ // 绘制三角网
  removeAllOverlay(map);
  let del = RVGeo.Delaunator.from(mps.toXY()); // 传入平面坐标！
  let trs = RVGeo.fillIndexArray(del.getTriangleIndices(), mps.coordinates);
  let trc = RVGeo.triangleCenter(mps.toXY(),del, 0);
  drawPoint2BLMap(trc, map);
  drawTriangleEdge2BLMap(trs, map, {strokeColor: 'blue'});
  let res = RVGeo.fillIndexArray(del.getHull(), mps.coordinates);
  drawPolygon2BLMap([res],map, {fillColor: 'gray'});
  drawMultiPoint2BLMap(mps, map);
}

function example3(){ // 绘制凸包
  removeAllOverlay(map)
  let ps2 = RVGeo.convexHull(ps);
  let ls = RVGeo.toLineString(ps2);
  let polygon = new RVGeo.Polygon([ls.coordinates]);
  let rect = polygon.bbox;
  drawPolygon2BLMap(polygon, map);
  drawRectangle2BLMap(rect, map);
}

function example4(){ // 计算面积
  let Colorado = RVGeo.toLineString(RVGeo.mbrToPolygon(myMBR1).map((p) => new RVGeo.Point([p[0],p[1]]))); // 科罗拉多州边界（粗略）
  let area = RVGeo.EPSG3857.area(Colorado.coordinates);
  let area2 = RVGeo.EPSG3857.planeArea(Colorado.coordinates);
  alert("Colorado area (on sphere): " + area + " m2\n" + "Colorado area (in plane): " + area2 + " m2\n" + "Colorado area (real): 268,627 km2\n");
}

function example5(){ // 绘制Voronoi
  removeAllOverlay(map);
  let points = [
    [
      -112.2941812737089,
      42.98773501092674
    ],
    [
      -112.2941812737089,
      34.07077082095674
    ],
    [
      -98.06343559228408,
      34.07077082095674
    ],
    [
      -98.06343559228408,
      42.98773501092674
    ],
    [
      -112.2941812737089,
      42.98773501092674
    ]
  ] as [number, number][];

  let myMps = new RVGeo.MultiPoint(points);

  let del = RVGeo.Delaunator.from(mps.toXY().concat(myMps.toXY())); // 传入平面坐标！

  let vor = new RVGeo.Voronoi(del);
  let voi = vor.cutVoronoiByMBR(myMBR1);
  // let voi = vor.getVoronoi();
  // console.log(voi);

  drawEdgeMap2BLMap(voi, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
}

function example6(){ // 多边形求交
  removeAllOverlay(map);
  let rect1 = [
    [-108.43658107534337,  40.29976780112503],[-108.43658107534337,  38.55075512778069],[-105.67716914258902,  38.55075512778069],[-105.67716914258902,  40.29976780112503]
  ] as [number, number][];
  let rect2 = [
    [-107.34797321677699,  39.68665076371036],[-107.34797321677699,  37.315553928222414],[-103.90893321662871,  37.315553928222414],[-103.90893321662871,  39.68665076371036]
  ] as [number, number][];
  // draw rectangle
  drawLineString2BLMap(rect1, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawLineString2BLMap(rect2, map,{ strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 },true);
  let res = RVGeo.intersectionPolygon(rect1, rect2);

  drawPolygon2BLMap([res], map, {fillColor: 'red'});
}

function example7(){ // 线段求交
  removeAllOverlay(map);
  let line1 = [
    [
      -108.742669882491,
      40.72721830758718
    ],
    [
      -102.29819316274084,
      37.2873641721976
    ]
  ] as [number, number][];
  let line2 = [
    [
      -107.97399126074589,
      37.59766864452851
    ],
    [
      -102.641058204481,
      40.664014824200905
    ]
  ] as [number, number][];
  let line3 =[
    [
      -102.3965685720985,
      41.613436668810465
    ],
    [
      -101.58822187178613,
      37.428342894987836
    ]
  ] as [number, number][];

  drawLineString2BLMap(line1, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawLineString2BLMap(line2, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawLineString2BLMap(line3, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  let insPoi = RVGeo.intersection(line1[0], line1[1], line2[0], line2[1]) as [number, number];
  drawPoint2BLMap(insPoi, map);
}


function example8(){ // 点线关系
  removeAllOverlay(map);

  let line = [
    [
      -105.84580648407761,
      40.23546027049062
    ],
    [
      -105.98171384883719,
      37.38228706395721
    ]
  ] as [number, number][];

  let myIcon1 = innerIcon(0);
  let outPoi = [
    -107.11904390129598,
    39.05128102775606
  ] as [number, number];

  let myIcon2 = innerIcon(1);
  let inPoi = [
    -104.51534491327676,
    38.97346949562407
  ] as [number, number];
  let res1 = RVGeo.pointInEdge(outPoi, line[0], line[1]);
  let res2 = RVGeo.pointInEdge(inPoi, line[0], line[1]);

  drawLineString2BLMap(line, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawPoint2BLMap(outPoi, map, myIcon1);
  drawPoint2BLMap(inPoi, map, myIcon2);
  alert("outPoi: " + res1 + "\n" + "inPoi: " + res2);
}


declare const GeoTIFF: any;
function example9(){
  const drawProgress = RVGeo.drawProgress;
  const progressBar = {x: 924, y: 1004, w: 100, h: 20};
  drawProgress(canvas,progressBar,0);

  const drawGrid2d = RVGeo.drawGrid2d;
  const trueColorBandFactory = RVGeo.trueColorBandFactory;
  const drawTrueColorGrid2d = RVGeo.drawTrueColorGrid2d;

  let URL = 'exa2.tif';
  let URL2 = 'exa.tif';
  let rect = {x: 512, y: 0, w: 512, h: 512};
  let rect2 = {x: 512, y: 512, w: 512, h: 512};

  getShowTif(URL, rect);
  getShowTif(URL2, rect2);


function getShowTif(URL: string, rect: {x: number, y: number, w: number, h: number}){
  GeoTIFF.fromUrl(URL).then((tif:any) => {
    tif.getImage().then((image:any) => {
      let width = image.getWidth();
      image.readRasters().then((rasters:any) => {
        let data = [] as number[][][];
        // console.log(rasters);
        // 4、3、2 波段 但是数组的索引是从0开始的 所以是3、2、1
        let bands = [3,2,1];
        bands.forEach((band) => {
          data.push(parseData2(rasters[band], width, true, 256));
        });
        let grid = new RVGeo.Grid(myMBR1,data);

        grid.fillInvalidValue(0);  // 填充无效值
        grid.fillInvalidValue(1);
        grid.fillInvalidValue(2);

        // console.log(grid.getBand(0));
        let myTrueColorBand = trueColorBandFactory(RVGeo.stretchType.square);
        drawTrueColorGrid2d(canvas, grid, [0,1,2], rect, myTrueColorBand);
        drawProgress(canvas,progressBar,100);
      });
    });
    drawProgress(canvas,progressBar,50);
  });
}


  axios.get('dem.csv').then((res)=>{

    let innerMBR = [
        -107.19241981061282,
        37.96392802178495,
        -104.23896455039352,
        39.75362886925538
    ] as [number, number, number, number];
    let data = parseData(res.data);
    // console.log(data);
    let grid = new RVGeo.Grid(myMBR1,[data]);
    let testPoi = [-105.723781221762,38.87054575208597] as [number, number];
    let inMBR = grid.ConvertToGridMBR(innerMBR) as RVGeo.MBR;
    let subdrid = grid.getSubGrid(inMBR);

    let grid2 = new RVGeo.Grid(innerMBR,subdrid);
    drawGridLines2BLMap(grid2.MBR, grid2.rows, grid2.cols, map,{ strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 });
    drawLineString2BLMap(RVGeo.mbrToPolygon(myMBR1), map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
    drawPoint2BLMap(testPoi, map);
    drawLabel(testPoi, `${grid.getGridCoord(testPoi)}` ,map);
    drawGridLines2BLMap(grid.MBR, grid.rows, grid.cols, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 });
    let myPseudoColorBand = RVGeo.pseudoColorBandFactory(RVGeo.stretchType.linear); // ["red", "yellow", "green","white"];
    drawGrid2d(canvas, data, {x: 0, y: 0, w: 512, h: 512}, grid.getBandStatistics(0), myPseudoColorBand);
    const stretchType = RVGeo.stretchType;
    let postions = [
      [0,0],
      [0,1],
      [1,0],
      [1,1]
    ]
    // 遍历枚举类型
    for(let type in stretchType){
      if(parseInt(type) > 3) break;
      let colorband = RVGeo.simpleColorBandFactory(parseInt(type));
      let postion = postions[parseInt(type)];
      drawGrid2d(canvas, data, {x: postion[0]*256, y: postion[1]*256 + 256*2, w: 256, h: 256}, grid.getBandStatistics(0), colorband);
    }
  });

}

function example10(){ // 四叉树
  removeAllOverlay(map);
  // mps = updateData();

  let queryMBR = [
    -107.68090845026995,
    37.315553928222414,
    -106.90893321662871,
    38.664014824200905
  ] as [number, number, number, number];

  // 平面四叉树矩形范围
  let planeMBR = RVGeo.MBR2Plane(myMBR1);
  // 计算对角线距离
  let diagonal = RVGeo.Earth.distance([queryMBR[0],queryMBR[1]],[queryMBR[2],queryMBR[3]]);
  let center = RVGeo.SphericalMercator.project(mps.centroid().coordinates);
  // 查询的圆形范围
  let queryCircle = new RVGeo.Circle(center[0],center[1], Math.round(diagonal)/2);
  // console.log(queryCircle);
  let boundary = myMBR1;
  let capacity = 2;
  let qtree = new RVGeo.QuadTree(boundary, capacity);
  let planeTree = new RVGeo.QuadTree(planeMBR, capacity);

  mps.coordinates.forEach((p) => qtree.insert(p));
  mps.toXY().forEach((p) => {
    planeTree.insert(p);
  });

  // mps.coordinates.forEach((p) => {
  //   drawLabel(p, `${p.to2DArray()}` ,map)
  // });
  drawQuadTree2BLMap(planeTree, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.1 },true);

  // query points
  // let queryPoints = qtree.queryRange(queryMBR);
  let increcs = [] as RVGeo.MBR[];
  let queryPoints2 = planeTree.customQuery(queryCircle);
 
  let queryPoints = qtree.queryRange(queryMBR);
  // console.log(queryPoints2);
  drawPlaneMPS2BLMap(queryPoints2, map);
  for(let i = 0; i < increcs.length; i++){
    drawPlaneMBR2BLMap(increcs[i], map, {strokeColor: 'blue', strokeOpacity: 0.5,});
  }
  // console.log(mps.centroid());
  drawCircle2BLMap(mps.centroid(), Math.round(diagonal)/2, map, {strokeColor: 'red', strokeOpacity: 0.5, fillColor: 'red', fillOpacity: 0.2});

  let icon = innerIcon(0);
  drawMultiPoint2BLMap(mps, map, icon);
  // draw query points
  drawMultiPoint2BLMap(queryPoints, map, innerIcon(1));
  // draw mbr
  drawRectangle2BLMap(queryMBR, map,{
    strokeColor: "green",
    strokeWeight: 2,
    strokeOpacity: 0.5,
    fillColor: 'green',
    fillOpacity: 0.2
  });

}

function example11(){ // Alpha Shape 算法
  removeAllOverlay(map);
  let alpha = 1/15000000000;
  let alphacomplex = RVGeo.alphaComplex(ps, alpha);
  console.log(alphacomplex);
  let trs = RVGeo.fillIndexArray(alphacomplex, mps.coordinates);
 
  drawTriangleEdge2BLMap(trs, map, {strokeColor: 'blue'});

  // 绘制所有点
  let icon = innerIcon(0);
  drawMultiPoint2BLMap(mps, map, icon);

  // 用红色绘制凸包
  let ps2 = RVGeo.convexHull(ps);
  let ls2 = RVGeo.toLineString(ps2);
  let polygon2 = new RVGeo.Polygon([ls2.coordinates]);
  drawPolygon2BLMap(polygon2, map, {fillColor: 'red', fillOpacity: 0.1, strokeColor: 'red', strokeOpacity: 0.5});
}

function example12(){
  const Perlin = RVGeo.Perlin; // Perlin 噪声生成器
  const dampedSin3D = RVGeo.dampedSin3D; // 3D阻尼正弦波噪声生成器
  const Sin3D = RVGeo.Sin3D; // 3D正弦波噪声生成器
  const worleyNoise = RVGeo.worleyNoise; // Worley 噪声生成器
  const CountourColorList = RVGeo.CountourColorList; // 等值线颜色列表
  const drawGrid2d = RVGeo.drawGrid2d;

  const Grid = RVGeo.Grid; // 栅格类
  const drawCountour = RVGeo.drawCountour; // 绘制等值线
  const size = 64;
  const blocksize = 256;

  let data = [];
  // sample by Perlin, dampedSin3D, Sin3D
  data.push(sample(size,0.05,0.05,Perlin));
  data.push(sample(size,1,1,dampedSin3D));
  data.push(sample(size,1,1,Sin3D));

  // draw grid
  let mySimpleColorBand = RVGeo.simpleColorBandFactory(RVGeo.stretchType.linear);
  let rmySimpleColorBand = RVGeo.simpleColorBandFactory(RVGeo.stretchType.linear,true); // reverse color band
  let myPseudoColorBand = RVGeo.pseudoColorBandFactory(RVGeo.stretchType.linear);

  let grid = [] as RVGeo.Grid[];
  data.forEach((d) => {
    grid.push(new Grid(myMBR1, [d]));
  });

  for(let i = 0; i < 3; i++){
    drawGrid2d(canvas, data[i], {x: 0, y: i*blocksize, w: blocksize, h: blocksize}, grid[i].getBandStatistics(0), mySimpleColorBand);
    drawGrid2d(canvas, data[i], {x: blocksize, y: i*blocksize, w: blocksize, h: blocksize}, grid[i].getBandStatistics(0), myPseudoColorBand);
    drawCountour(canvas, grid[i].getCoutourCode(0,- 0.35), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#163544");
    drawCountour(canvas, grid[i].getCoutourCode(0,- 0.3), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#163544");
    drawCountour(canvas, grid[i].getCoutourCode(0,- 0.2), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#163544");
    drawCountour(canvas, grid[i].getCoutourCode(0,- 0.1), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#163544");
    drawCountour(canvas, grid[i].getCoutourCode(0,0.001), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#163544");
    drawCountour(canvas, grid[i].getCoutourCode(0,0.002), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#163544");
    drawCountour(canvas, grid[i].getCoutourCode(0,0.15), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#495a45");
    drawCountour(canvas, grid[i].getCoutourCode(0,0.2), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#767d58");
    drawCountour(canvas, grid[i].getCoutourCode(0,0.25), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#76a477");
    drawCountour(canvas, grid[i].getCoutourCode(0,0.3), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#d7bd7f");
    drawCountour(canvas, grid[i].getCoutourCode(0,0.35), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#d7221f");
    drawCountour(canvas, grid[i].getCoutourCode(0,0.5), {x: 2*blocksize, y: i*blocksize, w: blocksize, h: blocksize},"#119da4");
    drawGrid2d(canvas, data[i], {x: 3*blocksize, y: i*blocksize, w: blocksize, h: blocksize}, grid[i].getBandStatistics(0), rmySimpleColorBand);
  }

  let worleygrid = new Grid(myMBR1,[worleyNoise(256,256,16)]);
  // let mySimpleColorBand2 = RVGeo.simpleColorBandFactory(RVGeo.stretchType.linear,true);
  drawGrid2d(canvas, worleygrid.data[0], {x: 0, y: 3*blocksize, w: blocksize, h: blocksize}, worleygrid.getBandStatistics(0), mySimpleColorBand);
  drawGrid2d(canvas, worleygrid.data[0], {x: blocksize, y: 3*blocksize, w: blocksize, h: blocksize}, worleygrid.getBandStatistics(0), myPseudoColorBand);
  for(let i = 0; i < 30; i++){
    let index = i % CountourColorList.length;
    drawCountour(canvas, worleygrid.getCoutourCode(0,i * 5), {x: 2*blocksize, y: 3*blocksize, w: blocksize, h: blocksize},CountourColorList[index]);
  }
  drawGrid2d(canvas, worleygrid.data[0], {x: 3*blocksize, y: 3*blocksize, w: blocksize, h: blocksize}, worleygrid.getBandStatistics(0), rmySimpleColorBand);

  function sample(size: number,x: number,y: number, sampleFunc: (x: number, y: number) => number){
    let data = [];
    for(let i = 0; i < size; i++){
      let tmp = [];
      for(let j = 0; j < size; j++){
        let noise = sampleFunc(i*x - size/2, j*y - size/2); // 生成噪声0-1
        tmp.push(noise);
      }
      data.push(tmp);
    }
    return data;
  }

}

function example13(){
  // const binDrawGrid2d = RVGeo.binDrawGrid2d;
  const drawCountour = RVGeo.drawCountour;
  const drawGrid2d = RVGeo.drawGrid2d;
  axios.get('dem.csv').then((res)=>{
    let data = parseData(res.data);
    let grid = new RVGeo.Grid(myMBR1,[data]);

    let countour1 = grid.getCoutourCode(0,0.6);
    let countour2 = grid.getCoutourCode(0,1.2);
    let countour3 = grid.getCoutourCode(0,1.8);
    let countour4 = grid.getCoutourCode(0,2.4);
    let countour5 = grid.getCoutourCode(0,3.6);
    let countour6 = grid.getCoutourCode(0,4.8);
    // console.log(countour1);

    drawGrid2d(canvas, data, {x: 0, y: 0, w: 1024, h: 1024}, grid.getBandStatistics(0), 
      RVGeo.simpleColorBandFactory(RVGeo.stretchType.power,true));

    // binDrawGrid2d(canvas, countour1, {x: 0, y: 0, w: 1024, h: 1024},RVGeo.simplePseudoColorBand);
    drawCountour(canvas, countour1, {x: 0, y: 0, w: 1024, h: 1024},"red");
    drawCountour(canvas, countour2, {x: 0, y: 0, w: 1024, h: 1024},"green");
    drawCountour(canvas, countour3, {x: 0, y: 0, w: 1024, h: 1024},"blue");
    drawCountour(canvas, countour4, {x: 0, y: 0, w: 1024, h: 1024},"orange");
    drawCountour(canvas, countour5, {x: 0, y: 0, w: 1024, h: 1024},"purple");
    drawCountour(canvas, countour6, {x: 0, y: 0, w: 1024, h: 1024},"black");

  })
}

function example14(){
  const subdivide2QTree = RVGeo.subdivide2QTree;
  const Grid = RVGeo.Grid;
  const drawQTree2d = RVGeo.drawQTree2d;
  // const drawGrid2d = RVGeo.drawGrid2d;
  let mySimpleColorBand = RVGeo.simpleColorBandFactory(RVGeo.stretchType.linear);
  axios.get('dem.csv').then((res)=>{
    let data = parseData(res.data);
    let grid = new Grid(myMBR1,[data]);
    let subgrid = subdivide2QTree(grid,10);
    drawQTree2d(
      canvas,{x: 0, y: 0, w: 1024, h: 1024},subgrid,grid,mySimpleColorBand
    )
    // drawGrid2d(canvas, data, {x: 1024, y: 0, w: 1024, h: 1024}, grid.getBandStatistics(0), mySimpleColorBand);
  });
}

function example15(){
  const fastFFT2 = RVGeo.fastFFT2;
  const drawGrid2d = RVGeo.drawGrid2d;
  const Grid = RVGeo.Grid;
  const Sin3D = RVGeo.Sin3D; // 3D正弦波噪声生成器
  const Perlin = RVGeo.Perlin; // Perlin 噪声生成器
  const dampedSin3D = RVGeo.dampedSin3D; // 3D阻尼正弦波噪声生成器

  let data = [];
  data.push(sample(128,0.05,0.05,Perlin));
  data.push(sample(128,0.05,0.5,Perlin));
  data.push(sample(128,0.01,0.01,Perlin));
  data.push(sample(128,0.1,0.1,Sin3D));
  data.push(sample(128,1,1,Sin3D));
  data.push(sample(128,0.05,0.01,Sin3D));
  data.push(sample(128,0.5,0.1,Perlin));
  data.push(sample(128,1,1,dampedSin3D));

  let fft = [] as number[][][];
  data.forEach((d) => {
    let tmp = fastFFT2(d);
    fft.push(tmp.map((row) => row.map((c) => Math.sqrt(c.real*c.real + c.imag*c.imag)))); // 模值
  });

  let grid = [] as RVGeo.Grid[];
  data.forEach((d) => {
    grid.push(new Grid(myMBR1, [d]));
  });

  let fftGrid = [] as RVGeo.Grid[];
  fft.forEach((d) => {
    fftGrid.push(new Grid(myMBR1, [d]));
  });

  // 1024 * 1024
  for(let i = 0; i < 4; i++){
    drawGrid2d(canvas, data[i], {x: 0, y: i*256, w: 256, h: 256}, grid[i].getBandStatistics(0), RVGeo.simpleColorBandFactory(RVGeo.stretchType.linear));
    drawGrid2d(canvas, fft[i], {x: 256, y: i*256, w: 256, h: 256}, fftGrid[i].getBandStatistics(0), RVGeo.simpleColorBandFactory(RVGeo.stretchType.linear));
  }

  for(let i = 4; i < 8; i++){
    drawGrid2d(canvas, data[i], {x: 512, y:(i - 4)*256, w: 256, h: 256}, grid[i].getBandStatistics(0), RVGeo.simpleColorBandFactory(RVGeo.stretchType.linear));
    drawGrid2d(canvas, fft[i], {x: 768, y:(i - 4)*256, w: 256, h: 256}, fftGrid[i].getBandStatistics(0), RVGeo.simpleColorBandFactory(RVGeo.stretchType.linear));
  }

  function sample(size: number,x: number,y: number, sampleFunc: (x: number, y: number) => number){
    let data = [];
    for(let i = 0; i < size; i++){
      let tmp = [];
      for(let j = 0; j < size; j++){
        let noise = sampleFunc(i*x - size/2, j*y - size/2); // 生成噪声0-1
        tmp.push(noise);
      }
      data.push(tmp);
    }
    return data;
  }
}

/**
 * 影像直方图
 */
function example16(){
  // const drawSample2 = RVGeo.drawSample2;
  const drawSample = RVGeo.drawSample;
  const drawProgress = RVGeo.drawProgress;
  const hist = RVGeo.hist; // 直方图
  const progressBar = {x: 924, y: 1004, w: 100, h: 20};
  drawProgress(canvas,progressBar,0);

  const trueColorBandFactory = RVGeo.trueColorBandFactory;
  const drawTrueColorGrid2d = RVGeo.drawTrueColorGrid2d;

  let URL = 'exa2.tif';
  let URL2 = 'exa.tif';
  let rect = {x: 0, y: 0, w: 512, h: 512};
  let rect2 = {x: 0, y: 512, w: 512, h: 512};

  let rect3r = {x: 512, y: 0, w: 512, h: 512};
  let rect3g = {x: 512, y: 0, w: 512, h: 512};
  let rect3b = {x: 512, y: 0, w: 512, h: 512};

  let rect4r = {x: 512, y: 512, w: 512, h: 512};
  let rect4g = {x: 512, y: 512, w: 512, h: 512};
  let rect4b = {x: 512, y: 512, w: 512, h: 512};

  getShowTif(URL, rect, [rect3r,rect3g,rect3b]);
  getShowTif(URL2, rect2, [rect4r,rect4g,rect4b]);


function getShowTif(URL: string, rect: {x: number, y: number, w: number, h: number},
  rect2?: {x: number, y: number, w: number, h: number}[]
  ){
  GeoTIFF.fromUrl(URL).then((tif:any) => {
    tif.getImage().then((image:any) => {
      let width = image.getWidth();
      image.readRasters().then((rasters:any) => {
        let data = [] as number[][][];
        // 4、3、2 波段 但是数组的索引是从0开始的 所以是3、2、1
        let bands = [3,2,1];
        bands.forEach((band) => {
          data.push(parseData2(rasters[band], width, true, 256));
        });
        let grid = new RVGeo.Grid(myMBR1,data);

        grid.fillInvalidValue(0);  // 填充无效值
        grid.fillInvalidValue(1);
        grid.fillInvalidValue(2);

        // console.log(grid.getBand(0));
        let myTrueColorBand = trueColorBandFactory(RVGeo.stretchType.square);
        drawTrueColorGrid2d(canvas, grid, [0,1,2], rect, myTrueColorBand);
        drawProgress(canvas,progressBar,50);
        if(rect2){
          // drawSample2(canvas,rect2,grid.getSorted1DArray(0),{color: "rgba(255,0,0,0.5)", backgroundColor: "rgba(0,0,0,0)"});
          // drawSample2(canvas,rect2,grid.getSorted1DArray(1),{color: "rgba(0,255,0,0.5)", backgroundColor: "rgba(0,0,0,0)"});
          // drawSample2(canvas,rect2,grid.getSorted1DArray(2),{color: "rgba(0,0,255,0.5)", backgroundColor: "rgba(0,0,0,0)"});
          let styles = [
            {color: "rgba(255,0,0,0.3)", backgroundColor: "rgba(0,0,0,0)"},
            {color: "rgba(0,255,0,0.3)", backgroundColor: "rgba(0,0,0,0)"},
            {color: "rgba(0,0,255,0.3)", backgroundColor: "rgba(0,0,0,0)"}
          ]
          for(let i = 0; i < rect2.length; i++){
            // drawSample2(canvas,rect2[i],hist(grid.getBand(i),RVGeo.stretchType.square,grid.getBandStatistics(i)),styles[i]);
            drawSample(canvas,rect2[i],hist(grid.getBand(i),RVGeo.stretchType.square,grid.getBandStatistics(i)),styles[i]);
            // console.log(hist(grid.getBand(i),RVGeo.stretchType.linear,grid.getBandStatistics(i)));
            // console.log(grid.getBand(i));
          }
        }
        drawProgress(canvas,progressBar,100);
      });
    });
  });
}

}