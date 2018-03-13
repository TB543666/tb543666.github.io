function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(0);
  angleMode(DEGREES);
  translate(width/2, height/2);
  rotate(mouseX);
  rect(100, 100, 300, 50);
}
