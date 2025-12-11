<template>
  <section class="pt-16 text-[#2B7A9B] h-[400px] md:h-[600px] flex items-center mb-12 md:mb-20 relative overflow-hidden">
    <!-- Background image on the right -->
    <div class="absolute inset-0 z-0">
      <img 
        src="@/assets/gymballmat-almarsa.jpg" 
        alt="Gym Background" 
        class="absolute right-0 top-0 h-full w-auto object-cover opacity-50"
      />
    </div>
    
    <!-- Smooth gradient overlay from left to right -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#f8f9fa] from-0% via-[#f8f9fa]/95 via-30% via-[#e8f4f8]/80 via-50% via-[#e8f4f8]/50 via-70% to-transparent to-100% z-10"></div>
    
    <!-- Content -->
    <div class="text-left justify-start w-full px-4 md:pl-24 relative z-20">
      <h1 class="text-2xl md:text-4xl font-bold mb-4 md:mb-6 animate-fade-in">
        Sehat, Bugar, dan Percaya Diri
      </h1>
      <p class="text-sm md:text-lg max-w-xl md:max-w-2xl text-[#666666] leading-relaxed animate-fade-in-delay">
        Studion senam khusus wanita yang mengutamakan kenyamanan dan privasi Anda. Bergabunglah dengan ALMARSA untuk pengalaman kebugaran yang menyenangkan dan aman.
      </p>
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