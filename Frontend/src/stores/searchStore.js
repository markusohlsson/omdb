import { defineStore } from 'pinia'
import axios from 'axios'

export const useSearchStore = defineStore ('search', {
    state: () => ({
        results: null,
        totalResults: null,
        loading: false,
        error: null,
    }),
    actions: {
        async fetchResults(query) {
            this.loading = true
            this.error = null
            try {
                const response = await axios.get('http://localhost:3000/api/search', {
                    params: { query: query }
                })
                this.results = response.data.Search;
                this.totalResults = response.data.totalResults;
            } catch (error) {
                this.error = error.message || 'Failed to fetch'
            } finally {
                this.loading = false;
            }
        }
    }
})