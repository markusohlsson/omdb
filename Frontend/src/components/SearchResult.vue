<template>
  <div class="p-6 bg-gray-900 min-h-screen text-gray-200 space-y-6">
    <div class="max-w-xl mx-auto">
      <Loading v-if="searchStore.loading" class="flex justify-center items-center"/>
      <p v-if="searchStore.error" class="text-center text-red-500 font-semibold">
        {{ searchStore.error }}
      </p>

      <p
        v-if="!searchStore.loading && searchStore.results.length === 0 && searchStore.totalResults === 0 && searchStore.hasSearched"
        class="text-center text-gray-400"
      >
        No results found.
      </p>
    </div>

<div class="w-full px-4">
  <div v-if="searchStore.results.length"
       class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-6">
    <Movie
      v-for="movie in searchStore.results"
      :key="movie.imdbID"
      :movie="movie"
      class="w-full rounded-lg overflow-hidden shadow-lg flex flex-col justify-between aspect-[2/3] transition-transform hover:scale-105 cursor-pointer"
      @click="fetchMovie(movie.imdbID)"
    />
  </div>

<div v-if="totalPages > 1" class="flex justify-center items-center mt-10 flex-wrap gap-1 sm:gap-2">
  <button
    :disabled="currentPageNum === 1"
    @click="changePage(1)"
    class="px-2 py-1 sm:px-3 sm:py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
  >
    <ChevronsLeft class="w-4 h-4"/>
  </button>

  <button
    :disabled="currentPageNum === 1"
    @click="changePage(currentPageNum - 1)"
    class="px-2 py-1 sm:px-3 sm:py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
  >
    <ChevronLeft class="w-4 h-4"/>
  </button>

  <template v-for="page in visiblePages" :key="page">
    <button
      @click="changePage(page)"
      :class="[
        'px-2 py-1 sm:px-3 sm:py-2 rounded-md font-semibold transition',
        page === currentPageNum ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-200 hover:bg-gray-600'
      ]"
    >
      {{ page }}
    </button>
  </template>

  <button
    :disabled="currentPageNum === totalPages"
    @click="changePage(currentPageNum + 1)"
    class="px-2 py-1 sm:px-3 sm:py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
  >
    <ChevronRight class="w-4 h-4"/>
  </button>

  <button
    :disabled="currentPageNum === totalPages"
    @click="changePage(totalPages)"
    class="px-2 py-1 sm:px-3 sm:py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition"
  >
    <ChevronsRight class="w-4 h-4"/>
  </button>
</div>
</div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSearchStore } from '../stores/searchStore'
import Movie from '../components/Movie.vue'
import router from '../router'
import Loading from './Loading.vue'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-vue-next'

const searchStore = useSearchStore()
const currentPageNum = computed(() => Number(searchStore.currentPage) || 1)
const hasSearched = computed(()=> searchStore.hasSearched);

const totalPages = computed(() =>
  Math.ceil(searchStore.totalResults / searchStore.itemsPerPage)
)
const currentPage = computed(() => searchStore.currentPage);
const query = computed(() => searchStore.lastQuery);

function changePage(page) {
  if (page < 1 || page > totalPages.value) return
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

const visiblePages = computed(() => {
  const pages = []
  const total = totalPages.value
  let start = Math.max(currentPageNum.value - 2, 1)
  let end = Math.min(start + 4, total)
  start = Math.max(end - 4, 1)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }
  return pages
})
</script>
