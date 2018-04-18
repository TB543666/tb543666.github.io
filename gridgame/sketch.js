function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  image(gear, 0, 0);

  stroke(0);
  line(0, 0, 200, 200);

  fill(0, 255, 0, 100);
  noStroke();

  rect(mouseX, mouseY, 100, 300);
  ellipse(400, 150, 300, 200);
}
