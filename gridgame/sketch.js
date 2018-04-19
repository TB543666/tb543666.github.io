// Grid-Based Game Assignment
// Tony Li
// April 18, 2018

// Known Errors
// I wasn't able to get the food to work properly,
// I was also planning to keep track of the score but because I wasn't able to get the food to work the score counter wouldn't work
// I was also unable to add on the body of the snake 

//Variables
let state;
let intro;
let rows = 75;
let cols = 75;
let grid, cellSize;
let movement, playerX, playerY;
let scoreTimer;
let foodState = true;

// // Preloading the required asset
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
  frameRate(9);

}

// Displays all the aspects of the game.
function draw() {
  if (state === 1) {
    // background(intro);
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
		nextButton();
		screenText();
		// state = 4
  }
	
  if (state === 4) {
    background(0);
    gameOverButton();
    screenText();
  }
}

//This is supposed to be placing a piece of food in a random position on the grid  
function foodSpawn(){
	if (foodState === true){
		fill(255);
		rect(random(width), random(height), cellSize, cellSize);
		foodState = false
	}
}


//This draws the snake and it also triggers the game over screen when the snake hits the border of the screen
function snake(){
  if (state === 2) {
    fill(0, 255, 0);
    rect(playerX, playerY, cellSize, cellSize);

    if (playerX <= -1 ||playerX > width){
      state = 3;
    }

    if (playerY <= -1 ||playerY > height){
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
    if (key === "w" || key === "W" || keyCode === UP_ARROW) {
      movement = "up";
    }
    if (key === "s" || key === "S" || keyCode === DOWN_ARROW) {
      movement = "down";
    }
    if (key === "a" || key === "A" || keyCode === LEFT_ARROW) {
      movement = "left";
    }
    if (key === "d" || key === "D" || keyCode === RIGHT_ARROW) {
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

//This registers the pressing of the button on the start screen
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

//This registers the pressing of the button on the score screen
function nextButton(){
	let buttonWidth = 400;
  let buttonHeight = 150;
  let leftSide = width / 2 - buttonWidth / 2;
  let rightSide = leftSide + buttonWidth;
  let topSide = height / 2 - buttonHeight / 2 + 150;
  let bottomSide = topSide + buttonHeight;

  noStroke();

  if (mouseX >= leftSide &&
    mouseX <= rightSide &&
    mouseY >= topSide+50 &&
    mouseY <= bottomSide) {

    fill(0, 140, 174);

    if (mouseIsPressed) {
      playerX = 0 + cellSize*13;
      playerY = 0 + cellSize*8;
      state = 4;
			mouseIsPressed = false;
    }
  }
  else {
    fill(0, 45, 72);
  }
  rect(leftSide, topSide +50, buttonWidth, buttonHeight, 20);
}

//This registers the pressing of the button on the gameover screen
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

//This writes the text seen on the canvas, this text changes based on the different states 
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
    text("Next", width / 2, height / 2 + 225);

    textAlign(CENTER);
    fill(150, 241, 247);
    textSize(100);
    textStyle(BOLD);
    textFont("Cambria");
    text("Score", width / 2, height / 2 - 100);
  }
	
  if (state === 4){
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

