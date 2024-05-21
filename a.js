/*document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.three');
    const about = document.querySelector('.menus');
    const menuItems = document.querySelectorAll('.menu_items li a');
    const closeButton = document.querySelector('.menus .menu_items li:last-child a');

    // Add event listener to the hamburger menu icon
    menuIcon.addEventListener('click', () => {
        menus.style.display = 'flex';
    });

    // Add event listeners to the menu options
    menuItems.forEach((item) => {
        item.addEventListener('click', () => {
            menus.style.display = 'none';
            // Display the corresponding content here
        });
    });

    // Add event listener to the close button
    closeButton.addEventListener('click', () => {
        menus.style.display = 'none';
    });
    function showsidebar() {
        const manus = document.querySelector('.manus')
        manus.style.display = 'flex'
    }
});*/


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
