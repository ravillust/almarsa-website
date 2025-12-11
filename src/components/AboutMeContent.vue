<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Rafi Fairuz
        </h2>

        <p class="text-gray-600 text-lg leading-relaxed mb-6">
          11231082 - Informatika - ITK
        </p>

        <p class="text-gray-600 text-lg leading-relaxed">
          Saya adalah Mahasiswa Informatika Institut Teknologi Kalimantan 
        </p>
      </div>
            <div>
        <img 
          :src="SAYA" 
          alt="Almarsa Overview"
          class="w-full rounded-xl shadow-lg object-cover hidden md:block"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import SAYA from '@/assets/rafi.png'
</script>

