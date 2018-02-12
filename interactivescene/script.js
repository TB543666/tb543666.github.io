let baseValue = 20;

function setup() {
createCanvas(windowWidth,windowHeight);

let button = createButton('Clear');
button.position(30, 30);
}

function mouseDragged() {
  noStroke();
  //fill(random(255), random(255), random(255), random(255));
  fill(random(255),random(255),random(255))
  ellipse(mouseX,mouseY,baseValue,baseValue);

}
