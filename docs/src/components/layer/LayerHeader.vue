<template>
  <div class="header-controls">
    <!-- 折叠/展开图层列表按钮 -->
    <el-tooltip content="Expand all layers" placement="top">
      <el-icon @click="toggleAllDetails">
        <component :is="allExpanded ? 'Minus' : 'Plus'" />
      </el-icon>
    </el-tooltip>

    <span class="name"> Layer Control </span>
    <el-tooltip content="Expand Layer List" placement="top">
      <el-icon @click="toggleLayerList" :class="{ 'expanded': !isLayerListVisible }">
        <ArrowUpBold />
      </el-icon>
    </el-tooltip>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue';

const props = defineProps({
  layers: {
    type: Array,
    required: true
  },
  isLayerListVisible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['toggle-all-details', 'toggle-layer-list']);

const allExpanded = computed(() => props.layers.every(layer => layer.isExpanded));

const toggleAllDetails = () => {
  emit('toggle-all-details');
};

const toggleLayerList = () => {
  emit('toggle-layer-list');
};
</script>

<style scoped>
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

.name {
  font-size: 1rem;
  color: var(--vp-c-text-3);
}

.name:hover {
  color: var(--vp-c-text-1);
  transition: color 0.3s ease;
}

.expanded {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
</style>