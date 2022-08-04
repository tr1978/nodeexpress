"use strict";

//                      string  string
//                      number  number
function ConvertToBaseX(number, base) {
    const symbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
    let myInput = BigInt(number);
    let myOutput = "";
    let myBase = BigInt(base);

    while (myInput != 0) {
        myOutput = symbols[myInput % myBase] + myOutput;
        myInput = myInput / myBase;
    }

    return myOutput;
}

//                        string  number
function ConvertToDecimal(number, base) {
    const symbols = {'0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15, 'G': 16, 'H': 17, 'I': 18, 'J': 19, 'K': 20, 'L': 21, 'M': 22, 'N': 23, 'O': 24, 'P': 25, 'Q': 26, 'R': 27, 'S': 28, 'T': 29, 'U': 30, 'V': 31, 'W': 32, 'X': 33, 'Y': 34, 'Z': 35};
    let myInput = number;
    let myOutput = 0n;

    for (let i = 0; i < number.length; i++) {
        myOutput += BigInt(symbols[myInput[i]]) * BigInt(Math.pow(base, (myInput.length - i - 1)));
    }

    return myOutput;
}

function ConvertFToC() {
    let theInput = document.getElementById("ftoc").value;
    let theResult = document.getElementById("ftocresult");

    let result = ((theInput - 32) / 1.8).toFixed(1);
    theResult.innerHTML = result + "&deg C";
}

function ConvertCToF() {
    let theInput = document.getElementById("ctof").value;
    let theResult = document.getElementById("ctofresult");

    let result = ((1.8*theInput) + 32).toFixed(1);
    theResult.innerHTML = result + "&deg F";
}

function ConvertDToB() {
    let theInput = document.getElementById("dtob").value;
    let theResult = document.getElementById("dtobresult");
    let result = "";

    if (theInput < 0) {return;}

    if (theInput == 0) {
        theResult.innerHTML = "0";
        return;
    }

    result = ConvertToBaseX(theInput, 2);
    theResult.innerHTML = result;
}

function ConvertBToD() {
    let theInput = document.getElementById("btod").value.toString();
    let theResult = document.getElementById("btodresult");
    let result = 0n;
    let pattern = "^[01]+$";

    if (theInput == "") {
        theResult.innerHTML = "0";
        return;
    }

    if(!theInput.match(pattern)) {
        let myWord = document.getElementById("btod").value.toString();
        document.getElementById("btod").value = myWord.slice(0, -1);
        return;
    }

    theResult.innerHTML = ConvertToDecimal(theInput, 2);
}

function ConvertDToH() {
    let theInput = BigInt(document.getElementById("dtoh").value);
    let theResult = document.getElementById("dtohresult");
    let result = "";

    if (theInput < 0) {return;}

    if (theInput == 0n) {
        theResult.innerHTML = "0";
        return;
    }

    result = ConvertToBaseX(theInput, 16);

    theResult.innerHTML = result;
}

function ConvertHToD() {
    let theInput = document.getElementById("htod").value.toString().toUpperCase();
    document.getElementById("htod").value = theInput;
    let theResult = document.getElementById("htodresult");
    let result = 0n;
    let pattern = "^[0123456789ABCDEF]+$";

    if (theInput == "") {
        theResult.innerHTML = "0";
        return;
    }

    if(!theInput.match(pattern)) {
        let myWord = document.getElementById("htod").value.toString();
        document.getElementById("htod").value = myWord.slice(0, -1);
        return;
    }

    theResult.innerHTML = ConvertToDecimal(theInput, 16);
}

function ConvertDToB26() {
    let theInput = document.getElementById("dtob26").value;
    let theResult = document.getElementById("dtob26result");

    if (theInput < 0) {return;}

    if (theInput == 0n) {
        theResult.innerHTML = "0";
        return;
    }

    theResult.innerHTML = ConvertToBaseX(theInput, 26);
}

function ConvertB26ToD() {
    let theInput = document.getElementById("b26tod").value.toString().toUpperCase();
    document.getElementById("b26tod").value = theInput;
    let theResult = document.getElementById("b26todresult");
    let pattern = "^[0123456789ABCDEFGHIJKLMNOP]+$";

    if (theInput < 0) {return;}

    if (theInput == 0n) {
        theResult.innerHTML = "0";
        return;
    }

    if(!theInput.match(pattern)) {
        let myWord = document.getElementById("b26tod").value.toString();
        document.getElementById("b26tod").value = myWord.slice(0, -1);
        return;
    }

    theResult.innerHTML = ConvertToDecimal(theInput, 26);
}
