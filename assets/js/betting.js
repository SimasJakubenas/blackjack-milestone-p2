/**
 * Rearange the elements so player can select new bet when hand is over
 * Display deal nad reset buttons
 * Hides other buttons
 * Hides player's field
 * Clears card arrays
 * Revers back to default reverse card's attributes
 */
function selectBetSize(deal, bet, reset) {
    let handCounter = parseInt(document.getElementById('hand-counter').innerHTML);
    const betPosition = document.getElementById('bet-position');
    
    handCounter += 1;
    // Checks if a double bet been placed and removes one chip for the next hand
    if (betPosition.childElementCount > 1) {
    betPosition.removeChild(betPosition.lastChild);
    betAmount /= 2;
    document.getElementById('chip-count').textContent = betAmount;
    }
    
    document.getElementById('hand-counter').innerHTML = handCounter; // Counts the number og hands played
    document.getElementById('message-field').style.visibility = 'hidden'; // Hides outcome message
    document.getElementById('arrow-left').style.display = 'unset'; // Reveals left arrow
    document.getElementById('arrow-right').style.display = 'unset'; // Hides right arrow
    // Displays betting section
    document.getElementById('bet-section').style.visibility ='visible';
    // Hides bet button and players field
    bet.style.display ='none';
    document.getElementById('players-field').style.visibility ='hidden';
    // Displays deal and reset buttons 
    deal.style.display ='unset';
    reset.style.display ='unset';
    // Clears card container for new game
    document.getElementById('players-card-container').innerHTML = '';
    document.getElementById('dealers-card-container').innerHTML = '';
    // Clears card arrays for new game
    playerCards = [];
    dealerCards = [];
    // Changes back the reverse cards attributes for new game
    displayReverseCard.src = `assets/images/cards/reverse.png`;
    displayReverseCard.alt = `upside down deales card`;
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
    const betChip = document.createElement('img');

    // Add attributes to bet1000Chips variable
    betChip.src = `assets/images/chips/${betSize}-slanted.png`;
    betChip.alt = `${betSize} chip has been bet on the table`;
    // Clears current bet and add an image of new bet
    document.getElementById('bet-position').innerHTML = '';
    document.getElementById('bet-position').appendChild(betChip);
    // Changes chip count counter
    betAmount = `${betSize}`;
    document.getElementById('chip-count').textContent = `${betSize}`;
}


/**
 * Calculate remaining balance based on game outcome
 */
function amendBalance() {
    let getBetAmount = parseInt(document.getElementById('chip-count').textContent);
    
    if (playerSum > 21) {
        balance.textContent = parseInt(balance.textContent) - getBetAmount;
    } else {
        if (dealerSum > 21 || (dealerSum < playerSum)) {
            balance.textContent = parseInt( balance.textContent) + getBetAmount;
            console.log(getBetAmount);
        } else if (playerSum === dealerSum){
            console.log(getBetAmount);
        } else  {
            balance.textContent = parseInt(balance.textContent) - getBetAmount;
        }
    }
}

/**
 * Moves the bet container left
 * Hides the left arrow if container to the most left
 * Unhides right arrow
 */
function shiftLeft() {
    arrowRight.style.visibility = 'visible';
    if (betContainer.classList == 'flex center-content') {
        betContainer.classList.remove('center-content')
        betContainer.classList.add('start-content')
        arrowLeft.style.visibility = 'hidden';
    } else {
        betContainer.classList.remove('end-content');
        betContainer.classList.add('center-content');
    }
}

/**
 * Moves the bet container right
 * Hides the right arrow if container to the most right
 * Unhides left arrow
 */
function shiftRight() {
    arrowLeft.style.visibility = 'visible';
    if (betContainer.classList == 'flex center-content') {
        betContainer.classList.remove('center-content')
        betContainer.classList.add('end-content')
        arrowRight.style.visibility = 'hidden';
    } else {
        betContainer.classList.remove('start-content');
        betContainer.classList.add('center-content');
    }
}