const cursorNode = document.querySelector('#profile-cursor');

function toggleCursor() {
    cursorNode.style.visibility = cursorNode.style.visibility === 'visible' ? 'hidden' : 'visible'
}

setInterval(toggleCursor, 1000)

const burgerNode = document.querySelector('.burger-menu');
const navbarNode = document.querySelector('.header__navbar');

burgerNode.addEventListener('click', function() {
    this.classList.toggle('active');
    navbarNode.classList.toggle('open')
})