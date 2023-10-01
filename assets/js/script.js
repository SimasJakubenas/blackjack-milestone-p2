/* Deck of Cards array */
let cards = [
    {
        name: "ace",
        suit: "spades",
        value: 11,
        image: "ace-spades.png"
    },
    {
        name: "king",
        suit: "spades",
        value: 10,
        image: "king-spades.png"
    },
    {
        name: "queen",
        suit: "spades",
        value: 10,
        image: "queen-spades.png"
    },
    {
        name: "jack",
        suit: "spades",
        value: 10,
        image: "jack-spades.png"
    },
    {
        name: "ten",
        suit: "spades",
        value: 10,
        image: "10spades.png"
    },
    {
        name: "nine",
        suit: "spades",
        value: 9,
        image: "9spades.png"
    },
    {
        name: "eight",
        suit: "spades",
        value: 8,
        image: "8spades.png"
    },
    {
        name: "seven",
        suit: "spades",
        value: 7,
        image: "7spades.png"
    },
    {
        name: "six",
        suit: "spades",
        value: 6,
        image: "6spades.png"
    },
    {
        name: "five",
        suit: "spades",
        value: 5,
        image: "5spades.png"
    },
    {
        name: "four",
        suit: "spades",
        value: 4,
        image: "4spades.png"
    },
    {
        name: "trey",
        suit: "spades",
        value: 3,
        image: "3spades.png"
    },
    {
        name: "deuce",
        suit: "spades",
        value: 2,
        image: "2spades.png"
    },
    {
        name: "ace",
        suit: "clubs",
        value: 11,
        image: "ace-clubs.png"
    },
    {
        name: "king",
        suit: "clubs",
        value: 10,
        image: "king-clubs.png"
    },
    {
        name: "queen",
        suit: "clubs",
        value: 10,
        image: "queen-clubs.png"
    },
    {
        name: "jack",
        suit: "clubs",
        value: 10,
        image: "jack-clubs.png"
    },
    {
        name: "ten",
        suit: "clubs",
        value: 10,
        image: "10clubs.png"
    },
    {
        name: "nine",
        suit: "clubs",
        value: 9,
        image: "9clubs.png"
    },
    {
        name: "eight",
        suit: "clubs",
        value: 8,
        image: "8clubs.png"
    },
    {
        name: "seven",
        suit: "clubs",
        value: 7,
        image: "7clubs.png"
    },
    {
        name: "six",
        suit: "clubs",
        value: 6,
        image: "6clubs.png"
    },
    {
        name: "five",
        suit: "clubs",
        value: 5,
        image: "5clubs.png"
    },
    {
        name: "four",
        suit: "clubs",
        value: 4,
        image: "4clubs.png"
    },
    {
        name: "trey",
        suit: "clubs",
        value: 3,
        image: "3clubs.png"
    },
    {
        name: "deuce",
        suit: "clubs",
        value: 2,
        image: "2clubs.png"
    },
    {
        name: "ace",
        suit: "hearts",
        value: 11,
        image: "ace-hearts.png"
    },
    {
        name: "king",
        suit: "hearts",
        value: 10,
        image: "king-hearts.png"
    },
    {
        name: "queen",
        suit: "hearts",
        value: 10,
        image: "queen-hearts.png"
    },
    {
        name: "jack",
        suit: "hearts",
        value: 10,
        image: "jack-hearts.png"
    },
    {
        name: "ten",
        suit: "hearts",
        value: 10,
        image: "10hearts.png"
    },
    {
        name: "nine",
        suit: "hearts",
        value: 9,
        image: "9hearts.png"
    },
    {
        name: "eight",
        suit: "hearts",
        value: 8,
        image: "8hearts.png"
    },
    {
        name: "seven",
        suit: "hearts",
        value: 7,
        image: "7hearts.png"
    },
    {
        name: "six",
        suit: "hearts",
        value: 6,
        image: "6hearts.png"
    },
    {
        name: "five",
        suit: "hearts",
        value: 5,
        image: "5hearts.png"
    },
    {
        name: "four",
        suit: "hearts",
        value: 4,
        image: "4hearts.png"
    },
    {
        name: "trey",
        suit: "hearts",
        value: 3,
        image: "3hearts.png"
    },
    {
        name: "deuce",
        suit: "hearts",
        value: 2,
        image: "2hearts.png"
    },
    {
        name: "ace",
        suit: "diamonds",
        value: 11,
        image: "ace-diamonds.png"
    },
    {
        name: "king",
        suit: "diamonds",
        value: 10,
        image: "king-diamonds.png"
    },
    {
        name: "queen",
        suit: "diamonds",
        value: 10,
        image: "queen-diamonds.png"
    },
    {
        name: "jack",
        suit: "diamonds",
        value: 10,
        image: "jack-diamonds.png"
    },
    {
        name: "ten",
        suit: "diamonds",
        value: 10,
        image: "10diamonds.png"
    },
    {
        name: "nine",
        suit: "diamonds",
        value: 9,
        image: "9diamonds.png"
    },
    {
        name: "eight",
        suit: "diamonds",
        value: 8,
        image: "8diamonds.png"
    },
    {
        name: "seven",
        suit: "diamonds",
        value: 7,
        image: "7diamonds.png"
    },
    {
        name: "six",
        suit: "diamonds",
        value: 6,
        image: "6diamonds.png"
    },
    {
        name: "five",
        suit: "diamonds",
        value: 5,
        image: "5diamonds.png"
    },
    {
        name: "four",
        suit: "diamonds",
        value: 4,
        image: "4diamonds.png"
    },
    {
        name: "trey",
        suit: "diamonds",
        value: 3,
        image: "3diamonds.png"
    },
    {
        name: "deuce",
        suit: "diamonds",
        value: 2,
        image: "2diamonds.png"
    },
]

