<template>
  <section class="min-h-screen bg-gradient-to-b from-blue-50 via-white to-teal-50 pt-0 pb-20 px-4 relative overflow-hidden -mt-16">
    <!-- Decorative Elements -->
    <div class="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
    <div class="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Filter Section -->
      <div class="bg-white rounded-2xl shadow-lg p-6 mb-8 mt-8">
        <div class="flex flex-col md:flex-row gap-4 items-center">
          <div class="text-gray-700 font-semibold">Filter:</div>
          <div class="flex flex-wrap gap-3">
            <button 
              @click="filterDay = 'all'"
              :class="filterDay === 'all' ? 'bg-[#2B7A9B] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Semua Hari
            </button>
            <button 
              v-for="day in days" 
              :key="day.value"
              @click="filterDay = day.value"
              :class="filterDay === day.value ? 'bg-[#2B7A9B] text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {{ day.label }}
            </button>
          </div>
        </div>

        <div class="flex flex-col md:flex-row gap-4 items-center mt-4">
          <div class="text-gray-700 font-semibold">Pilih Kelas:</div>
          <div class="flex flex-wrap gap-3">
            <button 
              @click="filterClass = 'all'"
              :class="filterClass === 'all' ? 'bg-lime-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-6 py-2 rounded-full font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              Semua Kelas
            </button>
            <button 
              v-for="cls in classes" 
              :key="cls"
              @click="filterClass = cls"
              :class="filterClass === cls ? 'bg-lime-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
              class="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md"
            >
              {{ cls }}
            </button>
          </div>
        </div>
      </div>

      <!-- Schedule Table -->
      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full min-w-[600px]">
            <thead>
              <tr class="bg-gradient-to-r from-[#2B7A9B] to-[#3A9BC1] text-white">
                <th class="py-3 md:py-4 px-3 md:px-6 text-left font-semibold text-xs md:text-base">Waktu</th>
                <th v-if="shouldShowDay('senin')" class="py-3 md:py-4 px-3 md:px-6 text-left font-semibold text-xs md:text-base">Senin</th>
                <th v-if="shouldShowDay('selasa')" class="py-3 md:py-4 px-3 md:px-6 text-left font-semibold text-xs md:text-base">Selasa</th>
                <th v-if="shouldShowDay('rabu')" class="py-3 md:py-4 px-3 md:px-6 text-left font-semibold text-xs md:text-base">Rabu</th>
                <th v-if="shouldShowDay('kamis')" class="py-3 md:py-4 px-3 md:px-6 text-left font-semibold text-xs md:text-base">Kamis</th>
                <th v-if="shouldShowDay('jumat')" class="py-3 md:py-4 px-3 md:px-6 text-left font-semibold text-xs md:text-base">Jumat</th>
                <th v-if="shouldShowDay('sabtu')" class="py-3 md:py-4 px-3 md:px-6 text-left font-semibold text-xs md:text-base">Sabtu</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(time, index) in filteredSchedule" :key="index" class="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td class="py-3 md:py-4 px-3 md:px-6 font-semibold text-gray-700 bg-gray-50 text-xs md:text-base whitespace-nowrap">
                  {{ time.time }}
                </td>
                <td v-if="shouldShowDay('senin')" class="py-3 md:py-4 px-3 md:px-6">
                  <div v-if="shouldShowClass(time.senin)" 
                       :class="getClassColor(time.senin.status)"
                       class="rounded-xl p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer min-w-[120px]"
                  >
                    <div class="font-semibold text-xs md:text-sm mb-1">{{ time.senin.name }}</div>
                    <div class="text-xs opacity-90">{{ time.senin.instructor }}</div>
                    <div class="flex items-center gap-1 mt-2">
                      <span :class="getStatusBadgeColor(time.senin.status)" 
                            class="px-2 py-0.5 rounded-full text-xs font-medium">
                        {{ time.senin.status }}
                      </span>
                    </div>
                  </div>
                  <div v-else class="text-gray-300 text-center text-xs md:text-sm">-</div>
                </td>
                <td v-if="shouldShowDay('selasa')" class="py-3 md:py-4 px-3 md:px-6">
                  <div v-if="shouldShowClass(time.selasa)" 
                       :class="getClassColor(time.selasa.status)"
                       class="rounded-xl p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer min-w-[120px]"
                  >
                    <div class="font-semibold text-xs md:text-sm mb-1">{{ time.selasa.name }}</div>
                    <div class="text-xs opacity-90">{{ time.selasa.instructor }}</div>
                    <div class="flex items-center gap-1 mt-2">
                      <span :class="getStatusBadgeColor(time.selasa.status)" 
                            class="px-2 py-0.5 rounded-full text-xs font-medium">
                        {{ time.selasa.status }}
                      </span>
                    </div>
                  </div>
                  <div v-else class="text-gray-300 text-center text-xs md:text-sm">-</div>
                </td>
                <td v-if="shouldShowDay('rabu')" class="py-3 md:py-4 px-3 md:px-6">
                  <div v-if="shouldShowClass(time.rabu)" 
                       :class="getClassColor(time.rabu.status)"
                       class="rounded-xl p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer min-w-[120px]"
                  >
                    <div class="font-semibold text-xs md:text-sm mb-1">{{ time.rabu.name }}</div>
                    <div class="text-xs opacity-90">{{ time.rabu.instructor }}</div>
                    <div class="flex items-center gap-1 mt-2">
                      <span :class="getStatusBadgeColor(time.rabu.status)" 
                            class="px-2 py-0.5 rounded-full text-xs font-medium">
                        {{ time.rabu.status }}
                      </span>
                    </div>
                  </div>
                  <div v-else class="text-gray-300 text-center text-xs md:text-sm">-</div>
                </td>
                <td v-if="shouldShowDay('kamis')" class="py-3 md:py-4 px-3 md:px-6">
                  <div v-if="shouldShowClass(time.kamis)" 
                       :class="getClassColor(time.kamis.status)"
                       class="rounded-xl p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer min-w-[120px]"
                  >
                    <div class="font-semibold text-xs md:text-sm mb-1">{{ time.kamis.name }}</div>
                    <div class="text-xs opacity-90">{{ time.kamis.instructor }}</div>
                    <div class="flex items-center gap-1 mt-2">
                      <span :class="getStatusBadgeColor(time.kamis.status)" 
                            class="px-2 py-0.5 rounded-full text-xs font-medium">
                        {{ time.kamis.status }}
                      </span>
                    </div>
                  </div>
                  <div v-else class="text-gray-300 text-center text-xs md:text-sm">-</div>
                </td>
                <td v-if="shouldShowDay('jumat')" class="py-3 md:py-4 px-3 md:px-6">
                  <div v-if="shouldShowClass(time.jumat)" 
                       :class="getClassColor(time.jumat.status)"
                       class="rounded-xl p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer min-w-[120px]"
                  >
                    <div class="font-semibold text-xs md:text-sm mb-1">{{ time.jumat.name }}</div>
                    <div class="text-xs opacity-90">{{ time.jumat.instructor }}</div>
                    <div class="flex items-center gap-1 mt-2">
                      <span :class="getStatusBadgeColor(time.jumat.status)" 
                            class="px-2 py-0.5 rounded-full text-xs font-medium">
                        {{ time.jumat.status }}
                      </span>
                    </div>
                  </div>
                  <div v-else class="text-gray-300 text-center text-xs md:text-sm">-</div>
                </td>
                <td v-if="shouldShowDay('sabtu')" class="py-3 md:py-4 px-3 md:px-6">
                  <div v-if="shouldShowClass(time.sabtu)" 
                       :class="getClassColor(time.sabtu.status)"
                       class="rounded-xl p-2 md:p-3 transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer min-w-[120px]"
                  >
                    <div class="font-semibold text-xs md:text-sm mb-1">{{ time.sabtu.name }}</div>
                    <div class="text-xs opacity-90">{{ time.sabtu.instructor }}</div>
                    <div class="flex items-center gap-1 mt-2">
                      <span :class="getStatusBadgeColor(time.sabtu.status)" 
                            class="px-2 py-0.5 rounded-full text-xs font-medium">
                        {{ time.sabtu.status }}
                      </span>
                    </div>
                  </div>
                  <div v-else class="text-gray-300 text-center text-xs md:text-sm">-</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Legend -->
      <div class="mt-8 bg-white rounded-2xl shadow-lg p-6">
        <h3 class="font-semibold text-gray-800 mb-4">Keterangan:</h3>
        <div class="flex flex-wrap gap-4">
          <div class="flex items-center gap-2">
            <div class="w-4 h-4 rounded-full bg-green-500"></div>
            <span class="text-sm text-gray-700">Tersedia</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-4 h-4 rounded-full bg-red-500"></div>
            <span class="text-sm text-gray-700">Penuh</span>
          </div>
          <div class="flex items-center gap-2">
            <div class="w-4 h-4 rounded-full bg-gray-400"></div>
            <span class="text-sm text-gray-700">Tidak Ada Kelas</span>
          </div>
        </div>
      </div>

      <!-- WhatsApp Booking CTA -->
      <div class="mt-12 bg-gradient-to-r from-lime-50 to-teal-50 rounded-3xl shadow-xl p-8 border-2 border-lime-200">
        <div class="text-center max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-800 mb-3">
            Sudah menemukan jadwal yang cocok?
          </h3>
          <p class="text-gray-600 mb-6">
            Booking sekarang via WhatsApp!
          </p>
          <a 
            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20booking%20kelas" 
            target="_blank"
            class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Booking via WhatsApp
          </a>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const filterDay = ref('all')
