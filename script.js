document.addEventListener('mousemove', createHeart);

function createHeart(e) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = e.pageX + 'px';
    heart.style.top = e.pageY + 'px';
    document.getElementById('container').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}
