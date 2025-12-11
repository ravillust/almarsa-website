<template>
  <div class="bg-white rounded-2xl shadow-md p-4 md:p-8">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Instruktur Kelas</h2>
    <div class="flex items-start gap-4 md:gap-6">
      <img :src="classData.instructor.photo" 
           :alt="classData.instructor.name"
           class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover">
      <div>
        <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-2">{{ classData.instructor.name }}</h3>
        <p class="text-sm md:text-base text-gray-600 mb-3">{{ classData.instructor.bio }}</p>
        <div class="flex flex-wrap gap-2">
          <span v-for="cert in classData.instructor.certifications" :key="cert"
                class="px-2 md:px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs md:text-sm">
            {{ cert }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useClassData } from '@/composables/useClassData.js';
const { classData } = useClassData();
</script>
