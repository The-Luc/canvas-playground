const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let center;

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  center = { x: canvas.width / 2, y: canvas.height /2};
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = '#08c';
  ctx.arc(center.x, center.y, 250, 0, Math.PI * 2);
  ctx.fill();

  for (let i = 0; i < 6; i++) {
    drawSegment();
    rotate(60);
  }

  rotate(2);
  requestAnimationFrame(animate);
}

function drawSegment() {
  ctx.beginPath();
  ctx.moveTo(center.x, center.y);
  ctx.fillStyle = '#c80';

  ctx.arc(center.x, center.y, 250, 1.5 * Math.PI, 1.6666 * Math.PI);
  ctx.fill();
}

function rotate(deg = 1) {
  ctx.translate(center.x, center.y);
  ctx.rotate(deg * Math.PI / 180);
  ctx.translate(-center.x, -center.y);
}

init();
animate();
window.onresize = init;