import { Layer, LayerGroup } from '@/composables/useLayerGroup.js'
import { ScatterplotLayer, GeoJsonLayer } from '@deck.gl/layers'
import { dataGroup, Column } from './data.js'

const BLUE = [23, 184, 190, 200]
const GRAY = [158, 158, 158, 200]

// 构建 layer 时动态从 DataEntity 获取数据
const builtLayer = new Layer('Built-Layer', ScatterplotLayer, {
  opacity: 1.0,
  visible: true,
  props: {
    getPosition: d => [d.lon, d.lat],
    getRadius: d => (d.total / 5) * 20,
    getFillColor: BLUE,
    radiusMinPixels: 5,
    radiusMaxPixels: 100,
    filled: true,
    stroked: true,
    getLineColor: [255, 255, 255],
    getLineWidth: 2
  },
  data: {
    get() { return dataGroup.getEntityById('built').props }
  }
})

const notBuiltLayer = new Layer('Not-Built-Layer', ScatterplotLayer, {
  opacity: 0.9,
  visible: false,
  props: {
    getPosition: d => [d.lon, d.lat],
    getRadius: 3,
    getFillColor: GRAY,
    radiusMinPixels: 2,
    radiusMaxPixels: 5,
    filled: true,
    stroked: false
  },
  data: {
    get() { return dataGroup.getEntityById('notBuilt').props }
  }
})

const borderLayer = new Layer('Border-Layer', GeoJsonLayer, {
  opacity: 0.7,
  visible: false,
  props: {
    getLineColor: [255, 0, 0],
    getFillColor: [155, 155, 155, 100],
    lineWidthMinPixels: 2,
    filled: true,
    stroked: true
  },
  data: {
    get() {
      return {
        type: 'Feature',
        geometry: {
          type: 'Polygon',
          coordinates: [dataGroup.getEntityById('border').props]
        }
      }
    }
  }
})

const triangleLayer = new Layer('Triangle-Layer', GeoJsonLayer, {
  opacity: 0.4,
  visible: false,
  props: {
    getLineColor: [55, 233, 55],
    getFillColor: [155, 123, 250, 100],
    lineWidthMinPixels: 2,
    filled: true,
    stroked: true
  },
  data: {
    get() { return dataGroup.getEntityById('delaunay').props }
  }
})

const voronoiLayer = new Layer('Voronoi-Layer', GeoJsonLayer, {
  opacity: 0.4,
  visible: true,
  props: {
    getLineColor: [255, 244, 255],
    lineWidthMinPixels: 1,
    // 随机色填充
    getFillColor: 
      d => {
        const R = 255 * Column.mapValue(d.properties.area);
        const G = 255 * (1 - Column.mapValue(d.properties.area));
        const B = 0;
        return [R, G, B]
      }
  },
  data: {
    get() { return dataGroup.getEntityById('voronoi').props }
  }
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