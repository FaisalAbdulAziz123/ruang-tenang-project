const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const quizRoutes = require('./backend/routes/quizRoutes'); // Mengimpor route kuis

const app = express();

// Middleware
app.use(cors()); // Mengizinkan CORS
app.use(bodyParser.json()); // Parsing JSON dari request body

// Routes
app.use('/api/quiz', quizRoutes); // Endpoint untuk kuis

module.exports = app; // Mengekspor konfigurasi
