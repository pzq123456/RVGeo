import { createToolBar } from './helpers/toolBar.ts'
import { Point, MultiPoint, LineString, MultiLineString, Polygon, mbrToPolygon } from './packages/Geometry.ts'
import { mockPoints, mockLineString } from './tests/Mock.ts';
import { drawMultiPoint2BLMap, removeAllOverlay, drawRectangle2BLMap, drawLineString2BLMap, drawMultiLineString2BLMap, drawPolygon2BLMap, innerIcon, drawPolygonArray2BLMap, drawTriangleEdge2BLMap, drawPoint2BLMap, drawEdgeMap2BLMap } from './helpers/BLDraw.ts';
import { createPointListFromArr } from './packages/MetaData.ts';
import { convexHull } from './packages/Shell.ts';
import { Delaunator, triangleCenter, Voronoi } from "./packages/Delaunay.ts"
import { fillIndexArray } from './packages/constants/Utils.ts';
import { PlanePolygonArea, SpherePolygonArea } from './packages/Distance.ts';
import { cutPolygonByMBR, intersection, intersectionPolygon, pointInEdge } from './packages/CGUtils.ts';

declare const BMapGL: any;
declare const BMapGLLib: any;

const myMBR1 = [
  -109.07111505279033,
  36.990057191562045,
  -102.06399125241506,
  40.981780653665425
] as [number, number, number, number];

// GL版命名空间为BMapGL
// 按住鼠标右键，修改倾斜角和角度
var map = new BMapGL.Map("allmap");    // 创建Map实例

createToolBar(document.querySelector<HTMLDivElement>('#toolBar')!, [
  { name: 'Point', action: () =>  draw('marker')},
  { name: 'Polyline', action: () =>  draw('polyline')},
  { name: 'rectangle', action: () =>  draw('rectangle')},
  { name: 'polygon', action: () =>  draw('polygon')},
  { name: 'circle', action: () =>  draw('circle')},
  { name: '绘制多点及其重心', action: () =>  example1()},
  { name: '绘制三角网', action: () =>  example2()},
  { name: '绘制凸包', action: () =>  example3()},
  { name: '计算面积', action: () =>  example4()},
  { name: '绘制Voronoi', action: () =>  example5()},
  { name: '多边形求交', action: () =>  example6()},
  { name: '线段求交', action: () =>  example7()},
  { name: '点线关系', action: () =>  example8()},
  { name: 'clear', action: () =>  removeAllOverlay(map)},
  { name: 'update', action: () =>  {mps = updateData();}}
])

map.centerAndZoom(new BMapGL.Point(-105.7220660521329,39.0119712026557), 8);  // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
// test data
let ps = mockPoints(50, myMBR1);
let mps = new MultiPoint(ps);

function example1(){ // 绘制多点及其重心
  removeAllOverlay(map)
  let icon = innerIcon(0);
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
  ];
  let rect2 = [
    [-107.34797321677699,  39.68665076371036],[-107.34797321677699,  37.315553928222414],[-103.90893321662871,  37.315553928222414],[-103.90893321662871,  39.68665076371036]
  ];
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
  ];
  let line2 = [
    [
      -107.97399126074589,
      37.59766864452851
    ],
    [
      -102.641058204481,
      40.664014824200905
    ]
  ];
  let line3 =[
    [
      -102.3965685720985,
      41.613436668810465
    ],
    [
      -101.58822187178613,
      37.428342894987836
    ]
  ];

  drawLineString2BLMap(line1, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawLineString2BLMap(line2, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawLineString2BLMap(line3, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  let insPoi = intersection(line1[0], line1[1], line2[0], line2[1]);
  let insPoi2 = intersection(line1[0], line1[1], line3[0], line3[1]); // null
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
  ];

  let myIcon1 = innerIcon(0);
  let outPoi = [
    -107.11904390129598,
    39.05128102775606
  ];

  let myIcon2 = innerIcon(1);
  let inPoi = [
    -104.51534491327676,
    38.97346949562407
  ];
  let res1 = pointInEdge(outPoi, line[0], line[1]);
  let res2 = pointInEdge(inPoi, line[0], line[1]);

  drawLineString2BLMap(line, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  drawPoint2BLMap(outPoi, map, myIcon1);
  drawPoint2BLMap(inPoi, map, myIcon2);
  alert("outPoi: " + res1 + "\n" + "inPoi: " + res2);
}

function updateData() {
  let ps = mockPoints(50, myMBR1);
  let mps = new MultiPoint(ps);
  return mps;
}

function draw(type: string) {
  const styleOptions = {
    strokeColor: "#5E87DB", // 边线颜色
    fillColor: "#5E87DB", // 填充颜色。当参数为空时，圆形没有填充颜色
    strokeWeight: 2, // 边线宽度，以像素为单位
    strokeOpacity: 1, // 边线透明度，取值范围0-1
    fillOpacity: 0.2, // 填充透明度，取值范围0-1
  };
  const labelOptions = {
    borderRadius: "2px",
    background: "#FFFBCC",
    border: "1px solid #E1E1E1",
    color: "#703A04",
    fontSize: "12px",
    letterSpacing: "0",
    padding: "5px",
  };
  // 实例化鼠标绘制工具
  const drawingManager = new BMapGLLib.DrawingManager(map, {
    // isOpen: true,        // 是否开启绘制模式
    enableCalculate: false, // 绘制是否进行测距测面
    enableSorption: true, // 是否开启边界吸附功能
    sorptiondistance: 20, // 边界吸附距离
    rectangleOptions: styleOptions, // 矩形的样式
  });
  if (drawingManager.isOpen_ && drawingManager.getDrawingMode() === type) {
    drawingManager.close();
  } else {
    drawingManager.setDrawingMode(type);
    drawingManager.open();
  }
}


