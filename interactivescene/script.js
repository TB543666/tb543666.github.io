// Interactive Scene
// Tony Li
// Feb 26, 2018

//This sets the variable known as penSize to 3
//The penSize variable will determine the size of the pen stroke later on
let penSize = 3;
let penColor;
let backgroundColorInput;
let state;
let backgroundChecker;
let intro;

function setup() {
  //This creates a canvas and allows the canvas to be used as a variable later on
  let canvas = createCanvas(windowWidth, windowHeight);
  penSize = 3;
  state = 1;
  noStroke();
}

function preload() {
  intro = loadImage("intro.png");
}


function draw() {
  if (state === 1) {
    introScreen();
    startButton();
  }

  else if (state === 2) {
    instructionScreen();
  }

  else if (state === 3) {
    backgroundColorInput = prompt("Select a color for the background.");
    background(backgroundColorInput);
    state = 4;
    mouseIsPressed = false;
  }

  // else if (isNaN(int(backgroundColorInput))){
  //   backgroundChecker = false;
  //   state = 3;


  else if (state === 4) {
    //This makes it so that the pen stroke can't be less than 1
    stroke(0);
    penSize = constrain(penSize, 1, 100);


    //This bit of code is in charge of the actual drawings made on thre canvas.
    if (mouseIsPressed) {
      stroke(0);
      strokeWeight(penSize);
      line(mouseX, mouseY, pmouseX, pmouseY);
    }
  }
}

function introScreen() {
  background(intro);
}

function instructionScreen() {
  background(77, 148, 255);
}


function startButton(){
  let buttonWidth = 400;
  let buttonHeight = 200;
  let leftSide = width/2 - buttonWidth/2;
  let rightSide = leftSide + buttonWidth;
  let topSide = height/2 - buttonHeight/2 + 150;
  let bottomSide = topSide + buttonHeight;

  noStroke();

  if (mouseX >= leftSide &&
      mouseX <= rightSide &&
      mouseY >= topSide &&
      mouseY <= bottomSide) {

    fill(183,241,247);

    if (mouseIsPressed) {
      state = 3;
    }
  }
  else{
    fill(0,45,72);
  }
  rect(leftSide,topSide,buttonWidth,buttonHeight, 20);
}

function keyTyped() {
  //This changes the pen size
  if (key === "w") {
    penSize += 1;
  }
  if (key === "s") {
    penSize -= 1;
  }

  //This changes the color of the pen using user input
  if (key === "p") {
    penColor = prompt("Select a color for the pen.");
    stroke(penColor);

  }

  //This clears the canvas
  if (key === "c") {
    background(backgroundColorInput);
  }

  //This allows the user to save the current canvas as an image
  if (key === " ") {
    saveCanvas(canvas, "My Drawing", "jpg");
  }

  //This basically creates an eraser for the user to use on the canvas
  if (key === "e") {
    penColor = backgroundColorInput;
    stroke(penColor);
  }

  //This cycles the color of the pen
  if (key === "q") {
    stroke(random(0, 255), random(0, 255), random(0, 255));
  }

  //This resets the canvas
  if (key === "r") {
    setup();
  }

}
