<template>
  <section id="fasilitas" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Fasilitas Studio</h2>
        <div class="w-20 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 mx-auto mb-4"></div>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Dilengkapi dengan fasilitas modern dan lengkap untuk mendukung aktivitas olahraga Anda
        </p>
      </div>
      <!-- Facilities Grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <div 
          v-for="(facility, index) in facilities" 
          :key="index" 
          class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <div class="relative h-80 overflow-hidden">
            <img 
              :src="facility.image" 
              :alt="facility.title" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            >
            <!-- Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            <!-- Content -->
            <div class="absolute bottom-0 left-0 right-0 p-6">
              <h3 class="text-2xl font-bold text-white mb-2">{{ facility.title }}</h3>
              <p class="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {{ facility.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import fasilitasCardio from '@/assets/cardio-fas.jpg';
import fasilitasYoga from '@/assets/gymballmat-almarsa.jpg';
import fasilitasRelax from '@/assets/interior-almarsa.jpg';
import amenitiesImage from '@/assets/amenities-almarsa.jpg';

const facilities = ref([
  {
    image: fasilitasYoga,
    title: 'Area Yoga & Aerobik',
    description: 'Ruang luas dengan matras berkualitas dan pencahayaan alami'
  },
  {
    image: fasilitasCardio,
    title: 'Peralatan Cardio',
    description: 'Sepeda statis dan peralatan cardio modern untuk latihan intensif'
  },
  {
    image: fasilitasRelax,
    title: 'Ruang Relaksasi',
    description: 'Area nyaman untuk istirahat dan pemulihan setelah latihan'
  },
  {
    image: amenitiesImage,
    title: 'Amenities Lengkap',
    description: 'Fasilitas pendukung seperti locker, shower, dan refreshment area'
  }
]);
</script>

<style scoped>
/* Additional custom styles if needed */
</style>