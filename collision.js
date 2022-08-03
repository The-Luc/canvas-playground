// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Variables
let request;
let circles;
let open = false;
let colliding = false;
const mouse = { x: 10, y: 10 }
const colors = ['#495867', '#FE5F55', '#BDD5EA'];

// Event Listeners
addEventListener('resize', init);
addEventListener('mousemove', mousemove);
addEventListener('click', () => {
  if (colliding) {
    open = !open;
  }
})

class Circle {
  color = getRandomColor();

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
  }

  update() {
    this.draw();
  }
}

// Implementation
function init() {
  circles = [];

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  // for (let i = 0; i < 1; i++) {
  //   circles.push(new Circle(300, 300, 100));
  // }

  circles.push(new Circle(canvas.width / 2, canvas.height / 2, 100));
  circles.push(new Circle(0, 0, 50));

  circles[0].color = '#495867';
  circles[1].color = '#BDD5EA';

  animate();
}

// Animation Loop
function animate() {
  cancelAnimationFrame(request);
  request = requestAnimationFrame(animate);

  c.clearRect(0, 0, canvas.width, canvas.height);


  circles[1].x = mouse.x;
  circles[1].y = mouse.y;

  for (let circle of circles) { 
    circle.update();
  }

  if (distance(circles[0].x, circles[0].y, circles[1].x,  circles[1].y) < circles[0].radius + circles[1].radius) {
    circles[0].color = '#FE5F55';
    colliding = true;
  }
  else {
    circles[0].color = '#495867';
    colliding = false;
  }

  if (open && circles[0].radius < 600) {
    circles[0].radius += 20;
  }
  else if (!open && circles[0].radius > 100 ) {
    circles[0].radius -= 20;
  }
}

init();

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

function mousemove({clientX, clientY}) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}