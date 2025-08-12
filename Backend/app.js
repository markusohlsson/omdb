require('dotenv').config();
const express = require('express');
const corsMiddleware = require('./middleware/cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(corsMiddleware);
app.use(express.json());

app.get('', (req, res) => {
    res.send('Hello from backend');
})

const omdbRoutes = require('./routes/omdbRoutes');
app.use('/api', omdbRoutes);

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});