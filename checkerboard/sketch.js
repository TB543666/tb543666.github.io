let boxSize = 600/8;

function setup() {
  createCanvas(600, 600);
  background(0);


}

function draw() {
  noStroke();

  for (let i = 0; i <= 8; i += 0.5) {
    for (let j = 0; j <= 8; j += 0.5){
      stroke(198, 253, 241);
      strokeWeight(0.25);
      point(boxSize*j, boxSize*i , boxSize, boxSize);
      line(boxSize*j, boxSize*i, width/2, height/2);


    }

    noLoop();
  }

}
