const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const image = new Image();
const center = { x: canvas.width / 2, y: canvas.height /2};

image.src = 'https://s.yimg.com/uy/build/images/sohp/womens-month-mar-2018/polinawashington_untitled.jpg';

ctx.drawImage(image, 0, 0, canvas.width, center.y);
ctx.drawImage(image, 0, center.y, canvas.width, center.y, center.x - 50, center.y - 50, 100, 100);