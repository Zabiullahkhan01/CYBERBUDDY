
document.addEventListener('DOMContentLoaded', () => {
    // Add fade-in class when the page loads
    document.body.classList.add('fade-in');

    const links = document.querySelectorAll('.smooth-transition');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetUrl = this.getAttribute('href');

            // Remove fade-in class and add fade-out class
            document.body.classList.remove('fade-in');
            document.body.classList.add('fade-out');

            // Delay the navigation to allow the fade-out effect to finish
            setTimeout(() => {
                window.location.href = targetUrl;
            }, 300); // This time should match the CSS transition time
        });
    });
});

