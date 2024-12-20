document.addEventListener('DOMContentLoaded', function () {
    // Function to load HTML content into a placeholder
    function loadHTML(selector, url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(selector).insertAdjacentHTML('afterend', data);
                document.querySelector(selector).remove();
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    // Load resource links
    loadHTML('.fonts-placeholder', '/assets/fonts.html');

    // Load title logo SVG
    loadHTML('.title-logo-placeholder', '/assets/images/title-logo.html');

    // Load navbar logo SVG
    loadHTML('.navbar-placeholder', '/assets/html/navbar.html');

    // Load footer content
    loadHTML('.footer-placeholder', '/assets/html/footer.html');
});

document.addEventListener("scroll", function () {
    const svg = document.getElementById("navLogo");
    if (window.scrollY >= 175) {
        svg.classList.add("show");
    } else {
        svg.classList.remove("show");
    }
});
