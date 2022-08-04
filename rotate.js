const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

grid();
ctx.translate(200, 100);
ctx.rotate(45 * (Math.PI / 180));
ctx.fillStyle = '#80c';
ctx.fillRect(0, 0, 300, 200);
ctx.rotate(-45 * (Math.PI / 180));

ctx.translate(-150, 100);
ctx.scale(2, 1);
ctx.fillStyle = '#80c';
ctx.fillRect(0, 300, 300, 200);

function grid() {
  ctx.save();
  let grid = {};
  grid.width = 20;
  grid.height = 10;
  let canvasWidth = 50;
  let canvasHeight = 50;

  canvasWidth = canvas.width;
  canvasHeight = canvas.height;
  canvas.style.border = '1px solid black';
  ctx.beginPath();
  ctx.lineWidth = 1;
  ctx.lineStyle = 'black';
  for (let x = 0; x < canvasWidth; x += 50) {
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvasHeight);
    ctx.fillText(x, x + 3, 10);
  }

  for (let y = 0; y < canvasHeight; y += 50) {
    ctx.moveTo(0, y);
    ctx.lineTo(canvasWidth, y);
    ctx.fillText(y, 3, y - 3);
  }
  console.log('hih');
  ctx.stroke();

  ctx.restore();
}
