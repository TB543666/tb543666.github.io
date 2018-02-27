let x, y, radius;
let xSpeed, ySpeed;
let mySound;


function setup(){
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y = height/2;
  radius = 100;
  xSpeed = random(5, 100);
  ySpeed = random(5, 100);
}

function draw(){
  background(255);
  moveThing();
  displayThing();

}

function moveThing(){
  x += xSpeed;
  y += ySpeed;

  if (y + radius >= height || y - radius <= 0){
    ySpeed = ySpeed * -1;
  }

  if (x + radius >= width || x - radius <= 0){
    xSpeed = xSpeed * -1;
  }
}

function displayThing(){
  noStroke();
  fill(random(255), random(255), random(255));
  radius += random(0,5);
  ellipse(x,y,radius,radius);
}
