// Efek suara klik
const commonSound = document.getElementById('clickSound');
const clickableLinks = document.querySelectorAll('.sound-trigger');

clickableLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (commonSound) {
      commonSound.pause();
      commonSound.currentTime = 0;
      commonSound.play().catch(e => console.error("Gagal play:", e));
    }
  });
});

// Untuk preload audio saat halaman pertama diklik (izin autoplay browser)
document.body.addEventListener('click', () => {
  if (commonSound && commonSound.readyState === 0) {
    commonSound.load();
  }
}, { once: true });
