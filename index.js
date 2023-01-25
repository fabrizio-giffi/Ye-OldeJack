// DOM elements
const audioLoop = document.querySelector("audio")
const splashScreen = document.querySelector("#splash-screen")
const startBtn = document.querySelector("#start-game-btn")

const betScreen = document.querySelector("#bet-screen")

const gameScreen = document.querySelector("#game-screen")
const hitBtn = document.querySelector("#hit")
const standBtn = document.querySelector("#stand")

const gameOverScreen = document.querySelector("#game-over-screen")

const dealerHandUL = document.querySelector("#dealer-hand")
const playerHandUL = document.querySelector("#player-hand")

const playerScoreAside = document.querySelector("#player-score-aside")
const playerScoreValue = document.querySelector("#player-score-aside span")

const dealerScoreAside = document.querySelector("#dealer-score-aside")
const dealerScoreValue = document.querySelector("#dealer-score-aside span")
dealerScoreAside.style.display = "none"

const betMoneyAside = document.querySelector("#bet-money-aside")
const betMoneyPile = document.querySelector("#bet-money-pile")
const betDealerAside = document.querySelector("#bet-dealer-aside")
const betDealerPile = document.querySelector("#bet-dealer-pile")

const moneyPlayerAside = document.querySelector("#money-player-aside")
const moneyPlayerImg = document.querySelector("#money-player-img")
const moneyPlayerCtn = document.querySelector("#money-player-ctn")
moneyPlayerCtn.style.visibility = "hidden"

const moneyDealerAside = document.querySelector("#money-dealer-aside")
const moneyDealerImg = document.querySelector("#money-dealer-img")
const moneyDealerCtn = document.querySelector("#money-dealer-ctn")
moneyDealerCtn.style.visibility = "hidden"

const hiddenGame = document.querySelectorAll(".ctnHidden")
const betMiddleAside = document.querySelector("#bet-middle-aside")
const betMiddleImg = document.querySelector("#bet-middle-img")

const playerBtn = document.querySelector("#btnHidden")

// Manipulating the dialog tag
const dialog = document.querySelector("dialog")
const dialogText = dialog.querySelector("p")
const dialogBtn = dialog.querySelector("button")

// Full deck of cards - 52 cards - 4 Suits
// Hearts, Diamons, Clubs, Spades

