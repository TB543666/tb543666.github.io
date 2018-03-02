function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}





function draw() {
  let x = random(0, width);
  let y = random(0, height);

  if (mouseIsPressed && keyIsPressed){
    if (key === "t" || key === "T"){
      fill(random(0, 255), random(0, 255), random(0, 255));
      strokeWeight(1);
      triangle(x, y, x + 30, y - 20, x + 60, y);
    }
  }
}
