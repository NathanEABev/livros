const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu-escondido');
const overlay = document.getElementById('overlay');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.style.backgroundColor = menu.classList.contains('show') ? 'rgba(0, 0, 0, 0.3)' : 'white';
});

overlay.addEventListener('click', () => {
    menu.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.backgroundColor = 'white';
});

let lastScrollTop = 0; // Mantém o último valor do scroll

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scroll para baixo: esconde o header
        header.classList.add('hidden');
    } else {
        // Scroll para cima: mostra o header
        header.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos
});