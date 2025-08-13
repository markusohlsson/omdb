<template>
  <div class="max-w-5xl mx-auto p-6 bg-gray-900 text-gray-200 space-y-10">
    
    <section>
      <h1 class="text-3xl font-bold text-primary mb-4 flex items-center gap-2">
        <Film class="w-6 h-6"/> About This Project
      </h1>
      <p class="leading-relaxed">
        This project is a full-stack web application integrating the 
        <a 
          href="https://www.omdbapi.com/" 
          target="_blank" 
          class="text-accent hover:underline"
        >
          OMDB API
        </a> 
        to deliver movie data through both client-facing and backend API endpoints.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-primary mb-3 flex items-center gap-2">
        <Database class="w-5 h-5"/> Backend (Node.js + Express)
      </h2>
      <p class="leading-relaxed text-gray-300">
        The backend is built with <span class="font-medium text-white">Express 5</span>, handling RESTful endpoints 
        that wrap OMDB’s API for structured access. It uses Axios for external API requests, dotenv for environment 
        configuration, CORS for cross-origin support, and express-rate-limit combined with node-cache to optimize 
        performance and reduce redundant calls to OMDB. Development uses <span class="font-medium">nodemon</span> 
        for automatic server restarts.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-primary mb-3 flex items-center gap-2">
        <Cpu class="w-5 h-5"/> Frontend (Vue 3 + Vite)
      </h2>
      <p class="leading-relaxed text-gray-300">
        The frontend is a Vue 3 single-page application using Vue Router for navigation and Pinia for state management. 
        Axios is used for seamless communication with the backend endpoints. Styling is handled entirely with Tailwind CSS, 
        while lucide-vue-next provides scalable SVG icons. The application is built and served with Vite, ensuring fast 
        development and optimized production builds.
      </p>
    </section>

    <section>
      <h2 class="text-2xl font-semibold text-primary mb-3 flex items-center gap-2">
        <Zap class="w-5 h-5"/> Core Functionality
      </h2>
      <ul class="list-disc pl-6 space-y-2 text-gray-300">
        <li>Fetch and display movie details from OMDB via custom backend endpoints.</li>
        <li>Handle searches, movie details by ID, and other tailored API routes.</li>
        <li>Cache frequent requests to improve performance and limit API usage.</li>
        <li>Fully responsive UI with modern design and accessible layout.</li>
      </ul>
    </section>

  </div>
</template>

<script setup>
import { Film, Database, Cpu, Zap } from 'lucide-vue-next'
</script>
