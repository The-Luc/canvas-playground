const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let startPoit, endPoint, controlA, controlB;
const center = { x: canvas.width / 2, y: canvas.height /2};

// Quadratic Curve

startPoit = [50, 350];
endPoint = [550, 150];
controlA = [50, 150];

ctx.font = '25px Helvetica';
ctx.fillText('Quadratic Curve', 50, 100);

ctx.beginPath();


// start point
ctx.arc(...startPoit, 5, 0, Math.PI * 2);

// end point
ctx.moveTo(...endPoint);
ctx.arc(...endPoint, 5, 0, Math.PI * 2);

// control point
ctx.moveTo(...controlA);
ctx.arc(...controlA, 3, 0, Math.PI * 2);
ctx.fill();

ctx.moveTo(...startPoit);
ctx.quadraticCurveTo(...controlA, ...endPoint);
ctx.stroke();


// Bezier Curve

startPoit = [50, 800];
endPoint = [500, 800];
controlA = [100, 600];
controlB = [400, 600];

ctx.fillText('Bezier Curve', 50, 500);

ctx.beginPath();

// start point
ctx.arc(...startPoit, 5, 0, Math.PI * 2);

// end point
ctx.moveTo(...endPoint);
ctx.arc(...endPoint, 5, 0, Math.PI * 2);

// control point 1
ctx.moveTo(...controlA);
ctx.arc(...controlA, 3, 0, Math.PI * 2);

// control point 2
ctx.moveTo(...controlB);
ctx.arc(...controlB, 3, 0, Math.PI * 2);
ctx.fill();

ctx.moveTo(...startPoit);
ctx.bezierCurveTo(...controlA, ...controlB, ...endPoint);
ctx.stroke();
