let baseValue = 20;

function setup() {
createCanvas(windowWidth,windowHeight);

}

function mouseDragged() {
  noStroke();
  //fill(random(255), random(255), random(255), random(255));
  fill(0)
  ellipse(mouseX,mouseY,baseValue,baseValue);

}
