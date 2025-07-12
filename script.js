// Navegação suave para links internos
const links = document.querySelectorAll('nav a, .btn[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      // Fecha o menu no mobile após clique
      nav.classList.remove('open');
    }
  });
});

// Menu hambúrguer
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Formulário de contato (submissão fake)
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Mensagem enviada! Retornaremos em breve.');
  form.reset();
});
