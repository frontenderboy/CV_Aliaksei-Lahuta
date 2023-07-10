// ------ Toggled Cursor ------

const cursorNode = document.querySelector('#profile-cursor');

function toggleCursor() {
    cursorNode.style.visibility = cursorNode.style.visibility === 'visible' ? 'hidden' : 'visible'
}

setInterval(toggleCursor, 1000)


// ------ Burger Menu ------

const burgerNode = document.querySelector('[data-burger]');
const navbarNode = document.querySelector('[data-navbar]');
const navItems = navbarNode.querySelectorAll('a');
const headerLogo = document.querySelector('.header__logo');

burgerNode.addEventListener('click', () => {
    document.body.classList.toggle('stop--scroll');
    burgerNode.classList.toggle('burger--active');
    navbarNode.classList.toggle('header__navbar--visible');
})

headerLogo.addEventListener('click', () => {
    document.body.classList.remove('stop--scroll');
    burgerNode.classList.remove('burger--active');
    navbarNode.classList.remove('header__navbar--visible');
})

navItems.forEach(el => {
    el.addEventListener('click', () => {
        document.body.classList.remove('stop--scroll');
        burgerNode.classList.remove('burger--active');
        navbarNode.classList.remove('header__navbar--visible');
    })
})