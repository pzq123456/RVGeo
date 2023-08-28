import { createToolBar } from './helpers/toolBar.ts'
import { Point, MultiPoint, LineString, MultiLineString, Polygon } from './packages/Geometry.ts'
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
// test code
// let p = new Point(1, 2, 3, "a", "b", "c", 10);
// console.log(p.toGeoJSON());
// console.log(p.getPropertyArray());

const myMBR1 = [
  -109.07111505279033,
  36.990057191562045,
  -102.06399125241506,
  40.981780653665425
] as [number, number, number, number];

const MBR2 = [
  [-109.07111505279033,36.990057191562045],
  [-109.07111505279033,40.981780653665425],
  [-102.06399125241506,40.981780653665425],
  [-102.06399125241506,36.990057191562045],
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
  { name: '绘制多点及其重心', action: () =>  example1()},
  { name: '绘制三角网', action: () =>  example2()},
  { name: '绘制凸包', action: () =>  example3()},
  { name: '计算面积', action: () =>  example4()},
  { name: '绘制Voronoi', action: () =>  example5()},
  { name: '多边形求交', action: () =>  example6()},
  { name: '线段求交', action: () =>  example7()},
  { name: '点线关系', action: () =>  example8()},
  { name: 'clear', action: () =>  removeAllOverlay(map)},
  { name: 'update', action: () =>  {
    mps = updateData();}}
])

map.centerAndZoom(new BMapGL.Point(-105.7220660521329,39.0119712026557), 8);  // 初始化地图,设置中心点坐标和地图级别
map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
// test data
let ps = mockPoints(50, myMBR1);
let mps = new MultiPoint(ps);
// mps.addPoint([
//   -109.06074206666483,
//   41.01216732997898
// ]);
// mps.addPoint(
//   [
//     -107.38260583296193,
//     38.221743810305355
//   ]
// );
// mps.addPoint(
//   [
//     -103.90238012102105,
//     38.221743810305355
//   ]
// );
// mps.addPoint(
//   [
//     -107.38260583296193,
//     39.90219587081049
//   ]
// );


function example1(){
  removeAllOverlay(map)
  let icon = innerIcon(0);
  drawPoint2BLMap(mps.calculateCentroid(), map);
  drawMultiPoint2BLMap(mps, map, icon);
}

function example2(){
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

function example3(){
  removeAllOverlay(map)
  let ps2 = convexHull(ps);
  let ls = new LineString(ps2);
  let polygon = new Polygon([ls]);
  let rect = polygon.getMBR();
  drawPolygon2BLMap(polygon, map);
  drawRectangle2BLMap(rect, map);
}

function example4(){
  // const data = [[-11913098.969607, 4721892.674269], [-11894440.774108, 4905529.4068], [-12002892.93265, 4534749.619498], [-12049791.150961, 4484157.977775], [-11464780.149742, 4897848.71788], [-11442003.998876, 4897349.45794], [-11891500.170537, 4589758.834727], [-11845520.041687, 4865124.16612], [-11623105.108907, 4558569.954722], [-11791757.054504, 4517046.643686]];
  // const data = [[-109.07111505279033, 38.127647092868436], [-108.3704026727528, 38.89686606436471], [-107.66969029271527, 37.54255530190678], [-106.96897791267776, 37.97885670198897], [-106.26826553264023, 37.66837197304874], [-105.5675531526027, 39.66587627745989], [-104.86684077256517, 37.277106263419846], [-104.16612839252764, 39.265644135865976], [-103.46541601249012, 38.04773824659322], [-102.7647036324526, 39.803126875156096]];
  let ls = mockLineString(10, myMBR1);
  removeAllOverlay(map);
  // console.log(PlanePolygonArea(ls));
  console.log("Sphere",SpherePolygonArea(MBR2));
  console.log("Plane",PlanePolygonArea(ls));
}

function example5(){
  removeAllOverlay(map);
  mps = updateData();
  let del = Delaunator.from(mps.toXYArray());
  let vor = new Voronoi(del);
  let voi = vor.cutVoronoiByMBR(myMBR1);
  drawEdgeMap2BLMap(voi, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);


  // let voi = vor.cutVoronoiByMBR(myMBR1);
  // 获得 voi 中的一个多边形
  // let voipolygon = voi.get(0);
  // console.log(voipolygon);
  // let cutPolygon = cutPolygonByMBR(voipolygon, myMBR1, drawPoint2BLMap);
  // console.log(cutPolygon);
  // drawLineString2BLMap(voipolygon, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
  // drawLineString2BLMap(cutPolygon, map,{ strokeColor: "red", strokeWeight: 2, strokeOpacity: 0.5 },true);
  
  // drawEdgeMap2BLMap(voipolygon, map,{ strokeColor: "green", strokeWeight: 2, strokeOpacity: 0.5 },true);
}


function example6(){
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
  console.log(res);
  drawPolygon2BLMap([res], map, {fillColor: 'red'});
  drawMultiPoint2BLMap(createPointListFromArr(res), map);
}

function example7(){
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


