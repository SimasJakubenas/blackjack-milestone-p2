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

// Loads the page before adding event listeners to game buttons and chip selection
window.onload = function() {
    // Lets play button that starts the game
    let letsPlay = document.getElementById('lets-play-btn');
    letsPlay.addEventListener('click', startGame);
    //Control button calls function on click
    let deal = document.getElementById('deal-btn')
    deal.addEventListener('click', dealHand);
    let hit = document.getElementById('hit-btn')
    hit.addEventListener('click', drawCard);
    let stand = document.getElementById('stand-btn')
    stand.addEventListener('click', dealerDraw);
    let bet = document.getElementById('bet-btn')
    bet.addEventListener('click', selectBetSize);
    //Chip selecton calls function on click
    let chip50 = document.getElementById('50-chip')
    chip50.addEventListener('click', bet50);
    let chip100 = document.getElementById('100-chip')
    chip100.addEventListener('click', bet100);
    let chip200 = document.getElementById('200-chip')
    chip200.addEventListener('click', bet200);
    let chip500 = document.getElementById('500-chip')
    chip500.addEventListener('click', bet500);
    let chip1000 = document.getElementById('1000-chip')
    chip1000.addEventListener('click', bet1000);
    //Menu icon calls function on click
    let menuIcon = document.getElementById('menu-icon')
    menuIcon.addEventListener('click', openMenu);
    let closeMenuX = document.getElementById('menu-close')
    closeMenuX.addEventListener('click', closeMenu);
}

/**
 * Function called by pressing Start Play button
 * Hides the greeting message and overlay
 * Reveals info box with players name
 */
