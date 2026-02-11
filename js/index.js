/**
 * Revela elementos al entrar en viewport
 * Mantiene tu lógica original pero limpia
 */

function revealOnScroll() {
  const elements = document.querySelectorAll('.mono, .casamos, .foto-wrap');

  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 40) {
      el.classList.add('vis');
    }
  });
}

document.addEventListener("scroll", revealOnScroll, { passive: true });
document.addEventListener("DOMContentLoaded", revealOnScroll);
window.addEventListener("pageshow", revealOnScroll);
