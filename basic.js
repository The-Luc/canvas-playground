const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const center = {x: window.innerWidth / 2, y: window.innerHeight / 2};
const colors = ['#495867', '#FE5F55', '#BDD5EA'];

// Set canvas width & height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Rectangles
c.fillStyle = '#f35325';
c.fillRect(center.x - 101,  center.y - 101, 100, 100);
c.fillStyle = '#81bc06';
c.fillRect(center.x + 1,  center.y - 101, 100, 100);
c.fillStyle = '#05a6f0';
c.fillRect(center.x - 101,  center.y + 1, 100, 100);
c.fillStyle = '#ffba08';
c.fillRect(center.x + 1,  center.y + 1, 100, 100);

// Lines
let xCounter = 0;

c.beginPath();

for (let i = 0; i < 30; i++) {
  const y = i % 2 === 0 ? center.y - 250 : center.y - 200;
  c.lineTo(xCounter, y);
  xCounter += 30;
}

c.strokeStyle = '#08c';
c.stroke();

// Arc / Circle

xCounter = 0;
for (let i = 0; i < 30; i ++) {
  c.beginPath();
  c.arc(xCounter, center.y + 250, 30, 0, Math.PI * 2, false);
  c.strokeStyle = '#08c';
  c.stroke();
  xCounter += 30;
}


// Random circles

for (let i = 0; i < 300; i++) {
  const x = getRandom(0, window.innerWidth);
  const y = getRandom(0, window.innerHeight);

  c.beginPath();
  c.arc(x, y, 30, 0, Math.PI * 2);
  c.strokeStyle = getRandomColor();
  c.stroke();
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}