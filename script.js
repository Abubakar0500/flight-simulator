let plane;

function setup() {
  createCanvas(800, 400);
  plane = createVector(width / 2, height / 2);
}

function draw() {
  background(135, 206, 250); // Sky blue
  fill(255, 0, 0); // Red plane
  rect(plane.x, plane.y, 60, 20); // Draw plane

  if (keyIsDown(LEFT_ARROW)) plane.x -= 5;
  if (keyIsDown(RIGHT_ARROW)) plane.x += 5;
  if (keyIsDown(UP_ARROW)) plane.y -= 5;
  if (keyIsDown(DOWN_ARROW)) plane.y += 5;
}
