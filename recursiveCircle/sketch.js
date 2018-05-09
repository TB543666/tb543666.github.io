let theta;
let theAngle = map(mouseX, 0, 90);

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  angleMode(DEGREES);
}

function draw() {
  background(0);
  stroke(255);

  theta = theAngle;
  let branchSize = 150;

  translate(width/2,height);
  line(0,0,0,-branchSize);

  translate(0, -branchSize);

  branch(branchSize);


  // drawCircle(width/2, width/2, 8);
}

function branch(length) {
  length *= 2/3;

  if (length > 3) {
    push();
    rotate(theta);
    line(0,0,0,-length);
    translate(0,-length);
    pop();

    push();
    push();
    rotate(-theta);
    line(0,0,0,-length);
    translate(0,-length);
    pop();
  }
}

// function drawCircle(x, radius,level){
//   let fillColor = 125 *level/4;
//   fill(fillColor);
//   ellipse(x, height/2, radius*2, radius*2);
//
//   if (level > 1){
//     level--;
//     drawCircle(x, radius/2, level);
//   }
// }
