<template>
  <nav class="bg-white shadow fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <img src="/logo.jpg" alt="Logo" class="h-10">
        </div>
        
        <div class="flex items-center space-x-8">
          <router-link to="/" class="px-3 py-2 text-gray-700">
            Home
          </router-link>
          <router-link to="/contact" class="px-3 py-2 text-gray-700">
            Contact
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
</script>