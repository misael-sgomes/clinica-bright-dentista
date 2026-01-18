const nav = document.querySelector('.nav-list');
const hamburguer = document.querySelector('.hamburguer');

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburguer.classList.toggle('active');
});