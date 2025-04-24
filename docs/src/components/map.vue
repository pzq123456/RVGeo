<template>
  <div id="map" :style="{ width: width, height: height }"></div>
</template>

<script setup>
import { useData } from 'vitepress'
const { isDark } = useData();

import { onMounted, onUnmounted, watch, computed } from 'vue';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// 定义 props
const props = defineProps({
  center: {
      type: Array,
      default: () => [0.45, 51.47] // 默认中心点
  },
  zoom: {
      type: Number,
      default: 11 // 默认缩放级别
  },
  bearing: {
      type: Number,
      default: 0 // 默认方向
  },
  pitch: {
      type: Number,
      default: 0 // 默认俯仰角
  },
  width: {
      type: String,
      default: '100%' // 默认宽度
  },
  height: {
      type: String,
      default: '80vh' // 默认高度
  },
  onDarkModeChange: {
      type: Function,
      default: () => {} // 默认空函数
  }
});

// 定义 emits
const emit = defineEmits(['map-loaded']);

let map = null;

const lightStyle = 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json';
const darkStyle = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';
const defaultStyle = 'https://demotiles.maplibre.org/style.json'; // style URL

// 计算属性：根据 isDark 动态返回样式 URL
const mapStyle = computed(() => {
  return isDark.value ? darkStyle : lightStyle;
});

onMounted(() => {
  map = new maplibregl.Map({
      container: 'map', // container ID
      style: mapStyle.value, // style URL
      center: props.center, // starting position [lng, lat]
      zoom: props.zoom // starting zoom
  });

  // 监听地图加载完成事件
  map.on('load', () => {
      emit('map-loaded', map); // 将 map 对象传递给父组件
  });

  watch(mapStyle, (newStyle) => {
      if (map) {
          map.setStyle(newStyle); // 动态更新地图样式
          // 调用 onDarkModeChange 函数，并传递当前是否为暗色模式
          props.onDarkModeChange(isDark.value);
      }
  });
});

onUnmounted(() => {
  if (map) {
      map.remove();
  }
});
</script>

<style scoped>
#map {
  width: 100%;
  height: 100%;
  border: 1px solid var(--vp-c-border);
  /* 阴影 */
  /* box-shadow: 0 0 10px var(--vp-c-brand-1); */
}
</style>