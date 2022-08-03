const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Triangle {
  constructor(coords, color = '#08c') {
    this.color = color;
    this.coords = coords;
  }

  draw() {
    ctx.beginPath();
    ctx.lineWidth = 26;
    ctx.lineJoin = 'round';
    ctx.moveTo(...this.coords[0]);
    ctx.lineTo(...this.coords[1]);
    ctx.lineTo(...this.coords[2]);
    ctx.closePath();
    ctx.strokeStyle = this.color;
    ctx.stroke();
  }
}
const points = [];
const triangles = [];

points.push([[100, 100], [300, 100], [200, 200]]);
points.push([[200, 200], [300, 300], [300, 100]]);
points.push([[200, 200], [100, 300], [100, 100]]);
// points.push([[40, 40], [230, 40], [40, 230]]);
// points.push([[230, 40], [230, 230], [40, 230]]);

for (let point of points) {
  triangles.push(new Triangle(point));
}

for (let triangle of triangles) {
  triangle.draw();
}