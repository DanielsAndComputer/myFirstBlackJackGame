//
//
//
//declared variables will be down here
const startGameBtn = document.querySelector("#start-Game-btn-el");
const drawCardBtn = document.querySelector("#draw-card-btn-el");
const displayCd = document.querySelector("#display-card-el");
const displaySm = document.querySelector("#display-sum-el");
const userEl = document.querySelector("#user-el");
let messageEl = document.querySelector("#message-el");
let resetEl = document.querySelector("#start-over-el");

//
//
startGameBtn.addEventListener("click", startGame);
drawCardBtn.addEventListener("click", drawCard);
resetEl.addEventListener("click", reset);

let hasBlackJack = false;
let sum = 0;
//let isAlive = false;
//
//
const playerDetail = {
  name: "Samuel",
  chips: "300",
};
// ## ARRAYS
// my Cards[} that holds the card the user get
let cards = [];
//

//player detail function
function detail() {
  userEl.textContent = `${playerDetail.name.toUpperCase()} : $${
    playerDetail.chips
  }`;
}
// displaying the status for the user with msg function
function msg() {
  i = "";
  if (sum <= 20) {
    i = message = "Do you want to draw a new card";
  } else if (sum === 21) {
    i = message = "You got a BlackJack";
    hasBlackJack = true;
  } else {
    i = message = "Sorry but you're out of the game";
    isAlive = false;
  }
  messageEl.textContent = i;
}
// creating the randomCard()
function randomCard() {
  i = Math.floor(Math.random() * 9) + 1;
  if (i >= 10) {
    i = 10;
  } else if (i === 1) {
    i = 11;
  }
  return i;
}
// creating the game status function
function gameStatus() {
  if (sum < 21) {
    return console.log("You are still in the game! draw another card");
  } else if (sum === 21) {
    return console.log("Boom!! you Got a BLACKJAJCK");
  } else {
    return console.log("Sorry, You're out of the game");
  }
}
// creating the draw-card-btn functioin
function drawCard() {
  if (sum < 21 && sum != 0) {
    let i = randomCard();
    cards.push(i);
    sum += i;
    console.log(sum);
    console.log(cards);
    displaySum();
    displayCard();
    msg();
    return i;
  }
}
// Displaying sum with the display sum function
function displaySum() {
  let i = (displaySm.textContent = "Sum: " + sum);
  return i;
}
// creating the display card function
// it displayer the cards the user has on the web page
function displayCard() {
  displayCd.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    displayCd.innerHTML += ` ${cards[i]} `;
  }
}
//reset function -- start game all over
function reset() {
  cards = [];
  sum = 0;
  displayCard();
  displaySum();
  msg();
  detail();
}

// creating the start function
function startGame() {
  if (sum === 0) {
    cards.push(randomCard());
    cards.push(randomCard());
    sum = cards[0] + cards[1];
    displayCard();
    displaySum();
    msg();
    detail();
  }
}
