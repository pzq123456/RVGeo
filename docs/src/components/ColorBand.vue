<template>
    <div class="color-band-selector">
      <el-select
        v-model="selectedScheme"
        placeholder="选择色带"
        style="width: 100%"
        @change="handleSchemeChange"
      >
        <el-option-group
          v-for="group in colorSchemeGroups"
          :key="group.label"
          :label="group.label"
        >
          <el-option
            v-for="scheme in group.options"
            :key="scheme.value"
            :label="scheme.label"
            :value="scheme.value"
          >
            <div style="display: flex; align-items: center; width: 100%">
              <span style="flex: 1">{{ scheme.label }}</span>
              <div
                class="color-band-preview"
                :style="{
                  background: getPreviewBackground(scheme),
                  height: '20px',
                  width: '80px',
                  borderRadius: '4px'
                }"
              ></div>
            </div>
          </el-option>
        </el-option-group>
      </el-select>
  
      <div class="color-band-controls" v-if="showControls">
        <el-checkbox v-model="isReverse" @change="updateColorBand">
          反转色带
        </el-checkbox>
        <el-button
          size="small"
          type="primary"
          plain
          @click="emitColorBand"
          style="margin-left: 10px"
        >
          应用
        </el-button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { createColorBand, colorSchemes, getPredefinedInterpolator, getPredefinedOrdinalScheme } from '@/composables/useColorBand.js';
  
  const colorSchemeGroups = ref(colorSchemes);
  
  const props = defineProps({
    modelValue: {
      type: Function,
      default: null
    },
    // 初始选择的色带
    initialScheme: {
      type: String,
      default: 'viridis'
    },
    // 是否显示反转控制
    showControls: {
      type: Boolean,
      default: true
    },
    // 是否立即触发更新
    immediate: {
      type: Boolean,
      default: false
    },
    // 值域范围
    domain: {
      type: Array,
      default: () => [0, 1]
    }
  });
  
  const emit = defineEmits(['update:modelValue', 'change']);
  
  const selectedScheme = ref(props.initialScheme);
  const isReverse = ref(false);
  const currentColorBand = ref(props.modelValue);
  
  // 获取当前选中的色带配置
  const currentSchemeConfig = computed(() => {
    for (const group of colorSchemeGroups.value) {
      const found = group.options.find(s => s.value === selectedScheme.value);
      if (found) return found;
    }
    return colorSchemeGroups.value[0].options[0];
  });
  
  /**
   * 反转色带方案
   * @param {string|Array} scheme 色带名称或自定义颜色数组
   * @param {string} type 色带类型 ('ordinal'|'sequential'|'diverging')
   * @returns {Array|Function} 反转后的色带
   */
  function reverseScheme(scheme, type) {
    if (typeof scheme !== 'string') {
      // 自定义颜色数组直接反转
      return [...scheme].reverse();
    }
  
    // 处理预定义色板的反转
    if (type === 'ordinal') {
      // 对于离散色带，获取颜色数组后反转
      const colors = getPredefinedOrdinalScheme(scheme);
      return [...colors].reverse(); // 确保返回新数组
    } else {
      // 对于连续/发散色带，使用原始插值器但反转参数
      return scheme; // 返回原始名称，在createColorBand中处理反转
    }
  }
  
  /**
   * 生成色带预览背景
   */
  const getPreviewBackground = (scheme) => {
    const type = scheme?.type || currentSchemeConfig.value.type;
    const isOrdinal = type === 'ordinal';
    
    // 获取实际的色带方案（考虑反转）
    const actualScheme = isReverse.value ? reverseScheme(scheme?.value || selectedScheme.value, type) 
                                       : scheme?.value || selectedScheme.value;
  
    if (isOrdinal) {
      const colors = getPredefinedOrdinalScheme(actualScheme);
      return `linear-gradient(to right, ${colors.join(', ')})`;
    } else {
      // 对于连续色带，手动创建反转效果
      const interpolator = getPredefinedInterpolator(actualScheme);
      const start = isReverse.value ? 1 : 0;
      const end = isReverse.value ? 0 : 1;
      return `linear-gradient(to right, 
        ${interpolator(start)},
        ${interpolator(end)}
      )`;
    }
  };
  
  /**
   * 更新色带函数
   */
  const updateColorBand = () => {
    const config = currentSchemeConfig.value;
    
    // 创建色带时不直接反转，而是在createColorBand中处理
    currentColorBand.value = createColorBand({
      type: config.type,
      scheme: selectedScheme.value,
      domain: props.domain,
      isReverse: isReverse.value // 传递反转参数
    });
    
    if (props.immediate) {
      emitColorBand();
    }
  };
  
  /**
   * 发射色带函数
   */
  const emitColorBand = () => {
    emit('update:modelValue', currentColorBand.value);
    emit('change', {
      colorBand: currentColorBand.value,
      scheme: selectedScheme.value,
      isReverse: isReverse.value,
      type: currentSchemeConfig.value.type
    });
  };
  
  /**
   * 处理色带变更
   */
  const handleSchemeChange = () => {
    updateColorBand();
  };
  
  // 初始化
  onMounted(() => {
    updateColorBand();
    if (props.immediate) {
      emitColorBand();
    }
  });
  </script>
  <style scoped>
  .color-band-selector {
    display: flex;
    flex-direction: column;
  }
  
  .color-band-controls {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  
  .color-band-preview {
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
  }
  
  /* 优化下拉选项样式 */
  :deep(.el-select-dropdown__item) {
    padding: 0 10px;
    height: 36px;
  }
  
  :deep(.el-select-dropdown__item .color-band-preview) {
    margin-left: 10px;
  }
  
  :deep(.el-option-group__title) {
    padding: 0 10px;
    font-size: 12px;
    color: var(--el-text-color-secondary);
  }
  </style>