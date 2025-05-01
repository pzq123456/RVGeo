<template>
    <div class="color-band-container">
      <ColorBandSelector
        v-model="colorBand"
        @change="handleColorBandChange"
        :immediate="true"
        :domain="[0, 1]"
      />
      
      <div 
        v-if="colorBand"
        class="color-band-display"
        :style="bandDisplayStyle"
      ></div>
      
      <div class="color-band-test" v-if="colorBand">
        <div 
          v-for="i in 5" 
          :key="i"
          class="color-band-sample"
          :style="{
            backgroundColor: colorBand((i-1)/4),
            width: '50px',
            height: '50px',
            display: 'inline-block',
            margin: '5px'
          }"
        ></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import ColorBandSelector from '@/components/ColorBand.vue';
  
  const colorBand = ref(null);
  
  const handleColorBandChange = (payload) => {
    console.log('色带变更:', payload);
    console.log('测试色带函数 - 0.25:', colorBand.value(0.25));
  };
  
  const bandDisplayStyle = computed(() => {
    if (!colorBand.value) return {};
    
    let background;
    
    // 检查是否为离散色带
    if (colorBand.value.range && typeof colorBand.value.range === 'function') {
      const colors = colorBand.value.range();
      background = `linear-gradient(to right, ${colors.join(', ')})`;
    } else {
      // 连续或发散色带
      background = `linear-gradient(to right, 
        ${colorBand.value(0)}, 
        ${colorBand.value(0.5)},
        ${colorBand.value(1)}
      )`;
    }
    
    return {
      background,
      height: '30px',
      borderRadius: '4px',
      marginTop: '10px',
      boxShadow: '0 0 0 1px rgba(0,0,0,0.1) inset'
    };
  });
  </script>
  
  <style scoped>
  .color-band-container {
    padding: 15px;
    border: 1px solid #eee;
    border-radius: 8px;
    max-width: 500px;
  }
  
  .color-band-display {
    transition: background 0.3s ease;
  }
  
  .color-band-test {
    margin-top: 15px;
    padding: 10px;
    background: #f9f9f9;
    border-radius: 4px;
  }
  
  .color-band-sample {
    border-radius: 4px;
    box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
  }
  </style>