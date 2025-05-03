let planeImg;
let planeX, planeY;

function preload() {
  planeImg = loadImage('clipart2172953.png'); // Your uploaded image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  planeX = width / 2;
  planeY = height / 2;
}

function draw() {
  background(135, 206, 250); // Sky blue
  image(planeImg, planeX, planeY, 100, 100); // Display the plane

  // Movement controls
  if (keyIsDown(LEFT_ARROW)) planeX -= 5;
  if (keyIsDown(RIGHT_ARROW)) planeX += 5;
  if (keyIsDown(UP_ARROW)) planeY -= 5;
  if (keyIsDown(DOWN_ARROW)) planeY += 5;
}