const filterClass = ref('all')

const days = [
  { label: 'Senin', value: 'senin' },
  { label: 'Selasa', value: 'selasa' },
  { label: 'Rabu', value: 'rabu' },
  { label: 'Kamis', value: 'kamis' },
  { label: 'Jumat', value: 'jumat' },
  { label: 'Sabtu', value: 'sabtu' }
]

const classes = ['Zumba', 'Aerobik', 'Yoga', 'Pilates', 'Body Combat', 'HIIT', 'Senam Hamil', 'Relax & Meditation']

const schedule = [
  {
    time: '06:00 - 07:00',
    senin: { name: 'Yoga', instructor: 'Mira Kusuma', status: 'Tersedia' },
    rabu: { name: 'Yoga', instructor: 'Mira Kusuma', status: 'Tersedia' },
    jumat: { name: 'Yoga', instructor: 'Dian Permata', status: 'Tersedia' },
    sabtu: { name: 'Relax & Meditation', instructor: 'Sari Lestari', status: 'Tersedia' }
  },
  {
    time: '07:00 - 08:00',
    senin: { name: 'Aerobik', instructor: 'Fitri Handayani', status: 'Penuh' },
    selasa: { name: 'HIIT Training', instructor: 'Rina Wijaya', status: 'Tersedia' },
    kamis: { name: 'Aerobik', instructor: 'Fitri Handayani', status: 'Tersedia' },
    sabtu: { name: 'Zumba', instructor: 'Luna Kartika', status: 'Penuh' }
  },
  {
    time: '08:00 - 09:00',
    senin: { name: 'Zumba', instructor: 'Luna Kartika', status: 'Tersedia' },
    selasa: { name: 'Pilates', instructor: 'Maya Anggraini', status: 'Tersedia' },
    rabu: { name: 'Body Combat', instructor: 'Tina Pratiwi', status: 'Penuh' },
    kamis: { name: 'Yoga', instructor: 'Dian Permata', status: 'Tersedia' },
    jumat: { name: 'Zumba', instructor: 'Luna Kartika', status: 'Tersedia' }
  },
  {
    time: '09:00 - 10:00',
    selasa: { name: 'Senam Hamil', instructor: 'Dewi Kusumawati', status: 'Tersedia' },
    rabu: { name: 'Aerobik', instructor: 'Fitri Handayani', status: 'Tersedia' },
    kamis: { name: 'Senam Hamil', instructor: 'Dewi Kusumawati', status: 'Tersedia' },
    sabtu: { name: 'Pilates', instructor: 'Maya Anggraini', status: 'Penuh' }
  },
  {
    time: '10:00 - 11:00',
    senin: { name: 'Pilates', instructor: 'Maya Anggraini', status: 'Tersedia' },
    selasa: { name: 'Body Combat', instructor: 'Tina Pratiwi', status: 'Tersedia' },
    rabu: { name: 'Zumba', instructor: 'Luna Kartika', status: 'Penuh' },
    kamis: { name: 'HIIT Training', instructor: 'Rina Wijaya', status: 'Tersedia' },
    jumat: { name: 'Aerobik', instructor: 'Fitri Handayani', status: 'Tersedia' },
    sabtu: { name: 'Yoga', instructor: 'Mira Kusuma', status: 'Tersedia' }
  },
  {
    time: '16:00 - 17:00',
    senin: { name: 'Body Combat', instructor: 'Tina Pratiwi', status: 'Tersedia' },
    selasa: { name: 'Yoga', instructor: 'Mira Kusuma', status: 'Penuh' },
    rabu: { name: 'HIIT Training', instructor: 'Rina Wijaya', status: 'Tersedia' },
    kamis: { name: 'Zumba', instructor: 'Luna Kartika', status: 'Tersedia' },
    jumat: { name: 'Pilates', instructor: 'Maya Anggraini', status: 'Tersedia' },
    sabtu: { name: 'Aerobik', instructor: 'Fitri Handayani', status: 'Tersedia' }
  },
  {
    time: '17:00 - 18:00',
    senin: { name: 'Yoga', instructor: 'Dian Permata', status: 'Tersedia' },
    selasa: { name: 'Aerobik', instructor: 'Fitri Handayani', status: 'Tersedia' },
    rabu: { name: 'Body Combat', instructor: 'Tina Pratiwi', status: 'Penuh' },
    kamis: { name: 'Pilates', instructor: 'Maya Anggraini', status: 'Tersedia' },
    jumat: { name: 'Zumba', instructor: 'Luna Kartika', status: 'Penuh' },
    sabtu: { name: 'Relax & Meditation', instructor: 'Sari Lestari', status: 'Tersedia' }
  },
  {
    time: '18:00 - 19:00',
    senin: { name: 'Zumba', instructor: 'Luna Kartika', status: 'Penuh' },
    selasa: { name: 'HIIT Training', instructor: 'Rina Wijaya', status: 'Tersedia' },
    rabu: { name: 'Yoga', instructor: 'Mira Kusuma', status: 'Tersedia' },
    kamis: { name: 'Body Combat', instructor: 'Tina Pratiwi', status: 'Tersedia' },
    jumat: { name: 'Aerobik', instructor: 'Fitri Handayani', status: 'Tersedia' }
  },
  {
    time: '19:00 - 20:00',
    senin: { name: 'Relax & Meditation', instructor: 'Sari Lestari', status: 'Tersedia' },
    rabu: { name: 'Pilates', instructor: 'Maya Anggraini', status: 'Tersedia' },
    jumat: { name: 'Yoga', instructor: 'Dian Permata', status: 'Penuh' }
  }
]

