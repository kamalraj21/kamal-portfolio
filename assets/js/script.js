document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkmode-toggle');
    
    function setTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('darkMode', isDark);
    }

    // Check for saved preference
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
        darkModeToggle.checked = savedTheme === 'true';
        setTheme(savedTheme === 'true');
    }

    darkModeToggle.addEventListener('change', function() {
        setTheme(this.checked);
    });

    // Modal functionality
    window.openModal = function(imageSrc) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('expandedImage');
        modal.style.display = "block";
        modalImg.src = imageSrc;
        document.body.style.overflow = 'hidden';
    }

    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.style.display = "none";
            document.body.style.overflow = 'auto';
        }
    }

    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = 'auto';
            }
        }
    }
});
