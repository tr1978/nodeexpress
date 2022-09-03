$(document).ready(function() {
    let ww = $(window).width(); // - 16;
    let wh = $(window).height(); // - 16;
    $("#divdiv").html('<canvas id="myCanvas" width="' + ww + '" height="' + wh + '"></canvas>');
    ctx = $("#myCanvas")[0].getContext('2d');
    // let image = new Image();
    // image.onload = function() {
    //     ctx.drawImage(image, 0, 0);
    // }
    // image.src = 'concrete.jpg';
    $("#myCanvas").on("mousedown", addLogo);
    transGrid();
});

let ctx;

function addLogo(ev) {
    if (ev.button == 0) {
        for (let o = 0; o < 6; o++) {
            let select = Math.random();
            if (select < 0.25) {
                let rotation = Math.random() * 2 * Math.PI;
                let size = (Math.floor(Math.random() * 101)) + 20;
                let color = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
                drawStar(ev.offsetX, ev.offsetY, rotation, size, color);
            } else if (select >= 0.25 && select < 0.5) {
                let outer = Math.floor(Math.random() * 101) + 20;
                let inner = Math.floor(Math.random() * Math.floor(outer*0.7)) + Math.floor(outer*0.2);
                let color = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
                if (o == 5 && inner < 80) {
                    o = 4;
                    continue;
                }
                drawDonut(ev.offsetX, ev.offsetY, outer, inner, color);
            } else if (select >= 0.5 && select < 0.75) {
                let rotation = Math.random() * 2 * Math.PI;
                let size = (Math.floor(Math.random() * 101)) + 20;
                let color = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
                if (o == 5 && size > 60) {
                    o = 4;
                    continue;
                }
                drawStarTwo(ev.offsetX, ev.offsetY, rotation, size, color);
            } else if (select >= 0.75) {
                let rotation = Math.random() * 2 * Math.PI;
                let size = (Math.floor(Math.random() * 101)) + 20;
                let color = 'rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')';
                let spokes = (Math.floor(Math.random() * 60)) + 5;
                if (o == 5 && size > 60) {
                    o = 4;
                    continue;
                }
                drawSpokes(ev.offsetX, ev.offsetY, size, rotation, spokes, color);
            }
        }
    }
}

function drawStar(x, y, rotation, size, color) {
    let ratio = ((1 + Math.sqrt(5)) / 2) ** 2;
    let outerR = size;
    let innerR = outerR / ratio;
    let pointX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let pointY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let centerX = 0;
    let centerY = 0;
    let angleStep = (2*Math.PI) / 10;

    pointX[0] = centerX + (Math.cos((Math.PI/2) - angleStep) * innerR);
    pointY[0] = centerY - (Math.sin((Math.PI/2) - angleStep) * innerR);

    pointX[1] = centerX + (Math.cos((Math.PI/2) - (2*angleStep)) * outerR);
    pointY[1] = centerY - (Math.sin((Math.PI/2) - (2*angleStep)) * outerR);

    pointX[2] = centerX + (Math.cos((3*angleStep)-(Math.PI/2)) * innerR);
    pointY[2] = centerY + (Math.sin((3*angleStep)-(Math.PI/2)) * innerR);

    pointX[3] = centerX + (Math.cos((4*angleStep)-(Math.PI/2)) * outerR);
    pointY[3] = centerY + (Math.sin((4*angleStep)-(Math.PI/2)) * outerR);

    pointX[4] = centerX;
    pointY[4] = centerY + innerR;

    pointX[5] = centerX - (Math.sin((6*angleStep) - Math.PI) * outerR);
    pointY[5] = centerY + (Math.cos((6*angleStep) - Math.PI) * outerR);

    pointX[6] = centerX - (Math.sin((7*angleStep) - Math.PI) * innerR);
    pointY[6] = centerY + (Math.cos((7*angleStep) - Math.PI) * innerR);

    pointX[7] = centerX - (Math.cos((8*angleStep) - (3*Math.PI/2)) * outerR);
    pointY[7] = centerY - (Math.sin((8*angleStep) - (3*Math.PI/2)) * outerR);

    pointX[8] = centerX - (Math.cos((9*angleStep) - (3*Math.PI/2)) * innerR);
    pointY[8] = centerY - (Math.sin((9*angleStep) - (3*Math.PI/2)) * innerR);

    pointX[9] = centerX;
    pointY[9] = centerY - outerR;

    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(pointX[0], pointY[0]);
    for (let i = 1; i < 10; i++) {
        ctx.lineTo(pointX[i], pointY[i]);
    }
    ctx.lineTo(pointX[0], pointY[0]);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}

function drawDonut(x, y, outerR, innerR, color) {
    ctx.save();
    ctx.strokeStyle = '#000000';
    ctx.fillStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(x, y, outerR, 0, 2*Math.PI);
    ctx.stroke();
    ctx.strokeStyle = color;

    for (let i = outerR-3; i > innerR+1; i--) {
        ctx.beginPath();
        ctx.arc(x, y, i, 0, 2*Math.PI);
        ctx.stroke();
    }

    ctx.strokeStyle = '#000000';
    ctx.beginPath();
    ctx.arc(x, y, innerR, 0, 2*Math.PI);
    ctx.stroke();
    ctx.restore();
}

function transGrid() {
    let color1 = "#ffffff";
    let color2 = "#474747";
    let width = $(window).width();
    let height = $(window).height();

    ctx.save();
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = color1;
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = color2;

    // for (let i = 0; i < (height/12); i++) {
    //     for (let j = 0; j < (width/12); j++) {
    //         if (i%2 == 0) {
    //             if (j%2 == 0) {
    //                 ctx.fillRect(j*12, i*12, 12, 12);
    //             }
    //         } else if (i%2 != 0) {
    //             if (j%2 != 0) {
    //                 ctx.fillRect(j*12, i*12, 12, 12);
    //             }
    //         }
    //     }
    // }
    ctx.restore();
}

function drawStarTwo(x, y, rotation, size, color) {
    let outerR = -size;
    let innerR = outerR * 0.8;
    let angleStep = (2*Math.PI) / 40;

    ctx.save();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = color;
    ctx.lineWidth = 2;
    ctx.translate(x, y);
    ctx.rotate(rotation);

    ctx.beginPath();
    ctx.moveTo(0, outerR);
    for (let i = 0; i < 40; i++) {
        ctx.rotate(angleStep);
        ctx.lineTo(0, innerR);
        ctx.rotate(angleStep);
        ctx.lineTo(0, outerR);
    }
    ctx.fill();
    ctx.stroke();
    ctx.restore();
}

function drawSpokes(x, y, size, rotation, spokes, color) {
    ctx.save();
    ctx.strokeStyle = "#000000";
    ctx.fillStyle = color;
    ctx.lineWidth = 2;

    let bulb = false;
    if (Math.random() > 0.5) {
        bulb = true
    }

    ctx.translate(x, y);
    ctx.rotate(rotation);

    for (let i = 0; i < spokes; i++) {
        ctx.beginPath();
        ctx.moveTo(-4, 0);
        ctx.lineTo(-4, -size);
        ctx.arc(0, -size, 4, Math.PI, 2*Math.PI);
        ctx.lineTo(4, 0);
        ctx.stroke();
        ctx.fill();
        if (bulb) {
            ctx.beginPath();
            ctx.arc(0, -size-16, 4, 0, 2*Math.PI);
            ctx.stroke();
            ctx.fill();
        }
        ctx.rotate((2*Math.PI) / spokes);
    }

    ctx.beginPath();
    ctx.arc(0, 0, spokes, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    ctx.restore();
}
