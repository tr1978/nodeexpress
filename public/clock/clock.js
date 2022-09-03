let ctx;

$(document).ready(function() {
    ctx = document.getElementById("aClock").getContext("2d");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 4;
    setInterval(runClock, 100);
});

function runClock() {
    let myDate = new Date();

    ctx.clearRect(0, 0, 700, 700);

    ctx.save();
    ctx.translate(350, 350);
    ctx.fillStyle = "#87b3fa";
    ctx.beginPath();
    ctx.arc(0, 0, 310, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(350, 350);
    ctx.fillStyle = "#ffffff";
    ctx.beginPath();
    ctx.arc(0, 0, 200, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.restore();

    ctx.save();
    ctx.translate(350, 350);
    ctx.lineWidth = 6;
    ctx.rotate(-Math.PI/2);
    for (let i = 0; i < 12; i++) {
        ctx.beginPath();
        ctx.moveTo(170, 0);
        ctx.lineTo(200, 0);
        ctx.stroke();
        ctx.rotate(Math.PI/6);
    }
    ctx.restore();

    ctx.save();
    ctx.translate(350, 350);
    ctx.lineWidth = 2;
    ctx.rotate(-Math.PI/2);
    for (let i = 0; i < 60; i++) {
        ctx.beginPath();
        ctx.moveTo(185, 0);
        ctx.lineTo(200, 0);
        ctx.stroke();
        ctx.rotate(Math.PI/30);
    }
    ctx.restore();

    ctx.save();
    ctx.translate(350, 350);
    ctx.font = '50px Impact';
    ctx.fillStyle = "#000000";
    ctx.strokeStyle = "#000000";
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.lineWidth = 1;
    ctx.fillText(12, 0, -230);
    ctx.font = '25px Arial';
    ctx.fillText(00, 0, -280);
    ctx.font = '50px Impact';
    ctx.rotate(Math.PI/6);
    let rotateBack = (Math.PI/6);
    for (let i = 1; i < 12; i++) {
        ctx.translate(0, -230);
        ctx.rotate(-rotateBack);
        ctx.font = '50px Impact';
        ctx.fillText(i, 0, 0);
        ctx.rotate(rotateBack);
        ctx.translate(0, -50);
        ctx.rotate(-rotateBack);
        ctx.font = '25px Arial';
        ctx.fillText(i*5, 0, 0);
        ctx.rotate(rotateBack);
        ctx.translate(0, 280);
        rotateBack += (Math.PI/6);
        ctx.rotate(Math.PI/6);
    }
    ctx.restore();

    ctx.save();
    ctx.translate(350, 350);
    ctx.font = '40px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    if (myDate.getHours() < 12) {
        ctx.fillText("AM", 0, -80);
    } else {
        ctx.fillText("PM", 0, -80);
    }
    ctx.font = '20px Arial';
    ctx.fillText(getWeekDay() + " " + myDate.getDate() + ".", 110, 0);
    ctx.restore();

    ctx.save();
    ctx.strokeStyle = "#000000";
    ctx.translate(350, 350);
    ctx.beginPath();
    ctx.arc(0, 0, 10, 0, 2*Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.rotate(-Math.PI/2);
    ctx.rotate(((2*Math.PI)/60) * myDate.getSeconds());
    // ctx.rotate(((2*Math.PI)/60000) * (myDate.getSeconds()*1000 + myDate.getMilliseconds()));
    ctx.strokeStyle = "#ff0000";
    ctx.moveTo(0, 0);
    ctx.lineTo(160, 0);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(170, 0, 10, 0, 2*Math.PI);
    ctx.stroke();
    ctx.moveTo(0, 0);
    ctx.lineTo(-30, 0);
    ctx.stroke();
    // ctx.moveTo(0, 0);
    // ctx.beginPath();
    // ctx.fillStyle = "#000000";
    // ctx.arc(0, 0, 10, 0, 2*Math.PI);
    // ctx.fill();
    // ctx.beginPath();
    // ctx.strokeStyle = 'rgba(255, 0, 0, 0.2)';
    // ctx.fillStyle = 'rgba(255, 0, 0, 0.2)';
    // ctx.lineWidth = 2;
    // ctx.arc(0, 0, 263, -0.15, 0.15);
    // ctx.rotate(0.15);
    // ctx.lineTo(307, 0);
    // ctx.rotate(-0.15);
    // ctx.arc(0, 0, 307, 0.15, -0.15, true);
    // ctx.rotate(-0.15);
    // ctx.lineTo(263, 0);
    // ctx.stroke();
    // ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(350, 350);
    ctx.lineWidth = 2;
    ctx.fillStyle = "#87b3fa";
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.rotate(-Math.PI/2);
    let toRotate = calculateHourHandAngle()
    ctx.rotate(toRotate);
    ctx.moveTo(-30, 6);
    ctx.lineTo(100, 6);
    ctx.lineTo(100, -6);
    ctx.lineTo(-30, -6);
    ctx.lineTo(-30, 6);
    ctx.stroke();
    ctx.fill();
    // ctx.beginPath();
    // ctx.strokeStyle = 'rgba(0, 255, 0, 0.5)';
    // ctx.fillStyle = 'rgba(0, 255, 0, 0.5)';
    // ctx.rotate(-toRotate);
    // ctx.rotate(calculateHourHandAngle(myDate.getHours()));
    // ctx.arc(0, 0, 203, -0.15, 0.15);
    // ctx.rotate(0.15);
    // ctx.lineTo(260, 0);
    // ctx.rotate(-0.15);
    // ctx.arc(0, 0, 260, 0.15, -0.15, true);
    // ctx.rotate(-0.15);
    // ctx.lineTo(203, 0);
    // ctx.stroke();
    // ctx.fill();
    ctx.restore();

    ctx.save();
    ctx.translate(350, 350);
    ctx.lineWidth = 2;
    ctx.fillStyle = "#87b3fa";
    ctx.strokeStyle = "#000000";
    ctx.beginPath();
    ctx.rotate(-Math.PI/2);
    toRotate = calculateMinuteHandAngle();
    ctx.rotate(toRotate);
    ctx.moveTo(-30, 4);
    ctx.lineTo(150, 4);
    ctx.lineTo(150, 12);
    ctx.lineTo(175, 0);
    ctx.lineTo(150, -12);
    ctx.lineTo(150, -4);
    ctx.lineTo(-30, -4);
    ctx.lineTo(-30, 4);
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(0, 0, 10, 0, 2*Math.PI);
    ctx.fill();
    // ctx.beginPath();
    // ctx.strokeStyle = 'rgba(0, 255, 0, 1.0)';
    // ctx.fillStyle = 'rgba(0, 255, 0, 1.0)';
    // ctx.arc(0, 0, 263, -0.15, 0.15);
    // ctx.rotate(0.15);
    // ctx.lineTo(307, 0);
    // ctx.rotate(-0.15);
    // ctx.arc(0, 0, 307, 0.15, -0.15, true);
    // ctx.rotate(-0.15);
    // ctx.lineTo(263, 0);
    // ctx.stroke();
    // ctx.fill();
    // ctx.rotate(0.15);
    // ctx.fillStyle = "#000000";
    // ctx.font = '25px Arial';
    // ctx.translate(285, 0);
    // ctx.rotate(Math.PI/2);
    // ctx.rotate(-toRotate);
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';
    // ctx.fillText(myDate.getMinutes(), 0, 0);
    ctx.restore();
}

function addZero(number) {
    if (number < 10) {
        return "0" + number.toString();
    } else {
        return number.toString();
    }
}

function calculateHourHandAngle(hour) {
    let myDate = new Date();
    
    let theHour = myDate.getHours();
    
    if (theHour > 11) {
        theHour -= 12;
    }

    if (hour != undefined) {
        return hour * (Math.PI/6);
    }

    let faceUnits = (Math.PI*2) / (12*60);
    let totalMinutes = theHour*60 + myDate.getMinutes();
    let theAngle = faceUnits * totalMinutes;

    return theAngle;
}

function calculateMinuteHandAngle() {
    let myDate = new Date();

    let theMinute = myDate.getMinutes();

    let faceUnits = (Math.PI*2)/(60*60);
    let totalSeconds = myDate.getMinutes() * 60 + myDate.getSeconds();
    let theAngle = faceUnits*totalSeconds;

    return theAngle;
}

function getWeekDay() {
    let myDate = new Date();
    let theDay = "";

    switch (myDate.getDay()) {
        case 0:
            theDay = "Søndag";
            break;
        case 1:
            theDay = "Mandag";
            break;
        case 2:
            theDay = "Tirsdag";
            break;
        case 3:
            theDay = "Onsdag";
            break;
        case 4:
            theDay = "Torsdag";
            break;
        case 5:
            theDay = "Fredag";
            break;
        case 6:
            theDay = "Lørdag";
            break;
    }
    return theDay;
}
