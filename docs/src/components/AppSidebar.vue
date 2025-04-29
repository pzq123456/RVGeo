<template>
    <el-aside :width="isCollapsed ? '0px' : '300px'" class="sidebar" :class="{ 'sidebar-collapsed': isCollapsed }">
      <el-scrollbar class="sidebar-scrollbar" always>
        <div class="sidebar-content">
          <slot></slot>
        </div>
      </el-scrollbar>
    </el-aside>
  </template>
  
  <script setup>
  defineProps({
    isCollapsed: {
      type: Boolean,
      required: true
    }
  })
  </script>
  
  <style scoped>
  .sidebar {
    transition: width 0.3s ease;
    position: relative;
    height: 88vh;
    display: flex;
    border: 1px solid var(--vp-c-border);
  }
  
  .sidebar-collapsed {
    width: 0 !important;
    overflow: hidden;
  }
  
  .sidebar-scrollbar {
    height: 100%;
    width: 100%;
  }
  
  .sidebar-content {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  </style>