import { Layer, LayerGroup } from '@/composables/useLayerGroup.js'
import { ScatterplotLayer, GeoJsonLayer } from '@deck.gl/layers'
import { dataGroup } from './data.js'

const BLUE = [23, 184, 190, 200]
const GRAY = [158, 158, 158, 200]

// 构建 layer 时动态从 DataEntity 获取数据
const builtLayer = new Layer('Built-Layer', 1.0, true, ScatterplotLayer, {
  get data() { return dataGroup.getEntityById('built').props },
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
  get data() { return dataGroup.getEntityById('notBuilt').props },
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
      type: 'Feature',
      geometry: {
        type: 'Polygon',
        coordinates: [dataGroup.getEntityById('border').props]
      }
    }
  },
  getLineColor: [255, 0, 0],
  getFillColor: [155, 155, 155, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
})

const triangleLayer = new Layer('Triangle-Layer', 0.4, false, GeoJsonLayer, {
  get data() { return dataGroup.getEntityById('delaunay').props },
  getLineColor: [55, 233, 55],
  getFillColor: [155, 123, 250, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
})

const voronoiLayer = new Layer('Voronoi-Layer', 0.4, true, GeoJsonLayer, {
  get data() { return dataGroup.getEntityById('voronoi').props },
  getLineColor: [255, 0, 0],
  getFillColor: [255, 0, 0, 100],
  lineWidthMinPixels: 2,
  filled: true,
  stroked: true
})

// 最终图层组合
const layerGroup = new LayerGroup([
  notBuiltLayer,
  builtLayer,
  borderLayer,
  triangleLayer,
  voronoiLayer
])

export { layerGroup }