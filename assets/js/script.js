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

    const slider = document.querySelector('.comparison-slider');
    const dots = document.querySelectorAll('.dot');
    const items = document.querySelectorAll('.comparison-item img');
    
    // Handle image loading
    items.forEach(img => {
        img.addEventListener('load', () => {
            img.classList.add('loaded');
        });
    });
    
    // Update dots on scroll
    let scrollTimeout;
    slider.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const index = Math.round(slider.scrollLeft / (slider.offsetWidth * 0.8));
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }, 50);
    });
    
    // Handle dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            const itemWidth = slider.offsetWidth * 0.8;
            slider.scrollTo({
                left: index * itemWidth,
                behavior: 'smooth'
            });
        });
    });
    
    // Touch device detection and hint
    if ('ontouchstart' in window) {
        const hint = document.createElement('div');
        hint.classList.add('swipe-hint');
        slider.appendChild(hint);
        
        // Remove hint after first interaction
        slider.addEventListener('touchstart', () => {
            hint.style.display = 'none';
        }, { once: true });
    }
    
    // Optional: Keyboard navigation
    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            e.preventDefault();
            const direction = e.key === 'ArrowLeft' ? -1 : 1;
            const itemWidth = slider.offsetWidth * 0.8;
            slider.scrollBy({
                left: direction * itemWidth,
                behavior: 'smooth'
            });
        }
    });
});