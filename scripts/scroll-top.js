window.addEventListener('scroll', function () {
    const scrollButton = document.querySelector('.scroll-to-top-button');
    document.body.classList.toggle('scrolled-down', window.scrollY > 100);
});
