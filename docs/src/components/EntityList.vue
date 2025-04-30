<template>
  <div class="container">
    <div class="header-controls">
      <el-tooltip content="Expand all entities" placement="top">
        <el-icon @click="toggleAllDetails">
          <component :is="allExpanded ? 'Minus' : 'Plus'" />
        </el-icon>
      </el-tooltip>

      <span class="name">Entity Dependency List</span>

      <el-tooltip content="Toggle List" placement="top">
        <el-icon @click="toggleListVisibility" :class="{ expanded: !isListVisible }">
          <ArrowUpBold />
        </el-icon>
      </el-tooltip>
    </div>

    <div class="layer-container" v-show="isListVisible">
      <div 
        v-for="node in sortedNodes" 
        :key="node.id" 
        class="layer-item"
        :class="{ 
          'hidden-layer': !activeStates[node.id],
          'has-dependencies': hasDependencies(node.id)
        }"
      >
        

        <div class="layer-header" @click="toggleExpand(node.id)">
          <el-tag class="tag" :style="getTagStyle(node.type)">{{ node.type }}</el-tag>
          <!-- <el-icon @click.stop="toggleActive(node.id)">
            <component :is="activeStates[node.id] ? 'View' : 'Hide'" />
          </el-icon> -->
          
          <span class="layer-id">{{ node.id }}</span>
            


          <div class="leftBtn">
            <el-icon :class="{ expanded: expandedNodes[node.id] }">
              <ArrowDownBold />
            </el-icon>
          </div>
        </div>

        <Transition>
          <div v-show="expandedNodes[node.id]" class="layer-details">
            <div class="detail-row" v-if="node.description">
              <span class="detail-label">Description:</span>
              <span class="detail-value">{{ node.description }}</span>
            </div>

            <span class="layer-visibility">
            Dependencies: {{ getDependencyCount(node.id) }}
            <span v-if="getIncomingDependencyCount(node.id) > 0" class="incoming-count">
              (←{{ getIncomingDependencyCount(node.id) }})
            </span>
          </span>
            
            <div class="detail-row">
              <span class="detail-label">Created:</span>
              <span class="detail-value">{{ formatDate(node.createdAt) }}</span>
            </div>
            
            <div v-if="hasDependencies(node.id)" class="dependencies-section">
              <div class="dependencies-header">Dependencies:</div>
              <div 
                v-for="dep in getDependencies(node.id)" 
                :key="dep.target"
                class="dependency-item"
                @click.stop="selectNode(dep.target)"
              >
                <el-icon><Connection /></el-icon>
                <span>{{ dep.target }}</span>
                <!-- 找到 对应 link 并提取 link  的type-->
                <span class="detail-value">Type: {{ props.links.find(link => link.source === node.id && link.target === dep.target)?.type }}</span>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'

const props = defineProps({
  nodes: { type: Array, required: true },
  links: { type: Array, required: true }
})

const emit = defineEmits(['node-selected'])

const isListVisible = ref(true)
const expandedNodes = reactive({})
const activeStates = reactive({})

// Initialize states
props.nodes.forEach(node => {
  expandedNodes[node.id] = false
  activeStates[node.id] = true
})

const sortedNodes = computed(() => {
  return [...props.nodes].sort((a, b) => {
    const countA = getDependencyCount(a.id)
    const countB = getDependencyCount(b.id)
    return countB - countA || a.id.localeCompare(b.id)
  })
})

const allExpanded = computed(() => props.nodes.every(node => expandedNodes[node.id]))

const toggleListVisibility = () => isListVisible.value = !isListVisible.value

const toggleAllDetails = () => {
  const shouldExpand = !allExpanded.value
  props.nodes.forEach(node => expandedNodes[node.id] = shouldExpand)
}

const toggleExpand = (id) => expandedNodes[id] = !expandedNodes[id]
const toggleActive = (id) => activeStates[id] = !activeStates[id]
const getDependencyCount = (id) => props.links.filter(link => link.source === id).length
const getIncomingDependencyCount = (id) => props.links.filter(link => link.target === id).length
const hasDependencies = (id) => getDependencyCount(id) > 0
const getDependencies = (id) => props.links.filter(link => link.source === id)
const selectNode = (id) => emit('node-selected', id)

// const formatDate = (dateString) => new Date(dateString).toLocaleDateString()
// 精确到分钟

function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return date.toLocaleString('zh-CN', options);
}

const seed = 1992;

let colorMap = new Map();

function seededRandom(seed) {
  let x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

function getRandomColor(seed) {
  // Define a palette of colors that work well on both black and white backgrounds
  const colorPalette = [
    '#FF5733', // Vibrant orange
    '#33FF57', // Bright green
    '#3357FF', // Strong blue
    '#FF33A1', // Pink
    '#FFD700', // Gold
    '#40E0D0', // Turquoise
    '#8A2BE2', // Blue violet
    '#FF4500', // Orange red
    '#2E8B57', // Sea green
    '#1E90FF', // Dodger blue
  ];

  // Use the seeded random to pick a color from the palette
  const index = Math.floor(seededRandom(seed) * colorPalette.length);
  return colorPalette[index];
}

function getTagStyle(typeString) {
  // Ensure each unique type has a consistent color
  if (!colorMap.has(typeString)) {
    let color = getRandomColor(seed + typeString.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0));
    colorMap.set(typeString, color);
  }

  return {
    color: colorMap.get(typeString),
  };
}

</script>

<style scoped>
.container {
  margin: 1px;
  display: flex;
  flex-direction: column;
  width: 99%;
  border-radius: 8px;
  border: 1px solid var(--vp-c-border);
  overflow: hidden;
}

.header-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: var(--vp-c-bg);
  border-radius: 8px 8px 0 0;
}

.header-controls .el-icon {
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: color 0.3s ease, transform 0.3s ease;
}

.header-controls .el-icon:hover {
  color: var(--vp-c-text-1);
}

.layer-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  background-color: var(--vp-c-bg);
  border-radius: 0 0 8px 8px;
}

.layer-item {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.75rem;
  background-color: var(--vp-c-bg-soft);
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid var(--vp-c-default-3);
}

.layer-item.hidden-layer {
  opacity: 0.6;
  background-color: var(--vp-c-default-soft);
}

.layer-item.has-dependencies {
  border-left: 3px solid var(--vp-c-brand-2);
}

.layer-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.layer-id {
  font-weight: bold;
  color: var(--vp-c-text-1);
}

.layer-opacity,
.layer-visibility {
  color: var(--vp-c-text-2);
}

.incoming-count {
  color: var(--el-color-success);
  font-size: 0.9em;
}

.layer-details {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 0.5rem;
  border-top: 1px dashed var(--vp-c-border);
}

.detail-row {
  display: flex;
  gap: 0.5rem;
  font-size: 0.9em;
}

.detail-label {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.detail-value {
  color: var(--vp-c-text-1);
}

.dependencies-section {
  margin-top: 0.5rem;
}

.dependencies-header {
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.dependency-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  margin-top: 0.25rem;
  background-color: var(--vp-c-bg);
  border-radius: 4px;
  font-size: 0.85em;
  cursor: pointer;
}

.dependency-item:hover {
  background-color: var(--vp-c-bg-soft);
}

.leftBtn {
  margin-left: auto;
}

.expanded {
  transform: rotate(180deg);
}

.tag{
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-border);
  color: var(--vp-c-text-2);
  border-radius: 4px;
  padding: 2px 4px;
  font-size: 0.8em;
  font-weight: 500;
  text-align: center;
  margin-right: 0.5rem;
}
</style>