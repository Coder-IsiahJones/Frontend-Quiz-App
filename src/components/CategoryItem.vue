<script lang="ts" setup>
const { name } = defineProps(['name']);
</script>

<template>
  <button
    type="button"
    class="flex w-[564px] items-center gap-8 rounded-3xl bg-brandWhite p-6 drop-shadow-sm hover:opacity-90 hover:shadow-md focus-visible:outline-4 focus-visible:outline-brandPurple"
  >
    <slot></slot>

    <span class="font-rubik text-2xl font-medium text-brandDarkNavy">{{ name }}</span>
  </button>
</template>
