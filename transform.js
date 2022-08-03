const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// transform parameters:
// 1. horizontal scaling
// 2. horizontal skewing
// 3. vertical skewing
// 4. vertical scaling
// 4. vertical scaling
// 5. translate/move horizontally
// 6. translate/move vertically

ctx.transform(1, 0.5, 0, 1.5, 45, 0);
ctx.fillStyle = '#f35325';
ctx.fillRect(0, 50, 300, 200);

ctx.setTransform(1, -0.5, 0, 1.5, 345, 150);
ctx.fillStyle = '#81bc06';
ctx.fillRect(0, 50, 300, 200);

ctx.setTransform(1, 0.5, 0, 1.5, 45, 0);
ctx.fillStyle = '#05a6f0';
ctx.fillRect(0, 250, 300, 200);

ctx.setTransform(1, -0.5, 0, 1.5, 345, 150);
ctx.fillStyle = '#ffba08';
ctx.fillRect(0, 250, 300, 200);
