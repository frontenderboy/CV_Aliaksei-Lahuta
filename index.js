const cursorNode = document.querySelector('#profile-cursor');

function toggleCursor() {
    cursorNode.style.visibility = cursorNode.style.visibility === 'visible' ? 'hidden' : 'visible'
}

setInterval(toggleCursor, 1000)