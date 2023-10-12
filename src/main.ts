import { createToolBar } from './helpers/toolBar.ts'
import { Point, MultiPoint, LineString, Polygon, mbrToPolygon, MBR, Circle } from './packages/Geometry.ts'
import { mockPoints} from './tests/Mock.ts';
import { drawMultiPoint2BLMap, removeAllOverlay, drawRectangle2BLMap, drawLineString2BLMap,drawPolygon2BLMap, innerIcon,drawTriangleEdge2BLMap, drawPoint2BLMap, drawEdgeMap2BLMap, drawGridLines2BLMap, drawLabel, drawQuadTree2BLMap, drawCircle2BLMap, drawPlaneMPS2BLMap } from './helpers/BLDraw.ts';
import { createPointListFromArr } from './packages/MetaData.ts';
import { alphaShape, convexHull } from './packages/Shell.ts';
import { Delaunator, triangleCenter, Voronoi } from "./packages/Delaunay.ts"
import { fillIndexArray } from './packages/constants/Utils.ts';
import { SpherePolygonArea, haversine } from './packages/Distance.ts';
import { intersection, intersectionPolygon, pointInEdge } from './packages/CGUtils.ts';
import { QuadTree } from './packages/QuadTree.ts'

import * as RVGeo from './packages/index.ts';
import axios from 'axios';
import { MBR2Plane, convertToMercator, plane2MBR } from './packages/Referencing.ts';

const myMBR1 = [
  -109.07111505279033,
  36.990057191562045,
  -102.06399125241506,
  40.981780653665425
] as [number, number, number, number];


// Init Map and ToolBar

declare const BMapGL: any;
// GL版命名空间为BMapGL
// 按住鼠标右键，修改倾斜角和角度
let map = new BMapGL.Map("allmap");    // 创建Map实例
map.centerAndZoom(new BMapGL.Point(-105.7220660521329,39.0119712026557), 8);  // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
// 注册工具条
createToolBar(document.querySelector<HTMLDivElement>('#toolBar')!, [
  { name: '绘制多点及其重心', action: () =>  example1()},
  { name: '绘制三角网', action: () =>  example2()},
  { name: '绘制凸包', action: () =>  example3()},
  { name: '计算面积', action: () =>  example4()},
  { name: '绘制Voronoi', action: () =>  example5()},
  { name: '多边形求交', action: () =>  example6()},
  { name: '线段求交', action: () =>  example7()},
  { name: '点线关系', action: () =>  example8()},
  { name: '栅格', action: () =>  example9()},
  { name: '四叉树', action: () =>  example10()},
  { name: 'Alpha Shape', action: () =>  example11()},
  { name: 'clear', action: () =>  removeAllOverlay(map)},
])

// 全局模拟数据（点集合）
let ps = mockPoints(10, myMBR1);
let mps = new MultiPoint(ps);

function example1(){ // 绘制多点及其重心
  removeAllOverlay(map)
  let icon = innerIcon(0);
  console.log(mps.calculateCentroid());
  drawPoint2BLMap(mps.calculateCentroid(), map);
  drawMultiPoint2BLMap(mps, map, icon);
}

function example2(){ // 绘制三角网
  removeAllOverlay(map)
  let del = Delaunator.from(mps.toXYArray());
  let trs = fillIndexArray(del.getTriangleIndices(), mps.toArray());
  let trc = triangleCenter(mps.toXYArray(),del, 0);
  drawPoint2BLMap(trc, map);
  drawTriangleEdge2BLMap(trs, map, {strokeColor: 'blue'});
  let res = fillIndexArray(del.getHull(), mps.toArray());
  drawPolygon2BLMap([res],map, {fillColor: 'gray'});
  drawMultiPoint2BLMap(mps, map);
  console.log(del.getHull());
}

function example3(){ // 绘制凸包
  removeAllOverlay(map)
  let ps2 = convexHull(ps);
  let ls = new LineString(ps2);
  let polygon = new Polygon([ls]);
  let rect = polygon.getMBR();
  drawPolygon2BLMap(polygon, map);
  drawRectangle2BLMap(rect, map);
}

function example4(){ // 计算面积
  let Colorado = new LineString(mbrToPolygon(myMBR1).map((p) => new Point(p[0],p[1])) as Point[]); // 科罗拉多州边界（粗略）
  let area = SpherePolygonArea(Colorado);
  alert("科罗拉多州面积（计算）：" + area + "平方公里\n" + "科罗拉多州面积（真实）：268,627平方公里");
}

function example5(){ // 绘制Voronoi
  removeAllOverlay(map);
  mps = updateData();
  let del = Delaunator.from(mps.toXYArray());
  let vor = new Voronoi(del);
  let voi = vor.cutVoronoiByMBR(myMBR1);
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
  let res = intersectionPolygon(rect1, rect2);

  drawPolygon2BLMap([res], map, {fillColor: 'red'});
  drawMultiPoint2BLMap(createPointListFromArr(res), map);
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
  let insPoi = intersection(line1[0], line1[1], line2[0], line2[1]) as [number, number];
  drawPoint2BLMap(insPoi, map);
}


