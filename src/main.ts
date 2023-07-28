import { createToolBar } from './helpers/toolBar.ts'
import { initMap } from './helpers/initMap.ts'
createToolBar(document.querySelector<HTMLDivElement>('#toolBar')!, [
  { name: '新建', action: () => console.log('新建') },
  { name: '打开', action: () => console.log('打开') },
  { name: '保存', action: () => console.log('保存') },
  { name: '新建', action: () => console.log('新建') },
  { name: '打开', action: () => console.log('打开') },
  { name: '保存', action: () => console.log('保存') },
  { name: '新建', action: () => console.log('新建') },
  { name: '打开', action: () => console.log('打开') },
  { name: '保存', action: () => console.log('保存') },
  { name: '新建', action: () => console.log('新建') },
  { name: '打开', action: () => console.log('打开') },
  { name: '保存', action: () => console.log('保存') },
])

initMap();

