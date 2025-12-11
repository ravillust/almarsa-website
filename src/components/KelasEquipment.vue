<template>
  <div class="bg-white rounded-2xl shadow-md p-4 md:p-8">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Yang Perlu Disiapkan</h2>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      <div v-for="item in classData.equipment" :key="item" 
           class="flex items-center gap-2 md:gap-3 p-3 md:p-4 bg-gray-50 rounded-xl">
        <svg class="w-4 h-4 md:w-5 md:h-5 text-[#2B7A9B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span class="text-gray-700 text-xs md:text-sm">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClassData } from '@/composables/useClassData.js';
const { classData } = useClassData();
</script>
