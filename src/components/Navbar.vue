<template>
  <nav class="bg-white shadow fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Logo dan Brand -->
        <div class="flex items-center gap-3">
          <img src="/logo.jpg" alt="Logo" class="h-10">
        </div>

        <!-- Desktop Menu -->
        <div class="hidden lg:flex items-center gap-10">
          <router-link to="/" class="flex items-center px-3 py-2 text-gray-700 hover:text-[#2B7A9B] transition-colors">
            <Home class="w-4 h-4 mr-2 text-gray-600" />
            <span>Home</span>
          </router-link>
          <router-link to="/about" class="flex items-center px-3 py-2 text-gray-700 hover:text-[#2B7A9B] transition-colors">
            <Info class="w-4 h-4 mr-2 text-gray-600" />
            <span>About</span>
          </router-link>
          <router-link to="/kelas" class="flex items-center px-3 py-2 text-gray-700 hover:text-[#2B7A9B] transition-colors">
            <Book class="w-4 h-4 mr-2 text-gray-600" />
            <span>Kelas</span>
          </router-link>
          <router-link to="/jadwal" class="flex items-center px-3 py-2 text-gray-700 hover:text-[#2B7A9B] transition-colors">
            <span>Jadwal</span>
          </router-link>
          <router-link to="/contact" class="flex items-center px-3 py-2 text-gray-700 hover:text-[#2B7A9B] transition-colors">
            <Mail class="w-4 h-4 mr-2 text-gray-600" />
            <span>Contact</span>
          </router-link>
          <router-link to="/saya" class="flex items-center px-3 py-2 text-gray-700 hover:text-[#2B7A9B] transition-colors">
            <Mail class="w-4 h-4 mr-2 text-gray-600" />
            <span>Saya</span>
          </router-link>
        </div>

        <!-- Mobile/Tablet Menu Button -->
        <button v-if="!mobileMenuOpen" @click="mobileMenuOpen = true" class="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#2B7A9B] focus:outline-none">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      <!-- Mobile/Tablet Menu -->
      <div v-show="mobileMenuOpen" class="lg:hidden pb-4 border-t mt-2 relative">
        <!-- Tombol close di pojok kanan atas menu mobile -->
        <button @click="mobileMenuOpen = false" class="fixed top-6 right-8 text-2xl text-gray-700 hover:text-[#2B7A9B] z-50">
          &times;
        </button>
        <hr class="mb-6">
        <router-link @click="mobileMenuOpen = false" to="/" class="block px-6 py-4 text-lg text-gray-700 hover:bg-gray-50 hover:text-[#2B7A9B] transition-colors">Home</router-link>
        <router-link @click="mobileMenuOpen = false" to="/about" class="block px-6 py-4 text-lg text-gray-700 hover:bg-gray-50 hover:text-[#2B7A9B] transition-colors">About</router-link>
        <router-link @click="mobileMenuOpen = false" to="/kelas" class="block px-6 py-4 text-lg text-gray-700 hover:bg-gray-50 hover:text-[#2B7A9B] transition-colors">Kelas</router-link>
        <router-link @click="mobileMenuOpen = false" to="/jadwal" class="block px-6 py-4 text-lg text-gray-700 hover:bg-gray-50 hover:text-[#2B7A9B] transition-colors">Jadwal</router-link>
        <router-link @click="mobileMenuOpen = false" to="/contact" class="block px-6 py-4 text-lg text-gray-700 hover:bg-gray-50 hover:text-[#2B7A9B] transition-colors">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>