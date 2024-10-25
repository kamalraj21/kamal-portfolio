// JavaScript for toggling dark mode
function toggleDarkMode() {
    const body = document.body;
    const currentMode = localStorage.getItem('mode');
  
    // Toggle dark mode class on body
    body.classList.toggle("dark-mode");
  
    // Store the mode preference in localStorage
    if (currentMode === "dark") {
      localStorage.setItem('mode', "light");
    } else {
      localStorage.setItem('mode', "dark");
    }
  }
  
  // Function to apply dark mode on page load based on stored preference
  function applySavedMode() {
    const body = document.body;
    const savedMode = localStorage.getItem('mode');
    
    if (savedMode === "dark") {
      body.classList.add("dark-mode");
    }
  }
  
  // Apply saved mode when the page loads
  document.addEventListener("DOMContentLoaded", applySavedMode);
  