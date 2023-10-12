/** Randomises numbers to select cards from cards array
 * Adds selected cards to new arrays
 */
function selectInitialCards() {
    // Selects player cards number
    const firstPlayerCard = Math.floor(Math.random() * 52);
    const secondPlayerCard = Math.floor(Math.random() * 52);
    // Selects dealers cards number
    const firstDealerCard = Math.floor(Math.random() * 52);
    const secondDealerCard = Math.floor(Math.random() * 52);

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
    const displayFirstCard = document.createElement('img');
    const displaySecondCard = document.createElement('img');
    const displayDealerCard = document.createElement('img');

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
    displayReverseCard.alt = `upside down deales card`;
    // Insert the created images to corresponding card containers
    document.getElementById('players-card-container').appendChild(displayFirstCard);
    document.getElementById('players-card-container').appendChild(displaySecondCard);
    document.getElementById('dealers-card-container').appendChild(displayDealerCard);
    document.getElementById('dealers-card-container').appendChild(displayReverseCard);
}

/**
 * Positions a drawn card in a fan like manner
 */
function drawCard(drawnCard, drawOneCard, hit) {
    // Variables used to control the position of drawn cards
    let moveCardLeft = 0;
    let moveCardBottom = 0;
    let rotateCard = 0;

    // Determines whether it's dealers turn or not and controls the position of the cards
    if (document.getElementById('hit-btn').style.display === 'none') {
        moveCardLeft = (2 - dealerCards.length)*2 - 3.5;
        moveCardBottom = (dealerCards.length - 2)*0.2
        rotateCard = (dealerCards.length - 2)*5;
    } else {
        moveCardLeft = (2 - playerCards.length)*2 - 3.5;
        moveCardBottom = (playerCards.length - 2)*0.2
        rotateCard = (playerCards.length - 2)*5;
    }

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