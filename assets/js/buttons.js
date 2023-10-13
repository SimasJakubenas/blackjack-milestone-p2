// Loads the page before adding event listeners to menu, game buttons and chip selection
document.addEventListener('DOMContentLoaded', function() {
    const betButtons = document.getElementsByClassName('bet-chips');
    const controlButtons = document.getElementsByClassName('control-btn');

    // Menu controls
    const menuIcon = document.getElementById('menu-anchor');
    const closeMenuX = document.getElementById('menu-close');
    const menuGameRules = document.getElementById('game-rules');
    const menuOptimalPlayTable = document.getElementById('optimal-play-table');
    const menuAdvancedStrategy = document.getElementById('advanced-strategy');
    const backToMenu = document.getElementById('menu-content-close');
    

    arrowLeft.addEventListener('click', shiftLeft); // Moves chips to left
    arrowRight.addEventListener('click', shiftRight); // Moves chips to right
    // Menu control event listeners
    menuIcon.addEventListener('click', openMenu); //Open menu
    closeMenuX.addEventListener('click', closeMenu); //Close menu
    menuGameRules.addEventListener('click', showGameRules); // game rules
    menuOptimalPlayTable.addEventListener('click', showPlayTable); // Optimal play table
    menuAdvancedStrategy.addEventListener('click', showStrategy); // Advanced strategy
    backToMenu.addEventListener('click', returnToMenu); // Returns to menu screen
    
    // Iterates betting buttons and determines a bet size which gets passed on to placeBet function
    for (let betButton of betButtons) {
        betButton.addEventListener('click', function() {
            let betSize = this.getAttribute('data-type');

            placeBet(betSize);
        });
    }
    // Iterates control buttons and determines their id and passes that on to gameControls function
    for (let controlButton of controlButtons) {
        controlButton.addEventListener('click', function() {
            let buttonType = this.getAttribute('id');

            gameControls(buttonType);
        });
    }
});

/**
 * Defines control buttons variables
 * And pass it around all game logic 
 */
function gameControls(buttonType) {
    const deal = document.getElementById('deal-btn');
    const hit = document.getElementById('hit-btn');
    const stand = document.getElementById('stand-btn');
    const bet = document.getElementById('bet-btn');
    const reset = document.getElementById('reset-btn');
    const double = document.getElementById('double-btn');
    const betChipDouble = document.createElement('img');

    if (buttonType === 'deal-btn') {
        dealHand(deal, hit, stand, bet, reset, double);
    }
    if (buttonType === 'hit-btn') {
        playerDraw(hit, stand, bet, double);
    }
    if (buttonType === 'stand-btn') {
        dealerDraw(hit, stand, bet, double);
    }
    if (buttonType === 'bet-btn') {
        selectBetSize(deal, bet, reset, double);
    }
    if (buttonType === 'lets-play-btn') {
        removeGreeting();
    }
    if (buttonType === 'reset-btn') {
        betAmount = 0;
        document.getElementById('bet-position').innerHTML = '';
    }
    if (buttonType === 'double-btn') {
        betChipDouble.src = `assets/images/chips/${betAmount}-slanted.png`;
        betChipDouble.alt = `${betAmount} second chip has been bet on the table`;
        betChipDouble.style.top = '-4.3em';
        document.getElementById('bet-position').appendChild(betChipDouble);
        betAmount *= 2;
        document.getElementById('chip-count').textContent = betAmount;
        playerDraw(hit, stand, bet, double);
        if (playerSum < 21) {
            dealerDraw(hit, stand, bet, double);
        }
        double.style.display = 'none';
    }
}