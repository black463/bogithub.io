// Fungsi untuk menampilkan loading screen
function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('main-content');
    if (loadingScreen && mainContent) {
        loadingScreen.style.display = 'flex';
        mainContent.style.display = 'none';
    }
}

// Fungsi untuk menyembunyikan loading screen
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    const mainContent = document.getElementById('main-content');
    if (loadingScreen && mainContent) {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }
}

// Fungsi utama untuk inisialisasi aplikasi
function initApp() {
    showLoadingScreen(); // Tampilkan loader saat memulai

    // Ganti setTimeout ini dengan fungsi pemuatan data Anda yang sebenarnya (misalnya, panggilan API)
    // Setelah data selesai dimuat, panggil hideLoadingScreen()
    setTimeout(() => {
        hideLoadingScreen(); // Sembunyikan loader setelah 2 detik
    }, 2000);
}

// Jalankan fungsi inisialisasi saat seluruh konten DOM telah dimuat
document.addEventListener('DOMContentLoaded', initApp);

