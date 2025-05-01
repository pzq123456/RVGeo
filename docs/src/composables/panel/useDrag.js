import { ref, reactive, onBeforeUnmount } from 'vue';

export default function useDrag(position, props) {
  const dragging = ref(false);
  const rafId = ref(null);
  
  const offset = reactive({ 
    x: 0, 
    y: 0 
  });

  const positionCache = reactive({
    x: position.x,
    y: position.y
  });

  const updatePosition = (clientX, clientY) => {
    positionCache.x = Math.max(0, Math.min(clientX - offset.x, window.innerWidth - props.width));
    positionCache.y = Math.max(0, Math.min(clientY - offset.y, window.innerHeight - 50));
    
    if (!rafId.value) {
      rafId.value = requestAnimationFrame(() => {
        position.x = positionCache.x;
        position.y = positionCache.y;
        rafId.value = null;
      });
    }
  };

  const handleMouseMove = (event) => {
    if (!dragging.value) return;
    event.preventDefault();
    updatePosition(event.clientX, event.clientY);
  };

  const handleTouchMove = (event) => {
    if (!dragging.value || !event.touches?.length) return;
    event.preventDefault();
    const touch = event.touches[0];
    updatePosition(touch.clientX, touch.clientY);
  };

  const startDrag = (event) => {
    dragging.value = true;
    offset.x = event.clientX - position.x;
    offset.y = event.clientY - position.y;
    
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopDrag);
  };

  const startDragTouch = (event) => {
    if (!event.touches?.length) return;
    event.preventDefault();
    event.stopPropagation();
    
    const touch = event.touches[0];
    dragging.value = true;
    offset.x = touch.clientX - position.x;
    offset.y = touch.clientY - position.y;
    
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', stopDragTouch);
  };

  const stopDrag = () => {
    cleanupDrag();
  };

  const stopDragTouch = () => {
    cleanupDrag();
  };

  const cleanupDrag = () => {
    if (rafId.value) {
      cancelAnimationFrame(rafId.value);
      rafId.value = null;
    }
    
    dragging.value = false;
    position.x = positionCache.x;
    position.y = positionCache.y;
    
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', stopDrag);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', stopDragTouch);
  };

  onBeforeUnmount(cleanupDrag);

  return {
    dragging,
    startDrag,
    startDragTouch,
    stopDrag,
    stopDragTouch
  };
}