<template>
  <nav class="bg-gray-900 text-gray-200 p-4 shadow-md">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div class="text-xl font-bold cursor-pointer">
        <a href="/">OpenMovieDatabase</a>
      </div>

      <ul class="hidden md:flex space-x-8">
        <li><a href="/" class="hover:text-blue-400 transition">Home</a></li>
        <li><a href="/about" class="hover:text-blue-400 transition">About</a></li>
        <li><a href="/contact" class="hover:text-blue-400 transition">Contact</a></li>
      </ul>

      <button @click="isOpen = !isOpen" class="md:hidden focus:outline-none">
        <svg
          v-if="!isOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16">
          </path>
        </svg>
        <svg
          v-else
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12">
          </path>
        </svg>
      </button>
    </div>

    <ul
      v-show="isOpen"
      class="md:hidden mt-4 space-y-2"
    >
      <li><a href="/" class="block px-4 py-2 hover:bg-gray-700 rounded">Home</a></li>
      <li><a href="/about" class="block px-4 py-2 hover:bg-gray-700 rounded">About</a></li>
      <li><a href="/contact" class="block px-4 py-2 hover:bg-gray-700 rounded">Contact</a></li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
