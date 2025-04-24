<template>
  <div class="container">
    <div class="header-controls">
      <!-- 折叠/展开图层列表按钮 -->
      <el-tooltip content="Expand all layers" placement="top">
        <el-icon @click="toggleAllDetails">
          <component :is="layerGroup.layers.every(layer => layer.isExpanded) ? 'Minus' : 'Plus'" />
        </el-icon>
      </el-tooltip>

      <span class="name"> Layer Control </span>
      <el-tooltip content="Expand Layer List" placement="top">
        <el-icon @click="toggleLayerList" :class="{ 'expanded' : !isLayerListVisible }"><ArrowUpBold /></el-icon>
      </el-tooltip>
    </div>

    
      <div class="layer-container" ref="el" v-show="isLayerListVisible">
      <div
        v-for="item in layerGroup.layers"
        :key="item.id"
        class="layer-item"
        :class="{ 'hidden-layer': !item.visible }"
        :style="{ border: item.visible ? '1px solid var(--vp-c-brand-2)' : '1px solid var(--vp-c-default-3)' }"
      >
        <!-- 图层ID和箭头按钮 -->
        <div class="layer-header" @click="toggleExpand(item.id)">
          <el-icon><Rank /></el-icon>
          <!-- View 按钮 -->
          <el-icon @click.stop="toggleVisibility(item)">
            <component :is="item.visible ? 'View' : 'Hide'" />
          </el-icon>
          <span class="layer-id">{{ item.id }}</span>
          <el-icon :class="{ 'expanded': item.isExpanded }"><ArrowDownBold /></el-icon>
        </div>

        <Transition>
          <!-- 具体内容，根据isExpanded控制是否显示 -->
          <div v-show="item.isExpanded" class="layer-details">
            <span class="layer-opacity">Opacity: {{ item.opacity }}</span>
            <!-- <el-slider v-model="item.opacity" :min="0" :max="1" :step="0.1" :show-tooltip="false"/> -->
            <!-- 若 visible 为假 则将其设置为disable -->
            <el-slider v-model="item.opacity" :min="0" :max="1" :step="0.1" :show-tooltip="false" :disabled="!item.visible"/>
            <span class="layer-visibility">{{ item.visible ? 'Visible' : 'Hidden' }} <el-checkbox v-model="item.visible" /></span>
          </div>
        </Transition>


      </div>
    </div>


    <!-- for debug -->
    <!-- <div class="layer-list" v-show="isLayerListVisible">
      <div v-for="item in layerGroup.layers" :key="item.id" class="layer-list-item">
        {{ item.id }}
      </div>
    </div> -->
  </div>

</template>

<script setup>
import { ref, reactive, watch } from 'vue';
import { useDraggable } from 'vue-draggable-plus';
import { LayerGroup, Layer } from '@/composables/useLayerGroup.js';
// import { throttle } from 'lodash';

import pkg from 'lodash';
const { throttle } = pkg;

const props = defineProps({
  layerGroup: { 
    type: LayerGroup,
    required: true,
  },
  onUpdated: { 
    type: Function,
    default: () => {},
  },
  // width: {
  //   type: String,
  //   default: '300px',
  // },
  // height: {
  //   type: String,
  //   default: 'auto',
  // },
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

.name{  
  font-size: 1rem;
  color: var(--vp-c-text-3);
}

.name:hover {
  color: var(--vp-c-text-1);
  transition: color 0.3s ease;
}

.container {
  /* 上部margin 5px */
  margin: 1px;
  display: flex;
  flex-direction: column;
  width: 99%;
  border-radius: 8px;
  transition: background-color 0.3s ease, border-radius 0.3s ease;
  border: 1px solid var(--vp-c-border);
  /* 自动增加滚动条 */
  overflow-y: auto;
  /* 防止内容溢出 */
  overflow: hidden;
}

.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: var(--vp-c-bg);
  border-radius: 8px 8px 0 0;
}

.header-controls .el-icon {
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.3s ease, transform 0.3s ease;
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

.layer-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 4px;
  cursor: move;
}

.layer-item.hidden-layer {
  opacity: 0.6;
  background-color: var(--vp-c-default-soft);
}

.layer-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}

.layer-id {
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.layer-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.layer-opacity,
.layer-visibility {
  color: var(--vp-c-text-2);
}

.layer-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.layer-list-item {
  padding: 0.5rem;
  background-color: var(--vp-c-default-1);
  border-radius: 4px;
}

.expanded {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}

.ghost {
  opacity: 0.2;
}
</style>