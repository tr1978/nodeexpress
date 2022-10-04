"use strict";

let canvas = document.getElementById("cpall").getContext("2d");

for (let i = 0; i < 256; i++) {
    for (let j = 0; j < 1024; j++) {
        canvas.fillStyle = "rgb(" + Math.floor(j/4) + ", " + Math.floor(i) + ", " + Math.floor(i) + ")";
        canvas.fillRect(j, i, 1, 1);
    }
}
