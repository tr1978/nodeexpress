"use strict";

document.addEventListener("DOMContentLoaded", gameLoaded, false);

function gameLoaded() {
    document.getElementById("centerBlock").innerHTML = '<br><br><br><br><br><br><h1>LOADING</h1>';
    document.getElementById("centerBlock").innerHTML += '<br><img src="gfx/load.gif">'
}

function newGame() {
    document.getElementById("newGame").disabled = true;
    let table = document.getElementById("playField");
    table.innerHTML = '<canvas id="gameArea" width="1200" height="700" style="border:1px solid #000000; background:#007000;"></canvas>';
    let gameArea = document.getElementById("gameArea");
    let drawCTX = gameArea.getContext("2d");
    drawCTX.fillStyle = "#007000";
    drawCTX.fillRect(0, 0, 1200, 700);
    drawCTX.fillStyle = "#000000";
    drawCTX.font = "50px Arial";
    drawCTX.fillText("DEALER", 500, 310);
    drawCTX.fillText("PLAYER", 500, 420);
    drawCTX.beginPath();
    drawCTX.moveTo(0, 350);
    drawCTX.lineTo(1200, 350);
    drawCTX.stroke();

    xValueD = 100;
    xValueP = 100;

    if (gameDeck.cardsRemaining() < 12) {
        gameDeck.resetDeck(noDecks);
        gameDeck.shuffle();
    }

    dealer.resetHand();
    player.resetHand();
    dealer.giveCard(gameDeck.dealCard(), false);
    player.giveCard(gameDeck.dealCard(), false);
    dealer.giveCard(gameDeck.dealCard(), true);
    player.giveCard(gameDeck.dealCard(), false);

    let buttons = document.getElementById("buttons");
    buttons.innerHTML = '<button id="deal" onmousedown="dealCards()">Deal</button>&nbsp;&nbsp;\n';
    buttons.innerHTML += '<button id="reveal" onmousedown="revealCard()" disabled>Reveal dealers card</button>&nbsp;&nbsp;\n';
    buttons.innerHTML += '<button id="hit" onmousedown="hit()" disabled>HIT!</button>&nbsp;&nbsp;\n';
    buttons.innerHTML += '<button id="stand" onmousedown="stand()" disabled>STAND</button>&nbsp;&nbsp;\n';
    drawScore();
}

function dealCards() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");

    // Dealer
    for (let i = 0; i < dealer.hand.length; i++) {
        switch (dealer.hidden[i]) {
            case true:
                drawCTX.drawImage(imageGraphics.getGFX("back"), xValueD, 20, 150, 229);
                break;
            case false:
                drawCTX.drawImage(imageGraphics.getGFX(dealer.hand[i].print()), xValueD, 20, 150, 229);
                break;
        }
        xValueD += 170;
    }

    for (let i = 0; i < player.hand.length; i++) {
        switch (player.hidden[i]) {
            case true:
                drawCTX.drawImage(imageGraphics.getGFX("back"), xValueP, 450, 150, 229);
                break;
            case false:
                drawCTX.drawImage(imageGraphics.getGFX(player.hand[i].print()), xValueP, 450, 150, 229);
                break;
        }
        xValueP += 170;
    }

    document.getElementById("hit").disabled = false;
    document.getElementById("stand").disabled = false;
    document.getElementById("deal").disabled = true;

    if (calculateValue(dealer.hand) == "Win" && calculateValue(player.hand) != "Win") {
        dealerBJ();
        dealer.addScore(2);
        document.getElementById("reveal").disabled = false;
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("newGame").disabled = false;
    }
    if (calculateValue(dealer.hand) != "Win" && calculateValue(player.hand) == "Win") {
        playerBJ();
        player.addScore(2);
        document.getElementById("reveal").disabled = false;
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("newGame").disabled = false;
    }
    if (calculateValue(dealer.hand) == "Win" && calculateValue(player.hand) == "Win") {
        bothBJ();
        dealer.addScore(2);
        player.addScore(2);
        document.getElementById("reveal").disabled = false;
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("newGame").disabled = false;
    }
}

function calculateValue (handToCheck) {
    let totalValue = 0;
    let aces = 0;

    for (let i = 0; i < handToCheck.length; i++) {
        if (handToCheck[i].value == "Ace") {
            aces += 1;
        }

        switch (handToCheck[i].value) {
            case "Ace":
                totalValue += 11;
                break;
            case "Two":
                totalValue += 2;
                break;
            case "Three":
                totalValue += 3;
                break;
            case "Four":
                totalValue += 4;
                break;
            case "Five":
                totalValue += 5;
                break;
            case "Six":
                totalValue += 6;
                break;
            case "Seven":
                totalValue += 7;
                break;
            case "Eight":
                totalValue += 8;
                break;
            case "Nine":
                totalValue += 9;
                break;
            default:
                totalValue += 10;
                break;
        }
    }

    if (totalValue > 21 && aces == 0) {
        return "Lose";
    } else if (totalValue == 21) {
        return "Win";
    } else if (totalValue > 21 && aces > 0) {
        for (let i = 0; i < aces; i++) {
            if ((totalValue - (10*(i+1))) < 21) {
                return (totalValue-(10*(i+1)));
            } else if (totalValue - (10*(i+1)) == 21) {
                return "Win";
            }
        }
        return "Lose";
    } else {
        return totalValue;
    }
}

