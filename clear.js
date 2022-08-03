const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.background = '#08c';

const center = { x: canvas.width / 2, y: canvas.height /2};

ctx.strokeStyle = ctx.fillStyle = 'white';

ctx.arc(center.x, center.y, 150, 0, Math.PI * 2)
ctx.stroke();
ctx.clip();

ctx.fillRect(0, 0, center.x, center.y);
ctx.fillRect(center.x, center.y, center.x, center.y);

// ctx.clearRect(0, 0, canvas.width / 4, canvas.height /4);
// ctx.clearRect(0, 0, canvas.width, canvas.height);