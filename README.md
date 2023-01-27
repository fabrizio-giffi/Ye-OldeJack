# Ye OldeJack

## Description
Ye OldeJack is a card game based on modern Blackjack rules. The script is built in JS and revolves around DOM manipulation.
Player and dealer will have a set amount of money to start with and the game keeps going as long as either money pile reaches zero, at which point a victory or a game over screen will be shown that will prompt the user to start a new game.

## Running the game
Ye OldeJack can be played in its early access version via this link https://fabrizio-giffi.github.io/Ye-OldeJack/.
It runs best on computer/laptop screens. When accessing the link on a smartphone make sure to display the desktop version on your mobile browser and the game will be decent enough to be played.
Firefox users can toggle music on and off with the button fixed at the top left corner of their screen, Chrome users will play music as soon as the start game button is clicked.

## Rules
Rules can be found in game clicking on the rules button right on the starting screen.
**Big clarification to be made:** 
To avoid imbalance in favor of the dealer, when the player busts they still have a chance to win. The dealer will run the normal rituals and, in case he also busts, the "worst bust" (the highest score count) will be the losing one.

- The player attempts to beat the dealer by getting a count as close to 21 as possible, without going over 21.
- An ace is worth 1 or 11. Jack, Queen and King cards are worth 10 and any other card is worth its pip value.
- Bets are placed before the deal begins.
- If a player's first two cards are an ace and a "ten-card" this is an OldeJack!
- If the player has an OldeJack and the dealer doesn't, they win one and a half times the amount bet.
- On their go, the player can decide whether to "hit", that is, ask for another card, or to "stand" and leave the dealer up to go.
- If the total count goes over 21 the player goes "bust" and immediately loses unless the dealer also busts.
- In case of a double bust, the player with the highest count is the loser.
- Dealer turns begins by revealing their face-down card. Dealer must continue to take cards until they reach a total of 17 or more, at which point the dealer must stand.

## Known bugs
- Unexpected behaviour with aces score count when two aces are the first cards in either hand.
The likelihood of running into this bug is statistically 1 on 2704 rounds played.

**Feel free to report to me if you encounter any bug, both UI or UX related.**

## Backlog
- Make the graphics fully responsive for a better user experience on any device.
- Better dealer logic when they have aces in their hand.
- Doubledown and split options like in modern Blackjack.
- Card animations and visual upgrades.

## Links
### Repo
https://github.com/fabrizio-giffi/Ye-OldeJack
### Deploy
https://fabrizio-giffi.github.io/Ye-OldeJack/
### Slides
https://docs.google.com/presentation/d/1yT67OPtIjww7EmOdZ3ryEiLjz-HNz-rb50JckOZdFHw/edit?usp=sharing