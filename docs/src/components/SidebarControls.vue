<template>
  <div class="sidebar-controls">
    
    <el-tooltip content="Full Screen" placement="top">
      <el-icon @click="toggleFullScreen" class="control-icon">
        <FullScreen />
      </el-icon>
    </el-tooltip>


      <el-icon @click="toggleDrawer" class="control-icon">
        <Upload v-if="!isDrawerVisible" />
        <Download v-else />
      </el-icon>

    
    <!-- <el-tooltip :content="isCollapsed ? 'Expand' : 'Collapse'" placement="top">
      <el-icon @click="toggleCollapse" class="control-icon">
        <Fold v-if="!isCollapsed" />
        <Expand v-else />
      </el-icon>
    </el-tooltip> -->

  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import {
  FullScreen,
  Close,
  Upload,
  Download,
  Fold,
  Expand
} from '@element-plus/icons-vue'

const props = defineProps({
  isFullScreen: Boolean,
  isDrawerVisible: Boolean,
  isCollapsed: Boolean
})

const emit = defineEmits([
  'toggle-fullscreen',
  'toggle-drawer',
  'toggle-collapse'
])

const toggleFullScreen = () => emit('toggle-fullscreen')
const toggleDrawer = () => emit('toggle-drawer')
const toggleCollapse = () => emit('toggle-collapse')
</script>

<style scoped>
.sidebar-controls {
  display: flex;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  background-color: var(--vp-c-bg);
  margin-top: 2px;
  /* 固定在顶部 不随滚动条移动 */
  position: sticky;
  top: 2px;
  z-index: 2;
}

.control-icon {
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.control-icon:hover {
  color: var(--el-color-primary);
}
</style>