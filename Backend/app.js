require('dotenv').config();
const express = require('express');
const corsMiddleware = require('./middleware/cors');
const { apiLimiter } = require('./middleware/rateLimiter');
const omdbRoutes = require('./routes/omdbRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(corsMiddleware);
app.use(express.json());

app.get('', (req, res) => {
  res.json({
    message: 'Welcome to the OMDB Proxy API backend. Use /api/search or /api/movies endpoints to fetch data.'
  });
});

app.use('/api', omdbRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
