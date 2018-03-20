// Interactive Scene
// Tony Li
// Feb 26, 2018

//This sets the variable known as penSize to 3
//The penSize variable will determine the size of the pen stroke later on
let penSize, penColor;
let backgroundColorInput;
let state;
let newCanvas;
let intro;
let stateChecker = true;
let rValue, gValue, bValue, sizeValue;
let rSlider, gSlider, bSlider, sizeSlider;

function preload() {
  intro = loadImage("intro.png");
}

function setup() {
  //This creates a canvas and allows the canvas to be used as a variable later on
  let canvas = createCanvas(windowWidth, windowHeight);
  state = 1;
}

function setupSlider() {

  rSlider = createSlider(0, 255, 0);
  rSlider.position(width - 340, 50);
  rSlider.style("width", "255px");

  gSlider = createSlider(0, 255, 0);
  gSlider.position(width - 340, 50 + 30);
  gSlider.style("width", "255px");

  bSlider = createSlider(0, 255, 0);
  bSlider.position(width - 340, 50 + 60);
  bSlider.style("width", "255px");

  sizeSlider = createSlider(1, 80, 4);
  sizeSlider.position(width - 340, 480);
  sizeSlider.style("width", "255px");
}

function sliderDisplay() {
  strokeWeight(0);
  noFill();

  //This makes the side pannel
  fill(0, 45, 72);
  rect(width - 400, 0, width, height);

  //This is for the dividers on the side pannel
  fill(0, 140, 174);
  rect(width - 400, 425, width, 8);
  rect(width - 400, 515, width, 8);

  //This is just used to label the pen color and pan size sliders
  fill(200, 241, 247);
  textSize(36);
  textStyle(BOLD);
  textAlign(CENTER);
  textFont("Cambria");
  text("Pen Color", width - 200, 40);
  text("Pen Size", width - 200, 470);
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

  else if (state === 4) {
    //This makes it so that the pen stroke can't be less than 1
    penSize = constrain(penSize, 1, 100);
    sliderDisplay();

    //This allowed me to put the 'setupSlider' function in the draw loop instead of inside the function
    if (stateChecker){
      setupSlider();
      stateChecker = false;
    }

    //This assigns the variables rValue, gValue and bValue to their slider value.
    //THis also draws a square to dispay the color of the pen.
    //THis also cahnges the color of the pen to the color that is shown in the square.
    rValue = rSlider.value();
    gValue = gSlider.value();
    bValue = bSlider.value();
    fill(rValue, gValue, bValue);
    rect(width - 335, height - 925, 250, 250);
    stroke(rValue, gValue, bValue);

    //This assigns the sizeValue variable to its slider value and changes the pen size to the sizeValue variable.
    sizeValue = sizeSlider.value();
    penSize = sizeValue;
  }


  //This bit of code is in charge of the actual drawings made on thre canvas.
  if (mouseIsPressed && mouseX <= width - 400) {

    strokeWeight(penSize);
    line(mouseX, mouseY, pmouseX, pmouseY);

  }
}


function introScreen() {
  background(intro);
}

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
      background(intro);
      state = 3;
    }
  }
  else {
    fill(0, 45, 72);
  }
  rect(leftSide, topSide, buttonWidth, buttonHeight, 20);
  buttonText();
}

function buttonText() {
  textAlign(CENTER);
  fill(200, 241, 247);
  textSize(110);
  textStyle(BOLD);
  textFont("Cambria");
  text("Start", width / 2, height / 2 + 175);
}

function instructionScreen() {
  background(77, 148, 255);
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
    stroke(backgroundColorInput);
  }


  //This resets the program
  if (key === "r") {
    setup();
  }
}