const filteredSchedule = computed(() => {
  return schedule.filter(timeSlot => {
    const dayKeys = filterDay.value === 'all' 
      ? ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu']
      : [filterDay.value]

    // Check if this time slot has any class that matches the filters
    return dayKeys.some(day => {
      const classData = timeSlot[day]
      if (!classData) return false
      
      if (filterClass.value === 'all') return true
      return classData.name === filterClass.value
    })
  })
})

const shouldShowDay = (day) => {
  return filterDay.value === 'all' || filterDay.value === day
}

const shouldShowClass = (classData) => {
  if (!classData) return false
  if (filterClass.value === 'all') return true
  return classData.name === filterClass.value
}

const getClassColor = (status) => {
  if (status === 'Tersedia') {
    return 'bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-300 text-green-800'
  } else if (status === 'Penuh') {
    return 'bg-gradient-to-br from-red-100 to-red-200 border-2 border-red-300 text-red-800'
  }
  return 'bg-gray-100'
}

const getStatusBadgeColor = (status) => {
  if (status === 'Tersedia') {
    return 'bg-green-500 text-white'
  } else if (status === 'Penuh') {
    return 'bg-red-500 text-white'
  }
  return 'bg-gray-400 text-white'
}
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #2B7A9B;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #1f5a75;
}
</style>
