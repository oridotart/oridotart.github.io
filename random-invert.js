document.addEventListener('DOMContentLoaded', function() {
    const image = document.getElementById('cover-image');
    if (Math.random() > 0.5) {
        image.classList.add('inverted');
        document.body.style.backgroundColor = 'black';
    }
});
