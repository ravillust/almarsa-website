<template>
  <div class="bg-white rounded-2xl shadow-md p-4 md:p-8">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Tentang Kelas</h2>
    <p class="text-sm md:text-base text-gray-600 leading-relaxed mb-6">{{ classData.description }}</p>
    
    <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-4">Manfaat</h3>
    <ul class="space-y-3">
      <li v-for="benefit in classData.benefits" :key="benefit" class="flex items-start gap-2 md:gap-3">
        <svg class="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span class="text-sm md:text-base text-gray-600">{{ benefit }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  classData: {
    type: Object,
    required: true
  }
});
</script>
