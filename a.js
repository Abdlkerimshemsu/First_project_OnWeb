


document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.three');
    const menus = document.querySelector('.menus');
    const menuItems = document.querySelectorAll('.menu_items li a');
    const closeButton = document.querySelector('.Close-btn');

    // Function to show the menu
    function showMenu() {
        menus.style.display = 'flex';
    }

    // Function to hide the menu
    function hideMenu() {
        menus.style.display = 'none';
    }

    // Add event listener to the hamburger menu icon
    menuIcon.addEventListener('click', showMenu);

    // Add event listeners to the menu options
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            hideMenu();
            // Scroll to the corresponding section
            const sectionId = item.getAttribute('href');
            const section = document.querySelector(sectionId);
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Add event listener to the close button
    closeButton.addEventListener('click', hideMenu);
});
