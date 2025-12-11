<template>
  <div class="lg:sticky lg:top-24 space-y-6">
    
    <!-- Info Card -->
    <div class="bg-white rounded-2xl shadow-md p-4 md:p-6">
      <h3 class="text-lg md:text-xl font-bold text-gray-800 mb-4 md:mb-6">Informasi Kelas</h3>
      
      <div class="space-y-4">
        <div class="flex items-start gap-3 pb-4 border-b border-gray-100">
          <svg class="w-5 h-5 text-[#2B7A9B] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <div>
            <p class="text-xs md:text-sm text-gray-500 mb-0.5">Durasi</p>
            <p class="font-semibold text-gray-800 text-sm md:text-base">{{ classData.duration }}</p>
          </div>
        </div>

        <div class="flex items-start gap-3 pb-4 border-b border-gray-100">
          <svg class="w-5 h-5 text-[#2B7A9B] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
          <div>
            <p class="text-xs md:text-sm text-gray-500 mb-0.5">Kalori Terbakar</p>
            <p class="font-semibold text-gray-800 text-sm md:text-base">{{ classData.calories }}</p>
          </div>
        </div>

        <div class="flex items-start gap-3 pb-4 border-b border-gray-100">
          <svg class="w-5 h-5 text-[#2B7A9B] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
          <div>
            <p class="text-xs md:text-sm text-gray-500 mb-0.5">Kapasitas</p>
            <p class="font-semibold text-gray-800 text-sm md:text-base">{{ classData.capacity }} orang</p>
          </div>
        </div>

        <div class="flex items-start gap-3">
          <svg class="w-5 h-5 text-[#2B7A9B] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
          </svg>
          <div>
            <p class="text-xs md:text-sm text-gray-500 mb-0.5">Level</p>
            <p class="font-semibold text-gray-800 text-sm md:text-base">{{ classData.level }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Card -->
    <div class="bg-gradient-to-br from-[#2B7A9B] to-[#3A9BC1] rounded-2xl shadow-md p-4 md:p-6 text-white">
      <h3 class="text-lg md:text-xl font-bold mb-4 md:mb-6">Harga & Paket</h3>
      
      <div class="space-y-4 mb-6">
        <div v-for="price in classData.pricing" :key="price.name"
             class="p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-xl">
          <p class="text-white/80 text-xs md:text-sm mb-1">{{ price.name }}</p>
          <p class="text-xl md:text-2xl font-bold">{{ price.price }}</p>
          <p class="text-white/70 text-xs">{{ price.description }}</p>
        </div>
      </div>

      <a href="https://wa.me/6282158584258" target="_blank"
         class="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2.5 md:py-3 px-4 md:px-6 rounded-xl transition-colors duration-300 text-center text-sm md:text-base">
        <div class="flex items-center justify-center gap-2">
          <svg class="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Booking Sekarang
        </div>
      </a>
    </div>

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
