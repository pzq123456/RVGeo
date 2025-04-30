<template>
  <div ref="container" class="relation-graph-container">
    <svg ref="svg" :width="computedWidth" :height="computedHeight"></svg>
  </div>
</template>

<script setup>
import * as d3 from 'd3'
import { ref, onMounted, watch, toRefs, computed, onBeforeUnmount } from 'vue'
import { useData } from 'vitepress'

const { isDark } = useData()

const props = defineProps({
  D3DAGData: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.nodes && value.links
    }
  },
  width: {
    type: [Number, String],
    default: '100%'
  },
  height: {
    type: [Number, String],
    default: '500px'
  },
  nodeRadius: {
    type: Number,
    default: 10,
    validator: (value) => value > 0
  },
  zoomable: {
    type: Boolean,
    default: true
  }
})

const { D3DAGData, width, height, nodeRadius, zoomable } = toRefs(props)

const container = ref(null)
const svg = ref(null)
const resizeObserver = ref(null)

// 计算实际宽度和高度
const computedWidth = computed(() => {
  return width.value === '100%' && container.value 
    ? container.value.clientWidth 
    : parseInt(width.value)
})

const computedHeight = computed(() => {
  return height.value === '100%' && container.value 
    ? container.value.clientHeight 
    : parseInt(height.value)
})

// 颜色比例尺
const colorScale = d3.scaleOrdinal()
  .domain(['derived', 'composed', 'referenced'])
  .range(['#66c2a5', '#fc8d62', '#8da0cb'])

// 将数据转换为层次结构
const convertToHierarchy = (data) => {
  // 首先找到根节点（没有父节点的节点）
  const nodes = data.nodes.map(node => ({ ...node }));
  const links = data.links.map(link => ({ ...link }));
  
  // 创建一个id到节点的映射
  const nodeMap = new Map();
  nodes.forEach(node => nodeMap.set(node.id, node));
  
  // 为每个节点添加children属性
  nodes.forEach(node => {
    node.children = [];
  });
  
  // 根据links建立父子关系
  links.forEach(link => {
    const source = typeof link.source === 'object' ? link.source.id : link.source;
    const target = typeof link.target === 'object' ? target.id : link.target;
    
    const parent = nodeMap.get(source);
    const child = nodeMap.get(target);
    
    if (parent && child) {
      parent.children.push(child);
    }
  });
  
  // 找到根节点（没有父节点的节点）
  const rootNodes = nodes.filter(node => {
    // 检查是否有任何link指向这个节点
    return !links.some(link => {
      const target = typeof link.target === 'object' ? link.target.id : link.target;
      return target === node.id;
    });
  });
  
  // 如果有多个根节点，创建一个虚拟根节点
  if (rootNodes.length > 1) {
    return {
      id: "root",
      name: "root",
      children: rootNodes
    };
  } else if (rootNodes.length === 1) {
    return rootNodes[0];
  }
  
  return null;
}

// 初始化图表
const initChart = () => {
  if (!svg.value || !D3DAGData.value) return

  // 清除现有内容
  d3.select(svg.value).selectAll('*').remove()

  // 转换数据为层次结构
  const hierarchyData = convertToHierarchy(D3DAGData.value)
  if (!hierarchyData) return

  const root = d3.hierarchy(hierarchyData)
  
  // 计算树的高度，使SVG高度能根据树的宽度调整
  const dx = 20
  const dy = computedWidth.value / (root.height + 1)

  // 创建集群布局
  const tree = d3.cluster().nodeSize([dx, dy])

  // 对树进行排序并应用布局
  root.sort((a, b) => d3.ascending(a.data.id, b.data.id))
  tree(root)

  // 计算树的边界
  let x0 = Infinity
  let x1 = -x0
  root.each(d => {
    if (d.x > x1) x1 = d.x
    if (d.x < x0) x0 = d.x
  })

  // 计算调整后的树高度
  const treeHeight = x1 - x0 + dx * 2

  // 设置SVG高度
  svg.value.setAttribute('height', Math.max(computedHeight.value, treeHeight))

  // 创建主分组
  const g = d3.select(svg.value).append('g')
    .attr('transform', `translate(${dy / 3},${dx - x0})`)

  // 添加缩放行为
  if (zoomable.value) {
    const zoom = d3.zoom()
      .scaleExtent([0.1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
      })
    
    d3.select(svg.value).call(zoom)
  }

  // 添加连线
  g.append('g')
    .attr('fill', 'none')
    .attr('stroke', isDark.value ? '#ccc' : '#555')
    .attr('stroke-opacity', 0.6)
    .attr('stroke-width', 1.5)
    .selectAll('path')
    .data(root.links())
    .join('path')
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x))

  // 添加节点
  const node = g.append('g')
    .selectAll('g')
    .data(root.descendants())
    .join('g')
      .attr('transform', d => `translate(${d.y},${d.x})`)

  // 添加节点圆形
  node.append('circle')
    .attr('r', nodeRadius.value)
    .attr('fill', d => d.data.type ? colorScale(d.data.type) : '#999')
    .attr('stroke', isDark.value ? '#333' : '#fff')
    .attr('stroke-width', 2)

  // 添加节点文本
  node.append('text')
    .attr('dy', '0.31em')
    .attr('x', d => d.children ? -nodeRadius.value - 4 : nodeRadius.value + 4)
    .attr('text-anchor', d => d.children ? 'end' : 'start')
    .text(d => d.data.id)
    .attr('fill', isDark.value ? '#fff' : '#333')
    .attr('font-size', '12px')
    .attr('stroke', isDark.value ? '#333' : '#fff')
    .attr('paint-order', 'stroke')
}

// 响应式更新
watch([D3DAGData, isDark], () => {
  initChart()
}, { deep: true })

onMounted(() => {
  initChart()
  
  // 添加响应式调整大小
  if (container.value && width.value === '100%') {
    resizeObserver.value = new ResizeObserver(() => {
      initChart()
    })
    resizeObserver.value.observe(container.value)
  }
})

onBeforeUnmount(() => {
  if (resizeObserver.value) {
    resizeObserver.value.disconnect()
  }
})
</script>

<style scoped>
.relation-graph-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg);
}

.relation-graph-container svg {
  display: block;
}
</style>