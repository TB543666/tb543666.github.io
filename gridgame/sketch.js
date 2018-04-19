// Grid-Based Game Assignment
// Tony Li
// April 18, 2018



// Known Errors
// I wanst able to get the food to work properly


//Variables
let state;
let intro;
let rows = 75;
let cols = 75;
let grid;
let cellSize;
let movement, playerX, playerY;


// Preloading the required asset
function preload() {
  intro = loadImage("assets/intro.png");
}

// Sets up the canvas, the state of the screen, the size of each cell on the grid and the grid itself
function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
  state = 1;
  playerX = 0 + cellSize*13;
  playerY = 0 + cellSize*8;
  frameRate(10);

}

// Displays all the aspects of the game.
function draw() {
  if (state === 1) {
    background(intro);
    startButton();
  }

  if (state === 2) {
    let checker = true;
    background(0);
    displayGrid();
    snake();
    snakeMove();

    if (checker){
      foodSpawn();
      checker = false;
    }
  }

  if (state === 3) {
    background(0);
    gameOverButton();
    screenText();
  }
}


function foodSpawn(){
  fill(255);
  rect(random(cols), random(rows), cellSize, cellSize);


}


//This draws the snake and it also triggers the game over screen when the snake hits the border of the screen
function snake(){
  if (state === 2) {
    fill(0, 255, 0);
    rect(playerX, playerY, cellSize, cellSize);

    if (playerX < 0 ||playerX > width){
      state = 3;
    }

    if (playerY < 0 ||playerY > height){
      state = 3;
    }
  }
}

//This function is used to control the movement of the snake
function snakeMove(){
  if (state === 2) {
    if (movement === "right") {
      playerX += cellSize;
    }

    if (movement === "left") {
      playerX -= cellSize;
    }

    if (movement === "down") {
      playerY += cellSize;
    }

    if (movement === "up") {
      playerY -= cellSize;
    }
  }
}

//Whenever one of these keys are pressed the movement of the snake changes
function keyPressed() {
  if (state === 2) {
    if (key === "w" || key === "W") {
      movement = "up";
    }
    if (key === "s" || key === "S") {
      movement = "down";
    }
    if (key === "a" || key === "A") {
      movement = "left";
    }
    if (key === "d" || key === "D") {
      movement = "right";
    }
  }
}

//This displays the game grid that is behind the scenes
function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

//This is needed in several other functions
function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}

//This registers the pressing of the button and the changing of the buttons color
function startButton() {
  let buttonWidth = 500;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let rightSide = leftSide + buttonWidth;
  let topSide = height / 2 - buttonHeight / 2 + 150;
  let bottomSide = topSide + buttonHeight;

  noStroke();

  if (mouseX >= leftSide &&
    mouseX <= rightSide &&
    mouseY >= topSide &&
    mouseY <= bottomSide) {

    fill(0, 140, 174);

    if (mouseIsPressed) {
      state = 2;
    }
  }
  else {
    fill(0, 45, 72);
  }
  rect(leftSide, topSide, buttonWidth, buttonHeight, 20);
  screenText();
}

//This registers the pressing of the button and the changing of the buttons color
function gameOverButton(){
  let buttonWidth = 600;
  let buttonHeight = 200;
  let leftSide = width / 2 - buttonWidth / 2;
  let rightSide = leftSide + buttonWidth;
  let topSide = height / 2 - buttonHeight / 2 + 150;
  let bottomSide = topSide + buttonHeight;

  noStroke();

  if (mouseX >= leftSide &&
    mouseX <= rightSide &&
    mouseY >= topSide &&
    mouseY <= bottomSide) {

    fill(0, 140, 174);

    if (mouseIsPressed) {
      playerX = 0 + cellSize*13;
      playerY = 0 + cellSize*8;
      state = 2;
    }
  }
  else {
    fill(0, 45, 72);
  }
  rect(leftSide, topSide, buttonWidth, buttonHeight, 20);

}

//This writes the text seen on the canvas
function screenText() {
  if (state === 1 ){
    textAlign(CENTER);
    fill(200, 241, 247);
    textSize(110);
    textStyle(BOLD);
    textFont("Cambria");
    text("Start", width / 2, height / 2 + 175);

    textAlign(CENTER);
    fill(150, 241, 247);
    textSize(150);
    textStyle(BOLD);
    textFont("Cambria");
    text("Snake.io", width / 2, height / 2 - 100);
  }

  if (state === 3){
    textAlign(CENTER);
    fill(200, 241, 247);
    textSize(110);
    textStyle(BOLD);
    textFont("Cambria");
    text("Play Again", width / 2, height / 2 + 175);

    textAlign(CENTER);
    fill(150, 241, 247);
    textSize(150);
    textStyle(BOLD);
    textFont("Cambria");
    text("Game Over", width / 2, height / 2 - 100);
  }
}
