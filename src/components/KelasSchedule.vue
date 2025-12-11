<template>
  <div class="bg-white rounded-2xl shadow-md p-4 md:p-8">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Jadwal Tersedia</h2>
    <div class="space-y-4">
      <div v-for="schedule in classData.schedules" :key="schedule.day + schedule.time"
           class="flex flex-col md:flex-row md:items-center md:justify-between p-4 border border-gray-200 rounded-xl hover:border-[#2B7A9B] transition-colors gap-3">
        <div class="flex items-center gap-3 md:gap-4">
          <div class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#2B7A9B] to-[#3A9BC1] rounded-xl flex items-center justify-center text-white font-bold text-xs md:text-base">
            {{ schedule.day.substring(0, 3) }}
          </div>
          <div>
            <p class="font-semibold text-gray-800 text-sm md:text-base">{{ schedule.day }}</p>
            <p class="text-gray-600 text-xs md:text-sm">{{ schedule.time }}</p>
            <p class="text-gray-500 text-xs">Instruktur: {{ schedule.instructor }}</p>
          </div>
        </div>
        <div class="text-left md:text-right">
          <span class="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs md:text-sm font-medium">
            {{ schedule.quota }} slot tersisa
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
