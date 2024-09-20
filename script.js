let cursor = document.querySelector('.cursor');
let body = document.querySelector('body');
document.addEventListener('mousemove', (e) => {
    body.style.backgroundPositionX = e.pageX / -4 + 'px';
    body.style.backgroundPositionY = e.pageY / -4 + 'px';
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
});
document.body.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%, -50%) rotate(15deg) scale(1)';
});
document.body.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%, -50%) rotate(15deg) scale(0)';
});
