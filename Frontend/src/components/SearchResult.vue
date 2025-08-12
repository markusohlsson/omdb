<template>
    <div class="movies">
        <template v-for="movie in searchStore.results">
            <Movie :movie="movie" class="movie"/>
        </template>
    </div>
</template>

<script setup>
import { useSearchStore } from '../stores/searchStore'
import Movie from '../components/Movie.vue';
const searchStore = useSearchStore()
</script>

<style scoped>
.movies {
    display: flex;
    flex-wrap: wrap;
    .movie {
        width:250px;
        margin:50px;
    }
}
</style>