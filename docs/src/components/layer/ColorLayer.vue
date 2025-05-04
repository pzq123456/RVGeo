<template>
    <BaseLayerCard :layer="layer" @toggle-expand="$emit('toggle-expand', $event)" @toggle-visibility="$emit('toggle-visibility', $event)">
      <template #custom-controls>
        <ColorBandSelector :disabled="!layer.visible" />
      </template>
    </BaseLayerCard>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  import BaseLayerCard from './LayerCard.vue';
  import ColorBandSelector from '@/components/ColorBand.vue';
  
  defineProps({
    layer: {
      type: Object,
      required: true
    }
  });
  
  defineEmits(['toggle-expand', 'toggle-visibility']);
  </script>