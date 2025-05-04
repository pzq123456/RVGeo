<template>
  <div class="layer-item" :class="{ 'hidden-layer': !layer.visible, 'active': layer.visible }">
    <!-- 图层ID和箭头按钮 -->
    <div class="layer-header" @click="toggleExpand">
      <el-icon>
        <Rank />
      </el-icon>
      <!-- View 按钮 -->
      <el-icon @click.stop="toggleVisibility">
        <component :is="layer.visible ? 'View' : 'Hide'" />
      </el-icon>
      <span class="layer-id">{{ layer.id }}</span>
      <div class="leftBtn">
        <el-icon :class="{ 'expanded': layer.isExpanded }">
          <ArrowDownBold />
        </el-icon>
      </div>
    </div>

    <Transition>
      <div v-show="layer.isExpanded" class="layer-details">
        <span class="layer-opacity">Opacity: {{ layer.opacity }}</span>

        <el-slider v-model="layer.opacity" :min="0" :max="1" :step="0.1" :show-tooltip="false"
          :disabled="!layer.visible" />

        <span class="layer-visibility">{{ layer.visible ? 'Visible' : 'Hidden' }} <el-checkbox
            v-model="layer.visible" /></span>
            
        <!-- 插槽用于扩展内容 -->
        <slot name="custom-controls"></slot>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  layer: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['toggle-expand', 'toggle-visibility']);

const toggleExpand = () => {
  emit('toggle-expand', props.layer.id);
};

const toggleVisibility = () => {
  emit('toggle-visibility', props.layer);
};
</script>

<style scoped>
.layer-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 4px;
  cursor: move;
  border: 1px solid var(--vp-c-default-3);
  transition: background-color 0.3s ease, border-radius 0.3s ease;
}

.layer-item.active {
  border-left: 3px solid var(--vp-c-brand-2);
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

.leftBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}

/* 新增的箭头旋转样式 */
.leftBtn .el-icon {
  transition: transform 0.3s ease;
}

.leftBtn .el-icon.expanded {
  transform: rotate(180deg);
}
</style>