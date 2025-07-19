// script.js

// Mendapatkan referensi ke semua tombol fitur
const featureButton1 = document.getElementById('featureButton1');
const featureButton2 = document.getElementById('featureButton2');
const featureButton3 = document.getElementById('featureButton3');
const featureButton4 = document.getElementById('featureButton4');

// Mendapatkan referensi ke satu elemen audio yang akan digunakan bersama
const commonSound = document.getElementById('commonSound');

// Fungsi pembantu untuk memutar suara
function playSound(audioElement) {
    // Menghentikan suara jika sedang diputar dan mengatur ulang ke awal
    audioElement.pause();
    audioElement.currentTime = 0;
    audioElement.play()
        .then(() => {
            console.log('Suara berhasil diputar.');
        })
        .catch(error => {
            console.error('Gagal memutar suara:', error);
        });
}

// Menambahkan event listener untuk setiap tombol fitur, semuanya memutar commonSound
featureButton1.addEventListener('click', () => {
    playSound(commonSound);
});

featureButton2.addEventListener('click', () => {
    playSound(commonSound);
});

featureButton3.addEventListener('click', () => {
    playSound(commonSound);
});

featureButton4.addEventListener('click', () => {
    playSound(commonSound);
});

// Opsional: Untuk memastikan suara dapat diputar setelah interaksi awal
document.body.addEventListener('click', () => {
    if (commonSound.readyState === 0) {
        commonSound.load();
    }
}, { once: true });

