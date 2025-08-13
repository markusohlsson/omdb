import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import MovieDetails from '../pages/MovieDetails.vue';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/movies/:id', component: MovieDetails, name: 'MovieDetails'}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;