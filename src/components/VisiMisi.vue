\<template>
  <section id="visi-misi" class="py-20 bg-gradient-to-br from-gray-50 to-teal-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto"></div>
      </div>

      <!-- Content -->
      <div class="grid md:grid-cols-2 gap-12">
        <!-- Visi Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border-t-4 hover:shadow-2xl transition-all duration-300" style="border-top-color: #2B7A9B;">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 rounded-xl" style="background: linear-gradient(to bottom right, #2B7A9B, #1e5a73);">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Visi</h3>
          </div>
          <p class="text-gray-700 leading-relaxed">
            {{ visi }}
          </p>
        </div>

        <!-- Misi Card -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border-t-4 hover:shadow-2xl transition-all duration-300" style="border-top-color: #2B7A9B;">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-3 rounded-xl" style="background: linear-gradient(to bottom right, #2B7A9B, #1e5a73);">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900">Misi</h3>
          </div>
          <ul class="space-y-3">
            <li v-for="(item, index) in misi" :key="index" class="flex items-start gap-3">
              <div class="w-2 h-2 rounded-full mt-2 flex-shrink-0" style="background-color: #2B7A9B;"></div>
              <span class="text-gray-700">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const visi = ref(
  'Menjadi studio senam terdepan yang memberikan pengalaman olahraga terbaik bagi muslimah dengan lingkungan yang Islami dan fasilitas berkualitas.'
);

const misi = ref([
  'Menyediakan program senam yang sesuai kebutuhan muslimah',
  'Menciptakan lingkungan olahraga yang aman dan nyaman',
  'Memberikan pelayanan terbaik dengan instruktur profesional',
  'Menjaga privasi dan kenyamanan member'
]);
</script>

<style scoped>
/* Additional custom styles if needed */
</style>