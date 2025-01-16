const quizzes = [
    { id: 1, question: "What is 2 + 2?", options: ["2", "3", "4"], answer: "4" },
    { id: 2, question: "What is the capital of France?", options: ["Paris", "Berlin", "Madrid"], answer: "Paris" },
];

// Mengembalikan daftar kuis
const getQuizzes = (req, res) => {
    res.json({ success: true, data: quizzes });
};

// Memproses jawaban kuis
const submitQuiz = (req, res) => {
    const { answers } = req.body; // Jawaban dari frontend
    let score = 0;

    // Membandingkan jawaban pengguna dengan jawaban yang benar
    answers.forEach((answer, index) => {
        if (answer === quizzes[index].answer) {
            score++;
        }
    });

    res.json({ success: true, score }); // Mengembalikan skor
};

module.exports = { getQuizzes, submitQuiz };
