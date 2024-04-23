let isDarkModeActive = false

function toggleDarkMode() {
   if (isDarkModeActive) {
    document.documentElement.style.setProperty("--bg-color", "black");
    document.documentElement.style.setProperty("--text-color", "white");
    isDarkModeActive = false;
} else {
    document.documentElement.style.setProperty("--bg-color", "white");
    document.documentElement.style.setProperty("--text-color", "black");
    isDarkModeActive = true;} 
}