function dealerBJ() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.fillStyle = "#000000";
    drawCTX.fillRect(200, 300, 800, 100);
    drawCTX.font = "30px Arial";
    drawCTX.fillStyle = "#FF0000";
    drawCTX.fillText("DEALER BLACKJACK", 420, 360);
}

function playerBJ() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.fillStyle = "#000000";
    drawCTX.fillRect(200, 300, 800, 100);
    drawCTX.font = "30px Arial";
    drawCTX.fillStyle = "#00FF00";
    drawCTX.fillText("PLAYER BLACKJACK", 380, 360);
}

function playerLost() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.fillStyle = "#000000";
    drawCTX.fillRect(200, 300, 800, 100);
    drawCTX.font = "30px Arial";
    drawCTX.fillStyle = "#FF0000";
    drawCTX.fillText("PLAYER LOST", 380, 360);
}

function playerWins() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.fillStyle = "#000000";
    drawCTX.fillRect(200, 300, 800, 100);
    drawCTX.font = "30px Arial";
    drawCTX.fillStyle = "#00FF00";
    drawCTX.fillText("PLAYER WINS", 380, 360);
}

function dealerWins() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.fillStyle = "#000000";
    drawCTX.fillRect(200, 300, 800, 100);
    drawCTX.font = "30px Arial";
    drawCTX.fillStyle = "#FF0000";
    drawCTX.fillText("DEALER WINS", 380, 360);
}

function bothBJ() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.fillStyle = "#000000";
    drawCTX.fillRect(200, 300, 800, 100);
    drawCTX.font = "30px Arial";
    drawCTX.fillStyle = "#fcd33f";
    drawCTX.fillText("DOUBLE BLACKJACK", 320, 360);
}

function tie() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.fillStyle = "#000000";
    drawCTX.fillRect(200, 300, 800, 100);
    drawCTX.font = "30px Arial";
    drawCTX.fillStyle = "#fcd33f";
    drawCTX.fillText("TIE", 320, 360);
}

function revealCard() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.drawImage(imageGraphics.getGFX(dealer.hand[1].print()), 270, 20, 150, 229);
}

function hit() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    player.giveCard(gameDeck.dealCard(), false);
    drawCTX.drawImage(imageGraphics.getGFX(player.hand[player.hand.length-1].print()), xValueP, 450, 150, 229);
    xValueP += 170;
    let result = calculateValue(player.hand);
    if (result < 21) {
        return
    } else if (result == "Win") {
        playerBJ();
        player.addScore(2);
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("newGame").disabled = false;
    } else if (result == "Lose") {
        playerLost();
        dealer.addScore(1);
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("newGame").disabled = false;
    }
}

function stand() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    revealCard();

    while (calculateValue(dealer.hand) < 17) {
        dealer.giveCard(gameDeck.dealCard(), false);
        drawCTX.drawImage(imageGraphics.getGFX(dealer.hand[dealer.hand.length-1].print()), xValueD, 20, 150, 229);
        xValueD += 170;
    }

    let result = calculateValue(dealer.hand);
    if (result < 21) {
        if (result > calculateValue(player.hand)) {
            dealerWins();
            dealer.addScore(1);
            document.getElementById("hit").disabled = true;
            document.getElementById("stand").disabled = true;
            document.getElementById("newGame").disabled = false;
        } else if (result == calculateValue(player.hand)) {
            tie();
            dealer.addScore(1);
            player.addScore(1);
            document.getElementById("hit").disabled = true;
            document.getElementById("stand").disabled = true;
            document.getElementById("newGame").disabled = false;
        } else if (result < calculateValue(player.hand)) {
            playerWins();
            player.addScore(1);
            document.getElementById("hit").disabled = true;
            document.getElementById("stand").disabled = true;
            document.getElementById("newGame").disabled = false;
        }
    } else if (result == "Win") {
        dealerBJ();
        dealer.addScore(2);
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("newGame").disabled = false;
    } else if (result == "Lose") {
        playerWins();
        player.addScore(1);
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("newGame").disabled = false;
    }
}

function drawScore() {
    let drawCTX = document.getElementById("gameArea").getContext("2d");
    drawCTX.font = "50px Arial";
    drawCTX.fillStyle = "#fffd8f";
    drawCTX.fillText(String(dealer.getScore()), 730, 310);
    drawCTX.fillText(String(player.getScore()), 730, 420);
}