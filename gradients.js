const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const center = { x: canvas.width / 2, y: canvas.height /2};

const linear = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
linear.addColorStop(0, '#08c');
linear.addColorStop(0.5, '#80c');
linear.addColorStop(1, '#0c8');

ctx.fillStyle = linear;
ctx.fillRect(0, 0, canvas.width, canvas.height);

const redial = ctx.createRadialGradient(center.x, center.y, 100, center.x, center.y, 500);
redial.addColorStop(0, '#08c');
redial.addColorStop(0.5, '#80c');
redial.addColorStop(1, '#0c8');

ctx.fillStyle = redial;
ctx.fillRect(0, 0, canvas.width, canvas.height);