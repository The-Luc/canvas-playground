const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dublePI = Math.PI * 2;
const center = { x: canvas.width / 2, y: canvas.height /2};


class Rectangle {

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.draw();
  }
  
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 2, 0, dublePI);
    ctx.closePath();
    ctx.arc(this.x, this.w, 2, 0, dublePI);
    ctx.closePath();
    ctx.arc(this.w, this.x, 2, 0, dublePI);
    ctx.closePath();
    ctx.arc(this.w, this.h, 2, 0, dublePI);
    ctx.closePath();
    ctx.fill();

  }
}

const rect = new Rectangle(0, 0, 100, 100);
const rect2 = new Rectangle(100, 0, 200, 200);