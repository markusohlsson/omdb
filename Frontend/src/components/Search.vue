<template>
  <div class="flex max-w-md mx-auto space-x-2">
    <input
      type="text"
      v-model="query"
      @keyup.enter="search"
      placeholder="Type to search..."
      class="flex-grow px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
    />
    <button
      @click="search"
      class="px-5 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Search
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useSearchStore } from '../stores/searchStore'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const query = ref('')
const searchStore = useSearchStore()
const page = ref(1)

function search() {
  if (query.value.trim() === '') return

  router.push({
    path: '/',
    query: { search: query.value, page: page.value},
  })
  searchStore.fetchResults(query.value, page.value)
}

onMounted(() => {
  if (route.query.search) {
    query.value = route.query.search
    page.value = route.query.page
    search()
  }
})
</script>

