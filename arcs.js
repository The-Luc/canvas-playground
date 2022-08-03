const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.arc(100, 230, 60, 0, Math.PI * 2);
ctx.fillStyle = '#08c';;
ctx.fill();

ctx.beginPath();
ctx.moveTo(300, 150);
ctx.lineTo(400, 150);
ctx.arcTo(500, 150, 500, 300, 75);
ctx.lineTo(500, 300);
ctx.stroke();