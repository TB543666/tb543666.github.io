let baseValue = 20;

function setup() {
  createCanvas(windowWidth,windowHeight);

//let button = createButton('Clear');
//button.position(30, 30);
}

function draw(){
  rect(50,50,50,50);

  // if (mouseIsPressed){
  //   noStroke();
  //   fill(0);
  //   //(random(255), random(255), random(255), random(255));
  //   ellipse(mouseX,mouseY,baseValue,baseValue);

}



function mouseDragged(){
  noStroke();
  fill(0);
  //(random(255), random(255), random(255), random(255));
  ellipse(mouseX,mouseY,baseValue,baseValue);
}
// function mouseDragged(x,y) {
//   y = constrain(mouseY, 0, 200);
//   // x = constrain(mouseX, 0, windowWidth / 2);
//
//   noStroke();
//   fill(random(255), random(255), random(255), random(255));
//   ellipse(mouseX,mouseY,baseValue,baseValue);
// }
