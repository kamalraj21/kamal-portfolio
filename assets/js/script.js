document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkmode-toggle');
    
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
});
