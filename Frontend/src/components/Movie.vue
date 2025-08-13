<template>
  <div class="movie">
    <h2 class="movie-title">{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <div class="poster-container">
      <img class="poster" :src="movie.Poster" :alt="movie.Title" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: Object,
})
</script>

<style>
</style>