// Global variables that has to be accessed by multiple functions
let playerCards = [];
let dealerCards = [];

let playerSum = 0;
let dealerSum = 0;

let displayReverseCard = document.createElement('img'); // Dealers reverse card

// Loads the page before adding event listeners to game buttons and chip selection
window.onload = function() {
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
}

function dealHand() {
    selectInitialCards()
    displayInitialCards()
    displayCardValuesSum()
    buttonSwap()
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
}

/**
 * DIsplay deal and reset buttons and players field section on repeat game
 * Hide betting buttons and display play buttons
 * Hide bet selection
 */
function buttonSwap() {
    document.getElementById('players-field').style.display ='unset'; // Display players field uppon repeat game
    // Display deal and reset buttons
    document.getElementById('deal-btn').style.display ='none';
    document.getElementById('reset-btn').style.display ='none';
    // hide hit and stand buttons
    document.getElementById('hit-btn').style.display ='unset';
    document.getElementById('stand-btn').style.display ='unset';
    document.getElementById('bet-section').style.visibility ='hidden'; // Hide chip selection section
}

function dealerBlackjackCheck() {

}

function selectBetSize() {

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

    // Assign drawn card's attributes
    drawOneCard.src = `assets/images/cards/${cards[drawnCard].image}`;
    drawOneCard.alt = `${cards[drawnCard].name}`;
    
    document.getElementById('players-card-container').appendChild(drawOneCard); // Adds drawn card to player cards container
    playerCards.push(cards[drawnCard]); // Adds drawn card to playerCards array
    // Update player card's value sum
    playerSum += cards[drawnCard].value;
    document.getElementById('players-count').textContent = playerSum;
    // Check the sum of player's cards to determine game outcome
    if (playerSum > 21) { // Game lost
        console.log('game over')
        // Hides hit and stand buttons, displays bet button
        document.getElementById('bet-btn').style.display ='unset';
        document.getElementById('hit-btn').style.display ='none';
        document.getElementById('stand-btn').style.display ='none';
    } else if (playerSum === 21) { // Blackjack - player wins
        console.log('Blackjack!')
        // Hides hit and stand buttons, displays bet button
        document.getElementById('bet-btn').style.display ='unset';
        document.getElementById('hit-btn').style.display ='none';
        document.getElementById('stand-btn').style.display ='none';
    } else {
    console.log(playerSum);
    }
}

function determineAceValue() {

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

        // Assign drawn card's attributes
        dealerDrawsCard.src = `assets/images/cards/${cards[dealerDrawnCard].image}`;
        dealerDrawsCard.alt = `${cards[dealerDrawnCard].name}`;
        // Adds drawn card to player cards container
        document.getElementById('dealers-card-container').appendChild(dealerDrawsCard);
        // Updates dealer's card value sum
        dealerSum += cards[dealerDrawnCard].value;
        document.getElementById('dealers-count').textContent = dealerSum;
    }
    // Checks for game outcomes depending on dealer sum
    if (dealerSum === 21) {
        console.log('Dealer has Blackjack!');
    } else if (dealerSum > 21){
        console.log('bust');
    } else {
        console.log('dealerSum');
    }
    // Displays bet button
    document.getElementById('bet-btn').style.display ='unset';
}

function bet50() {

}

function bet100() {

}

function bet200() {

}

function bet500() {

}

function bet1000() {
    
}