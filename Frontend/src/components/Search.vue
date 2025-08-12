<template>
  <input
    type="text"
    v-model="query"
    @keyup.enter="search"
    placeholder="Type to search..."
  />
  <button @click="search">Search</button>
</template>

<script setup>
import { ref } from 'vue'
import { useSearchStore } from '../stores/searchStore'

const query = ref('')
const searchStore = useSearchStore()

function search() {
  if (query.value.trim() === '') return
  searchStore.fetchResults(query.value)
}
</script>
