import { ref, provide, inject } from 'vue'

export function useSidebar() {
  const isCollapsed = ref(false)
  const drawerVisible = ref(false)
  
  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value
  }
  
  const toggleDrawer = () => {
    drawerVisible.value = !drawerVisible.value
  }
  
  return {
    isCollapsed,
    drawerVisible,
    toggleCollapse,
    toggleDrawer
  }
}

export function provideSidebar() {
  provide('sidebar', useSidebar())
}

export function useInjectedSidebar() {
  const sidebar = inject('sidebar')
  if (!sidebar) throw new Error('No sidebar provided!')
  return sidebar
}