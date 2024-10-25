window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.remove('transparent');
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
        header.classList.add('transparent');
    }
});
