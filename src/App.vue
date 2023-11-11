<script setup lang="ts">
import BackgroundPattern from '@/components/icons/BackgroundPattern.vue';
</script>

<template>
  <main class="bg-brandLightBlue h-screen">
    <BackgroundPattern class="absolute h-screen w-screen" :darkMode="false" />

    <h1 class="text-3xl font-bold underline text-red-600">Hello world!</h1>
  </main>
</template>

<style scoped></style>
