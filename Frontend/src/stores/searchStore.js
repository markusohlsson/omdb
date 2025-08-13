import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE = 'https://omdb-lgm1.onrender.com/api';

export const useSearchStore = defineStore('search', {
  state: () => ({
    results: [],
    totalResults: 0,
    loading: false,
    error: null,
    currentPage: 1,
    itemsPerPage: 10,
    lastQuery: '',
    selectedMovie: null,
    hasSearched: false,
  }),
  actions: {
    async fetchResults(query, page = 1) {
      this.loading = true
      this.error = null
      this.currentPage = page
      this.lastQuery = query
      this.hasSearched = true
      try {
        const response = await axios.get(`${API_BASE}/search`, {
          params: { query, page }
        })

        this.results = response.data.Search || []
        this.totalResults = parseInt(response.data.totalResults) || 0
      } catch (error) {
        this.error = error.message || 'Failed to fetch'
      } finally {
        this.loading = false
      }
    },
    async fetchMovie(id) {
      this.loading = true
      this.error = null
      try {
        const response = await axios.get(`${API_BASE}/movies/${id}`)
        this.selectedMovie = response.data
      } catch (error) {
        this.error = error.message || 'Failed to fetch'
      } finally {
        this.loading = false
      }
    }
  }
})