class Game {
  constructor() {
    this.cardsDeck = [
      {name: "Ace of Hearts", value: 11, altValue: 1, faceUp: "./images/playing-cards/card-hearts-1.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Two of Hearts", value: 2, faceUp: "./images/playing-cards/card-hearts-2.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Three of Hearts", value: 3, faceUp: "./images/playing-cards/card-hearts-3.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Four of Hearts", value: 4, faceUp: "./images/playing-cards/card-hearts-4.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Five of Hearts", value: 5, faceUp: "./images/playing-cards/card-hearts-5.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Six of Hearts", value: 6, faceUp: "./images/playing-cards/card-hearts-6.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Seven of Hearts", value: 7, faceUp: "./images/playing-cards/card-hearts-7.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Eight of Hearts", value: 8, faceUp: "./images/playing-cards/card-hearts-8.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Nine of Hearts", value: 9, faceUp: "./images/playing-cards/card-hearts-9.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Ten of Hearts", value: 10, faceUp: "./images/playing-cards/card-hearts-10.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Jack of Hearts", value: 10, faceUp: "./images/playing-cards/card-hearts-11.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Queen of Hearts", value: 10, faceUp: "./images/playing-cards/card-hearts-12.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "King of Hearts", value: 10, faceUp: "./images/playing-cards/card-hearts-13.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Ace of Diamonds", value: 11, altValue: 1, faceUp: "./images/playing-cards/card-diamonds-1.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Two of Diamonds", value: 2, faceUp: "./images/playing-cards/card-diamonds-2.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Three of Diamonds", value: 3, faceUp: "./images/playing-cards/card-diamonds-3.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Four of Diamonds", value: 4, faceUp: "./images/playing-cards/card-diamonds-4.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Five of Diamonds", value: 5, faceUp: "./images/playing-cards/card-diamonds-5.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Six of Diamonds", value: 6, faceUp: "./images/playing-cards/card-diamonds-6.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Seven of Diamonds", value: 7, faceUp: "./images/playing-cards/card-diamonds-7.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Eight of Diamonds", value: 8, faceUp: "./images/playing-cards/card-diamonds-8.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Nine of Diamonds", value: 9, faceUp: "./images/playing-cards/card-diamonds-9.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Ten of Diamonds", value: 10, faceUp: "./images/playing-cards/card-diamonds-10.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Jack of Diamonds", value: 10, faceUp: "./images/playing-cards/card-diamonds-11.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Queen of Diamonds", value: 10, faceUp: "./images/playing-cards/card-diamonds-12.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "King of Diamonds", value: 10, faceUp: "./images/playing-cards/card-diamonds-13.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Ace of Clubs", value: 11, altValue: 1, faceUp: "./images/playing-cards/card-clubs-1.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Two of Clubs", value: 2, faceUp: "./images/playing-cards/card-clubs-2.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Three of Clubs", value: 3, faceUp: "./images/playing-cards/card-clubs-3.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Four of Clubs", value: 4, faceUp: "./images/playing-cards/card-clubs-4.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Five of Clubs", value: 5, faceUp: "./images/playing-cards/card-clubs-5.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Six of Clubs", value: 6, faceUp: "./images/playing-cards/card-clubs-6.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Seven of Clubs", value: 7, faceUp: "./images/playing-cards/card-clubs-7.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Eight of Clubs", value: 8, faceUp: "./images/playing-cards/card-clubs-8.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Nine of Clubs", value: 9, faceUp: "./images/playing-cards/card-clubs-9.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Ten of Clubs", value: 10, faceUp: "./images/playing-cards/card-clubs-10.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Jack of Clubs", value: 10, faceUp: "./images/playing-cards/card-clubs-11.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Queen of Clubs", value: 10, faceUp: "./images/playing-cards/card-clubs-12.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "King of Clubs", value: 10, faceUp: "./images/playing-cards/card-clubs-13.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Ace of Spades", value: 11, altValue: 1, faceUp: "./images/playing-cards/card-spades-1.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Two of Spades", value: 2, faceUp: "./images/playing-cards/card-spades-2.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Three of Spades", value: 3, faceUp: "./images/playing-cards/card-spades-3.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Four of Spades", value: 4, faceUp: "./images/playing-cards/card-spades-4.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Five of Spades", value: 5, faceUp: "./images/playing-cards/card-spades-5.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Six of Spades", value: 6, faceUp: "./images/playing-cards/card-spades-6.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Seven of Spades", value: 7, faceUp: "./images/playing-cards/card-spades-7.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Eight of Spades", value: 8, faceUp: "./images/playing-cards/card-spades-8.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Nine of Spades", value: 9, faceUp: "./images/playing-cards/card-spades-9.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Ten of Spades", value: 10, faceUp: "./images/playing-cards/card-spades-10.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Jack of Spades", value: 10, faceUp: "./images/playing-cards/card-spades-11.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Queen of Spades", value: 10, faceUp: "./images/playing-cards/card-spades-12.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "King of Spades", value: 10, faceUp: "./images/playing-cards/card-spades-13.png", faceDown: "./images/playing-cards/card-back1.png"},
      {name: "Shuffle Card"}
      ]
  
      this.removedDeck = []
      this.moneyDisplay = 0
      this.totalBet = 0

      this.player = {
        Hand : [],
        Bet : 0,
        Money : 500,
        cardsCount: 0,
        Go : true,
        canDraw : true,
        score : 0,
      };
  
      this.dealer = {
        Hand : [],
        Money : 2500,
        cardsCount: 0,
        canDraw : true,
        score : 0,
      }
  }

  // END Constructor

  // START Methods

    // // This function will sum the value of the cards in either hands and return it
    // // to be shown next to the player's and the dealer's hands
    showScore(whoseGo) {
      whoseGo.score = whoseGo.Hand.reduce((acc, current) => acc + current.value, 0)
      if (whoseGo.score <= 21) {
        return whoseGo.score
      }
      else if (whoseGo.score > 21) {
        return "Bust!"
      }
    }
  
    // // This function takes either player's or bet total money and displays
    // // a pile of coin accordingly.
    showMoney(money) {
      if(money > 200) {
        this.moneyDisplay = 500;
      }
      else if (money <= 200 && money > 50) {
        this.moneyDisplay = 200;
      }
      else if (money <= 50 && money > 20) {
        this.moneyDisplay = 50;
      }
      else if (money <= 20 && money > 10) {
        this.moneyDisplay = 20;
      }
      else {
        this.moneyDisplay = 10
      }
      return "./images/assets/"+this.moneyDisplay+".png"
    }


