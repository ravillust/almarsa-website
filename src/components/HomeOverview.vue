<template>
  <section class="py-12 md:py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-center">

      <!-- FOTO -->
      <div>
        <img 
          :src="Fitness" 
          alt="Almarsa Overview"
          class="w-full rounded-xl shadow-lg object-cover"
        />
      </div>

      <!-- TEKS -->
      <div>
        <h2 class="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
          Tentang Almarsa
        </h2>

        <p class="text-sm md:text-lg text-gray-600 leading-relaxed mb-4 md:mb-6">
          Almarsa adalah tempat senam khusus wanita yang mengutamakan privasi, kenyamanan,
          dan pendampingan profesional. Kami menyediakan lingkungan yang aman dan nyaman
          untuk Anda mengikuti program olahraga tanpa rasa canggung.
        </p>

        <p class="text-sm md:text-lg text-gray-600 leading-relaxed">
          Dengan instruktur berpengalaman dan fasilitas modern,
          kami membantu Anda mencapai kesehatan dan kebugaran secara menyenangkan.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import Fitness from '@/assets/fitness.jpg'
</script>
