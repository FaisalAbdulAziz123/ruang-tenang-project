const app = require('./app'); // Mengimpor konfigurasi dari app.js
const PORT = 3000; // Port untuk server

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
