function loadLinks() {
    fetch('links.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('links-placeholder').innerHTML = data;
        });
}

function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        });
}

// Load the links and other dynamic content
loadLinks();
loadHTML('header-placeholder', 'assets/header.html');
loadHTML('footer-placeholder', 'assets/footer.html');
