<template>
  <div class="max-w-5xl mx-auto p-6 bg-gray-900 min-h-screen text-gray-200">
    <p v-if="searchStore.loading" class="text-center text-gray-400">Loading...</p>

    <p v-if="searchStore.error" class="text-center text-red-500 font-semibold">
      {{ searchStore.error }}
    </p>

    <p
      v-if="!searchStore.loading && searchStore.results.length === 0 && searchStore.totalResults === 0"
      class="text-center text-gray-400"
    >
      No results found.
    </p>

    <div v-if="searchStore.results.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-6">
      <Movie
        v-for="movie in searchStore.results"
        :key="movie.imdbID"
        :movie="movie"
        class="bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col justify-between h-[400px] transition-transform hover:scale-105 cursor-pointer"
        @click="fetchMovie(movie.imdbID)"
        />
    </div>

    <div
      v-if="totalPages > 1"
      class="flex justify-center items-center space-x-6 mt-10"
    >
    <button
      :disabled="currentPageNum === 1"
      @click="changePage(currentPageNum - 1)"
      class="px-5 py-2 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
    >
      Prev
    </button>

    <span class="text-gray-400 font-medium">
      Page {{ currentPageNum }} of {{ totalPages }}
    </span>

    <button
      :disabled="currentPageNum === totalPages"
      @click="changePage(currentPageNum + 1)"
      class="px-5 py-2 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
    >
      Next
    </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSearchStore } from '../stores/searchStore'
import Movie from '../components/Movie.vue'
import router from '../router'

const searchStore = useSearchStore()
const currentPageNum = computed(() => Number(searchStore.currentPage) || 1)

const totalPages = computed(() =>
  Math.ceil(searchStore.totalResults / searchStore.itemsPerPage)
)
const currentPage = computed(() => searchStore.currentPage);
const query = computed(() => searchStore.lastQuery);

function changePage(page) {
  router.push({
    path: '/',
    query: { search: query.value, page: page}
  })
  searchStore.fetchResults(searchStore.lastQuery, page)
}
function fetchMovie(id) {
  searchStore.fetchMovie(id)
  router.push({ path: `/movies/${id}` });
}
</script>
