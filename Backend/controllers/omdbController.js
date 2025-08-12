const axios = require('axios');
const cache = require('../utils/cache');

const apiKey = process.env.OMDB_API_KEY;

const searchMovies = async (req, res) => {
    try {
        const {query, page} = req.query;

        if(!query) {
            return res.status(400).json({ error: 'Query parameter is required'});
        }

        const cacheKey = `search-${query}-${page || 1}`;
        const cachedData = cache.get(cacheKey);

        if(cachedData) {
            return res.json(cachedData);
        }

        const response = await axios.get(`https://omdbapi.com/`, {
            params: {
                apiKey,
                s: query,
                page: page || 1
            }
        });
        
        if(response.data.Reponse === 'False') {
            return res.status(404).json({ error: response.data.Error});
        }

        cache.set(cacheKey, response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error searching movies:', error.message);
        res.status(500).json({error: 'Something went wrong while searching movies'})
    }
}

const getMovieByTitle = async (req, res) => {
    try {
        const { title } = req.query;

        if (!title) {
            return res.status(400).json({error: 'Title query parameter is required'});
        }

        const cacheKey = `title-${title}`;
        const cachedData = cache.get(cacheKey);

        if(cachedData) {
            return res.json(cachedData);
        }
        
        const response = await axios.get(`https://www.omdbapi.com/`, {
            params: {
                apiKey: apiKey,
                t: title
            }
        });
        cache.set(cacheKey, response.data);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching movie: ', error.message);
        res.status(500).json({ error: 'Something went wrong fetching the movie'});
    }
};

const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;

        if(!id) {
            return res.status(400).json({error: 'Id Query parameter is required'});
        }

        const cacheKey = `id-${id}`;
        const cachedData = cache.get(cacheKey);

        if(cachedData) {
            return res.json(cachedData)
        }
         const response = await axios.get(`https://www.omdbapi.com`, {
            params: {
                apikey: apiKey,
                i: id,
            }
         })

         cache.set(cacheKey, response.data);
         res.json(response.data);

    } catch (error) {
        console.error ('Error fetching movie: ', error.message);
        res.status(500).json({ error: 'Something went wrong fetching the movie'});
    }
}
module.exports = { searchMovies, getMovieByTitle, getMovieById };