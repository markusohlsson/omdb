const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://ohlssondevomdb.netlify.app'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin) {
      return callback(new Error('Not allowed by CORS'), false);
    }
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(new Error('Not allowed by CORS'), false);
    }
    callback(null, true);
  }
};

const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;