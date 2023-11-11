<script lang="ts" setup>
import type { PropType } from 'vue';

// Define a prop to determine whether to show the dark or light SVG
const props = defineProps<{
  darkMode: PropType<boolean>;
}>();
</script>

<template>
  <!-- Use a ternary operator to conditionally render the SVG based on the prop value -->
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1440"
    height="960"
    fill="none"
    viewBox="0 0 1440 960"
  >
    <g :stroke="props.darkMode ? '#2D3949' : '#edf1f9'" stroke-width="144">
      <circle cx="-50.5" cy="75.5" r="416.5" />
      <circle cx="1388.5" cy="840.5" r="416.5" />
    </g>
  </svg>
</template>
