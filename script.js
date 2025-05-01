function navigate(sectionId) {
  const sections = document.querySelectorAll('.pagina');
  sections.forEach(section => {
    section.classList.remove('ativa');
  });
  document.getElementById(sectionId).classList.add('ativa');
}

function toggleMenu() {
  const menu = document.querySelector('.menu');
  const toggleButton = document.querySelector('.menu-toggle');

  menu.classList.toggle('show');
  toggleButton.classList.toggle('active');
}
function enviarFormulario(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const mensagem = document.getElementById('mensagem').value;

  const texto = `Olá, meu nome é ${nome}. Gostaria de falar sobre: ${mensagem}`;
  const numeroWhatsApp = '5521992888989'; // Coloque o número com DDD e sem espaços

  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
  window.open(url, '_blank');
}