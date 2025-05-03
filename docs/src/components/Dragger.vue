<template>
  <div
    class="draggable-panel"
    :class="{ 'is-minimized': minimized, 'is-dragging': dragging }"
    :style="panelStyle"
    @mousedown="startDrag"
    @touchstart.passive="startDragTouch"
    ref="panelElement"
    @mouseenter="hovering = autoHideHeader ? true : hovering"
    @mouseleave="hovering = autoHideHeader ? false : true"
  >
    <div class="draggable-panel__header" :class="{ 'is-hidden': !hovering && !minimized && autoHideHeader }">
      <div class="draggable-panel__handle" @mousedown.stop="startDrag" @touchstart.stop.prevent="startDragTouch">
        <el-icon><Rank /></el-icon>
        <span class="draggable-panel__title">{{ title }}</span>
      </div>

      <div class="draggable-panel__controls">
        <el-tooltip content="Auto-hide header" placement="bottom">
          <el-icon @click.stop="autoHideHeader = !autoHideHeader">
            <component :is="autoHideHeader ? 'Unlock' : 'Lock'" />
          </el-icon>
        </el-tooltip>
        <el-icon @click.stop="toggleMinimize">
          <component :is="minimized ? 'Plus' : 'Minus'" />
        </el-icon>
        <el-icon @click.stop="handleClose" v-if="showClose">
          <Close />
        </el-icon>
      </div>
    </div>

    <div v-show="!minimized" class="draggable-panel__content" ref="contentElement">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import useDrag from '@/composables/panel/useDrag.js';
import usePanelState from '@/composables/panel/usePanelState.js';
import usePanelPosition from '@/composables/panel/usePanelPosition.js';

const props = defineProps({
  title: { type: String, default: 'Panel' },
  showClose: { type: Boolean, default: true },
  initialX: { type: Number, default: null },
  initialY: { type: Number, default: 20 },
  width: { type: Number, default: 500 },
  minWidth: { type: Number, default: 200 }
});

const emit = defineEmits(['close']);

const panelElement = ref(null);
const contentElement = ref(null);
const autoHideHeader = ref(false); // Default off

const position = reactive({
  x: props.initialX,
  y: props.initialY
});

const { dragging, startDrag, startDragTouch } = useDrag(position, props);
const { hovering, minimized, toggleMinimize, handleClose } = usePanelState(props, emit);
usePanelPosition(position, props);

const panelStyle = computed(() => ({
  top: `${position.y}px`,
  left: `${position.x}px`,
  width: `${props.width}px`,
  cursor: dragging.value ? 'grabbing' : 'move',
  minWidth: `${props.minWidth}px`
}));
</script>

<style scoped>
.draggable-panel {
  position: fixed;
  width: 400px;
  min-width: v-bind('props.minWidth + "px"');
  border: 1px solid var(--vp-c-border);
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  z-index: 30;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--vp-shadow-2);
  transition: transform 0.1s ease-out;
  touch-action: none;
}

.draggable-panel:active {
  border: 1px solid var(--vp-c-brand-2);
}

.draggable-panel.is-minimized {
  height: auto !important;
}

.draggable-panel.is-dragging {
  opacity: 0.95;
  transition: none;
  z-index: 1001;
}

.draggable-panel__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  cursor: move;
  user-select: none;
  transition: all 0.2s ease;
}

.draggable-panel__header.is-hidden {
  opacity: 0.3;
  padding: 0;
  overflow: hidden;
}

.draggable-panel__header.is-hidden .draggable-panel__handle,
.draggable-panel__header.is-hidden .draggable-panel__controls {
  display: none;
}

.draggable-panel__handle {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: inherit;
  color: var(--vp-c-text-1);
  font-size: 14px;
  font-weight: 500;
}

.draggable-panel__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 180px;
}

.draggable-panel__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.draggable-panel__controls .el-icon {
  padding: 4px;
  border-radius: 4px;
  color: var(--vp-c-text-1);
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.draggable-panel__controls .el-icon:hover {
  background-color: var(--vp-c-default-soft);
}

.draggable-panel__content {
  padding: 2px;
  overflow-y: auto;
  flex-grow: 1;
  background-color: var(--vp-c-bg);
  max-height: 30vh;
}
</style>