// Global variables that has to be accessed by multiple functions
let playerCards = [];
let dealerCards = [];

let playerSum = 0;
let dealerSum = 0;
let betAmount = 0;

let newAceValue = { name: "ace", value: 1}; // Changes ace value to 1
let displayReverseCard = document.createElement('img'); // Dealers reverse card
let countBoxes = document.getElementsByClassName('count-box'); // Assigns a variable to card sum counter boxes
let outcomeMsg = document.getElementById('outcome-message'); // Displays all outcome messages

// Loads the page before adding event listeners to menu, game buttons and chip selection
document.addEventListener('DOMContentLoaded', function() {
    let betButtons = document.getElementsByClassName('bet-chips');
    let controlButtons = document.getElementsByClassName('control-btn');
    let menuIcon = document.getElementById('menu-icon');
    let closeMenuX = document.getElementById('menu-close')

    menuIcon.addEventListener('click', openMenu); //Open menu
    closeMenuX.addEventListener('click', closeMenu); //Close menu
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

/**
 * Function called by pressing Start Play button
 * Hides the greeting message and overlay
 * Reveals info box with players name
 */
function removeGreeting() {
    let name = document.getElementById('input-name').value; // Gets inputs value

    if(document.getElementById("input-name").value.length < 3){// Add min length for a typed name
    alert("Name must be between 3 and 15 characters long.");
    throw 'Name must be between 3 and 15 characters long.'
    } else {
    document.getElementById('backdrop').style.display = 'none'; // Hides blurry effect
    document.getElementById('greeting-msg').style.display = 'none'; // Hides greeting message
    document.getElementById('display-info').style.display = 'unset'; // Reveals info box
    document.getElementById('player-name').textContent = name; // Transfer inputs value to table
    }
}

/** Main game function was is called when 'deal' button is pressed
 * Contains all the game logic functions 
 */
function dealHand(deal, hit, stand, bet) {
    // Checks if bet has been placed
    if (betAmount > 0) {
        outcomeMsg.textContent = '';
        selectInitialCards();
        displayInitialCards();
        displayCardValuesSum();
        buttonSwap(deal, hit, stand, bet);
        dealerBlackjackCheck(hit, stand, bet);
        playerAceValue();
    } else { // If bet has not been placed displays a message
        outcomeMsg.textContent = 'Place your bet!';
    }
}

/** Randomises numbers to select cards from cards array
 * Adds selected cards to new arrays
 */
function selectInitialCards() {
    // Selects player cards number
    let firstPlayerCard = Math.floor(Math.random() * 52);
    let secondPlayerCard = Math.floor(Math.random() * 52);
    // Selects dealers cards number
    let firstDealerCard = Math.floor(Math.random() * 52);
    let secondDealerCard = Math.floor(Math.random() * 52);

    // Adds selected cards to playerCards array
    playerCards.push(cards[firstPlayerCard]);
    playerCards.push(cards[secondPlayerCard]);
    // Adds selected cards to dealerCards Araay
    dealerCards.push(cards[firstDealerCard]);
    dealerCards.push(cards[secondDealerCard]);
}

/** Displays initial cards on the table by:
 * Creating card variables and assigning img elements
 * Adding cards attributes
 * And inserting img elemens to corresponding card containers
  */
function displayInitialCards() {
    // Create card variables 
    let displayFirstCard = document.createElement('img');
    let displaySecondCard = document.createElement('img');
    let displayDealerCard = document.createElement('img');

    // Assign first player card attributes
    displayFirstCard.src = `assets/images/cards/${playerCards[0].image}`;
    displayFirstCard.alt = `${playerCards[0].name}`;
    // Assign second player card attributes
    displaySecondCard.src = `assets/images/cards/${playerCards[1].image}`;
    displaySecondCard.alt = `${playerCards[1].name}`;
    // Assign first dealer card attributes
    displayDealerCard.src = `assets/images/cards/${dealerCards[0].image}`;
    displayDealerCard.alt = `${dealerCards[0].name}`;
    // Assign reverse dealer card attributes
    displayReverseCard.src = `assets/images/cards/reverse.png`;
    displayReverseCard.alt = `reverse card`;
    // Insert the created images to corresponding card containers
    document.getElementById('players-card-container').appendChild(displayFirstCard);
    document.getElementById('players-card-container').appendChild(displaySecondCard);
    document.getElementById('dealers-card-container').appendChild(displayDealerCard);
    document.getElementById('dealers-card-container').appendChild(displayReverseCard);
}
/** 
 * Calculates players cards value sum by looping through playersCards array and adding up card values
 * Exctracts first dealers card value
 * Display those values in corresponding count boxes
 */
function displayCardValuesSum() {
    playerSum = 0;// Resets playerSum for a new game
    // Calculates playerSum value
    for (let playerCard of playerCards) {
       playerSum += playerCard.value; 
    }
    dealerSum = dealerCards[0].value;// Gets dealerSum value
    // Display new value in the corresponding count boxes
    document.getElementById('dealers-count').textContent = dealerSum;
    document.getElementById('players-count').textContent = playerSum;
    // Iterates countBoxes variable to target all the list items
    for (let countBox of countBoxes) {
         countBox.style.display = 'unset';
    }

}

/**
 * DIsplay deal and reset buttons and players field section on repeat game
 * Hide betting buttons and display play buttons
 * Hide bet selection
 */
function buttonSwap(deal, hit, stand) {
    document.getElementById('players-field').style.visibility ='visible'; // Reveal players field uppon repeat game
    // Display deal and reset buttons
    deal.style.display ='none';
    document.getElementById('reset-btn').style.display ='none';
    // hide hit and stand buttons
    hit.style.display ='unset';
    stand.style.display ='unset';
    document.getElementById('bet-section').style.visibility ='hidden'; // Hide chip selection section
}

/**
 * When player hits Blackjack this checks if dealer has an ace, if so
 * it checks the second dealer cards incase dealer has Blackjack also
 */
function dealerBlackjackCheck(hit, stand, bet) {
    if (playerSum === 21) { // If player has Blackjack
        // Hides hit and stand buttons, reveals bet button
        hit.style.display ='none';
        stand.style.display ='none';
        bet.style.display ='unset';
        if (dealerSum === 11) { // If dealer has an ace the second card is checked
            displayReverseCard.src = `assets/images/cards/${dealerCards[1].image}`;
            // Calculates dealer sum
            dealerSum += dealerCards[1].value;
            document.getElementById('dealers-count').textContent = dealerSum;
            if (dealerSum === 21) { // If dealer has Blackjack it's a draw
            outcomeMsg.textContent = 'It is a draw!';
            } else { // Player wins if the second card does not have value of 10
                outcomeMsg.textContent = 'You have Blackjack!'; 
            }
        } else { // Player wins if dealer does not have an ace
            outcomeMsg.textContent = 'You have Blackjack!'; 
        }
    }
}

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
 * Positions a drawn card in a fan like manner
 */
function drawCard(drawnCard, drawOneCard) {
    // Variables used to control the position of drawn cards
    let moveCardLeft = (2 - playerCards.length)*2 - 3.5;
    let moveCardBottom = (playerCards.length - 2)*0.2
    let rotateCard = (playerCards.length - 2)*5;
    // Assign drawn card's attributes
    drawOneCard.src = `assets/images/cards/${cards[drawnCard].image}`;
    drawOneCard.alt = `${cards[drawnCard].name}`;
    drawOneCard.style.position = 'absolute';
    drawOneCard.style.right = `${moveCardLeft}em`;
    drawOneCard.style.top = `${moveCardBottom}em`;
    drawOneCard.style.transform = 'rotateX(15deg)';
    drawOneCard.style.transform = `rotateZ(${rotateCard}deg)`;
    drawOneCard.style.transformOrigin = 'bottom left';
}

/**
 * Generates a new card when HIT button is presset
 * Adds that card to the players card container
 * Updates the player's cards value sum figure
 * Looks for game outcomes depending on player's cards value sum
 */
function playerDraw(hit, stand, bet) {
    let drawnCard = Math.floor(Math.random() * 52); // Selects drawn card's number
    let drawOneCard = document.createElement('img'); // Create drawn card variable

    drawCard(drawnCard, drawOneCard);
    document.getElementById('players-card-container').appendChild(drawOneCard); // Adds drawn card to player cards container
    playerCards.push(cards[drawnCard]); // Adds drawn card to playerCards array
    // Update player card's value sum
    playerSum += cards[drawnCard].value;
    document.getElementById('players-count').textContent = playerSum;
    // Checks ace value
    playerAceValue()
    // Check the sum of player's cards to determine game outcome
    if (playerSum > 21) { // Game lost
        outcomeMsg.textContent = 'You lost...'; 
        // Hides hit and stand buttons, displays bet button
        bet.style.display ='unset';
        hit.style.display ='none';
        stand.style.display ='none';
    } else if (playerSum === 21) { // Blackjack - player wins
        outcomeMsg.textContent = 'You have 21!'; 
        // Hides hit and stand buttons, displays bet button and calls dealerDraw function
        hit.style.display ='none';
        stand.style.display ='none';
        dealerDraw(hit, stand, bet);
        bet.style.display ='unset';
    } else {
    console.log(playerSum);
    }
}

/** Iterates playersCards array looking an ace card 
 * If ace is found and player sum is more than 21 that card is assigned to a new variable
 * Player's cards value sum is then calculated by looping through playerCards array
 */
function playerAceValue() {
    for (let i = 0; i < playerCards.length; i++) {
        // Looks for an ace card and assign it to new variable if condition is met
        if (playerCards[i].value === 11 && playerSum > 21) {
            playerCards[i] = newAceValue;
            // Resets players sum
            playerSum = 0;
            // updates player's cards value sum 
            for (let playerCard of playerCards) {
                playerSum += playerCard.value;
                document.getElementById('players-count').textContent = playerSum;
            } 
        }
    }
}

/** Iterates dealersCards array looking an ace card 
 * If ace is found and dealer sum is more than 21 that card is assigned to a new variable
 * Dealers's cards value sum is then calculated by looping through dealerCards array
 */
function dealerAceValue() {
    for (let i = 0; i < dealerCards.length; i++) {
        // Looks for an ace card and assign it to new variable if condition is met
        if (dealerCards[i].value === 11 && dealerSum > 21) {
            dealerCards[i] = newAceValue;
            // Resets dealer's sum
            dealerSum = 0;
            // updates dealer's cards value sum 
            for (let dealerCard of dealerCards) {
                dealerSum += dealerCard.value;
                document.getElementById('dealers-count').textContent = dealerSum;
            } 
        }
    }
}

/**
 * Removes hit and stand buttons
 * Displays second dealer card
 * Changes the value of sum of dealers cards
 * Checks if dealers card sum is less than 17 and draws new card if so
 */
function dealerDraw(hit, stand, bet) {
    // Hides hit and stand buttons
    hit.style.display ='none';
    stand.style.display ='none';
    //Displays second dealer card
    displayReverseCard.src = `assets/images/cards/${dealerCards[1].image}`;
    dealerSum += dealerCards[1].value;
    //Updates dealer's cards value sum
    document.getElementById('dealers-count').textContent = dealerSum;
    // Checks if dealer's sum is less than 17 and if so draws a new card
    while (dealerSum < 17) {
        let drawnCard = Math.floor(Math.random() * 52); // Selects drawn card's number
        let drawOneCard = document.createElement('img'); // Create drawn card variable

        drawCard(drawnCard, drawOneCard);
        // Adds drawn card to dealers cards container and dealerCards array
        document.getElementById('dealers-card-container').appendChild(drawOneCard);
        dealerCards.push(cards[drawnCard]);
        // Updates dealer's card value sum
        dealerSum += cards[drawnCard].value;
        document.getElementById('dealers-count').textContent = dealerSum;
        dealerAceValue();
    }
    // Checks for game outcomes depending on dealer sum
    determineWinner(bet);
}

/**
 * Determines a winner when dealers value is between 17 and 21
 * Displays corresponding message
 */
function determineWinner(bet) {
    if ((playerSum > dealerSum) || (dealerSum > 21)) {
        outcomeMsg.textContent = 'You win!';
    } else if (playerSum === dealerSum) {
        outcomeMsg.textContent = 'It is a draw!';
    } else {
        outcomeMsg.textContent = 'You lost...';
    }
    bet.style.display ='unset';
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

/** 
 * Reveals a menu by changind display property
 * Add a class to menu that gives scaling up effect
 */
function openMenu() {
    // Create menu variable with value of menu element
    let menu = document.getElementById('menu');

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
}