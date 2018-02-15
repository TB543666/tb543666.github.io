let x, y, radius;
let xSpeed, ySpeed;
let mySound;

function preload() {
  mySound = loadSound("ding.mp3");
}

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
    mySound.setVolume(0.1);
    mySound.play();
  }

  if (x + radius >= width || x - radius <= 0){
    xSpeed = xSpeed * -1;
    mySound.setVolume(0.1);
    play();
  }
}

function displayThing(){
  noStroke();
  fill(random(255), random(255), random(255));
  radius += 5;
  ellipse(x,y,radius,radius);
}
