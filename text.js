const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.font = '100px Helvetica';
ctx.textAlign = 'center';

ctx.moveTo(0, canvas.height / 2);
ctx.lineTo(canvas.width, canvas.height / 2);
ctx.strokeStyle = '#1b1c1d';
ctx.stroke();

ctx.textBaseline = 'hanging';
ctx.strokeStyle = '#08c';
ctx.strokeText('Hello world!', canvas.width / 2, canvas.height / 2);