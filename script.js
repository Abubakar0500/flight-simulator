let planeImg;
let planeX, planeY;
let playerName = "";
let gameStarted = false;

function preload() {
  planeImg = loadImage('clipart2172953.png'); // Your plane image
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  planeX = width / 2;
  planeY = height / 2;
}

function draw() {
  if (!gameStarted) return;

  background(135, 206, 250);
  image(planeImg, planeX, planeY, 100, 100);

  if (keyIsDown(LEFT_ARROW)) planeX -= 5;
  if (keyIsDown(RIGHT_ARROW)) planeX += 5;
  if (keyIsDown(UP_ARROW)) planeY -= 5;
  if (keyIsDown(DOWN_ARROW)) planeY += 5;
}

function startGame() {
  const input = document.getElementById('player-name');
  playerName = input.value.trim();

  if (playerName === "") {
    alert("Please enter your name.");
    return;
  }

  document.getElementById('welcome-screen').style.display = 'none';
  gameStarted = true;
}
