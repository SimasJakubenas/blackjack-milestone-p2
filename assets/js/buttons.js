// Loads the page before adding event listeners to menu, game buttons and chip selection
document.addEventListener('DOMContentLoaded', function() {
    let betButtons = document.getElementsByClassName('bet-chips');
    let controlButtons = document.getElementsByClassName('control-btn');

    // Menu controls
    let menuIcon = document.getElementById('menu-icon');
    let closeMenuX = document.getElementById('menu-close');
    const menuGameRules = document.getElementById('game-rules');
    const menuOptimalPlayTable = document.getElementById('optimal-play-table');

    arrowLeft.addEventListener('click', shiftLeft); // Moves chips to left
    arrowRight.addEventListener('click', shiftRight); // Moves chips to right
    // Menu control event listeners
    menuIcon.addEventListener('click', openMenu); //Open menu
    closeMenuX.addEventListener('click', closeMenu); //Close menu
    menuGameRules.addEventListener('click', showGameRules); // game rules
    menuOptimalPlayTable.addEventListener('click', showPlayTable); // Optimal play table
    
    // Iterates betting buttons and determines a bet size which gets passed on to placeBet function
    for (let betButton of betButtons) {
        betButton.addEventListener('click', function() {
            let betSize = this.getAttribute('data-type');

            placeBet(betSize);
        })
    }
    // Iterates control buttons and determines their id and passes that on to gameControls function
    for (let controlButton of controlButtons) {
        controlButton.addEventListener('click', function() {
            let buttonType = this.getAttribute('id');

            gameControls(buttonType);
        })
    }
})

/**
 * Defines control buttons variables
 * And pass it around all game logic 
 */
function gameControls(buttonType) {
    let deal = document.getElementById('deal-btn');
    let hit = document.getElementById('hit-btn');
    let stand = document.getElementById('stand-btn');
    let bet = document.getElementById('bet-btn');

    if (buttonType === 'deal-btn') {
        dealHand(deal, hit, stand, bet);
    }
    if (buttonType === 'hit-btn') {
        playerDraw(hit, stand, bet);
    }
    if (buttonType === 'stand-btn') {
        dealerDraw(hit, stand, bet);
    }
    if (buttonType === 'bet-btn') {
        selectBetSize(deal, bet);
    }
    if (buttonType === 'lets-play-btn') {
        removeGreeting();
    }
}