<template>
  <div class="space-y-12 p-4 bg-gray-900 text-gray-200 min-h-screen">
    <section class="relative text-center px-4 sm:px-12 max-w-3xl mx-auto flex flex-col items-center justify-center">
      <h1 class="text-4xl sm:text-6xl font-bold mb-4 leading-tight">
        Discover Movies Instantly
      </h1>
      <p class="text-gray-400 text-lg sm:text-xl mb-6">
        Search for movies, view details, and explore film data powered by the 
        <a href="https://www.omdbapi.com/" target="_blank" class="text-indigo-400 underline">OMDB API</a>.
      </p>

      <div class="w-full sm:w-auto">
        <Search />
      </div>

      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-gray-400 text-sm sm:text-base">
        <div>🔹 Fast movie search</div>
        <div>🔹 Detailed info by ID</div>
        <div>🔹 Fully responsive UI</div>
      </div>
    </section>

    <div class="max-w-[90rem] mx-auto px-4">
      <SearchResult />
    </div>
  </div>
</template>

<script setup>
import Search from '../components/Search.vue';
import SearchResult from '../components/SearchResult.vue';
</script>
