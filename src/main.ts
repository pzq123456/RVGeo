import { createToolBar } from './helpers/toolBar.ts'
import { Point, MultiPoint, LineString, MultiLineString } from './packages/Geometry.ts'
import { mockPoints, mockLineString } from './tests/Mock.ts';
import { drawMultiPoint2BLMap, removeAllOverlay, drawRectangle2BLMap, drawLineString2BLMap, drawMultiLineString2BLMap } from './helpers/BLDraw.ts';

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

let l0 = mockLineString(10, myMBR1);
let l1 = mockLineString(10, myMBR1);
let l2 = mockLineString(10, myMBR1);
let ml = new MultiLineString([l0, l1, l2]);
// let rect0 = l0.getMBR();
// let rect1 = l1.getMBR();
// let rect2 = l2.getMBR();
// drawRectangle2BLMap(rect0, map);
// drawRectangle2BLMap(rect1, map);
// drawRectangle2BLMap(rect2, map);
drawMultiLineString2BLMap(ml, map);
let rect = ml.getMBR();
drawRectangle2BLMap(rect, map);

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


