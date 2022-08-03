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
  mass = 1;
  opacity = 0;
  color = getRandomColor();
  velocity = { x: getRandom(-0.2, 0.2), y: getRandom(-0.2, 0.2) };

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }

  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.save();
    c.globalAlpha = this.opacity;
    c.fillStyle = this.color;
    c.fill();
    c.restore();
    c.strokeStyle = this.color;
    c.stroke();
    c.closePath();
  }

  update() {
    for (let particle of particles) {
      if (this === particle) {
        continue;
      }

      if (distance(this.x, this.y, particle.x, particle.y) - this.radius * 2 < 0) {
        resolveCollision(this, particle);
      }

      if (this.x + this.radius > canvas.width || this.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x;
      }

      if (this.y + this.radius > canvas.height || this.y -this.radius <= 0) {
        this.velocity.y = -this.velocity.y;
      }

      if (distance(mouse.x, mouse.y, this.x, this.y) < 50 && this.opacity < 0.8) {
        this.opacity += 0.002;
      }
      else if (this.opacity > 0) {
        this.opacity -= 0.002;
        this.opacity = Math.max(0, this.opacity);
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;

    }

    this.draw();
  }
}

// Implementation
function init() {
  particles = [];

  canvas.width = innerWidth;
  canvas.height = innerHeight;

  for (let i = 0; i < 10; i++) {
    const radius = 35;
    let x = getRandom(radius, canvas.width - radius);
    let y = getRandom(radius, canvas.height - radius);

    if (i > 0) {
      for (let j = 0; j < particles.length; j++) {
        if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
          x = getRandom(radius, canvas.width - radius);
          y = getRandom(radius, canvas.height - radius);

          j = -1;
        }
      }
    }

    particles.push(new Particle(x, y, radius));
  }

  animate();
}

// Animation Loop
function animate() {
  cancelAnimationFrame(request);
  request = requestAnimationFrame(animate);

  c.clearRect(0, 0, canvas.width, canvas.height);

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

function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
}

function mousemove({clientX, clientY}) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
}

/**
 * Rotates coordinate system for velocities
 *
 * Takes velocities and alters them as if the coordinate system they're on was rotated
 *
 * @param  Object | velocity | The velocity of an individual particle
 * @param  Float  | angle    | The angle of collision between two objects in radians
 * @return Object | The altered x and y velocities after the coordinate system has been rotated
 */

function rotate(velocity, angle) {
  const rotatedVelocities = {
    x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
    y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
  };

  return rotatedVelocities;
}

/**
 * Swaps out two colliding particles' x and y velocities after running through
 * an elastic collision reaction equation
 *
 * @param  Object | particle      | A particle object with x and y coordinates, plus velocity
 * @param  Object | otherParticle | A particle object with x and y coordinates, plus velocity
 * @return Null | Does not return a value
 */

function resolveCollision(particle, otherParticle) {
  const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
  const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

  const xDist = otherParticle.x - particle.x;
  const yDist = otherParticle.y - particle.y;

  // Prevent accidental overlap of particles
  if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

    // Grab angle between the two colliding particles
    const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

    // Store mass in var for better readability in collision equation
    const m1 = particle.mass;
    const m2 = otherParticle.mass;

    // Velocity before equation
    const u1 = rotate(particle.velocity, angle);
    const u2 = rotate(otherParticle.velocity, angle);

    // Velocity after 1d collision equation
    const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
    const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

    // Final velocity after rotating axis back to original location
    const vFinal1 = rotate(v1, -angle);
    const vFinal2 = rotate(v2, -angle);

    // Swap particle velocities for realistic bounce effect
    particle.velocity.x = vFinal1.x;
    particle.velocity.y = vFinal1.y;

    otherParticle.velocity.x = vFinal2.x;
    otherParticle.velocity.y = vFinal2.y;
  }
}