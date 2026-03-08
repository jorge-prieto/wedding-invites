/**
 * Revela elementos al entrar en viewport
 * Mantiene tu lógica original pero limpia
 */

function revealOnScroll() {
  const elements = document.querySelectorAll(
    '.mono, .casamos, .foto-wrap, .pinterest-btns, .sec3-text, .fecha-box, .countdown, .evento, .vestimenta, .regalos, .rsvp, .cierre-bloque, .foto-marco, .foto-cita, .airbnb-eyebrow, .airbnb-titulo, .airbnb-sub, .airbnb-grid, .faq-eyebrow, .faq-titulo, .faq-sub, .faq-list'
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
    const cdD = document.getElementById("cd-d");
    if (!cdD) return;

    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) return;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    cdD.textContent = d;
    document.getElementById("cd-h").textContent = h;
    document.getElementById("cd-m").textContent = m;
    document.getElementById("cd-s").textContent = s;
}

updateCountdown();
setInterval(updateCountdown, 1000);

document.addEventListener("scroll", revealOnScroll, { passive: true });
document.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener("pageshow", revealOnScroll);

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
    });
    btn.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            btn.click();
        }
    });
});