<template>
    <div 
        class="draggable" 
        :class="{ minimized, dragging }" 
        :style="draggableStyle" 
        @mousedown="startDrag"
        @touchstart.passive="startDragTouch"
        ref="draggableElement"
        @mouseenter="hovering = true"
        @mouseleave="hovering = false"
    >
        <div class="header" :class="{ 'header-hidden': !hovering && !minimized }">
            <div class="handle" @mousedown.stop="startDrag" @touchstart.stop.prevent="startDragTouch">
                <el-icon>
                    <Rank />
                </el-icon>
                <span class="title">{{ title }}</span>
            </div>

            <div class="controls">
                <el-icon @click.stop="toggleMinimize" @touchstart.stop.prevent="toggleMinimize">
                    <component :is="minimized ? 'Plus' : 'Minus'" />
                </el-icon>
                <el-icon @click.stop="$emit('close')" @touchstart.stop.prevent="$emit('close')" v-if="showClose">
                    <Close />
                </el-icon>
            </div>
        </div>

        <div v-show="!minimized" class="content" ref="contentElement">
            <template v-if="!contentFrozen">
                <slot />
            </template>
            <div v-else class="frozen-placeholder">
                Content is frozen during drag
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onBeforeUnmount, onMounted, nextTick } from 'vue';
import { Rank, Plus, Minus, Close } from '@element-plus/icons-vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Panel'
    },
    showClose: {
        type: Boolean,
        default: true
    },
    initialX: {
        type: Number,
        default: null
    },
    initialY: {
        type: Number,
        default: 20
    },
    width: {
        type: Number,
        default: 500
    },
    minWidth: {
        type: Number,
        default: 200
    }
});

const emit = defineEmits(['close']);

const draggableElement = ref(null);
const position = reactive({
    x: props.initialX,
    y: props.initialY
});
const offset = reactive({ x: 0, y: 0 });
const dragging = ref(false);
const minimized = ref(false);
const contentFrozen = ref(false);
const isTouchDevice = ref('ontouchstart' in window || navigator.maxTouchPoints > 0);
const hovering = ref(false); // 新增悬停状态

const draggableStyle = computed(() => ({
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: `${props.width}px`,
    cursor: dragging.value ? 'grabbing' : 'move',
    minWidth: `${props.minWidth}px`
}));

const setDefaultPosition = () => {
    if (props.initialX === null) {
        const viewportWidth = window.innerWidth;
        position.x = Math.max(0, viewportWidth - props.width - 20);
    }
    position.y = Math.max(0, Math.min(position.y, window.innerHeight - 50));
};

const startDrag = (event) => {
    dragging.value = true;
    offset.x = event.clientX - position.x;
    offset.y = event.clientY - position.y;
    contentFrozen.value = true;
    
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
};

const startDragTouch = (event) => {
    if (!event.touches || event.touches.length === 0) return;
    event.preventDefault();
    event.stopPropagation();
    
    const touch = event.touches[0];
    dragging.value = true;
    offset.x = touch.clientX - position.x;
    offset.y = touch.clientY - position.y;
    contentFrozen.value = true;
    
    document.addEventListener('touchmove', onDragTouch, { passive: false });
    document.addEventListener('touchend', stopDragTouch);
};

const onDrag = (event) => {
    if (!dragging.value) return;
    event.preventDefault();
    
    position.x = Math.max(0, event.clientX - offset.x);
    position.y = Math.max(0, event.clientY - offset.y);
    
    // 确保面板不会移出视口右侧
    position.x = Math.min(position.x, window.innerWidth - props.width);
    position.y = Math.min(position.y, window.innerHeight - 50);
};

const onDragTouch = (event) => {
    if (!dragging.value || !event.touches || event.touches.length === 0) return;
    event.preventDefault();
    
    const touch = event.touches[0];
    position.x = Math.max(0, touch.clientX - offset.x);
    position.y = Math.max(0, touch.clientY - offset.y);
    
    // 确保面板不会移出视口右侧
    position.x = Math.min(position.x, window.innerWidth - props.width);
    position.y = Math.min(position.y, window.innerHeight - 50);
};

const stopDrag = () => {
    dragging.value = false;
    setTimeout(() => {
        contentFrozen.value = false;
    }, 0);
    
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
};

const stopDragTouch = () => {
    dragging.value = false;
    setTimeout(() => {
        contentFrozen.value = false;
    }, 0);
    
    document.removeEventListener('touchmove', onDragTouch);
    document.removeEventListener('touchend', stopDragTouch);
};

const toggleMinimize = () => {
    minimized.value = !minimized.value;
};

onMounted(() => {
    setDefaultPosition();
    window.addEventListener('resize', setDefaultPosition);
    
    nextTick(() => {
        setDefaultPosition();
    });
});

onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchmove', onDragTouch);
    document.removeEventListener('touchend', stopDragTouch);
    window.removeEventListener('resize', setDefaultPosition);
});
</script>

<style scoped>
.draggable {
    position: fixed;
    width: 400px;
    min-width: v-bind('props.minWidth + "px"');
    border: 1px solid var(--vp-c-border);
    background: var(--vp-c-bg-elv);
    border-radius: 8px;
    z-index: 30;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--vp-shadow-2);
    transition: transform 0.1s ease-out;
    touch-action: none;
}

.draggable:active {
    transform: scale(1.01);
}

.draggable.minimized {
    height: auto !important;
}

.draggable.dragging {
    opacity: 0.95;
    transition: none;
    z-index: 1001;
}

.header {
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

.header-hidden {
    opacity: 0.3;
    padding: 0;
    overflow: hidden;
}

.header-hidden .handle,
.header-hidden .controls {
    display: none;
}

.handle {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: inherit;
    color: var(--vp-c-text-1);
    font-size: 14px;
    font-weight: 500;
}

.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 180px;
}

.controls {
    display: flex;
    align-items: center;
    gap: 8px;
}

.controls .el-icon {
    padding: 4px;
    border-radius: 4px;
    color: var(--vp-c-text-1);
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: background-color 0.2s ease;
}

.controls .el-icon:hover {
    background-color: var(--vp-c-default-soft);
}

.content {
    padding: 2px;
    overflow-y: auto;
    flex-grow: 1;
    background-color: var(--vp-c-bg);
    max-height: 30vh;
}

.frozen-placeholder {
    padding: 20px;
    text-align: center;
    color: var(--vp-c-text-2);
    font-size: 0.9em;
    background-color: var(--vp-c-bg-soft);
}
</style>