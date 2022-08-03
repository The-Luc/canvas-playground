const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const center = {x: window.innerWidth / 2, y: window.innerHeight / 2};

let request;
let circles;
const maxRadius = 40;
const mouse = { x: null, y: null };
const colors = ['#495867', '#FE5F55', '#BDD5EA'];

class Circle {
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
    if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;

    // Interactivity
    if (mouse.x && mouse.y) {
      if (mouse.x - this.x < this.radius && mouse.x - this.x > -this.radius && mouse.y - this.y < this.radius && mouse.y - this.y > -this.radius) {
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
      }
      else if (this.radius > this.initialRadius) {
        this.radius -= 1;
      }
    }
    else if (this.radius > this.initialRadius) {
      this.radius -= 1;
    }

    this.draw();
  }
}

window.addEventListener('resize', init);
window.addEventListener('mousemove', (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
});
window.addEventListener('mouseout', () => {
  mouse.x = null;
  mouse.y = null;
});

function init() {
  circles = [];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 10; i++) {
    const radius = getRandom(10, 30);
    let x = getRandom(radius, canvas.width - radius);
    let y = getRandom(radius, canvas.height - radius);
    let dy = getRandom(1.5, 2.5);
    let dx = getRandom(1.5, 2.5);

    circles.push(new Circle(radius, x, y, dx, dy));
  }

  animate();
}

function animate() {
  cancelAnimationFrame(request);
  request = requestAnimationFrame(animate);
  c.clearRect(0, 0, window.innerWidth, window.innerHeight);

  for (let i = 0; i < circles.length; i++) {
    circles[i].update();
  }
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

init();