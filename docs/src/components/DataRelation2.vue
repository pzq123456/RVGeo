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
    validator: (value) => value.nodes && value.links
  },
  width: {
    type: [Number, String],
    default: '100%'
  },
  height: {
    type: [Number, String],
    default: '300px'
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

const computedWidth = computed(() =>
  width.value === '100%' && container.value
    ? container.value.clientWidth
    : parseInt(width.value)
)

const computedHeight = computed(() =>
  height.value === '100%' && container.value
    ? container.value.clientHeight
    : parseInt(height.value)
)

const colorScale = d3.scaleOrdinal()
  .domain(['derived', 'composed', 'referenced'])
  .range(['#66c2a5', '#fc8d62', '#8da0cb'])

const initChart = () => {
  if (!svg.value || !D3DAGData.value) return

  const { nodes, links } = D3DAGData.value

  d3.select(svg.value).selectAll('*').remove()

  const g = d3.select(svg.value)
    .append('g')

  if (zoomable.value) {
    const zoom = d3.zoom()
      .scaleExtent([0.1, 8])
      .on('zoom', (event) => {
        g.attr('transform', event.transform)
      })
    d3.select(svg.value).call(zoom)
  }

  const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(100).strength(1))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(computedWidth.value / 2, computedHeight.value / 2))
    .force('collide', d3.forceCollide(nodeRadius.value * 2))

  const link = g.append('g')
    .attr('stroke', isDark.value ? '#aaa' : '#888')
    .attr('stroke-opacity', 0.6)
    .attr('stroke-width', 1.5)
    .selectAll('line')
    .data(links)
    .join('line')

  const node = g.append('g')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .call(drag(simulation))

  node.append('circle')
    .attr('r', nodeRadius.value)
    .attr('fill', d => d.type ? colorScale(d.type) : '#999')
    .attr('stroke', isDark.value ? '#333' : '#fff')
    .attr('stroke-width', 2)

  node.append('text')
    .text(d => d.id)
    .attr('x', nodeRadius.value + 6)
    .attr('y', 4)
    .attr('font-size', '12px')
    .attr('fill', isDark.value ? '#fff' : '#000')

  simulation.on('tick', () => {
    link
      .attr('x1', d => d.source.x)
      .attr('y1', d => d.source.y)
      .attr('x2', d => d.target.x)
      .attr('y2', d => d.target.y)

    node.attr('transform', d => `translate(${d.x},${d.y})`)
  })
}

function drag(simulation) {
  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart()
    d.fx = d.x
    d.fy = d.y
  }

  function dragged(event, d) {
    d.fx = event.x
    d.fy = event.y
  }

  function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0)
    d.fx = null
    d.fy = null
  }

  return d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)
}

watch([D3DAGData, isDark], () => {
  initChart()
}, { deep: true })

onMounted(() => {
  initChart()

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
