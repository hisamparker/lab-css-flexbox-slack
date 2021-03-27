
const hamburger = document.querySelector('#hamburger');
const hamburger_menu = document.querySelector('.hamburger_menu')
const closeButton = document.querySelector('#close__hamburger_menu')

hamburger.addEventListener('click', () => hamburger_menu.classList.toggle('is__open'));

closeButton.addEventListener('click', () => hamburger_menu.classList.remove('is__open'));