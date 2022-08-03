const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const center = {x: window.innerWidth / 2, y: window.innerHeight / 2};

let request;
const friction = 0.9;
const gravity = 1;
const colors = ['#495867', '#FE5F55', '#BDD5EA'];
let balls;

class Ball {
  color = getRandomColor();

  constructor(radius, x, y, dx, dy) {
    this.radius = radius;
    this.initialRadius = radius;
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
  }

  draw() {
    c.beginPath();
    c.arc(this.x , this.y, this.radius, 0, Math.PI * 2);
    c.fillStyle = this.color;
    c.fill();
  }

  update() {
    if (this.y + this.radius + this.dy > canvas.height) {
      this.dy = -this.dy * friction;
      this.dx = this.dx * friction;
    } 
    else {
      this.dy += gravity;
    }

    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

window.addEventListener('resize', init);

window.addEventListener('click', () => {
  for (let i = 0; i < balls.length; i++) {
    if (balls[i].y + balls[i].radius + 100 > canvas.height) {
      balls[i].y -= 80;
    }
    if (balls[i].dx < 0.2 && balls[i].dx > -0.2 ) {
      balls[i].dx = getRandom(-2, 2);
    }
  }
});

function init() {
  balls = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 40; i++) {
    const radius = getRandom(10, 30);
    let x = getRandom(radius, canvas.width - radius);
    let y = getRandom(0, canvas.height - radius);
    let dy = getRandom(-2, 2);
    let dx = getRandom(-2, 2);

    balls.push(new Ball(radius, x, y, dx, dy));
  }

  animate();
}

function animate() {
  cancelAnimationFrame(request);
  request = requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < balls.length; i++) {
    balls[i].update();
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}


function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

init();