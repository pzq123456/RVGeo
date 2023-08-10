import { createToolBar } from './helpers/toolBar.ts'
import { initMap } from './helpers/initMap.ts'
import { Point } from './packages/Geometry.ts'

// test code
let p = new Point(1, 2, 3, "a", "b", "c", 10);
console.log(p.toGeoJSON());

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

