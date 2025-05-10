<template>
  <el-alert type="warning">
    {{ getWarningTime() }} <strong> 🚧 Warning! </strong> The website is under development, and some features may be incomplete or have bugs. Please be patient for updates.
  </el-alert>

  <el-container>
    
    <!-- 侧边栏折叠按钮 -->
    <SidebarToggleButton v-if="isSidebarCollapsed" :toggle-sidebar="toggleSidebar" />

    <!-- 侧边栏 -->
    <AppSidebar :is-collapsed="isSidebarCollapsed">
      <SidebarControls :is-drawer-visible="visible" :is-collapsed="isSidebarCollapsed"
        @toggle-fullscreen="toggleFullScreen" @toggle-drawer="toggleDrawer" @toggle-collapse="toggleSidebar" />
        
      <layers :layerGroup="layerGroup" :onUpdated="updateDeckLayers" />

      <EntityList
        :nodes="dataGroup.toD3DAG().nodes"
        :links="dataGroup.toD3DAG().links"
      />

    </AppSidebar>

    <el-main style="padding: 2px;">
      <MapComponent :center="[initialViewState.longitude, initialViewState.latitude]" :zoom="initialViewState.zoom"
        :pitch="initialViewState.pitch" width="100%" height="88vh" @map-loaded="handleMapLoaded" />
    </el-main>

  </el-container>

  <Dragger :onClose="handleClose" v-if="isShowDragger">
    <DataRelation :D3DAGData="dataGroup.toD3DAG()" />
      <ColorBand/>
  </Dragger>

  <AppDrawer v-model="visible" />


</template>

<script setup>
import { ref } from 'vue'
import MapComponent from '@/components/map.vue'
import { useDeckOverlay } from '@/composables/useDeckOverlay.js'
import layers from '@/components/layer/Layers.vue'
import EntityList from '@/components/EntityList.vue'

import SidebarControls from '@/components/SidebarControls.vue'
import SidebarToggleButton from '@/components/SidebarToggleButton.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppDrawer from '@/components/AppDrawer.vue'

import ColorBand from '@/dev/dev.vue'

import { dataGroup } from "@/layouts/data.js"
import { layerGroup } from "@/layouts/layer.js"
import { tooltipConfig } from "@/layouts/tooltip.js"

import Dragger from '@/components/Dragger.vue'

// docs/src/components/DataRelation.vue
import DataRelation from '@/components/DataRelation.vue'

const isShowDragger = ref(true)

const handleClose = () => {
  isShowDragger.value = false
}

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
  // // 若侧边栏打开则打开 dragger
  // if (!isSidebarCollapsed.value) {
  //   isShowDragger.value = true
  // } else {
  //   isShowDragger.value = false
  // }
}

const toggleFullScreen = () => {
  isSidebarCollapsed.value = !isSidebarCollapsed.value
  // 这里可以添加全屏逻辑
  // handleClose()
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

// 获取警告生成的时间 精确到秒
const getWarningTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
</script>