"use strict";

class Card {
    _suit = "";
    _value = "";

    constructor(suit, value) {
        this._suit = suit;
        this._value = value;        
    }

    get suit() {
        return this._suit;
    }

    get value() {
        return this._value;
    }

    print() {
        return this._value + " of " + this._suit;
    }
}

class Deck {
    _theDeck = [];
    _suitList = ["Clubs", "Diamonds", "Hearts", "Spades"];
    _valueList = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"]

    constructor(decks) {
        let suitCount = 0;
        let valueCount = 0;

        if (isNaN(decks)) {
            decks = 1;
        }

        for (let i = 0; i < (decks * 52); i++) {
            this._theDeck[i] = new Card(this._suitList[suitCount], this._valueList[valueCount]);
            valueCount++;
            if (valueCount > 12) {
                suitCount++;
                valueCount = 0;
                if (suitCount > 3) {
                    suitCount = 0;
                    valueCount = 0;
                }
            }
        }
    }

    printDeck() {
        let deckList = "";
        for (let i = 0; i < this._theDeck.length; i++) {
            deckList += this._theDeck[i].print() + "\n";
        }
        return deckList;
    }

    shuffle() {
        let m = this._theDeck.length;
        let i, t;

        while (m) {
            i = Math.floor(Math.random() * m--);

            t = this._theDeck[m];
            this._theDeck[m] = this._theDeck[i];
            this._theDeck[i] = t;
        }
    }

    resetDeck(decks) {
        this._theDeck.length = 0;

        let suitCount = 0;
        let valueCount = 0;

        if (isNaN(decks)) {
            decks = 1;
        }

        for (let i = 0; i < (decks * 52); i++) {
            this._theDeck[i] = new Card(this._suitList[suitCount], this._valueList[valueCount]);
            valueCount++;
            if (valueCount > 12) {
                suitCount++;
                valueCount = 0;
                if (suitCount > 3) {
                    suitCount = 0;
                    valueCount = 0;
                }
            }
        }
    }

    dealCard() {
        return this._theDeck.pop();
    }

    cardsRemaining() {
        return this._theDeck.length;
    }
}

class Player {
    _hand = [];
    _hidden = [];
    _score = 0;

    giveCard(card, hidden) {
        this._hand.push(card);
        this._hidden.push(hidden);
    }

    get hand() {
        return this._hand;
    }

    get hidden() {
        return this._hidden;
    }

    getScore() {
        return this._score;
    }

    addScore(points) {
        this._score += points;
    }

    resetHand() {
        this._hand.length = 0;
        this._hidden.length = 0;
    }
}

class CardImages {
    _images = {};

    constructor() {
        for (let cardName in cards) {
            this._images[cardName] = new Image();
            this._images[cardName].onload = function() {
                gfxLoad++;
                if (gfxLoad >= 53) {
                    document.getElementById("centerBlock").innerHTML = '<br><br><div id="playField"></div><br><br>';
                    document.getElementById("centerBlock").innerHTML += '<div id="buttons"></div><br>';
                    document.getElementById("centerBlock").innerHTML += '<button id="newGame" onmousedown="newGame()">New Game</button>';
                }
            }
            this._images[cardName].src = cards[cardName];
        }
    }

    getGFX(name) {
        return this._images[name];
    }
}