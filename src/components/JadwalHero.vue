<template>
  <section class="pt-16 text-[#2B7A9B] flex items-center bg-gradient-to-r from-[#f8f9fa] to-[#e8f4f8] relative pb-20 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div class="text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
          Jadwal Kelas
        </h1>
        <p class="text-sm md:text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed animate-fade-in-delay px-2">
          Pilih kelas dan waktu yang sesuai dengan jadwal Anda
        </p>
      </div>
    </div>
    
    <!-- Wave Separator -->
    <div class="absolute bottom-0 left-0 right-0 overflow-hidden">
      <svg class="w-full h-16 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" 
              fill="rgb(250, 251, 252)" opacity="0.5"/>
        <path d="M0,20 C200,100 400,20 600,70 C800,120 1000,40 1200,80 L1200,120 L0,120 Z" 
              fill="rgb(250, 251, 252)"/>
      </svg>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-fade-in-delay {
  animation: fade-in 0.6s ease-out 0.2s both;
}
</style>
