import { Layer, LayerGroup } from '@/composables/useLayerGroup.js';
import { ScatterplotLayer, GeoJsonLayer } from '@deck.gl/layers';
import { data } from '@/loaders/cs_gdf.data.js';

import * as RVGeo from '../../../src/index.ts'

const HK_BORDER = [
  [113.8242, 22.1380], // 西南角
  [114.4441, 22.1380], // 西北角
  [114.4441, 22.5719], // 东北角
  [113.8242, 22.5719], // 东南角
  [113.8242, 22.1380]  // 回到西南角
];

const HK_MBR = RVGeo.polygonToMBR(HK_BORDER);
// console.log('HK_MBR', HK_MBR);

const MBRPoints = RVGeo.toMultiPoint(HK_BORDER.slice(0, 4));
console.log('MBRPoints', MBRPoints);



// 颜色常量
const BLUE = [23, 184, 190, 200];  // 添加透明度
const GRAY = [158, 158, 158, 200]; // 添加透明度

// 筛选built数据
const builtData = data.filter(d => d.built);
const notBuiltData = data.filter(d => !d.built);



const builtMultiPoints = RVGeo.toMultiPoint(builtData.map((x) => RVGeo.toPoint(x)));

// // example 1: 多点计算重心，凸包并计算凸包面积。
// const convexhull = RVGeo.toPolygon(RVGeo.convexHull(builtMultiPoints.geometries));
// console.log('convexhull', convexhull.toXY());
// // 平方米 转化为 平方千米 / 1000000
// console.log(RVGeo.EPSG3857.area(convexhull.getCoordinates()[0]) / 1000000, '平方千米');

// example 2: 狄洛尼三角网制作及绘制
let del = RVGeo.Delaunator.from([...builtMultiPoints.toXY(), ...MBRPoints.toXY()]);
let trs = RVGeo.fillIndexArray(del.getTriangleIndices(), [ ...builtMultiPoints.coordinates, ...MBRPoints.coordinates]);
// console.log('trs', trs);
trs = trs.map((x) => RVGeo.toPolygon(x));
trs = RVGeo.toMultiPolygon(trs);
// console.log('trs', trs.toGeoJSON());
// let trc = RVGeo.triangleCenter(builtMultiPoints.toXY(),del,0);
let res = RVGeo.fillIndexArray(del.getHull(), builtMultiPoints.coordinates);


let vor = new RVGeo.Voronoi(del);
let voi = vor.cutVoronoiByMBR(HK_MBR);
// 将 Map 转换为数组，并对每个键值对执行操作
voi = Array.from(voi, ([key, value]) => 
  RVGeo.toPolygon(value, { centeridx: key })
);
// console.log('polygonsArray', voi);
voi = RVGeo.toMultiPolygon(voi);

// 创建built图层
const builtLayer = new Layer('Built-Layer', 1.0, true, ScatterplotLayer, {
  data: builtData,
  getPosition: d => [d.lon, d.lat],
  getRadius: d => (d.total / 5) * 20, // 根据total值调整大小
  getFillColor: BLUE,
  pickable: true,
  radiusMinPixels: 5,
  radiusMaxPixels: 100,
  filled: true,
  stroked: true,
  getLineColor: [255, 255, 255],
  getLineWidth: 2
});

// 创建未built图层
const notBuiltLayer = new Layer('Not-Built-Layer', 0.9, true, ScatterplotLayer, {
  data: notBuiltData,
  getPosition: d => [d.lon, d.lat],
  getRadius: 3, // 固定小半径
  getFillColor: GRAY,
  pickable: true,
  radiusMinPixels: 2,
  radiusMaxPixels: 5,
  filled: true,
  stroked: false
});

// 创建重心图层
const centroidLayer = new Layer('Centroid-Layer', 0.8, true, ScatterplotLayer, {
  data: [builtMultiPoints.centroid()],
  getPosition: d => [d.lon, d.lat],
  getRadius: 5,
  getFillColor: [255, 0, 0],
  pickable: true,
  radiusMinPixels: 2,
  radiusMaxPixels: 5,
  filled: true,
  stroked: false
});

// 创建边界图层 geojson
const borderLayer = new Layer('Border-Layer', 0.7, false, GeoJsonLayer, {
  data: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [HK_BORDER]
        }
      }
    ]
  },
  getLineColor: [255, 0, 0],
  getFillColor: [155, 155, 155, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
});

// // convexhull图层
// const convexhullLayer = new Layer('ConvexHull-Layer', 0.6, true, GeoJsonLayer, {
//   data: convexhull.toGeoJSON(),
//   getLineColor: [0, 255, 0],
//   getFillColor: [0, 255, 0, 100],
//   lineWidthMinPixels: 2,
//   filled: true,
//   stroked: true
// });

// 绘制由 三角网 提取出来的 hull
const hullLayer = new Layer('Hull-Layer', 0.5, false, GeoJsonLayer, {
  data: {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [res]
        }
      }
    ]
  },
  getLineColor: [0, 0, 255],
  getFillColor: [0, 0, 255, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
});

// 绘制三角网 
const triangleLayer = new Layer('Triangle-Layer', 0.4, false, GeoJsonLayer, {
  data: trs.toGeoJSON(),
  getLineColor: [255, 0, 0],
  getFillColor: [255, 0, 0, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
});

// 绘制 voi 图层
const voronoiLayer = new Layer('Voronoi-Layer', 0.4, true, GeoJsonLayer, {
  data: voi.toGeoJSON(),
  getLineColor: [255, 0, 0],
  getFillColor: [255, 0, 0, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
});


// 工具提示配置
export const tooltipConfig = {
  getTooltip: ({ object }) => object && {
    html: `
      <div>
        <strong>Node ID:</strong> ${object.node_id}<br/>
        <strong>Lon:</strong> ${object.lon}<br/>
        <strong>Lat:</strong> ${object.lat}<br/>
        <strong>Built:</strong> ${object.built}<br/>
        <strong>Fast:</strong> ${object.fast}<br/>
        <strong>Slow:</strong> ${object.slow}<br/>
        <strong>Total:</strong> ${object.total}
      </div>
    `,
    style: {
      backgroundColor: 'var(--vp-c-bg-soft)',
      color: 'var(--vp-c-text-1)',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid var(--vp-c-border)'
    },
  }
};

// 最终图层组合
export const layerGroup = new LayerGroup([
  notBuiltLayer,  // 先添加未built的，确保built的显示在上层
  builtLayer,
  // centroidLayer,
  borderLayer,
  // hullLayer,
  triangleLayer,
  voronoiLayer
]);