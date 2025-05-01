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