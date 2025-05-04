<template>
  <div class="container">
    <LayerHeader :layers="layerGroup.layers" :is-layer-list-visible="isLayerListVisible"
      @toggle-all-details="toggleAllDetails" @toggle-layer-list="toggleLayerList" />

    <div class="layer-container" ref="el" v-show="isLayerListVisible">
      <!-- <LayerCard v-for="item in layerGroup.layers" :key="item.id" :layer="item" @toggle-expand="toggleExpand"
        @toggle-visibility="toggleVisibility" /> -->
        <component 
        :is="getCardVomponents(layer.type)"
        v-for="layer in layerGroup.layers"
        :key="layer.id"
        :layer="layer"
        @toggle-expand="toggleExpand"
        @toggle-visibility="toggleVisibility"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useDraggable } from 'vue-draggable-plus';
import { LayerGroup } from '@/composables/useLayerGroup.js';
import pkg from 'lodash';
const { throttle } = pkg;

import LayerHeader from './LayerHeader.vue';
import BasicLayerCard from './LayerCard.vue'; // or LayerCard.vue
import ColorLayer from './ColorLayer.vue'; // or LayerCard.vue

function getCardVomponents(params) {
  console.log(params.name);

  return BasicLayerCard; // 默认返回
}

const props = defineProps({
  layerGroup: {
    type: LayerGroup,
    required: true,
  },
  onUpdated: {
    type: Function,
    default: () => { },
  },
});

const { layerGroup, onUpdated } = props;
const isLayerListVisible = ref(true);

const throttledUpdate = throttle(() => {
  onUpdated();
}, 200);

watch(
  () => layerGroup.layers.map(layer => ({ id: layer.id, opacity: layer.opacity, visible: layer.visible })),
  () => {
    throttledUpdate();
  },
  { deep: true }
);

// 初始化图层展开状态
layerGroup.layers.forEach(layer => {
  layer.isExpanded = false;
});

const toggleExpand = (id) => {
  const layer = layerGroup.layers.find(item => item.id === id);
  if (layer) {
    layer.isExpanded = !layer.isExpanded;
  }
};

const toggleVisibility = (layer) => {
  layer.visible = !layer.visible;
};

const toggleLayerList = () => {
  isLayerListVisible.value = !isLayerListVisible.value;
};

const toggleAllDetails = () => {
  const allExpanded = layerGroup.layers.every(layer => layer.isExpanded);
  layerGroup.layers.forEach(layer => {
    layer.isExpanded = !allExpanded;
  });
};

const el = ref();
const draggable = useDraggable(el, layerGroup.layers, {
  animation: 150,
  ghostClass: 'ghost',
  onUpdate(evt) {
    if (onUpdated) {
      onUpdated();
    }
  }
});
</script>

<style scoped>
.container {
  margin: 1px;
  display: flex;
  flex-direction: column;
  width: 99%;
  border-radius: 8px;
  transition: background-color 0.3s ease, border-radius 0.3s ease;
  border: 1px solid var(--vp-c-border);
  overflow-y: auto;
  overflow: hidden;
}

.layer-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  height: auto;
  margin: auto;
  background-color: var(--vp-c-bg);
  border-radius: 0 0 8px 8px;
}

.ghost {
  opacity: 0.2;
}
</style>