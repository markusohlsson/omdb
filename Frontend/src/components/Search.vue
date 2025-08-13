<template>
  <div class="flex max-w-md mx-auto relative">
    <!-- Input field with clear button -->
    <div class="relative flex-grow">
      <input
        type="text"
        v-model="query"
        @keyup.enter="search"
        placeholder="Type to search..."
        class="w-full px-4 py-2 pr-10 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
      />

      <!-- Clear button inside input -->
      <button
        v-if="query"
        @click="clearInput"
        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 focus:outline-none"
      >
        <X class="w-4 h-4"/>
      </button>
    </div>

    <!-- Search button -->
    <button
      @click="search"
      class="px-5 py-2 bg-blue-600 text-white font-semibold rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Search
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useSearchStore } from '../stores/searchStore'
import { useRouter, useRoute } from 'vue-router'
import { X } from 'lucide-vue-next'

const router = useRouter()
const route = useRoute()
const query = ref('')
const searchStore = useSearchStore()
const page = ref(1)

function search() {
  if (query.value.trim() === '') return

  router.push({
    path: '/',
    query: { search: query.value, page: page.value },
  })
  searchStore.fetchResults(query.value, page.value)
}

function clearInput() {
  query.value = ''
}

onMounted(() => {
  if (route.query.search) {
    query.value = route.query.search
    page.value = route.query.page
    search()
  }
})
</script>
