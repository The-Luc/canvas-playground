const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const image = new Image();
const center = { x: canvas.width / 2, y: canvas.height /2};

image.crossOrigin = 'anonymous';
image.src = 'https://farm6.staticflickr.com/5608/15023253524_589c7b137f_k.jpg';

ctx.drawImage(image, 0, 0, canvas.width, center.y);

const imageData = ctx.getImageData(0, 0, canvas.width, center.y);

for (let i = 0; i < imageData.data.length; i += 4) {
  const avg = (imageData.data[i] + imageData.data[i + 1] + imageData.data[i+ 2]) / 3;
  imageData.data[i] = avg;
  imageData.data[i + 1] = avg;
  imageData.data[i + 2] = avg;
}

ctx.putImageData(imageData, 0, 0);


// const imageData = ctx.createImageData(400, 200);

// for (let i = 0; i < imageData.data.length; i += 4) {
//   imageData.data[i] = 0 // red 0-255
//   imageData.data[i + 1] = 150 // green 0-255
//   imageData.data[i + 2] = 255 // blue 0-255
//   imageData.data[i + 3] = 255 // alpha 0-255
// }

// ctx.putImageData(imageData, 0, 0);
// console.log(imageData);
