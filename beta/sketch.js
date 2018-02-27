let x;
let y;

function setup() {
createCanvas(windowWidth,windowHeight);
x = width/2;
y = height/2;
}

function draw() {
  background(255);

  if (keyIsPressed) {
    moveStickman();
  }
  draw_stickman(mouseX, mouseY);
  draw_stickman(x,y);
}

function moveStickman() {
  if (key === 'W' || key == 'w'){
    y = y - 30}

  else if (key === 'S' || key == 's'){
    y = y + 30}

  if (key === 'A' || key == 'a'){
    x = x - 30}

  else if (key === 'D' || key == 'd'){
    x = x + 30}
}

function draw_stickman(x,y) {
  //Constrain to left side of screen
    x = constrain(x, 0, windowWidth / 2);

  //Head
    ellipse(x+300,y+175,150,150);

  //Hat
    rect(x+175, y+75, 250, 75);
    rect(x+260, y+25, 80, 150);
    fill(0);

  //Body
    line(x+300, y+250, x+300, y+400);
  //Arm
    line(x+200, y+300, x+400, y+300);

  //Legs
    line(x+300, y+400, x+200, y+500);
    line(x+300, y+400, x+400, y+500);
}
