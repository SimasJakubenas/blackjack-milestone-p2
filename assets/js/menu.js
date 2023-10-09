/** 
 * Reveals a menu by changind display property
 * Add a class to menu that gives scaling up effect
 */
function openMenu() {
    // looks if menu anchor is focused and changes icon colour if so
    if (document.querySelector("#menu-anchor:focus")) {
        document.getElementById('menu-icon').style.color = '#BB0000';
    }
    // Create menu variable with value of menu element
    const menu = document.getElementById('menu');

    // Changes display property 
    menu.style.display = 'unset'
    // Adds a class with timeout method otherwise the effect didnt work
    setTimeout(function() {
        menu.classList.add('enlarge-menu')
    });
}

/**
 * Closes the menu by changind the display property 
 * and removing a class
 */
function closeMenu(openMenu) {
    menu.style.display = 'none';
    menu.classList.remove('enlarge-menu');
    document.getElementById('menu-icon').style.color = '#DDDEC6'; // returns original icon colour
}

function showGameRules() {
    document.getElementById('close-btn-container').style.display = 'none';
    document.getElementById('menu-list').style.display = 'none';
    document.getElementById('menu-content-container').style.display = 'unset';
}
