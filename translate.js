const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.translate(200, 100);
// ctx.rotate(45 * (Math.PI / 180));
ctx.fillStyle = '#80c';
ctx.fillRect(0, 0, 300, 200);

ctx.translate(-150, 100);
ctx.scale(2, 1);
ctx.fillStyle = '#80c';
ctx.fillRect(0, 300, 300, 200);