<template>
  <div>
    <h2>{{ movie.Title }} - {{ movie.Year }}</h2>
    <div>
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: Object,
})
</script>