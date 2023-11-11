<script setup lang="ts">
import BackgroundPattern from '@/components/icons/BackgroundPattern.vue';
import HomePage from './components/HomePage.vue';
import Switch from '@/components/Switch.vue';
</script>

<template>
  <main class="h-screen bg-brandLightBlue">
    <BackgroundPattern class="absolute h-screen w-screen" :darkMode="false" />

    <section class="isolate px-36 py-32">
      <Switch class="flex justify-end pb-12" />

      <HomePage />
    </section>
  </main>
</template>

<style scoped></style>
