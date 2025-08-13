<template>
  <div 
    class="bg-gray-800 rounded-lg shadow-lg flex flex-col items-center transition-transform hover:scale-105 cursor-pointer"
  >
    <!-- Poster -->
    <div class="w-full aspect-[2/3] sm:aspect-[2/2.5] overflow-hidden rounded-t-lg">
      <img 
        class="w-full h-full object-cover" 
        :src="movie.Poster" 
        :alt="movie.Title" 
      />
    </div>

    <!-- Text info -->
    <div class="p-4 text-center w-full">
      <h2 class="text-lg font-semibold text-gray-200 break-words">
        {{ movie.Title }}
      </h2>
      <p class="text-gray-400 text-sm">{{ movie.Year }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  movie: Object
})
</script>
