document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });

    window.addEventListener('scroll', () => {
        const header = document.getElementById('site-header');
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
        } else {
            header.style.backgroundColor = '#333';
        }
    });
});
