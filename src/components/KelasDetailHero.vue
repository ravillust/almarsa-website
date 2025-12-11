<template>
  <section class="pt-16 relative h-[300px] md:h-[500px] overflow-hidden">
    <img :src="classData.heroImage" 
         :alt="classData.name" 
         class="w-full h-full object-cover">
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
    
    <div class="absolute inset-0 flex items-end">
      <div class="max-w-7xl mx-auto px-4 pb-8 md:pb-16 w-full">
        <div class="text-white">
          <span class="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-[#2B7A9B] rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
            {{ classData.level }}
          </span>
          <h1 class="text-2xl md:text-5xl font-bold mb-2 md:mb-4">{{ classData.name }}</h1>
          <p class="text-sm md:text-xl text-white/90 max-w-3xl">{{ classData.tagline }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useClassData } from '@/composables/useClassData';

const { classData } = useClassData();
</script>