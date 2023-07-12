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

// ------ Menu ------ 

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};

const body = document.querySelector('body');

if(isMobile.any()) {
    body.classList.add('touch');

    const arrowNode = document.querySelector('.arrow');
    const subLink = document.querySelector('.sub-item');
    const subMenu = document.querySelector('.sub-menu__list');

    arrowNode.addEventListener('click', () => {
        subMenu.classList.toggle('open');
        arrowNode.classList.toggle('active');
    })
} else {
    body.classList.add('mouse')
}