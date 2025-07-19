// script.js

// --- Fungsi untuk memutar suara ---
const commonSound = document.getElementById('clickSound'); // Mendapatkan referensi ke elemen audio

function playSound() {
    // Menghentikan suara jika sedang diputar dan mengatur ulang ke awal
    if (commonSound) { // Pastikan elemen audio ada
        commonSound.pause();
        commonSound.currentTime = 0;
        commonSound.play()
            .then(() => {
                console.log('Suara berhasil diputar.');
            })
            .catch(error => {
                console.error('Gagal memutar suara:', error);
                // Pesan error di konsol, tidak perlu alert pop-up
            });
    } else {
        console.warn('Elemen audio dengan ID "clickSound" tidak ditemukan.');
    }
}

// Menambahkan event listener ke semua link yang relevan
// Kita akan menargetkan semua tag <a> yang berada di dalam class 'menu-app' atau 'menu-top'
document.addEventListener('DOMContentLoaded', () => {
    // Menggunakan querySelectorAll untuk mendapatkan semua elemen <a> yang relevan
    const clickableLinks = document.querySelectorAll(
        '.menu-app a, .menu-top a, .ref a' // Menargetkan link di menu-app, menu-top, dan ref
    );

    clickableLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            playSound(); // Memutar suara saat link diklik

            // Jika Anda ingin suara selesai diputar sebelum navigasi,
            // Anda bisa mencegah default navigasi dan menavigasi secara manual setelah suara selesai.
            // Namun, ini bisa menyebabkan penundaan navigasi.
            // event.preventDefault();
            // commonSound.onended = () => {
            //     window.location.href = link.href;
            // };
        });
    });

    // Opsional: Untuk memastikan suara dapat diputar setelah interaksi awal
    // Ini membantu mengatasi kebijakan autoplay browser
    document.body.addEventListener('click', () => {
        if (commonSound && commonSound.readyState === 0) {
            commonSound.load();
        }
    }, { once: true });


    // --- JavaScript yang dipindahkan dari inline HTML ---

    // Fungsi untuk memformat angka menjadi format mata uang
    function rubah(angka) {
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');
        return ribuan;
    }

    // Memperbarui tampilan saldo pengguna
    const saldoUserElement = document.getElementById("saldo_user");
    if (saldoUserElement) {
        saldoUserElement.innerText = "Rp" + rubah(saldoUserElement.textContent);
    }


    // Fungsi untuk carousel/slide gambar
    var myIndex = 0;
    carousel(); // Panggil carousel saat DOM siap

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Ganti gambar setiap 2 detik
    }

    // Logika untuk menyembunyikan teks game berdasarkan email pengguna
    // Gantikan ini dengan email pengguna yang sebenarnya jika ini adalah placeholder
    var user_email = "{{email_user}}"; // Pastikan ini diganti dengan nilai sebenarnya di server/backend Anda
    var target_email = "test@gmail.com"; // Email yang akan diperiksa

    const gameElement = document.getElementById("game");
    if (gameElement) {
        if (user_email === target_email) {
            gameElement.style.display = "none";
        }
    }

    // Logika untuk menyembunyikan elemen berdasarkan level membership
    var membershipLevel = 'Silver'; // Ganti ini dengan level membership pengguna yang sebenarnya
    // Pastikan {{nama_membership}} diganti dengan nilai sebenarnya di server/backend Anda
    var actualMembership = "{{nama_membership}}";

    if (membershipLevel === actualMembership) {
        var elementsToHide = document.getElementsByClassName('hideone');
        for (var i = 0; i < elementsToHide.length; i++) {
            elementsToHide[i].style.display = 'none';
        }
        // Juga sembunyikan div container dengan id="hideone"
        const hideoneContainer = document.getElementById('hideone');
        if (hideoneContainer) {
            hideoneContainer.style.display = 'none';
        }
    }
});

