// usePanelState.js
import { ref } from 'vue';

export default function usePanelState(props, emit) {
  const hovering = ref(false);
  const minimized = ref(false);
  
  const toggleMinimize = () => {
    minimized.value = !minimized.value;
  };

  const handleClose = () => {
    emit('close');
  };

  return {
    hovering,
    minimized,
    toggleMinimize,
    handleClose
  };
}