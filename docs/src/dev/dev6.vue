<template>
  <MapComponent
      :center="[114.173355, 22.320048]"
      :zoom="11"
      width="100%"
      height="80vh"
      @map-loaded="handleMapLoaded"
  />
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import MapComponent from '@/components/map.vue';
import { useDeckOverlay } from '@/composables/useDeckOverlay.js';
import { ScatterplotLayer } from '@deck.gl/layers';

import { data } from '@/loaders/cs_gdf.data.js';

// Deck.gl 实例
let deckMap = null;
const tooltip = ref(null);

// 颜色常量
const BLUE = [23, 184, 190, 55];
const GRAY = [128, 128, 128, 155];

const BLUELINE = [23, 184, 190];
const GRAYLINE = [158, 158, 158];

// 地图初始化
async function handleMapLoaded(map) {
  deckMap = useDeckOverlay(map);
  const scatterplotLayer = createScatterplotLayer(data);
  deckMap.setProps({
    layers: [scatterplotLayer],
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
    },
  });
}

// 创建 ScatterplotLayer
function createScatterplotLayer(data) {
  return new ScatterplotLayer({
    id: 'scatterplot-layer',
    data,
    getPosition: d => [d.lon, d.lat],
    getRadius: d => d.built ? (d.total / 5) * 50 : 3,
    getFillColor: d => d.built ? BLUE : GRAY, // 根据 built 设置颜色
    getLineColor: d => d.built ? BLUELINE : GRAYLINE, // 根据 built 设置线的颜色
    getLineWidth: d => d.built ? 1 : 2, // 设置线宽
    lineWidthUnits: 'pixels',
    pickable: true, // 允许拾取
    radiusMinPixels: 3, // 最小半径
    radiusMaxPixels: 50, // 最大半径
    stroked: true, // 使用描边
    filled: true, // 填充颜色
  });
}

onUnmounted(() => {
  if (deckMap) {
    deckMap.finalize();
  }
});
</script>

<style scoped>
/* 可以在这里添加一些样式 */
</style>