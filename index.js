// DOM elements
const splashScreen = document.querySelector("#splash-screen")
const startBtn = splashScreen.querySelector("button")
const gameScreen = document.querySelector("#game-screen")
const myCanvas = document.querySelector("canvas")
const ctx = myCanvas.getContext("2d")


// Full deck of cards - 52 cards - 4 Suits
// Hearts, Diamons, Clubs, Spades

const cardsDeck = [
  {name: "Ace of Hearts", value: 1, altValue: 11, src: "./images/Playing Cards/card-hearts-1.png"},
  {name: "Two of Hearts", value: 2, src: "./images/Playing Cards/card-hearts-2.png"},
  {name: "Three of Hearts", value: 3, src: "./images/Playing Cards/card-hearts-3.png"},
  {name: "Four of Hearts", value: 4, src: "./images/Playing Cards/card-hearts-4.png"},
  {name: "Five of Hearts", value: 5, src: "./images/Playing Cards/card-hearts-5.png"},
  {name: "Six of Hearts", value: 6, src: "./images/Playing Cards/card-hearts-6.png"},
  {name: "Seven of Hearts", value: 7, src: "./images/Playing Cards/card-hearts-7.png"},
  {name: "Eight of Hearts", value: 8, src: "./images/Playing Cards/card-hearts-8.png"},
  {name: "Nine of Hearts", value: 9, src: "./images/Playing Cards/card-hearts-9.png"},
  {name: "Ten of Hearts", value: 10, src: "./images/Playing Cards/card-hearts-10.png"},
  {name: "Jack of Hearts", value: 10, src: "./images/Playing Cards/card-hearts-11.png.png"},
  {name: "Queen of Hearts", value: 10, src: "./images/Playing Cards/card-hearts-12.png"},
  {name: "King of Hearts", value: 10, src: "./images/Playing Cards/card-hearts-13.png"},
  {name: "Ace of Diamonds", value: 1, altValue: 11, src: "./images/Playing Cards/card-diamonds-1.png"},
  {name: "Two of Diamonds", value: 2, src: "./images/Playing Cards/card-diamonds-2.png"},
  {name: "Three of Diamonds", value: 3, src: "./images/Playing Cards/card-diamonds-3.png"},
  {name: "Four of Diamonds", value: 4, src: "./images/Playing Cards/card-diamonds-4.png"},
  {name: "Five of Diamonds", value: 5, src: "./images/Playing Cards/card-diamonds-5.png"},
  {name: "Six of Diamonds", value: 6, src: "./images/Playing Cards/card-diamonds-6.png"},
  {name: "Seven of Diamonds", value: 7, src: "./images/Playing Cards/card-diamonds-7.png"},
  {name: "Eight of Diamonds", value: 8, src: "./images/Playing Cards/card-diamonds-8.png"},
  {name: "Nine of Diamonds", value: 9, src: "./images/Playing Cards/card-diamonds-9.png"},
  {name: "Ten of Diamonds", value: 10, src: "./images/Playing Cards/card-diamonds-10.png"},
  {name: "Jack of Diamonds", value: 10, src: "./images/Playing Cards/card-diamonds-11.png"},
  {name: "Queen of Diamonds", value: 10, src: "./images/Playing Cards/card-diamonds-12.png"},
  {name: "King of Diamonds", value: 10, src: "./images/Playing Cards/card-diamonds-13.png"},
  {name: "Ace of Clubs", value: 1, altValue: 11, src: "./images/Playing Cards/card-clubs-1.png"},
  {name: "Two of Clubs", value: 2, src: "./images/Playing Cards/card-clubs-2.png"},
  {name: "Three of Clubs", value: 3, src: "./images/Playing Cards/card-clubs-3.png"},
  {name: "Four of Clubs", value: 4, src: "./images/Playing Cards/card-clubs-4.png"},
  {name: "Five of Clubs", value: 5, src: "./images/Playing Cards/card-clubs-5.png"},
  {name: "Six of Clubs", value: 6, src: "./images/Playing Cards/card-clubs-6.png"},
  {name: "Seven of Clubs", value: 7, src: "./images/Playing Cards/card-clubs-7.png"},
  {name: "Eight of Clubs", value: 8, src: "./images/Playing Cards/card-clubs-8.png"},
  {name: "Nine of Clubs", value: 9, src: "./images/Playing Cards/card-clubs-9.png"},
  {name: "Ten of Clubs", value: 10, src: "./images/Playing Cards/card-clubs-10.png"},
  {name: "Jack of Clubs", value: 10, src: "./images/Playing Cards/card-clubs-11.png"},
  {name: "Queen of Clubs", value: 10, src: "./images/Playing Cards/card-clubs-12.png"},
  {name: "King of Clubs", value: 10, src: "./images/Playing Cards/card-clubs-13.png"},
  {name: "Ace of Spades", value: 1, altValue: 11, src: "./images/Playing Cards/card-spades-1.png"},
  {name: "Two of Spades", value: 2, src: "./images/Playing Cards/card-spades-2.png"},
  {name: "Three of Spades", value: 3, src: "./images/Playing Cards/card-spades-3.png"},
  {name: "Four of Spades", value: 4, src: "./images/Playing Cards/card-spades-4.png"},
  {name: "Five of Spades", value: 5, src: "./images/Playing Cards/card-spades-5.png"},
  {name: "Six of Spades", value: 6, src: "./images/Playing Cards/card-spades-6.png"},
  {name: "Seven of Spades", value: 7, src: "./images/Playing Cards/card-spades-7.png"},
  {name: "Eight of Spades", value: 8, src: "./images/Playing Cards/card-spades-8.png"},
  {name: "Nine of Spades", value: 9, src: "./images/Playing Cards/card-spades-9.png"},
  {name: "Ten of Spades", value: 10, src: "./images/Playing Cards/card-spades-10.png"},
  {name: "Jack of Spades", value: 10, src: "./images/Playing Cards/card-spades-11.png"},
  {name: "Queen of Spades", value: 10, src: "./images/Playing Cards/card-spades-12.png"},
  {name: "King of Spades", value: 10, src: "./images/Playing Cards/card-spades-13.png"},  
  ]
  const cardFaceDown = {
    name: "Face Down",
    src: "./images/Playing Cards/card-back1.png",
  }

  let animateID

  const faceDown = new Image
  faceDown.src = cardsDeck[14].src

  const animate = function () {
    ctx.drawImage(faceDown, 0, 0, 150, 200)
    animateID = requestAnimationFrame(animate)
  }


// Event listener

window.onload = () => {
    startBtn.onclick = () => {
      splashScreen.style.display = "none";
      gameScreen.style.display = "flex";
      animate();
    };
}