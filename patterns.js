const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let center = { x: 0, y: 0};

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  center.x = canvas.width / 2;
  center.y = canvas.height /2;
  
  createPattern();
  createShadow();
}

function createPattern() {
  const image = new Image();
  
  image.src = 'https://fronteffects.files.wordpress.com/2014/05/schermata-2014-05-28-alle-11-32-11.png';

  const pattern = ctx.createPattern(image, 'repeat');

  ctx.fillStyle = pattern;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function createShadow() {
  ctx.shadowOffsetX = -5;
  ctx.shadowOffsetY = -5;

  ctx.shadowColor = 'rgba(0, 0, 0, .4)';
  ctx.shadowBlur = 10;

  ctx.font = '80px Helvetica';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText('Hello World', center.x, center.y);
}

init();
window.onresize = init;