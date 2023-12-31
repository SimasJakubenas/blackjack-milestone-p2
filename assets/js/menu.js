/** 
 * Reveals a menu by changind display property
 * Add a class to menu that gives scaling up effect
 */
function openMenu() {
    // Create menu variable with value of menu element
    const menu = document.getElementById('menu');

    // Changes display property 
    menu.style.display = 'unset';
    // Adds a class with timeout method otherwise the effect didnt work
    setTimeout(function() {
        menu.classList.add('enlarge-menu');
    });
}

/**
 * Closes the menu by changind the display property 
 * and removing a class
 */
function closeMenu() {
    // Create menu variable with value of menu element
    const menu = document.getElementById('menu');
    
    menu.style.display = 'none';
    menu.classList.remove('enlarge-menu');
}


/**
 * Hides menu items and closing icon
 * Displays game rules content
 */
function showGameRules() {
    const gameRulesWindow = document.getElementById('menu-content-wrapper');

    gameRulesWindow.innerHTML = '<iframe src="game-rules.html" frameborder="0" id="menu-content"></iframe>';
    document.getElementById('close-btn-container').style.display = 'none';
    document.getElementById('menu-list').style.display = 'none';
    document.getElementById('menu-content-container').style.display = 'unset';
}

/**
 * Hides menu items and closing icon
 * Displays optimal play table
 */
function showPlayTable() {
    const menuContentWrapper = document.getElementById('menu-content-wrapper');

    menuContentWrapper.innerHTML = '<img src="assets/images/optimal-play-table.png">';
    document.getElementById('close-btn-container').style.display = 'none';
    document.getElementById('menu-list').style.display = 'none';
    document.getElementById('menu-content-container').style.display = 'unset';
    
}

/**
 * Hides menu items and closing icon
 * Displays advanced strategy
 */
function showStrategy() {
    const advancedStrategyWindow = document.getElementById('menu-content-wrapper');

    advancedStrategyWindow.innerHTML = '<iframe src="advanced-strategy.html" frameborder="0" id="menu-content"></iframe>';
    document.getElementById('close-btn-container').style.display = 'none';
    document.getElementById('menu-list').style.display = 'none';
    document.getElementById('menu-content-container').style.display = 'unset';
}

/**
 * Returns back to menu list by hiding menu content and displaying menu list
 */
function returnToMenu() {
    document.getElementById('menu-content-container').style.display = 'none';
    document.getElementById('close-btn-container').style.display = 'block';
    document.getElementById('menu-list').style.display = 'unset';
}
