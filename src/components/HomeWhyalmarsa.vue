<template>
  <section class="w-full py-12 md:py-20 bg-white mt-12 md:mt-20">
    <div class="max-w-6xl mx-auto px-4 md:px-6 text-center">
      <h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Kenapa Memilih Almarsa?</h2>

      <p class="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
        Kami menyediakan fasilitas terbaik untuk ibu & anak dengan instruktur profesional dan lingkungan yang nyaman.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-10">
        
        <!-- CARD 1 -->
        <div class="max-w-[350px] w-full rounded-2xl shadow bg-gray-50 overflow-hidden mx-auto">
          <div class="h-[250px] md:h-[300px] w-full">
            <img :src="InstructorImg" alt="Instruktur Berpengalaman" class="w-full h-full object-cover object-top" />
          </div>
          <div class="p-4 text-center">
            <h3 class="font-semibold text-base md:text-lg mb-2">Instruktur Berpengalaman</h3>
            <p class="text-xs md:text-sm text-gray-600">
              Semua instruktur telah tersertifikasi dan ramah untuk pemula.
            </p>
          </div>
        </div>

        <!-- CARD 2 -->
        <div class="max-w-[350px] w-full rounded-2xl shadow bg-gray-50 overflow-hidden mx-auto">
          <div class="h-[250px] md:h-[300px] w-full">
          <img :src="CozyRoomImg" alt="Lingkungan Nyaman" class="w-full h-full object-cover"/>
          </div>
          <div class="p-4 text-center">
            <h3 class="font-semibold text-base md:text-lg mb-2">Lingkungan Nyaman</h3>
            <p class="text-xs md:text-sm text-gray-600">
              Ruangan bersih, sejuk, dan aman untuk ibu & anak.
            </p>
          </div>
        </div>

        <!-- CARD 3 -->
        <div class="max-w-[350px] w-full rounded-2xl shadow bg-gray-50 overflow-hidden mx-auto">
          <div class="h-[250px] md:h-[300px] w-full">
            <img :src="SafePrivateImg" alt="Aman dan Privat" class="w-full h-full object-cover"/>
          </div>
          <div class="p-4 text-center">
            <h3 class="font-semibold text-base md:text-lg mb-2">Aman dan Privat</h3>
            <p class="text-xs md:text-sm text-gray-600">
                Area khusus wanita untuk kenyamanan dan privasi Anda.
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import InstructorImg from '@/assets/experienced-instructor.jpg'
import CozyRoomImg from '@/assets/cozy-room.jpg'
import SafePrivateImg from '@/assets/safe-private.jpg'
</script>
