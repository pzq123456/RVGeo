<template>
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

  <Dragger>
    <div class="DAGcontainer">
      <DataRelation :D3DAGData="dataGroup.toD3DAG()" />
    </div>
  </Dragger>

  <AppDrawer v-model="visible" />
</template>

<script setup>
import { ref } from 'vue'
import MapComponent from '@/components/map.vue'
import { useDeckOverlay } from '@/composables/useDeckOverlay.js'
import layers from '@/components/layers.vue'
import EntityList from '@/components/EntityList.vue'

import SidebarControls from '@/components/SidebarControls.vue'
import SidebarToggleButton from '@/components/SidebarToggleButton.vue'
import AppSidebar from '@/components/AppSidebar.vue'
import AppDrawer from '@/components/AppDrawer.vue'
import { layerGroup, dataGroup } from "@/layouts/layers.js"
import { tooltipConfig } from "@/layouts/tooltip.js"

import Dragger from '@/components/Dragger.vue'

// docs/src/components/DataRelation.vue
import DataRelation from '@/components/DataRelation.vue'

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

<style scoped>
.DAGcontainer{
  width: 100%;
  height: 100%;
}
</style>