function startGame() {
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
function dealHand() {
    // Checks if bet has been placed
    if (betAmount > 0) {
        outcomeMsg.textContent = '';
        selectInitialCards();
        displayInitialCards();
        displayCardValuesSum();
        buttonSwap();
        dealerBlackjackCheck();
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
function buttonSwap() {
    document.getElementById('players-field').style.visibility ='visible'; // Reveal players field uppon repeat game
    // Display deal and reset buttons
    document.getElementById('deal-btn').style.display ='none';
    document.getElementById('reset-btn').style.display ='none';
    // hide hit and stand buttons
    document.getElementById('hit-btn').style.display ='unset';
    document.getElementById('stand-btn').style.display ='unset';
    document.getElementById('bet-section').style.visibility ='hidden'; // Hide chip selection section
}

/**
 * When player hits Blackjack this checks if dealer has an ace, if so
 * it checks the second dealer cards incase dealer has Blackjack also
 */
function dealerBlackjackCheck() {
    if (playerSum === 21) { // If player has Blackjack
        // Hides hit and stand buttons, reveals bet button
        document.getElementById('hit-btn').style.display ='none';
        document.getElementById('stand-btn').style.display ='none';
        document.getElementById('bet-btn').style.display ='unset';
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
function selectBetSize() {
    // Displays betting section
    document.getElementById('bet-section').style.visibility ='visible';
    // Hides bet button and players field
    document.getElementById('bet-btn').style.display ='none';
    document.getElementById('players-field').style.visibility ='hidden';
    // Displays deal and reset buttons 
    document.getElementById('deal-btn').style.display ='unset';
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
 * Generates a new card when HIT button is presset
 * Adds that card to the players card container
 * Updates the player's cards value sum figure
 * Looks for game outcomes depending on player's cards value sum
 */
function drawCard() {
    let drawnCard = Math.floor(Math.random() * 52); // Selects drawn card's number
    let drawOneCard = document.createElement('img'); // Create drawn card variable
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
        document.getElementById('bet-btn').style.display ='unset';
        document.getElementById('hit-btn').style.display ='none';
        document.getElementById('stand-btn').style.display ='none';
    } else if (playerSum === 21) { // Blackjack - player wins
        outcomeMsg.textContent = 'You have 21!'; 
        // Hides hit and stand buttons, displays bet button
        document.getElementById('bet-btn').style.display ='unset';
        document.getElementById('hit-btn').style.display ='none';
        document.getElementById('stand-btn').style.display ='none';
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
function dealerDraw() {
    // Hides hit and stand buttons
    document.getElementById('hit-btn').style.display ='none';
    document.getElementById('stand-btn').style.display ='none';
    //Displays second dealer card
    displayReverseCard.src = `assets/images/cards/${dealerCards[1].image}`;
    dealerSum += dealerCards[1].value;
    //Updates dealer's cards value sum
    document.getElementById('dealers-count').textContent = dealerSum;
    // Checks if dealer's sum is less than 17 and if so draws a new card
    while (dealerSum < 17) {
        let dealerDrawnCard = Math.floor(Math.random() * 52); // Selects drawn card's number
        let dealerDrawsCard = document.createElement('img'); // Create drawn card variable
        // Variables used to control the position of drawn cards
        let moveDealerCardLeft = (2 - dealerCards.length)*2 - 3.5;
        let moveDealerCardBottom = (dealerCards.length - 2)*0.2
        let rotateDealerCard = (dealerCards.length - 2)*5;

        // Assign drawn card's attributes
        dealerDrawsCard.src = `assets/images/cards/${cards[dealerDrawnCard].image}`;
        dealerDrawsCard.alt = `${cards[dealerDrawnCard].name}`;
        dealerDrawsCard.style.position = 'absolute';
        dealerDrawsCard.style.right = `${moveDealerCardLeft}em`;
        dealerDrawsCard.style.top = `${moveDealerCardBottom}em`;
        dealerDrawsCard.style.transform = 'rotateX(15deg)';
        dealerDrawsCard.style.transform = `rotateZ(${rotateDealerCard}deg)`;
        dealerDrawsCard.style.transformOrigin = 'bottom left';
        // Adds drawn card to dealers cards container and dealerCards array
        document.getElementById('dealers-card-container').appendChild(dealerDrawsCard);
        dealerCards.push(cards[dealerDrawnCard]);
        // Updates dealer's card value sum
        dealerSum += cards[dealerDrawnCard].value;
        document.getElementById('dealers-count').textContent = dealerSum;
        dealerAceValue();
    }
    // Checks for game outcomes depending on dealer sum
    determineWinner();
}

/**
 * Determines a winner when dealers value is between 17 and 21
 * Displays corresponding message
 */
function determineWinner() {
    if ((playerSum > dealerSum) || (dealerSum > 21)) {
        outcomeMsg.textContent = 'You win!';
    } else if (playerSum === dealerSum) {
        outcomeMsg.textContent = 'It is a draw!';
    } else {
        outcomeMsg.textContent = 'You lost...';
    }
    document.getElementById('bet-btn').style.display ='unset';
}

/**
 * Clears current bet 
 * Bets 50$ chip
 * Change displayed bet amount
 */
function bet50() {
    // Creates variable and ssign it value of img
    let bet50Chips = document.createElement('img');

    // Add attributes to bet50Chips variable
    bet50Chips.src = "assets/images/chips/50-slanted.png";
    bet50Chips.alt = "50$ chip has been bet";
    // Clears current bet and add an image of new bet
    document.getElementById('bet-position').innerHTML = '';
    document.getElementById('bet-position').appendChild(bet50Chips);
    // Changes chip count counter
    betAmount = 50;
    document.getElementById('chip-count').textContent = '50';
}

/**
 * Clears current bet 
 * Bets 100$ chip
 * Change displayed bet amount
 */
function bet100() {
    // Creates variable and ssign it value of img
    let bet100Chips = document.createElement('img');

    // Add attributes to bet100Chips variable
    bet100Chips.src = "assets/images/chips/100-slanted.png";
    bet100Chips.alt = "100$ chip has been bet";
    // Clears current bet and add an image of new bet
    document.getElementById('bet-position').innerHTML = '';
    document.getElementById('bet-position').appendChild(bet100Chips);
    // Changes chip count counter
    betAmount = 100;
    document.getElementById('chip-count').textContent = '100';
}

/**
 * Clears current bet 
 * Bets 200$ chip
 * Change displayed bet amount
 */
function bet200() {
    // Creates variable and ssign it value of img
    let bet200Chips = document.createElement('img');

    // Add attributes to bet200Chips variable
    bet200Chips.src = "assets/images/chips/200-slanted.png";
    bet200Chips.alt = "200$ chip has been bet";
    // Clears current bet and add an image of new bet
    document.getElementById('bet-position').innerHTML = '';
    document.getElementById('bet-position').appendChild(bet200Chips);
    // Changes chip count counter
    betAmount = 200;
    document.getElementById('chip-count').textContent = '200';
}

/**
 * Clears current bet 
 * Bets 500$ chip
 * Change displayed bet amount
 */
function bet500() {
    // Creates variable and ssign it value of img
    let bet500Chips = document.createElement('img');

    // Add attributes to bet500Chips variable
    bet500Chips.src = "assets/images/chips/500-slanted.png";
    bet500Chips.alt = "500$ chip has been bet";
    // Clears current bet and add an image of new bet
    document.getElementById('bet-position').innerHTML = '';
    document.getElementById('bet-position').appendChild(bet500Chips);
    // Changes chip count counter
    betAmount = 500;
    document.getElementById('chip-count').textContent = '500';
}

/**
 * Clears current bet 
 * Bets 1000$ chip
 * Change displayed bet amount
 */
function bet1000() {
    // Creates variable and ssign it value of img
    let bet1000Chips = document.createElement('img');

    // Add attributes to bet1000Chips variable
    bet1000Chips.src = "assets/images/chips/1000-slanted.png";
    bet1000Chips.alt = "1000$ chip has been bet";
    // Clears current bet and add an image of new bet
    document.getElementById('bet-position').innerHTML = '';
    document.getElementById('bet-position').appendChild(bet1000Chips);
    // Changes chip count counter
    betAmount = 1000;
    document.getElementById('chip-count').textContent = '1000';
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