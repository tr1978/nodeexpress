let dieColor = "rgb(0, 0, 0)";
let totalPoints = 0;

function drawDie(cName) {
    let myCanvas = document.getElementById(cName);
    let toDraw = myCanvas.getContext("2d");
    toDraw.fillStyle = dieColor;
    toDraw.strokeStyle = "#000000";
    toDraw.lineWidth = 3;
    toDraw.beginPath();
    toDraw.arc(20, 20, 10, Math.PI, (3*Math.PI)/2);
    toDraw.lineTo(100, 10);
    toDraw.arc(100, 20, 10, (3*Math.PI)/2, 0);
    toDraw.lineTo(110, 100);
    toDraw.arc(100, 100, 10, 0, Math.PI/2);
    toDraw.lineTo(20, 110);
    toDraw.arc(20, 100, 10, Math.PI/2, Math.PI);
    toDraw.lineTo(10, 20);
    toDraw.fill();
    toDraw.stroke();
}

function upperLeft(cName) {
    let myCanvas = document.getElementById(cName);
    let toDraw = myCanvas.getContext("2d");
    toDraw.fillStyle = "#FFFFFF";
    toDraw.strokeStyle = "#000000";
    toDraw.lineWidth = 1;
    toDraw.beginPath();
    toDraw.arc(35, 35, 10, 0, 2*Math.PI);
    toDraw.fill();
    toDraw.stroke();
}

function upperRight(cName) {
    let myCanvas = document.getElementById(cName);
    let toDraw = myCanvas.getContext("2d");
    toDraw.fillStyle = "#FFFFFF";
    toDraw.strokeStyle = "#000000";
    toDraw.lineWidth = 1;
    toDraw.beginPath();
    toDraw.arc(85, 35, 10, 0, 2*Math.PI);
    toDraw.fill();
    toDraw.stroke();
}

function middle(cName) {
    let myCanvas = document.getElementById(cName);
    let toDraw = myCanvas.getContext("2d");
    toDraw.fillStyle = "#FFFFFF";
    toDraw.strokeStyle = "#000000";
    toDraw.lineWidth = 1;
    toDraw.beginPath();
    toDraw.arc(60, 60, 10, 0, 2*Math.PI)
    toDraw.fill();
    toDraw.stroke();
}

function middleLeft(cName) {
    let myCanvas = document.getElementById(cName);
    let toDraw = myCanvas.getContext("2d");
    toDraw.fillStyle = "#FFFFFF";
    toDraw.strokeStyle = "#000000";
    toDraw.lineWidth = 1;
    toDraw.beginPath();
    toDraw.arc(35, 60, 10, 0, 2*Math.PI);
    toDraw.fill();
    toDraw.stroke();
}

function middleRight(cName) {
    let myCanvas = document.getElementById(cName);
    let toDraw = myCanvas.getContext("2d");
    toDraw.fillStyle = "#FFFFFF";
    toDraw.strokeStyle = "#000000";
    toDraw.lineWidth = 1;
    toDraw.beginPath();
    toDraw.arc(85, 60, 10, 0, 2*Math.PI);
    toDraw.fill();
    toDraw.stroke();
}

function lowerLeft(cName) {
    let myCanvas = document.getElementById(cName);
    let toDraw = myCanvas.getContext("2d");
    toDraw.fillStyle = "#FFFFFF";
    toDraw.strokeStyle = "#000000";
    toDraw.lineWidth = 1;
    toDraw.beginPath();
    toDraw.arc(35, 85, 10, 0, 2*Math.PI);
    toDraw.fill();
    toDraw.stroke();
}

function lowerRight(cName) {
    let myCanvas = document.getElementById(cName);
    let toDraw = myCanvas.getContext("2d");
    toDraw.fillStyle = "#FFFFFF";
    toDraw.strokeStyle = "#000000";
    toDraw.lineWidth = 1;
    toDraw.beginPath();
    toDraw.arc(85, 85, 10, 0, 2*Math.PI);
    toDraw.fill();
    toDraw.stroke();
}

function doRoll() {
    let noDice = Number(document.getElementById("dieNumber").value);
    let divElem = document.getElementById("diceArea");
    divElem.innerHTML = "";

    if (noDice > 500) {
        document.getElementById("diceArea").innerHTML = "<h3>No more than 500 dice please</h3>";
        return;
    }

    if (isNaN(noDice)) {
        document.getElementById("diceArea").innerHTML = "<h3>Only numbers in the textbox please</h3>";
        return;
    }

    for (let i = 0; i < noDice; i++) {
        divElem.innerHTML += '<canvas id="Canvas' + String(i) + '" width="120" height="120"></canvas>';
    }

    for (let j = 0; j < noDice; j++) {
        if (document.getElementById("randomColor").checked) {
            dieColor = "rgb(" + String(Math.floor(Math.random() * 256)) + ", " + String(Math.floor(Math.random() * 256)) + ", " +
            String(Math.floor(Math.random() * 256)) + ")";
        }

        let throwResult = Math.floor(Math.random() * 6) + 1;
        totalPoints += throwResult;

        switch (throwResult) {
            case 1:
                drawDie("Canvas" + String(j));
                middle("Canvas" + String(j));
                break;
            case 2:
                drawDie("Canvas" + String(j));
                lowerLeft("Canvas" + String(j));
                upperRight("Canvas" + String(j));
                break;
            case 3:
                drawDie("Canvas" + String(j));
                upperLeft("Canvas" + String(j));
                middle("Canvas" + String(j));
                lowerRight("Canvas" + String(j));
                break;
            case 4:
                drawDie("Canvas" + String(j));
                upperLeft("Canvas" + String(j));
                upperRight("Canvas" + String(j));
                lowerLeft("Canvas" + String(j));
                lowerRight("Canvas" + String(j));
                break;
            case 5:
                drawDie("Canvas" + String(j));
                upperLeft("Canvas" + String(j));
                upperRight("Canvas" + String(j));
                lowerLeft("Canvas" + String(j));
                lowerRight("Canvas" + String(j));
                middle("Canvas" + String(j));
                break;
            case 6:
                drawDie("Canvas" + String(j));
                upperLeft("Canvas" + String(j));
                upperRight("Canvas" + String(j));
                middleLeft("Canvas" + String(j));
                middleRight("Canvas" + String(j));
                lowerLeft("Canvas" + String(j));
                lowerRight("Canvas" + String(j));
                break;
            default:
                alert("Hmmmmm");
                break;
        }
    }
    document.getElementById("total").innerHTML = "Total score: " + String(totalPoints);
}

function changeColor() {
    dieColor = document.getElementById("colorPick").value;
}

function resetScore() {
    document.getElementById("total").innerHTML = "Total score: 0";
    totalPoints = 0;
}
