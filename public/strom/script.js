"use strict";

function Beregn() {
    let x = document.getElementById("spris").value;
    let y = document.getElementById("antkwh").value;

    let result = (0.001 * x * y + 0.63 * y + 39).toFixed(2);
    
    document.getElementById("resultat").innerHTML = result + " Kr";
}
