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
    default: '100%'
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
const simulation = ref(null)
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

// 初始化图表
const initChart = () => {
  if (!svg.value || !D3DAGData.value) return

  // 清除现有模拟和内容
  if (simulation.value) {
    simulation.value.stop()
    simulation.value = null
  }
  d3.select(svg.value).selectAll('*').remove()

  const { nodes, links } = D3DAGData.value

  // 设置 SVG 尺寸
  svg.value.setAttribute('width', computedWidth.value)
  svg.value.setAttribute('height', computedHeight.value)

  // 创建主分组
  const g = d3.select(svg.value).append('g')

  // 添加缩放行为
  if (zoomable.value) {
    const zoom = d3.zoom()
      .scaleExtent([0.1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
      })
    
    d3.select(svg.value).call(zoom)
  }

  // 创建力导向图模拟
  simulation.value = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(100))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(computedWidth.value / 2, computedHeight.value / 2))
    .force('collision', d3.forceCollide().radius(nodeRadius.value * 1.5))

  // 创建箭头标记
  g.append('defs').selectAll('marker')
    .data(links)
    .enter().append('marker')
    .attr('id', d => `arrow-${d.source.id}-${d.target.id}`)
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', nodeRadius.value + 5)
    .attr('refY', 0)
    .attr('markerWidth', 6)
    .attr('markerHeight', 6)
    .attr('orient', 'auto')
    .append('path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', d => colorScale(d.type))

  // 创建连线
  const link = g.append('g')
    .selectAll('line')
    .data(links)
    .enter().append('line')
    .attr('stroke', d => colorScale(d.type))
    .attr('stroke-width', 2)
    .attr('marker-end', d => `url(#arrow-${d.source.id}-${d.target.id})`)

  // 创建节点组
  const node = g.append('g')
    .selectAll('g')
    .data(nodes)
    .enter().append('g')
    .call(d3.drag()
      .on('start', dragstarted)
      .on('drag', dragged)
      .on('end', dragended))

  // 添加节点圆形
  node.append('circle')
    .attr('r', nodeRadius.value)
    .attr('fill', d => d3.schemeCategory10[d.type ? d.type.charCodeAt(0) % 10 : 0])
    .attr('stroke', '#fff')
    .attr('stroke-width', 2)

  // 添加节点文本 - 根据暗夜模式调整颜色
  node.append('text')
    .attr('dy', nodeRadius.value + 15)
    .attr('text-anchor', 'middle')
    .text(d => d.id)
    .attr('fill', isDark.value ? '#fff' : '#333')
    .attr('font-size', '12px')

  // 添加模拟更新
  simulation.value.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)

    node.attr('transform', d => `translate(${d.x},${d.y})`)
  })

  // 拖拽函数
  function dragstarted(event, d) {
    if (!event.active) simulation.value.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
  }

  function dragged(event, d) {
    d.fx = event.x
    d.fy = event.y
  }

  function dragended(event, d) {
    if (!event.active) simulation.value.alphaTarget(0)
    d.fx = null
    d.fy = null
  }
}

// 响应式更新
watch([D3DAGData, nodeRadius, isDark], () => {
  initChart()
}, { deep: true })

onMounted(() => {
  initChart()
})

onBeforeUnmount(() => {
  // 清理模拟
  if (simulation.value) {
    simulation.value.stop()
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