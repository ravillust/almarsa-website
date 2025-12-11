<template>
  <section class="pt-16 text-[#2B7A9B] flex items-center bg-gradient-to-r from-[#f8f9fa] to-[#e8f4f8] relative pb-20 md:pb-32">
    <div class="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div class="text-center">
        <h1 class="text-3xl md:text-5xl font-bold mb-4 md:mb-6 animate-fade-in">
          Hubungi Kami
        </h1>
        <p class="text-sm md:text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed animate-fade-in-delay px-2">
          Ada pertanyaan? Kami siap membantu anda
        </p>
      </div>
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