import { DataEntity, useDataGroup } from '@/composables/useDataGroup'
import * as RVGeo from '../../../src/index.ts'
import { data } from '@/loaders/cs_gdf.data.js'

// 初始化数据管理器
const {
  toD3DAG,
  addEntity,
  addRelation,
  getEntityById
} = useDataGroup()

// 构建基础数据
const builtData = data.filter(d => d.built)
const notBuiltData = data.filter(d => !d.built)
const borderData = [
  [113.8242, 22.1380], [114.4441, 22.1380], [114.4441, 22.5719], [113.8242, 22.5719], [113.8242, 22.1380]
]

// 创建基本数据实体
const builtEntity = new DataEntity('built', 'scatter', builtData)
const notBuiltEntity = new DataEntity('notBuilt', 'scatter', notBuiltData)
const borderEntity = new DataEntity('border', 'polygon', borderData)

const  dataGroup = addEntity(builtEntity);
addEntity(notBuiltEntity)
addEntity(borderEntity)


// 创建 builtMultiPoints -> 中心点、多边形分析等
const builtMultiPoints = RVGeo.toMultiPoint(builtData.map(d => RVGeo.toPoint(d)))
const builtPointsEntity = new DataEntity('builtPoints', 'multipoint', builtMultiPoints)
addEntity(builtPointsEntity)
addRelation('built', 'builtPoints')

// 凸包（面积计算略）可添加为需要时的衍生物
const convexHull = RVGeo.toPolygon(RVGeo.convexHull(builtMultiPoints.geometries))

// 三角网
const HK_MBR = RVGeo.polygonToMBR(borderData)
const MBRPoints = RVGeo.toMultiPoint(borderData.slice(0, 4))

let del = RVGeo.Delaunator.from([...builtMultiPoints.toXY(), ...MBRPoints.toXY()])
let trs = RVGeo.fillIndexArray(del.getTriangleIndices(), [...builtMultiPoints.coordinates, ...MBRPoints.coordinates])
trs = RVGeo.toMultiPolygon(trs.map(x => RVGeo.toPolygon(x)))

const delaunayEntity = new DataEntity('delaunay', 'polygon', trs)
addEntity(delaunayEntity)
addRelation('builtPoints', 'delaunay')
addRelation('border', 'delaunay')

// Voronoi
let vor = new RVGeo.Voronoi(del)
let voi = vor.cutVoronoiByMBR(HK_MBR)
voi = Array.from(voi, ([key, value]) => RVGeo.toPolygon(value, { centeridx: key }))
voi = RVGeo.toMultiPolygon(voi)


const voronoiEntity = new DataEntity('voronoi', 'polygon', voi)
addEntity(voronoiEntity)
addRelation('delaunay', 'voronoi')


import { Layer, LayerGroup } from '@/composables/useLayerGroup.js'
import { ScatterplotLayer, GeoJsonLayer } from '@deck.gl/layers'

const BLUE = [23, 184, 190, 200]
const GRAY = [158, 158, 158, 200]

// 构建 layer 时动态从 DataEntity 获取数据（保持响应性）
const builtLayer = new Layer('Built-Layer', 1.0, true, ScatterplotLayer, {
  get data() { return getEntityById('built').props },
  getPosition: d => [d.lon, d.lat],
  getRadius: d => (d.total / 5) * 20,
  getFillColor: BLUE,
  radiusMinPixels: 5,
  radiusMaxPixels: 100,
  filled: true,
  stroked: true,
  getLineColor: [255, 255, 255],
  getLineWidth: 2
})

const notBuiltLayer = new Layer('Not-Built-Layer', 0.9, false, ScatterplotLayer, {
  get data() { return getEntityById('notBuilt').props },
  getPosition: d => [d.lon, d.lat],
  getRadius: 3,
  getFillColor: GRAY,
  radiusMinPixels: 2,
  radiusMaxPixels: 5,
  filled: true,
  stroked: false
})

const borderLayer = new Layer('Border-Layer', 0.7, false, GeoJsonLayer, {
  get data() {
    return {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            type: 'Polygon',
            coordinates: [getEntityById('border').props]
          }
        }
      ]
    }
  },
  getLineColor: [255, 0, 0],
  getFillColor: [155, 155, 155, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
})

const triangleLayer = new Layer('Triangle-Layer', 0.4, false, GeoJsonLayer, {
  get data() { return getEntityById('delaunay').props.toGeoJSON() },
  getLineColor: [55, 233, 55],
  getFillColor: [155, 123, 250, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
})

const voronoiLayer = new Layer('Voronoi-Layer', 0.4, true, GeoJsonLayer, {
  get data() { return getEntityById('voronoi').props.toFeatureCollection() },
  getLineColor: [255, 0, 0],
  getFillColor: [255, 0, 0, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
})

// toD3DAG
// console.log('DAG:', toD3DAG())

console.log('fix-Voronoi:', getEntityById('voronoi').props.toFeatureCollection())


// 最终图层组合
const layerGroup = new LayerGroup([
  notBuiltLayer,
  builtLayer,
  borderLayer,
  triangleLayer,
  voronoiLayer
])

export { dataGroup, layerGroup };