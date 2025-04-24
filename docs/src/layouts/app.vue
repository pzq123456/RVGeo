<template>
  <el-container>
    <!-- 侧边栏折叠按钮（仅在侧边栏折叠时显示） -->
    <div v-if="isSidebarCollapsed" class="sidebar-collapse-button" @click="toggleSidebar">
      <el-icon :size="20">
        <Expand />
      </el-icon>
    </div>

    <!-- 侧边栏 -->
    <el-aside :width="isSidebarCollapsed ? '0px' : '300px'" class="sidebar"
      :class="{ 'sidebar-collapsed': isSidebarCollapsed }">
      <el-scrollbar class="sidebar-scrollbar" always>
        <!-- 侧边栏内容 -->
        <div class="sidebar-content">
          <SidebarControls :is-drawer-visible="visible" :is-collapsed="isSidebarCollapsed"
            @toggle-fullscreen="toggleFullScreen" @toggle-drawer="toggleDrawer" @toggle-collapse="toggleSidebar" />
          <layers :layerGroup="layerGroup" :onUpdated="updateDeckLayers" />
        </div>
      </el-scrollbar>
    </el-aside>

    <el-main style="padding: 2px;">
      <MapComponent :center="[initialViewState.longitude, initialViewState.latitude]" :zoom="initialViewState.zoom"
        :pitch="initialViewState.pitch" width="100%" height="83vh" @map-loaded="handleMapLoaded" />
    </el-main>
  </el-container>

  <el-drawer v-model="visible" :show-close="true" :with-header="false" direction="btt" :class="'myDrawer'"
    :size="'50%'">
  </el-drawer>

</template>

<script setup>
import { ref, watch, computed } from 'vue'
import MapComponent from '@/components/map.vue'
import { useDeckOverlay } from '@/composables/useDeckOverlay.js'
import layers from '@/components/layers.vue';
import SidebarControls from '@/components/SidebarControls.vue'
import { layerGroup, tooltipConfig } from "@/layouts/layers.js";

// 常量定义
const INITIAL_VIEW_STATE = {
  longitude: 114.173355,
  latitude: 22.320048,
  pitch: 45,
  zoom: 11
}

// 响应式状态
const initialViewState = ref(INITIAL_VIEW_STATE)
const visible = ref(false)

const isSidebarCollapsed = ref(false)
let deckMap = null

// 方法
const toggleSidebar = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const toggleFullScreen = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
}

const toggleDrawer = () => {
  visible.value = !visible.value
}

const handleMapLoaded = (map) => {
  deckMap = useDeckOverlay(map)
  updateDeckLayers()
}

const updateDeckLayers = () => {
  if (deckMap) {
    deckMap.setProps({
      ...tooltipConfig,
      layers: layerGroup.getLayers(),
    })
  }
}


</script>

<style>
.sidebar {
  transition: width 0.3s ease;
  position: relative;
  height: 83vh;
  /* 确保侧边栏高度占满整个视口 */
  display: flex;
  /* 添加flex布局 */
  border: 1px solid var(--vp-c-border);
}

.sidebar-collapsed {
  width: 0 !important;
  overflow: hidden;
}

.sidebar-scrollbar {
  height: 100%;
  /* 滚动条容器占满侧边栏高度 */
  width: 100%;
  /* 滚动条容器占满侧边栏宽度 */
}

.sidebar-content {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  /* 为子元素添加间隔 */
}

.sidebar-collapse-button {
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 48px;
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-left: none;
  border-radius: 0 4px 4px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
}

.sidebar-collapse-button:hover {
  background-color: var(--vp-c-bg-alt);
}

.myDrawer {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
}
</style>