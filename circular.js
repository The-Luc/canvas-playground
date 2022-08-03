// Initial Setup
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

// Variables
let request;
let particles;
const mouse = { x: 10, y: 10 }
const colors = ['#495867', '#FE5F55', '#BDD5EA'];

// Event Listeners
addEventListener('resize', init);
addEventListener('mousemove', mousemove);

class Particle {
  velocity = 0.05;
  color = getRandomColor();
  radians = getRandom(0, Math.PI * 2);
  distanceFromCenter = getRandom(50, 200); 

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.lastPoint = { x, y };
    this.lastMouse = { x, y };
  }

  draw() {
    c.beginPath();
    c.strokeStyle = this.color;
    c.lineWidth = this.radius;
    c.moveTo(this.lastPoint.x, this.lastPoint.y);
    c.lineTo(this.x, this.y);
    c.stroke();
    c.closePath();
  }

  update() {
    this.lastPoint.x = this.x;
    this.lastPoint.y = this.y;
    
    // Move points over time
    this.radians += this.velocity;

    // Drag effect
    this.lastMouse.x += (mouse.x - this.lastMouse.x) * this.velocity;
    this.lastMouse.y += (mouse.y - this.lastMouse.y) * this.velocity;

    // Circular motion
    this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
    this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
    
    this.draw();
  }
}

// Implementation
function init() {
  particles = [];

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(canvas.width / 2, canvas.height / 2, getRandom(1, 3)));
  }

  animate();
}

// Animation Loop
function animate() {
  cancelAnimationFrame(request);
  request = requestAnimationFrame(animate);
  
  c.fillStyle = 'rgba(255, 255, 255, 0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);

  for (let particle of particles) { 
    particle.update();
  }
}

init();

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function mousemove({clientX, clientY}) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}