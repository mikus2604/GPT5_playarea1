// Simple navigation handler for single-page demo
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-section');
    sections.forEach(sec => sec.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    link.classList.add('active');
  });
});
