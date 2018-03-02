let boxSize = 600/8;

function setup() {
  createCanvas(600, 600);
  background(0);


}

function draw() {
  noStroke();

  for (let i = 0; i <= 8; i++) {
    for (let j = 0; j <= 8; j++){
      stroke(198, 253, 241);
      strokeWeight(0.1);
      point(boxSize*j, boxSize*i , boxSize, boxSize);
      line(boxSize*j, boxSize*i, width/2, height/2);


    }


  }

}
