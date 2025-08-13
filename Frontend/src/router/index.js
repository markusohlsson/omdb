import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import MovieDetails from '../pages/MovieDetails.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';

const routes = [
    { path: '/', component: Home, name: 'Home' },
    { path: '/movies/:id', component: MovieDetails, name: 'MovieDetails'},
    { path: '/about', component: About, name: 'About'},
    { path: '/contact', component: Contact, name: 'Contact'}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;