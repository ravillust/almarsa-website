<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <img src="/logo.jpg" alt="Logo" class="h-10 mb-4">
          <p class="text-gray-400">
            Sehat bersama ALMARSA - Solusi Kesehatan Terpercaya untuk muslimah.
          </p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-400">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400">
                Contact
              </router-link>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Info</h4>
          <ul class="space-y-2 text-gray-400">
            <li>Email: info@mywebsite.com</li>
            <li>Phone: +62 812 3456 7890</li>
            <li>Samarinda, Kalimantan Timur</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
      </div>
    </div>
  </footer>
</template>