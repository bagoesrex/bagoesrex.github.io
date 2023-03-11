// Toogle class active
const navbarNav = document.querySelector('.navbar');

// Ketika hamburger menu di klik akan memunculkan nav
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// Klik di luar sidebar akan menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

// Ketika navbar menu diklik akan menghilangkan nav
document.querySelector('.js-a').onclick = () => {
    navbarNav.classList.remove('active');
}
document.querySelector('.js-b').onclick = () => {
    navbarNav.classList.remove('active');
}
document.querySelector('.js-c').onclick = () => {
    navbarNav.classList.remove('active');
}
document.querySelector('.js-d').onclick = () => {
    navbarNav.classList.remove('active');
}