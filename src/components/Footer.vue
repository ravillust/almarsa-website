<template>
  <footer class="bg-[#2B7A9B] text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.jpg" alt="Logo" class="h-16 mb-4 bg-white p-2 rounded-lg">
          <p class="text-white-400">
            Almarsa The House - Studio Kebugaran Terbaik di Balikpapan
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-white-400">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-white-400">
                Contact
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-white-400">
                About
              </router-link>
            </li>
            <li>
              <router-link to="/kelas" class="text-white-400">
                Kelas
              </router-link>
            </li>
            <li>
              <router-link to="/jadwal" class="text-white-400">
                Jadwal
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-2 text-white-400">
            <li>Email: almarsa.thehouse@gmail.com</li>
            <li>Phone: +62 821 5858 4258</li>
            <li>Balikpapan, Kalimantan Timur</li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 text-center text-gray-400">
      </div>
    </div>
  </footer>
</template>