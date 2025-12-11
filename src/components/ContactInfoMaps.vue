<template>
  <section class="py-12 md:py-16 px-4 bg-gradient-to-b from-white to-gray-50 -mt-12 md:-mt-16 relative z-10">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
        
        <!-- Contact Form -->
        <div class="bg-white rounded-3xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100">
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
            Kirim Pesan
          </h2>
          
          <!-- Success/Error Message -->
          <div v-if="statusMessage" 
               :class="[
                 'mb-4 p-3 md:p-4 rounded-xl text-sm md:text-base',
                 statusType === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
               ]">
            {{ statusMessage }}
          </div>
          
          <form @submit.prevent="sendEmail" class="space-y-4 md:space-y-5">
            <div>
              <label class="block text-xs md:text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
              <input 
                v-model="formData.name"
                type="text" 
                placeholder="Masukkan nama lengkap anda"
                required
                class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2B7A9B] focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-gray-700 mb-2">Email</label>
              <input 
                v-model="formData.email"
                type="email" 
                placeholder="namaemail@gmail.com"
                required
                class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2B7A9B] focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-gray-700 mb-2">Nomor Telepon</label>
              <input 
                v-model="formData.phone"
                type="tel" 
                placeholder="081xxxxxxxxx"
                required
                class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2B7A9B] focus:border-transparent transition-all outline-none"
              />
            </div>

            <div>
              <label class="block text-xs md:text-sm font-medium text-gray-700 mb-2">Pesan</label>
              <textarea 
                v-model="formData.message"
                rows="4"
                placeholder="Tulis pesan anda disini"
                required
                class="w-full px-3 md:px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#2B7A9B] focus:border-transparent transition-all outline-none resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              :disabled="isLoading"
              :class="[
                'w-full font-semibold py-3 md:py-3.5 px-4 md:px-6 text-sm md:text-base rounded-xl transition-all duration-300 shadow-lg',
                isLoading 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#2B7A9B] hover:bg-[#1f5a75] text-white hover:shadow-xl hover:scale-[1.02]'
              ]"
            >
              {{ isLoading ? 'Mengirim...' : 'Kirim Pesan' }}
            </button>
          </form>
        </div>

        <!-- Contact Info -->
        <div>
          <h2 class="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">
            Informasi Kontak
          </h2>
          
          <div class="space-y-5 md:space-y-6">
            <!-- Address -->
            <div class="flex gap-3 md:gap-4 items-start group">
              <div class="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#2B7A9B] to-[#3A9BC1] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base md:text-lg font-semibold text-gray-800 mb-1">Alamat Studio</h3>
                <p class="text-sm md:text-base text-gray-600 leading-relaxed">
                  Perumahan Blok BR6 Jl. Utama WIKA No.11, Gn. Samarinda, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76114
                </p>
              </div>
            </div>

            <!-- Phone -->
            <div class="flex gap-4 items-start group">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2B7A9B] to-[#3A9BC1] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-800 mb-1">Telepon</h3>
                <p class="text-gray-600">+6812-3576-6581</p>
              </div>
            </div>

            <!-- Email -->
            <div class="flex gap-4 items-start group">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2B7A9B] to-[#3A9BC1] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-800 mb-1">Email</h3>
                <p class="text-gray-600">almarsa.thehouse@gmail.com</p>
              </div>
            </div>

            <!-- WhatsApp -->
            <div class="flex gap-4 items-start group">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-800 mb-1">WhatsApp</h3>
                <p class="text-gray-600">+62821-5858-4258</p>
              </div>
            </div>

            <!-- Operating Hours -->
            <div class="flex gap-4 items-start group">
              <div class="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#2B7A9B] to-[#3A9BC1] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg font-semibold text-gray-800 mb-1">Jam Operasional</h3>
                <p class="text-gray-600">
                  Senin - Jumat: 08.00 - 16.00<br>
                  Sabtu: 07:00 - 14:00
                </p>
              </div>
            </div>
          </div>

          <!-- Social Media -->
          <div class="mt-8 pt-8 border-t border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800 mb-4">Ikuti Kami</h3>
            <div class="flex gap-4">
              <a href="#" class="w-12 h-12 bg-gradient-to-br from-[#2B7A9B] to-[#3A9BC1] rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Map Section -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div class="p-6 bg-gradient-to-r from-[#2B7A9B] to-[#3A9BC1]">
          <h2 class="text-2xl font-bold text-white">Lokasi Kami</h2>
        </div>
        <div class="relative h-[500px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8936560188904!2d116.86599507957155!3d-1.2335634955437058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1470048f1e699%3A0x279d6e0921df426a!2sAlmarsa%20The%20House!5e0!3m2!1sid!2sid!4v1763098086828!5m2!1sid!2sid" 
            class="w-full h-full border-0" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Form data
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

// Status
const isLoading = ref(false)
const statusMessage = ref('')
const statusType = ref('')

// Send to WhatsApp
const sendEmail = () => {
  // Validasi form
  if (!formData.value.name || !formData.value.email || !formData.value.phone || !formData.value.message) {
    statusMessage.value = 'Mohon isi semua field terlebih dahulu'
    statusType.value = 'error'
    setTimeout(() => {
      statusMessage.value = ''
    }, 3000)
    return
  }

  // Format pesan untuk WhatsApp
  const message = `*Pesan Baru dari Website*%0A%0A` +
    `*Nama:* ${formData.value.name}%0A` +
    `*Email:* ${formData.value.email}%0A` +
    `*Telepon:* ${formData.value.phone}%0A%0A` +
    `*Pesan:*%0A${formData.value.message}`

  // Redirect ke WhatsApp
  const whatsappUrl = `https://wa.me/6282158584258?text=${message}`
  window.open(whatsappUrl, '_blank')

  // Reset form dan tampilkan success message
  statusMessage.value = 'Mengarahkan ke WhatsApp...'
  statusType.value = 'success'
  
  setTimeout(() => {
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    statusMessage.value = ''
  }, 2000)
}
</script>