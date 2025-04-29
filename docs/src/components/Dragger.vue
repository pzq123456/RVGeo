<template>
    <div 
        class="draggable" 
        :class="{ minimized, dragging }" 
        :style="draggableStyle" 
        @mousedown="startDrag" 
        ref="draggableElement"
    >
        <div class="header">
            <div class="handle" @mousedown.stop="startDrag">
                <el-icon>
                    <Rank />
                </el-icon>
                <span class="title">{{ title }}</span>
            </div>

            <div class="controls">
                <el-icon @click.stop="toggleMinimize">
                    <component :is="minimized ? 'Plus' : 'Minus'" />
                </el-icon>
                <el-icon @click.stop="$emit('close')" v-if="showClose">
                    <Close />
                </el-icon>
            </div>
        </div>

        <div v-show="!minimized" class="content" ref="contentElement">
            <!-- 使用v-if而不是v-show来完全移除DOM -->
            <template v-if="!contentFrozen">
                <slot />
            </template>
            <div v-else class="frozen-placeholder">
                <!-- 拖动时显示的占位内容 -->
                Content is frozen during drag
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, computed, onBeforeUnmount } from 'vue';
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
        default: 20
    },
    initialY: {
        type: Number,
        default: 20
    },
    width: {
        type: Number,
        default: 300
    },
    minWidth: {
        type: Number,
        default: 200
    }
});

const emit = defineEmits(['close']);

// DOM 引用
const draggableElement = ref(null);

// 状态管理
const position = reactive({
    x: props.initialX,
    y: props.initialY
});
const offset = reactive({ x: 0, y: 0 });
const dragging = ref(false);
const minimized = ref(false);
const contentFrozen = ref(false); // 新增：内容冻结状态

// 计算属性
const draggableStyle = computed(() => ({
    top: `${position.y}px`,
    left: `${position.x}px`,
    width: `${props.width}px`,
    cursor: dragging.value ? 'grabbing' : 'move'
}));

// 拖拽相关函数
const startDrag = (event) => {
    dragging.value = true;
    offset.x = event.clientX - position.x;
    offset.y = event.clientY - position.y;
    
    // 开始拖动时冻结内容
    contentFrozen.value = true;
    
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', stopDrag);
};

const onDrag = (event) => {
    if (!dragging.value) return;

    position.x = event.clientX - offset.x;
    position.y = event.clientY - offset.y;
};

const stopDrag = () => {
    dragging.value = false;
    
    // 拖动结束后解冻内容
    // 使用setTimeout确保在下一个tick解冻，避免可能的渲染问题
    setTimeout(() => {
        contentFrozen.value = false;
    }, 0);
    
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
};

// 最小化/展开相关函数
const toggleMinimize = () => {
    minimized.value = !minimized.value;
};

// 生命周期钩子
onBeforeUnmount(() => {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', stopDrag);
});
</script>

<style scoped>
.draggable {
    position: fixed;
    width: 300px;
    min-width: v-bind('props.minWidth + "px"');
    border: 1px solid var(--vp-c-border);
    background: var(--vp-c-bg-elv);
    border-radius: 8px;
    z-index: 1000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--vp-shadow-2);
    transition: transform 0.1s ease-out;
}

.draggable:active {
    transform: scale(1.01);
}

.draggable.minimized {
    height: auto !important;
}

.draggable.dragging {
    /* 拖动时的额外样式 */
    opacity: 0.95;
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
    padding: 5px;
    overflow-y: auto;
    flex-grow: 1;
    background-color: var(--vp-c-bg);
    max-height: 60vh;
}

.frozen-placeholder {
    padding: 20px;
    text-align: center;
    color: var(--vp-c-text-2);
    font-size: 0.9em;
    background-color: var(--vp-c-bg-soft);
}
</style>

<style scoped>
.draggable {
    position: fixed;
    top: 0;
    left: 0;
    border: 1px solid var(--vp-c-border);
    background: var(--vp-c-bg-elv);
    border-radius: 8px;
    z-index: 1000;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: var(--vp-shadow-2);
    will-change: transform; /* 提示浏览器优化transform变化 */
    transition: transform 0.1s ease-out;
}

.draggable.dragging {
    transition: none; /* 拖动时禁用过渡效果 */
    z-index: 1001; /* 确保拖动时在最上层 */
}

.draggable.minimized {
    height: auto !important;
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
    padding: 12px;
    overflow-y: auto;
    flex-grow: 1;
    background-color: var(--vp-c-bg);
    max-height: 60vh;
}
</style>