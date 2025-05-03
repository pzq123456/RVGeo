<template>
    <div class="sidebar-collapse-button" @click="toggleSidebar">
      <el-icon :size="18">
        <ArrowRight />
      </el-icon>
    </div>
  </template>
  
  <script setup>
  defineProps({
    toggleSidebar: {
      type: Function,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .sidebar-collapse-button {
    position: fixed;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 34px;
    background-color: var(--vp-c-bg);
    border: 1px solid var(--vp-c-border);
    border-left: none;
    border-radius: 0 4px 4px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 4;
  }
  
  .sidebar-collapse-button:hover {
    background-color: var(--vp-c-bg-soft);
  }
  </style>