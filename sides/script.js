function setup() {
createCanvas(windowWidth,windowHeight);
}

function draw() {
  if (mouseX > windowWidth/2){
    noStroke();
    fill(random(255),random(255),random(255));
    ellipse(random(0, windowWidth),random(windowHeight),100,100);
  }
  if (mouseX < windowWidth/2){
    noStroke();
    fill(random(255),random(255),random(255));
    rect(random(0, windowWidth),random(windowHeight),100,100);
  }
}

function mouseClicked() {
    background(255)
}
