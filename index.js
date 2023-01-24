// DOM elements
const splashScreen = document.querySelector("#splash-screen")
const startBtn = document.querySelector("#start-game-btn")

const betScreen = document.querySelector("#bet-screen")

const gameScreen = document.querySelector("#game-screen")
const hitBtn = document.querySelector("#hit")
const standBtn = document.querySelector("#stand")

const dealerHandUL = document.querySelector("#dealer-hand")
const playerHandUL = document.querySelector("#player-hand")

const playerScoreAside = document.querySelector("#player-score-aside")
const playerScoreValue = playerScoreAside.querySelector("span")

const betMoneyAside = document.querySelector("#bet-money-aside")
const betMoneyPile = document.querySelector("#bet-money-pile")

const moneyPlayerAside = document.querySelector("#money-player-aside")
const moneyPlayerImg = document.querySelector("#money-player-img")

const hiddenGame = document.querySelectorAll(".ctnHidden")
const betMiddleAside = document.querySelector("#bet-middle-aside")
const betMiddleImg = document.querySelector("#bet-middle-img")

const playerBtn = document.querySelector("#btnHidden")


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
      };
  
      this.dealer = {
        Hand : [],
        Bet : 0,
        Money : 2500,
        cardsCount: 0,
        canDraw : true,
      }

      // Initializing some variables
      this.isBlackjack = false
  }
  // END Constructor

  // START Methods

    showScore(hand) {
      let score = hand.reduce((acc, current) => acc + current.value, 0)
      return score
    }

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

    drawCard() {
      // Picks a random card in the deck, puts it in the player hand array and removes it from the deck until shuffled.
      const randCard = this.cardsDeck[Math.floor(Math.random() * this.cardsDeck.length)];
      this.cardsDeck.splice(this.cardsDeck.indexOf(randCard), 1);
      this.removedDeck.push(randCard)
      if(this.player.Go && this.player.canDraw){
        this.player.Hand.push(randCard);
        const newCardLI = document.createElement("li");
        const newImg = document.createElement("img");
        newImg.setAttribute("src", `${randCard.faceUp}`);
        playerHandUL.appendChild(newCardLI);
        newCardLI.appendChild(newImg);
        this.player.cardsCount += 1;
      }
      else if(!this.player.Go && this.dealer.canDraw) {
        this.dealer.Hand.push(randCard);
        const newCardLI = document.createElement("li");
        const newImg = document.createElement("img");
        dealerHandUL.appendChild(newCardLI);
        if(this.dealer.cardsCount === 0) {
          newImg.setAttribute("src", `${randCard.faceDown}`)
        }
        else {
          newImg.setAttribute("src", `${randCard.faceUp}`)
        }
        newCardLI.appendChild(newImg);
        this.dealer.cardsCount += 1
      }

      playerScoreValue.innerText = this.showScore(this.player.Hand)
      return randCard
    }

    checkBlackjack() {
      if (this.showScore(this.player.Hand) === 21 && this.showScore(this.dealer.Hand) < 21) {
        return "Blackjack! You won!"
      }
      else if(this.showScore(this.dealer.Hand) === 21 && this.showScore(this.player.Hand) < 21){
        return "Blackjack! The dealer wins!"
      }
      else if(this.showScore(this.player.Hand) === 21 && this.showScore(this.player.Hand) === this.showScore(this.dealer.Hand)) {
        return "What are the odds! A Blackjack tie!"
      }
    }
    
    playerBet() {
      betMoneyPile.setAttribute("src", this.showMoney(this.player.Money))
      betMoneyAside.firstChild.innerText = "Your money: " + this.player.Money + "¢"

      const betInput = document.querySelector("#bet-input")
      const betOutput = document.querySelector("#bet-output")
      const betBtn = document.querySelector("#bet-btn")
      
      betInput.setAttribute("max", this.player.Money)
      betOutput.innerText = betInput.value

      // Event listener to display range value
      betInput.addEventListener("input", (event) => {
        betOutput.innerText = event.target.value
      })
      // Event listener to place the bet
      betBtn.onclick = () => {
        this.player.Money -= betInput.value
        this.player.Bet = betInput.value
        this.dealer.Bet = this.player.Bet
        this.totalBet = Number(this.player.Bet) + Number(this.dealer.Bet)

        betScreen.style.display = "none"
        gameScreen.style.display = "flex"
        playerBtn.style.display = "flex"
        this.playerTurn()
      }
    }

    playerTurn() {
      let delay = 300
      setTimeout(() => {
        this.drawCard()
      }, delay);
      setTimeout(() => {
        this.drawCard()
        this.player.Go = false
      }, delay*2);
      setTimeout(() => {
        this.drawCard()
      }, delay*3);
      setTimeout(() => {
        this.drawCard()
        this.player.Go = true
      }, delay*4);
      setTimeout(() => {
        hiddenGame.forEach(element => element.style.display = "flex" )
        console.log(moneyPlayerAside)
        moneyPlayerAside.firstChild.innerText = this.player.Money + "¢"
        moneyPlayerImg.setAttribute("src", this.showMoney(this.player.Money))
        betMiddleAside.firstChild.innerText = "Total bet: " + (Number(this.player.Bet) + Number(this.dealer.Bet)) + "¢"
        betMiddleImg.setAttribute("src", this.showMoney(this.totalBet))
        this.checkBlackjack()
      }, delay*5);


      // TESTING
      standBtn.onclick = () => {
        this.player.Go = false
      }
      hitBtn.onclick = () => {
        this.drawCard();
        console.log("clicking")
      }
    }

    shuffleDeck() {
      this.removedDeck.forEach(card => this.cardsDeck.push(card))
    }

    startGame() {
    // TEMPORARY - BACKLOG ADD A STARTING SCREEN WITH STORY?
      this.playerBet()
    }

}

// Event listener

window.onload = () => {
    startBtn.onclick = () => {
      splashScreen.style.display = "none";
      betScreen.style.display = "flex"
      const newGame = new Game
      newGame.startGame();
    };
}