function example8(){
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
  let res1 = pointInEdge(outPoi, line[0], line[1]);
  let res2 = pointInEdge(inPoi, line[0], line[1]);

  drawLineString2BLMap(line, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawPoint2BLMap(outPoi, map, myIcon1);
  drawPoint2BLMap(inPoi, map, myIcon2);
  alert("outPoi: " + res1 + "\n" + "inPoi: " + res2);
}

function example9(){ // 栅格
  // let matrix = [ // 测试用的三维数组
  //   [
  //     [1,2,3],
  //     [4,5,6],
  //     [7,8,9]
  //   ],
  //   [
  //     [1,2,3],
  //     [4,5,6],
  //     [7,8,9]
  //   ],
  //   [
  //     [1,2,3],
  //     [4,5,6],
  //     [7,8,9]
  //   ],
  // ];
  // let grid = new RVGeo.Coverage.Grid(myMBR1,matrix);
  // console.log(grid);
  axios.get('dem.csv').then((res)=>{
    let innerMBR = [
        -107.19241981061282,
        37.96392802178495,
        -104.23896455039352,
        39.75362886925538
    ] as [number, number, number, number];
    let data = parseData(res.data);
    // console.log(data);
    let grid = new RVGeo.Coverage.Grid(myMBR1,[data]);
    let testPoi = [-105.723781221762,38.87054575208597] as [number, number];
    let inMBR = grid.ConvertToGridMBR(innerMBR) as MBR;
    let subdrid = grid.getSubGrid(inMBR);

    let grid2 = new RVGeo.Coverage.Grid(innerMBR,subdrid);
    console.log(grid2);

    drawGridLines2BLMap(grid2.MBR, grid2.rows, grid2.cols, map,{ strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 });
    drawLineString2BLMap(mbrToPolygon(myMBR1), map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
    drawPoint2BLMap(testPoi, map);
    drawLabel(testPoi, `${grid.getGridCoord(testPoi)}` ,map);
    drawGridLines2BLMap(grid.MBR, grid.rows, grid.cols, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 });
  });

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
}

function example10(){ // 四叉树
  removeAllOverlay(map);
  mps = updateData();


  let queryMBR = [
    -107.68090845026995,
    37.315553928222414,
    -106.90893321662871,
    38.664014824200905
  ] as MBR;

  let planeMBR = MBR2Plane(myMBR1);
  console.log(plane2MBR(planeMBR));
  // console.log(queryMBR);

  // 计算对角线距离
  let diagonal = haversine([queryMBR[0],queryMBR[1]],[queryMBR[2],queryMBR[3]],"meters");
 
  let center = [-11711030.562217, 4718665.659068];
  let queryCircle = new Circle(center[0],center[1], Math.round(diagonal));

  // let boundary = myMBR1;
  let capacity = 2;
  // let qtree = new QuadTree(boundary, capacity);
  let planeTree = new QuadTree(planeMBR, capacity);

  // mps.toArray().forEach((p) => qtree.insert(p));
  mps.toXYArray().forEach((p) => {
    planeTree.insert(p);
  });

  // mps.coordinates.forEach((p) => {
  //   drawLabel(p, `${p.to2DArray()}` ,map)
  // });
  drawQuadTree2BLMap(planeTree, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);

  console.log(planeTree);

  // query points
  // let queryPoints = qtree.queryRange(queryMBR);
  let queryPoints2 = planeTree.queryCircle(queryCircle);
  console.log(queryPoints2);
  drawPlaneMPS2BLMap(queryPoints2, map);

  drawCircle2BLMap(mps.calculateCentroid(), Math.round(diagonal), map, {strokeColor: 'red', strokeOpacity: 0.5, fillColor: 'red', fillOpacity: 0.1});

  let icon = innerIcon(0);
  drawMultiPoint2BLMap(mps, map, icon);
  // draw query points
  // drawMultiPoint2BLMap(createPointListFromArr(queryPoints), map, innerIcon(1));

  // drawQuadTree2BLMap(qtree, map);

  // draw mbr
  // drawRectangle2BLMap(queryMBR, map,{
  //   strokeColor: "green",
  //   strokeWeight: 2,
  //   strokeOpacity: 0.5,
  //   fillColor: 'green',
  //   fillOpacity: 0.2
  // });
}

function example11(){ // Alpha Shape 算法
  // 存在问题
  removeAllOverlay(map);

  // 绘制所有点
  let icon = innerIcon(0);
  drawMultiPoint2BLMap(mps, map, icon);

  // 用红色绘制凸包
  let ps2 = convexHull(ps);
  let ls2 = new LineString(ps2);
  let polygon2 = new Polygon([ls2]);
  drawPolygon2BLMap(polygon2, map, {fillColor: 'red', fillOpacity: 0.1, strokeColor: 'red', strokeOpacity: 0.5});

}



function updateData() {
  let ps = mockPoints(50, myMBR1);
  let mps = new MultiPoint(ps);
  return mps;
}

