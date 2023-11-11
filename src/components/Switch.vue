<!-- eslint-disable vue/multi-word-component-names -->
<script lang="ts" setup>
import SunIcon from './icons/SunIcon.vue';
import MoonIcon from './icons/MoonIcon.vue';
</script>

<template>
  <div class="flex items-center">
    <SunIcon class="mr-5 text-xs" />

    <label for="toggle" class="flex cursor-pointer items-center">
      <input type="checkbox" id="toggle" class="peer sr-only" />
      <div
        class="relative block h-9 w-16 rounded-full bg-brandPurple p-1 before:absolute before:left-1 before:h-7 before:w-7 before:rounded-full before:bg-brandWhite before:p-1 before:transition-all before:duration-500 peer-checked:before:left-8 peer-checked:before:bg-white"
      ></div>
    </label>

    <MoonIcon class="ml-5 text-xs" />
  </div>
</template>