    checkBust(whoseGo) {
      if(whoseGo.score > 21) {
        whoseGo.Go = false
        whoseGo.canDraw = false
        return true
      }
    }

    drawCard(whoseGo) {
      // // Picks a random card from the deck, puts it in either player's or dealer's hand array
      // // Every time a card is drawn the score is updated
      let randCard = this.cardsDeck[Math.floor(Math.random() * this.cardsDeck.length)];

      // // if the shuffle card is drawn, the deck is shuffled before drawing the next card
      if(randCard.name === "Shuffle Card") {
        this.cardsDeck.splice(this.cardsDeck.indexOf(randCard), 1);
        this.removedDeck.push(randCard)
        randCard = this.cardsDeck[Math.floor(Math.random() * this.cardsDeck.length)]
        this.removedDeck.forEach(card => this.cardsDeck.push(card))
      }

      // //Removing card from the deck and putting into hand array
      this.cardsDeck.splice(this.cardsDeck.indexOf(randCard), 1);
      whoseGo.Hand.push(randCard);

      if(whoseGo.canDraw){
      // // Creating and appending new Img
      const newCardLI = document.createElement("li");
      const newImg = document.createElement("img");
      newImg.setAttribute("src", `${randCard.faceUp}`)
      newCardLI.appendChild(newImg);
      
      if(this.player.Go){
        playerHandUL.appendChild(newCardLI);
        playerScoreValue.innerText = this.showScore(whoseGo)
        // Implement check bust function
      }
      else {
        if(whoseGo.cardsCount === 0) {
          // Dealer's first card will be dealt face down
          newImg.setAttribute("src", `${randCard.faceDown}`)
          newImg.setAttribute("id", "face-down")
        }
        dealerHandUL.appendChild(newCardLI);
        dealerScoreValue.innerText = this.showScore(whoseGo)
        // Implement check bust function
      }
      whoseGo.cardsCount += 1;
      }
    }

    gameOver() {
      gameScreen.style.display = "none"
      playerBtn.style.display = "none"
      betScreen.style.display = "none"
      hiddenGame.forEach(element => element.style.display = "none")
      gameOverScreen.style.display = "flex"
    }
    gameWon() {
      gameScreen.style.display = "none"
      playerBtn.style.display = "none"
      betScreen.style.display = "none"
      hiddenGame.forEach(element => element.style.display = "none")
      gameOverScreen.style.display = "flex"
    }
    
    playerBet() {
      if(this.player.Money === 0) {
        this.gameOver()
      }
      if(this.dealer.Money <= 0) {
        this.gameWon()
      }
      this.player.Bet = 0
      splashScreen.style.display = "none";
      betScreen.style.display = "flex"
      betMoneyPile.setAttribute("src", this.showMoney(this.player.Money))
      betMoneyAside.firstChild.innerText = "Your money: " + this.player.Money + "¢"
      betDealerPile.setAttribute("src", this.showMoney(this.dealer.Money))
      betDealerAside.firstChild.innerText = "Dealer's money: " + this.dealer.Money + "¢"

      const betInput = document.querySelector("#bet-input")
      const betOutput = document.querySelector("#bet-output")
      const betBtn = document.querySelector("#bet-btn")
      
      if(this.player.Money < this.dealer.Money){
        betInput.setAttribute("max", this.player.Money)
      }
      else {
        betInput.setAttribute("max", this.dealer.Money)
      }
      betOutput.innerText = betInput.value
      
      // Event listener to display range value
      betInput.addEventListener("input", (event) => {
        betOutput.innerText = event.target.value
      })
      // Event listener to place the bet
      betBtn.onclick = () => {
        this.player.Money -= betInput.value
        this.dealer.Money -= betInput.value
        this.player.Bet = betInput.value
        this.totalBet = Number(this.player.Bet) * 2
        moneyPlayerAside.firstChild.innerText = this.player.Money + "¢"
        moneyDealerAside.firstChild.innerText = this.dealer.Money + "¢"
        moneyPlayerImg.setAttribute("src", this.showMoney(this.player.Money))
        moneyDealerImg.setAttribute("src", this.showMoney(this.dealer.Money))
        betScreen.style.display = "none"
        gameScreen.style.display = "flex"
        playerBtn.style.display = "flex"
        this.oneRound()
      }
    }

