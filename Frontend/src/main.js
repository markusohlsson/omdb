import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { createPinia } from 'pinia';

const pinia = createPinia();
AOS.init({
    duration: 800,
    offset: 150,
    once: false,
    mirror: true,
})

createApp(App).use(router).use(pinia).mount('#app')
