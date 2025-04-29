<template>
  <el-drawer 
    :model-value="modelValue" 
    @update:model-value="$emit('update:modelValue', $event)"
    :show-close="true" 
    :with-header="false" 
    direction="btt" 
    :class="'myDrawer'" 
    :size="'50%'"
  >
    <slot></slot>
  </el-drawer>
</template>

<script setup>
defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

defineEmits(['update:modelValue'])
</script>

<style scoped>
.myDrawer {
  background-color: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
}
</style>