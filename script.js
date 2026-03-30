/* ═══════════════════════════════════════════════════════════
   JIHANE BOUGRINE – Portfolio JavaScript
═══════════════════════════════════════════════════════════ */

'use strict';

/* ─── Dark Mode ─────────────────────────────────────────── */
const html        = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const themeIcon   = document.getElementById('themeIcon');

const applyTheme = (theme) => {
  html.setAttribute('data-theme', theme);
  themeIcon.className = theme === 'dark'
    ? 'bi bi-sun-fill'
    : 'bi bi-moon-stars-fill';
};

// Init theme from localStorage or system preference
const savedTheme = localStorage.getItem('portfolio-theme')
  || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  localStorage.setItem('portfolio-theme', next);
});

/* ─── Navbar scroll shadow & active link ───────────────── */
const nav = document.getElementById('mainNav');
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.navbar .nav-link');

const onScroll = () => {
  // Navbar shadow
  nav?.classList.toggle('scrolled', window.scrollY > 50);

  // Back-to-top visibility
  backToTop?.classList.toggle('visible', window.scrollY > 400);

  // Active nav link
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 100) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', onScroll, { passive: true });

/* ─── Scroll Reveal ─────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target); // Animate once
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('.reveal, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

/* ─── Back to Top ───────────────────────────────────────── */
const backToTop = document.getElementById('backToTop');

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ─── Smooth close navbar on mobile link click ─────────── */
const navbarCollapse = document.getElementById('navbarMenu');
document.querySelectorAll('#navbarMenu .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navbarCollapse?.classList.contains('show')) {
      bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
    }
  });
});

/* ─── Update copyright year ─────────────────────────────── */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ─── Subtle parallax on hero shapes ───────────────────── */
const shapes = document.querySelectorAll('.shape');

window.addEventListener('mousemove', (e) => {
  const cx = window.innerWidth / 2;
  const cy = window.innerHeight / 2;
  const dx = (e.clientX - cx) / cx;
  const dy = (e.clientY - cy) / cy;

  shapes.forEach((shape, i) => {
    const factor = (i + 1) * 8;
    shape.style.transform = `translate(${dx * factor}px, ${dy * factor}px)`;
  });
}, { passive: true });
