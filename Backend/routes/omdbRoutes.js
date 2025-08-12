const express = require('express');
const router = express.Router();

const { searchMovies, getMovieByTitle, getMovieById } = require('../controllers/omdbController');
const { apiLimiter } = require('../middleware/rateLimiter'); // import middleware

router.get('/search', apiLimiter, searchMovies);
router.get('/movies', apiLimiter, getMovieByTitle);
router.get('/movies/:id', apiLimiter, getMovieById);

module.exports = router;