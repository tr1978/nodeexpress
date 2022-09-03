"use strict";

let cards = {
    "Two of Clubs": "gfx/2C.png",
    "Three of Clubs": "gfx/3C.png",
    "Four of Clubs": "gfx/4C.png",
    "Five of Clubs": "gfx/5C.png",
    "Six of Clubs": "gfx/6C.png",
    "Seven of Clubs": "gfx/7C.png",
    "Eight of Clubs": "gfx/8C.png",
    "Nine of Clubs": "gfx/9C.png",
    "Ten of Clubs": "gfx/10C.png",
    "Jack of Clubs": "gfx/JC.png",
    "Queen of Clubs": "gfx/QC.png",
    "King of Clubs": "gfx/KC.png",
    "Ace of Clubs": "gfx/AC.png",
    "Two of Diamonds": "gfx/2D.png",
    "Three of Diamonds": "gfx/3D.png",
    "Four of Diamonds": "gfx/4D.png",
    "Five of Diamonds": "gfx/5D.png",
    "Six of Diamonds": "gfx/6D.png",
    "Seven of Diamonds": "gfx/7D.png",
    "Eight of Diamonds": "gfx/8D.png",
    "Nine of Diamonds": "gfx/9D.png",
    "Ten of Diamonds": "gfx/10D.png",
    "Jack of Diamonds": "gfx/JD.png",
    "Queen of Diamonds": "gfx/QD.png",
    "King of Diamonds": "gfx/KD.png",
    "Ace of Diamonds": "gfx/AD.png",
    "Two of Hearts": "gfx/2H.png",
    "Three of Hearts": "gfx/3H.png",
    "Four of Hearts": "gfx/4H.png",
    "Five of Hearts": "gfx/5H.png",
    "Six of Hearts": "gfx/6H.png",
    "Seven of Hearts": "gfx/7H.png",
    "Eight of Hearts": "gfx/8H.png",
    "Nine of Hearts": "gfx/9H.png",
    "Ten of Hearts": "gfx/10H.png",
    "Jack of Hearts": "gfx/JH.png",
    "Queen of Hearts": "gfx/QH.png",
    "King of Hearts": "gfx/KH.png",
    "Ace of Hearts": "gfx/AH.png",
    "Two of Spades": "gfx/2S.png",
    "Three of Spades": "gfx/3S.png",
    "Four of Spades": "gfx/4S.png",
    "Five of Spades": "gfx/5S.png",
    "Six of Spades": "gfx/6S.png",
    "Seven of Spades": "gfx/7S.png",
    "Eight of Spades": "gfx/8S.png",
    "Nine of Spades": "gfx/9S.png",
    "Ten of Spades": "gfx/10S.png",
    "Jack of Spades": "gfx/JS.png",
    "Queen of Spades": "gfx/QS.png",
    "King of Spades": "gfx/KS.png",
    "Ace of Spades": "gfx/AS.png",
    "back": "gfx/blue_back.png",
}

let noDecks = 6;
let gameDeck = new Deck(noDecks);
let imageGraphics = new CardImages();
gameDeck.shuffle();
let dealer = new Player();
let player = new Player();
let xValueD;
let xValueP;
let gfxLoad = 0;
