const menu = document.querySelector('.menu');
const nav = document.querySelector('.navbar ul');
const body = document.querySelector('.jum');

menu.addEventListener('click', () => {
    nav.classList.add('slide');
});

body.addEventListener('click', () => {
    nav.classList.remove('slide');
});