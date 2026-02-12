/**
 * Revela elementos al entrar en viewport
 * Mantiene tu lógica original pero limpia
 */

function revealOnScroll() {
  const elements = document.querySelectorAll(
    '.mono, .casamos, .foto-wrap, .sec3-text, .fecha-box, .countdown, .evento, .vestimenta'
  );

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.classList.add('vis');
    }
  });
}
// ===== COUNTDOWN =====
const targetDate = new Date("2026-05-02T00:00:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("cd-d").textContent = d;
    document.getElementById("cd-h").textContent = h;
    document.getElementById("cd-m").textContent = m;
    document.getElementById("cd-s").textContent = s;
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.addEventListener("scroll", revealOnScroll, { passive: true });
document.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener("pageshow", revealOnScroll);