    endRound() {
      // // Cards in each hands go into the remove pile
      // // Hands are cleared, variable are restarted to default
      this.player.Hand.forEach(card => this.removedDeck.push(card))
      this.dealer.Hand.forEach(card => this.removedDeck.push(card))
      this.player.Hand.splice(0, this.player.Hand.length)
      this.dealer.Hand.splice(0, this.dealer.Hand.length)
      while (playerHandUL.firstChild) {
        playerHandUL.removeChild(playerHandUL.lastChild)
      }
      while (dealerHandUL.firstChild) {
        dealerHandUL.removeChild(dealerHandUL.lastChild)
      }
      this.player.cardsCount = 0
      this.dealer.cardsCount = 0
      gameScreen.style.display = "none"
      playerBtn.style.display = "none"
      dealerScoreAside.style.display = "none"
      hiddenGame.forEach(element => element.style.display = "none")
    }
    
    checkBlackjack() {

    // // Blackjack or "Natural" is checked only at the beginning of player's go.
    // // Although face down, we take into account dealer first card's value
    // // In case of Blackjack on any side, the face down card is revealed and so is dealer's score
      const firstCardImg = document.querySelector("#face-down")
      if (this.showScore(this.player) === 21 && this.showScore(this.dealer) < 21) {
        firstCardImg.setAttribute("src", `${this.dealer.Hand[0].faceUp}`)
        dealerScoreAside.style.display = "flex"
        this.player.Money += Number(this.totalBet) + Number(this.player.Bet) / 2
        this.dealer.Money -= Number(this.player.Bet) / 2
        betMiddleAside.parentNode.style.display = "none"
        dialog.style.display = "block"
        dialogText.innerText = 
`Blackjack!
You win ${Number(this.totalBet) + Number(this.player.Bet) / 2}!`
        dialogBtn.innerText = "Cool!"
      }
      else if(this.showScore(this.dealer) === 21 && this.showScore(this.player) < 21){
        firstCardImg.setAttribute("src", `${this.dealer.Hand[0].faceUp}`)
        dealerScoreAside.style.display = "flex"
        this.dealer.Money += Number(this.totalBet)
        betMiddleAside.parentNode.style.display = "none"
        dialog.style.display = "block"
        dialogText.innerText = 
`Blackjack!
Dealer takes the plate!`
        dialogBtn.innerText = "Noooo"
      }
      else if(this.showScore(this.player) === 21 && this.showScore(this.dealer) === 21) {
        firstCardImg.setAttribute("src", `${this.dealer.Hand[0].faceUp}`)
        dealerScoreAside.style.display = "flex"
        this.player.Money += Number(this.player.Bet)
        this.dealer.Money += Number(this.player.Bet)
        betMiddleAside.parentNode.style.display = "none"
        dialog.style.display = "block"
        dialogText.innerText =
`What are the odds!
A Blackjack tie!
Bets are returned.`
        dialogBtn.innerText = "¯\_(ツ)_/¯"
      }

    // The dialog button will run first the endRound function to reset everything to default
      dialogBtn.onclick = () => {
        dialog.style.display = "none"
        this.endRound()
        this.playerBet()
      }
    }

