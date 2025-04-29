import { DataEntity, useDataGroup } from '@/composables/useDataGroup'
import * as RVGeo from '../../../src/index.ts'
import { data } from '@/loaders/cs_gdf.data.js'

// 初始化数据管理器
const {
  addEntity,
  addRelation,
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

const dataGroup = addEntity(builtEntity);
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

export { dataGroup };