// DOM elements
const splashScreen = document.querySelector("#splash-screen")
const startBtn = splashScreen.querySelector("button")
const gameScreen = document.querySelector("#game-screen")
const hitBtn = document.querySelector("#hit")
const standBtn = document.querySelector("#stand")
const dealerHandUL = document.querySelector("#dealer-hand")
const playerHandUL = document.querySelector("#player-hand")
const playerScore = document.querySelector("aside")
const playerScoreValue = document.querySelector("#player-score")

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
  
      this.player = {
        Hand : [],
        Money : 500,
        cardsCount: 0,
        Bet : 0,
        Go : true,
        canDraw : true,
      };
  
      this.dealer = {
        Hand : [],
        Money : 2500,
        cardsCount: 0,
        Bet : 0,
        canDraw : true,
        // Go : false,
      }

      // Initializing some conditions
      this.isBlackjack = false
      playerScore.style.display = "none"
  }
  // END Constructor

  // START Methods

    showScore(hand) {
      let score = hand.reduce((acc, current) => acc + current.value, 0)
      return score
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
        console.log("Blackjack! You won!")
        return "Blackjack! You won!"
      }
      else if(this.showScore(this.dealer.Hand) === 21 && this.showScore(this.player.Hand) < 21){
        console.log("Blackjack! The dealer wins!")
        return "Blackjack! The dealer wins!"
      }
      else if(this.showScore(this.player.Hand) === 21 && this.showScore(this.player.Hand) === this.showScore(this.dealer.Hand)) {
        console.log("What are the odds! A Blackjack tie!")
        return "What are the odds! A Blackjack tie!"
      }
    }
    
    playerTurn() {

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
        playerScore.style.display = "block"
      }, delay*5);
      
    
    this.checkBlackjack()
    this.playerTurn()
    }

}



// Event listener

window.onload = () => {
    startBtn.onclick = () => {
      splashScreen.style.display = "none";
      gameScreen.style.display = "flex";
      
      // animate();
      // TESTING
      const newGame = new Game
      newGame.startGame();
    };
}