    checkWinner() {
    // // The checkWinner function will run at the end of dealer's go 
    // // with a delay of 1500ms to make user experience better.
      setTimeout(() => {

    // // The function will check whose score is higher
    if (!this.checkBust(this.player) && !this.checkBust(this.dealer)){
      if(this.player.score > this.dealer.score) {
        this.player.Money += Number(this.totalBet)
        betMiddleAside.parentNode.style.display = "none"
        dialog.style.display = "block"
        dialogText.innerText = 
`You beat the dealer!
You win ${this.totalBet}!`
        dialogBtn.innerText = "Cool!"
        }
      else if(this.player.score < this.dealer.score) {
        this.dealer.Money += Number(this.totalBet)
        betMiddleAside.parentNode.style.display = "none"
        dialog.style.display = "block"
        dialogText.innerText = 
`You lost!
Dealer takes the plate!`
        dialogBtn.innerText = "Damn."
        }
      else if(this.player.score === this.dealer.score) {
        this.player.Money += this.totalBet / 2
        this.dealer.Money += this.totalBet / 2
        betMiddleAside.parentNode.style.display = "none"
        dialog.style.display = "block"
        dialogText.innerText = 
`A tie!
Bets are returned.`
        dialogBtn.innerText = "¯\_(ツ)_/¯"
        }
    }
    // // In case of bust we check if the other party is also bust.
    // // There are three possibilities: only player bust, only dealer bust or double bust
    else if(!this.checkBust(this.player) && this.checkBust(this.dealer)) {
      this.player.Money += Number(this.totalBet)
      betMiddleAside.parentNode.style.display = "none"
      dialog.style.display = "block"
      dialogText.innerText = 
`Dealer is bust!
You win ${this.totalBet}!`
        dialogBtn.innerText = "Cool!"
        }
    else if(this.checkBust(this.player) && !this.checkBust(this.dealer)) {
      this.dealer.Money += Number(this.totalBet)
      betMiddleAside.parentNode.style.display = "none"
      dialog.style.display = "block"
      dialogText.innerText = 
`Bust!
Dealer takes the plate!`
        dialogBtn.innerText = "Damn."
        }

    // // In case of a double bust we check whose bust is "worse".
    // // This scenario leads to 3 different states: player win, dealer win or tie.
        else if(this.checkBust(this.player) && this.checkBust(this.dealer)) {
          if(this.player.score > this.dealer.score) {
            this.dealer.Money += Number(this.totalBet)
            betMiddleAside.parentNode.style.display = "none"
            dialog.style.display = "block"
            dialogText.innerText = 
  `Bust!
  Dealer takes the plate!`
            dialogBtn.innerText = "Damn."
          }
          else if(this.player.score < this.dealer.score) {
            this.player.Money += Number(this.totalBet)
            betMiddleAside.parentNode.style.display = "none"
            dialog.style.display = "block"
            dialogText.innerText = 
  `Dealer is bust!
  You win ${this.totalBet}!`
          dialogBtn.innerText = "Cool!"
          }
          else if(this.player.score === this.dealer.score) {
            this.player.Money += this.totalBet / 2
            this.dealer.Money += this.totalBet / 2
            betMiddleAside.parentNode.style.display = "none"
            dialog.style.display = "block"
            dialogText.innerText = 
  `A tie!
  Bets are returned.`
            dialogBtn.innerText = "¯\_(ツ)_/¯"
          }
        }

    // // No matter the outcome, pressing the button on the dialog box would lead
    // // straight back to the betting screen for the next round to begin.
        dialogBtn.onclick = () => {
          dialog.style.display = "none"
          this.endRound()
          this.playerBet()
        }
      }, 1500)
  }

    dealerGo() {
      const firstCardImg = document.querySelector("#face-down")

      firstCardImg.setAttribute("src", `${this.dealer.Hand[0].faceUp}`)
      dealerScoreAside.style.display = "flex"

      while(this.showScore(this.dealer) <= 17) {
        this.drawCard(this.dealer)
        }
        this.checkWinner()
      }


    oneRound() {
      // // Taking variables back to default value for every new round
      this.player.Go = true
      this.player.canDraw = true
      this.dealer.canDraw = true
      setTimeout(() => {
        this.drawCard(this.player)
      }, 300);
      setTimeout(() => {
        this.drawCard(this.player)
        this.player.Go = false
      }, 600);
      setTimeout(() => {
        this.drawCard(this.dealer)
      }, 900);
      setTimeout(() => {
        this.drawCard(this.dealer)
        this.player.Go = true
      }, 1200);
      setTimeout(() => {
        hiddenGame.forEach(element => element.style.display = "flex" )
        moneyPlayerCtn.style.visibility = "visible"
        moneyDealerCtn.style.visibility = "visible"
        betMiddleAside.firstChild.innerText = "Total bet: " + (Number(this.player.Bet) *2) + "¢"
        betMiddleImg.setAttribute("src", this.showMoney(this.totalBet))
        this.checkBlackjack()
      }, 1500);

      hitBtn.onclick = () => {
        this.drawCard(this.player);
        if(this.checkBust(this.player)) {
          this.dealerGo()
        }
      }
      standBtn.onclick = () => {
        this.player.Go = false
        this.dealerGo()
      }
    }

    startGame() {
    // TEMPORARY - BACKLOG ADD A STARTING SCREEN WITH STORY?
      this.playerBet()
    }
}

// Event listener

window.onload = () => {
    audioLoop.volume = 0.1

    startBtn.onclick = () => {
      const newGame = new Game
      newGame.startGame();
    };
}