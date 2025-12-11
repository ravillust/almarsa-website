<template>
  <section class="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
    <div class="max-w-7xl mx-auto">
      
      <!-- Grid Layout -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Senam Aerobik -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden bg-purple-100">
            <img src="https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&h=600&fit=crop" 
                 alt="Senam Aerobik" 
                 class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Senam Aerobik</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Gerakan dinamis untuk meningkatkan stamina dan membakar kalori lebih efektif dengan musik energik.
            </p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>50 menit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Pemula - Menengah</span>
              </div>
            </div>
            <router-link to="/kelas/aerobik" class="block mt-6 w-full bg-[#2B7A9B] hover:bg-[#1f5a75] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-center">
              Lihat Detail
            </router-link>
          </div>
        </div>

        <!-- Yoga & Stretching -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden bg-teal-50">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop" 
                 alt="Yoga & Stretching" 
                 class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Yoga & Stretching</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Gerakan dinamis untuk meningkatkan kelenturan dan mengurangi stress dengan teknik pernapasan mendalam.
            </p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>60 menit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Pemula</span>
              </div>
            </div>
            <router-link to="/kelas/yoga" class="block mt-6 w-full bg-[#2B7A9B] hover:bg-[#1f5a75] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-center">
              Lihat Detail
            </router-link>
          </div>
        </div>

        <!-- Pilates -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden bg-gray-100">
            <img src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=800&h=600&fit=crop" 
                 alt="Pilates" 
                 class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Pilates</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Gerakan dinamis untuk memperkuat otot inti dan postur tubuh dengan gerakan yang terkontrol dan fokus.
            </p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>50 menit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Menengah</span>
              </div>
            </div>
            <router-link to="/kelas/pilates" class="block mt-6 w-full bg-[#2B7A9B] hover:bg-[#1f5a75] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-center">
              Lihat Detail
            </router-link>
          </div>
        </div>

        <!-- Zumba -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden bg-orange-100">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop" 
                 alt="Zumba" 
                 class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Zumba</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Gerakan dinamis untuk meningkatkan stamina dan membakar kalori lebih efektif dengan kombinasi musik yang energik.
            </p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>45 menit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Pemula - Menengah</span>
              </div>
            </div>
            <router-link to="/kelas/zumba" class="block mt-6 w-full bg-[#2B7A9B] hover:bg-[#1f5a75] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-center">
              Lihat Detail
            </router-link>
          </div>
        </div>

        <!-- Body Combat -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden bg-pink-100">
            <img src="https://images.unsplash.com/photo-1549576490-b0b4831ef60a?w=800&h=600&fit=crop" 
                 alt="Body Combat" 
                 class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Body Combat</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Gerakan dinamis untuk meningkatkan kekuatan otot dengan kombinasi teknik bela diri yang membakar kalori.
            </p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>55 menit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Menengah - Lanjut</span>
              </div>
            </div>
            <router-link to="/kelas/bodycombat" class="block mt-6 w-full bg-[#2B7A9B] hover:bg-[#1f5a75] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-center">
              Lihat Detail
            </router-link>
          </div>
        </div>

        <!-- Senam Hamil -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden bg-blue-50">
            <img src="https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop" 
                 alt="Senam Hamil" 
                 class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Senam Hamil</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Gerakan dinamis untuk menjaga kesehatan ibu hamil dengan gerakan aman dan mempersiapkan proses persalinan.
            </p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>30 menit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Khusus</span>
              </div>
            </div>
            <router-link to="/kelas/senamhamil" class="block mt-6 w-full bg-[#2B7A9B] hover:bg-[#1f5a75] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-center">
              Lihat Detail
            </router-link>
          </div>
        </div>

        <!-- HIIT Training -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden bg-red-50">
            <img src="https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&h=600&fit=crop" 
                 alt="HIIT Training" 
                 class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">HIIT Training</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Gerakan dinamis untuk membakar lemak secara maksimal dengan interval intensitas tinggi dan istirahat singkat.
            </p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>30 menit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Lanjut</span>
              </div>
            </div>
            <router-link to="/kelas/hiit" class="block mt-6 w-full bg-[#2B7A9B] hover:bg-[#1f5a75] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-center">
              Lihat Detail
            </router-link>
          </div>
        </div>

        <!-- Relax & Meditation -->
        <div class="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div class="relative h-64 overflow-hidden bg-green-50">
            <img src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop" 
                 alt="Relax & Meditation" 
                 class="w-full h-full object-cover">
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-3">Relax & Meditation</h3>
            <p class="text-gray-600 text-sm mb-4 leading-relaxed">
              Gerakan dinamis untuk mengurangi stress dan meningkatkan ketenangan pikiran dengan teknik meditasi mendalam.
            </p>
            <div class="space-y-2 text-sm text-gray-600">
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <span>45 menit</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
                <span>Pemula</span>
              </div>
            </div>
            <router-link to="/kelas/meditation" class="block mt-6 w-full bg-[#2B7A9B] hover:bg-[#1f5a75] text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-center">
              Lihat Detail
            </router-link>
          </div>
        </div>

      </div>

      <!-- CTA Section -->
      <div class="mt-20 bg-gradient-to-r from-[#2B7A9B] to-[#3A9BC1] rounded-3xl p-12 text-center text-white relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=400&fit=crop" 
               alt="Background" 
               class="w-full h-full object-cover">
        </div>
        <div class="relative z-10">
          <h2 class="text-3xl font-bold mb-4">Tidak Menemukan Kelas yang Cocok?</h2>
          <p class="text-lg mb-8 text-white/90">Kami punya banyak pilihan jadwal dari program khusus!</p>
          <router-link to="/jadwal" class="bg-white text-[#2B7A9B] font-semibold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            Lihat Jadwal Semua Kelas
          </router-link>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
</script>
