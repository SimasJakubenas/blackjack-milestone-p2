/**
 * Rearange the elements so player can select new bet when hand is over
 * Display deal nad reset buttons
 * Hides other buttons
 * Hides player's field
 * Clears card arrays
 * Revers back to default reverse card's attributes
 */
function selectBetSize(deal, bet) {
    // Displays betting section
    document.getElementById('bet-section').style.visibility ='visible';
    // Hides bet button and players field
    bet.style.display ='none';
    document.getElementById('players-field').style.visibility ='hidden';
    // Displays deal and reset buttons 
    deal.style.display ='unset';
    document.getElementById('reset-btn').style.display ='unset';
    // Clears card container for new game
    document.getElementById('players-card-container').innerHTML = '';
    document.getElementById('dealers-card-container').innerHTML = '';
    // Clears card arrays for new game
    playerCards = [];
    dealerCards = [];
    // Changes back the reverse cards attributes for new game
    displayReverseCard.src = `assets/images/cards/reverse.png`;
    displayReverseCard.alt = `reverse card`;
    // Clears the message fiel
    outcomeMsg.textContent = '';
    // Iterates countBoxes variable to target all the list items
    for (let countBox of countBoxes) {
        countBox.style.display = 'none';
    }
}

/**
 * Clears current bet
 * Bets the amount determined by betSize variable
 * Change displayed bet amount
 */
function placeBet(betSize) {
    let betChip = document.createElement('img');

    // Add attributes to bet1000Chips variable
    betChip.src = `assets/images/chips/${betSize}-slanted.png`;
    betChip.alt = `${betSize} chip has been bet`;
    // Clears current bet and add an image of new bet
    document.getElementById('bet-position').innerHTML = '';
    document.getElementById('bet-position').appendChild(betChip);
    // Changes chip count counter
    betAmount = `${betSize}`;
    document.getElementById('chip-count').textContent = `${betSize}`;
}