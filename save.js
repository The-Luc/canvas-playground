const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.beginPath();
ctx.fillStyle = '#08c';
ctx.arc(150, 150, 80, 0, Math.PI * 2);
ctx.fill();

ctx.save(); // save blud fill

ctx.beginPath();
ctx.fillStyle = '#80c';
ctx.arc(400, 150, 80, 0, Math.PI * 2);
ctx.fill();

ctx.save(); // save purple fill

ctx.restore(); // restore purple fill

ctx.beginPath();
ctx.arc(150, 400, 80, 0, Math.PI * 2);
ctx.fill();

ctx.restore(); // restore blue fill

ctx.beginPath();
ctx.arc(400, 400, 80, 0, Math.PI * 2);
ctx.fill();