const express = require('express');
const router = express.Router();
const { getQuizzes, submitQuiz } = require('../controllers/quizController');

// Route untuk mendapatkan semua kuis
router.get('/', getQuizzes);

// Route untuk mengirimkan jawaban kuis
router.post('/submit', submitQuiz);

module.exports = router;
