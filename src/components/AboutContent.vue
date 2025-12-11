<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-4xl font-bold text-gray-900 mb-6">
          Tentang Almarsa
        </h2>

        <p class="text-gray-600 text-lg leading-relaxed mb-6">
          Almarsa adalah tempat senam khusus wanita yang mengutamakan privasi, kenyamanan,
          dan pendampingan profesional. Kami menyediakan lingkungan yang aman dan nyaman
          untuk Anda mengikuti program olahraga tanpa rasa canggung.
        </p>

        <p class="text-gray-600 text-lg leading-relaxed">
          Dengan instruktur berpengalaman dan fasilitas modern,
          kami membantu Anda mencapai kesehatan dan kebugaran secara menyenangkan.
        </p>
      </div>
            <div>
        <img 
          :src="AlMARSA" 
          alt="Almarsa Overview"
          class="w-full rounded-xl shadow-lg object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import AlMARSA from '@/assets/almarsa-depan.jpg'
</script>

