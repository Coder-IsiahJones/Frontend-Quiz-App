<script setup lang="ts">
import BackgroundPattern from '@/components/icons/BackgroundPattern.vue';
import CategoryItem from '@/components/CategoryItem.vue';
import HtmlIcon from '@/components/icons/HtmlIcon.vue';
import CssIcon from '@/components/icons/CssIcon.vue';
import JavascriptIcon from '@/components/icons/JavascriptIcon.vue';
import AccessibilityIcon from '@/components/icons/AccessibilityIcon.vue';
import WelcomeText from '@/components/WelcomeText.vue';

const items = [
  { icon: HtmlIcon, name: 'HTML', background: '#FFF1E9' },
  { icon: CssIcon, name: 'CSS', background: '#E0FDEF' },
  { icon: JavascriptIcon, name: 'Javascript', background: '#EBF0FF' },
  { icon: AccessibilityIcon, name: 'Accessibility', background: '#F6E7FF' },
];
</script>

<template>
  <main class="h-screen bg-brandLightBlue">
    <BackgroundPattern class="absolute h-screen w-screen" :darkMode="false" />

    <section class="isolate flex justify-between px-[140px] py-[260px]">
      <WelcomeText />

      <!-- List of Categories -->
      <div class="flex flex-col gap-6">
        <CategoryItem v-for="item in items" :key="item.name" :name="item.name">
          <component
            class="h-[56px] w-[56px] rounded-md p-2"
            :style="{ backgroundColor: item.background }"
            :is="item.icon"
          />
        </CategoryItem>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
