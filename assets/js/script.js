document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    const navbar = document.querySelector('.navbar');
    if (!navbar) return; // Protect against null reference
    let scrollTimeout;
    let isScrolling;
    let lastScrollTop = 0;

    // Function to set theme
    function setTheme(isDark) {
        document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
        localStorage.setItem('darkMode', isDark);
        darkModeToggle.checked = isDark;
    }

    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme !== null) {
        setTheme(savedTheme === 'true');
    } else {
        setTheme(prefersDark);
    }

    // Listen for toggle changes
    darkModeToggle.addEventListener('change', function() {
        setTheme(this.checked);
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (localStorage.getItem('darkMode') === null) {
            setTheme(e.matches);
        }
    });

    // Navigation active state
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    function setActiveLink() {
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Initial check for active section
    setActiveLink();

    // Update active section on scroll
    window.addEventListener('scroll', setActiveLink);

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Function to handle scroll
    function handleScroll() {
        // Add scrolling class
        navbar.classList.add('scrolling');

        // Clear existing timer
        clearTimeout(scrollTimeout);

        // Set timer to remove scrolling class
        scrollTimeout = setTimeout(() => {
            navbar.classList.remove('scrolling');
        }, 150);
    }

    // Initial check for scroll position
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Handle smooth scroll navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                // Remove scrolling class during navigation
                navbar.classList.remove('scrolling');
                
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
