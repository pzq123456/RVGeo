// usePanelPosition.js
import { onMounted, onBeforeUnmount } from 'vue';

export default function usePanelPosition(position, props) {
  const setDefaultPosition = () => {
    if (props.initialX === null) {
      const viewportWidth = window.innerWidth;
      position.x = Math.max(0, viewportWidth - props.width - 20);
    }
    position.y = Math.max(0, Math.min(position.y, window.innerHeight - 50));
  };

  onMounted(() => {
    setDefaultPosition();
    window.addEventListener('resize', setDefaultPosition);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', setDefaultPosition);
  });

  return {
    setDefaultPosition
  };
}