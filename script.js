document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menuButton');
    const socialMenu = document.getElementById('socialMenu');

    // Add a click listener to the three dots
    menuButton.addEventListener('click', () => {
        // Check the current display style
        if (socialMenu.style.display === 'flex') {
            socialMenu.style.display = 'none'; // Hide it
        } else {
            socialMenu.style.display = 'flex'; // Show it
        }
    });
});
