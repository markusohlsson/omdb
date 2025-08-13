<template>
    <div v-if="searchStore.loading">Loading...</div>
  <div v-if="!searchStore.loading" class="max-w-5xl mx-auto p-6 bg-gray-900 text-gray-200 rounded-lg shadow-lg">
    <h1 class="text-4xl font-extrabold mb-6">{{ selectedMovie.Title }}</h1>

    <div class="flex flex-col md:flex-row gap-8">
      <!-- Poster -->
      <div class="flex-shrink-0 w-full md:w-72 rounded-lg overflow-hidden bg-gray-800 shadow-md h-[450px]">
        <img
          :src="selectedMovie.Poster"
          :alt="selectedMovie.Title"
          class="object-cover w-full h-[450px]"
        />
      </div>

      <!-- Movie Info -->
      <div class="flex flex-col flex-grow space-y-4">
        <!-- Basic Info -->
        <div class="grid grid-cols-2 gap-x-6 gap-y-2 text-gray-300 text-sm md:text-base">
          <p><span class="font-semibold text-gray-400">Year:</span> {{ selectedMovie.Year }}</p>
          <p><span class="font-semibold text-gray-400">Rated:</span> {{ selectedMovie.Rated }}</p>
          <p><span class="font-semibold text-gray-400">Released:</span> {{ selectedMovie.Released }}</p>
          <p><span class="font-semibold text-gray-400">Runtime:</span> {{ selectedMovie.Runtime }}</p>
          <p><span class="font-semibold text-gray-400">Genre:</span> {{ selectedMovie.Genre }}</p>
          <p><span class="font-semibold text-gray-400">Director:</span> {{ selectedMovie.Director }}</p>
          <p><span class="font-semibold text-gray-400">Writer:</span> {{ selectedMovie.Writer }}</p>
          <p><span class="font-semibold text-gray-400">Actors:</span> {{ selectedMovie.Actors }}</p>
          <p><span class="font-semibold text-gray-400">Language:</span> {{ selectedMovie.Language }}</p>
          <p><span class="font-semibold text-gray-400">Country:</span> {{ selectedMovie.Country }}</p>
          <p><span class="font-semibold text-gray-400">Awards:</span> {{ selectedMovie.Awards }}</p>
          <p><span class="font-semibold text-gray-400">Box Office:</span> {{ selectedMovie.BoxOffice }}</p>
          <p><span class="font-semibold text-gray-400">Type:</span> {{ selectedMovie.Type }}</p>
        </div>

        <!-- Plot -->
        <div class="mt-4">
          <h2 class="text-xl font-semibold mb-2">Plot</h2>
          <p class="text-gray-300">{{ selectedMovie.Plot }}</p>
        </div>

        <!-- Ratings -->
        <div>
          <h2 class="text-xl font-semibold mb-2">Ratings</h2>
          <ul class="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
            <li v-for="(rating, index) in selectedMovie.Ratings" :key="index" class="bg-gray-800 p-3 rounded shadow">
              <p class="font-semibold">{{ rating.Source }}</p>
              <p>{{ rating.Value }}</p>
            </li>
          </ul>
        </div>

        <!-- Additional Scores -->
        <div class="grid grid-cols-3 gap-4 text-gray-300 mt-6 text-center">
          <div>
            <p class="font-semibold">Metascore</p>
            <p>{{ selectedMovie.Metascore }}</p>
          </div>
          <div>
            <p class="font-semibold">IMDB Rating</p>
            <p>{{ selectedMovie.imdbRating }}</p>
          </div>
          <div>
            <p class="font-semibold">IMDB Votes</p>
            <p>{{ selectedMovie.imdbVotes }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { useSearchStore } from '../stores/searchStore';

const searchStore = useSearchStore();
const selectedMovie = computed(() => searchStore.selectedMovie)


</script>