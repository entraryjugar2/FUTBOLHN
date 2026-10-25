const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menuButton.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    menuButton.textContent = '☰';
  }));
}
const now = new Date();
const dateEl = document.querySelector('#today-date');
const yearEl = document.querySelector('#year');
if (dateEl) dateEl.textContent = new Intl.DateTimeFormat('es-HN', { day:'2-digit', month:'short', year:'numeric' }).format(now).toUpperCase();
if (yearEl) yearEl.textContent = now.getFullYear();
