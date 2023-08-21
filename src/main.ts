import { createToolBar } from './helpers/toolBar.ts'
import { Point, MultiPoint, LineString, MultiLineString, Polygon } from './packages/Geometry.ts'
import { mockPoints, mockLineString } from './tests/Mock.ts';
import { drawMultiPoint2BLMap, removeAllOverlay, drawRectangle2BLMap, drawLineString2BLMap, drawMultiLineString2BLMap, drawPolygon2BLMap, innerIcon } from './helpers/BLDraw.ts';
import { createPointListFromArr } from './packages/MetaData.ts';
import { convexHull } from './packages/Shell.ts';
import Delaunator from "./packages/Delaunay.ts"

declare const BMapGL: any;
declare const BMapGLLib: any;
// test code
// let p = new Point(1, 2, 3, "a", "b", "c", 10);
// console.log(p.toGeoJSON());
// console.log(p.getPropertyArray());

const myMBR1 = [
  -109.07111505279033,
  36.990057191562045,
  -102.06399125241506,
  40.981780653665425
]

const myPolygon1 = [
  [
    -109.06074206666483,
    41.01216732997898
  ],
  [
    -109.06074206666483,
    37.0057642714261
  ],
  [
    -102.04308145299771,
    37.0057642714261
  ],
  [
    -102.04308145299771,
    41.01216732997898
  ],
  [
    -109.06074206666483,
    41.01216732997898
  ]
]

const myPolygon2 = [
  [
    -107.38260583296193,
    39.90219587081049
  ],
  [
    -107.38260583296193,
    38.221743810305355
  ],
  [
    -103.90238012102105,
    38.221743810305355
  ],
  [
    -103.90238012102105,
    39.90219587081049
  ],
  [
    -107.38260583296193,
    39.90219587081049
  ]
]

const myPolygon4 = [
  [
    -103.90238012102105,
    40.78153399458114
  ],
  [
    -103.90238012102105,
    40.17230060880212
  ],
  [
    -102.62470821581522,
    40.17230060880212
  ],
  [
    -102.62470821581522,
    40.78153399458114
  ],
  [
    -103.90238012102105,
    40.78153399458114
  ]
]

const myPolygon3 = [
  myPolygon1,
  myPolygon2,
  myPolygon4
]

const dPs = [
  [168, 180], [168, 178], [168, 179], [168, 181], [168, 183], 
  [167, 183], [167, 184], [165, 184], [162, 186], [164, 188], 
  [161, 188], [160, 191], [158, 193], [156, 193], [152, 195], 
  [152, 198], [150, 198], [147, 198], [148, 205], [150, 210], 
  [148, 210], [148, 208], [145, 206], [142, 206], [140, 206], 
  [138, 206], [135, 206], [135, 209], [131, 209], [131, 211], 
  [127, 211], [124, 210], [120, 207], [120, 204], [120, 202], 
  [124, 201], [123, 201], [125, 198], [125, 194], [127, 194], 
  [127, 191], [130, 191], [132, 189], [134, 189], [134, 186], 
  [136, 184], [134, 182], [134, 179], [134, 176], [136, 174]
]

let del = Delaunator.from(dPs);
console.log(del.getTriangleIndices());
// console.log(del.getHull());
// console.log(del.getHalfedges());
// console.log(ps);
// let mp = new MultiPoint(ps,"a", "b", "c", 10);
// console.log(mp);
// console.log(mp.toGeoJSON());
// console.log(mp.getMBR());
// console.log(mp.toArray());

// GL版命名空间为BMapGL
// 按住鼠标右键，修改倾斜角和角度
var map = new BMapGL.Map("allmap");    // 创建Map实例

createToolBar(document.querySelector<HTMLDivElement>('#toolBar')!, [
  { name: 'Point', action: () =>  draw('marker')},
  { name: 'Polyline', action: () =>  draw('polyline')},
  { name: 'rectangle', action: () =>  draw('rectangle')},
  { name: 'polygon', action: () =>  draw('polygon')},
  { name: 'circle', action: () =>  draw('circle')},
  { name: 'clear', action: () =>  removeAllOverlay(map)},
])



map.centerAndZoom(new BMapGL.Point(-105.7220660521329,39.0119712026557), 8);  // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

let ps = mockPoints(100, myMBR1);
let icon = innerIcon(1);
drawMultiPoint2BLMap(ps, map, icon);
let ps2 = convexHull(ps);

let ls = new LineString(ps2);
let polygon = new Polygon([ls]);
let rect = polygon.getMBR();
drawPolygon2BLMap(polygon, map);
drawRectangle2BLMap(rect, map);







// let ps1 = new LineString(createPointListFromArr(myPolygon1));
// let ps2 = new LineString(createPointListFromArr(myPolygon2));
// let ps3 = new LineString(createPointListFromArr(myPolygon4));
// let polygon = new Polygon([ps1, ps2,ps3]);
// let rect = polygon.getMBR();
// console.log(rect);
// console.log(polygon);
// drawPolygon2BLMap(polygon, map);
// drawRectangle2BLMap(rect, map);
















// let l0 = mockLineString(10, myMBR1);
// let l1 = mockLineString(10, myMBR1);
// let l2 = mockLineString(10, myMBR1);
// let ml = new MultiLineString([l0, l1, l2]);
// let rect0 = l0.getMBR();
// let rect1 = l1.getMBR();
// let rect2 = l2.getMBR();
// drawRectangle2BLMap(rect0, map);
// drawRectangle2BLMap(rect1, map);
// drawRectangle2BLMap(rect2, map);
// drawMultiLineString2BLMap(ml, map);
// let rect = ml.getMBR();
// drawRectangle2BLMap(rect, map);

// drawLineString2BLMap(ml, map);
// let rect = ml.getMBR();
// drawRectangle2BLMap(rect, map);
// let ps = mockPoints(10, myMBR1);
// // let mps = new MultiPoint(ps);
// let mps = new LineString(ps);
// let rect = mps.getMBR();
// drawMultiPoint2BLMap(mps, map);
// drawLineString2BLMap(mps, map);
// drawRectangle2BLMap(rect, map);

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


