// Interactive Scene
// Tony Li
// Feb 26, 2018

//This sets the variable known as penSize to 3
//The penSize variable will determine the size of the pen stroke later on
let penSize = 3;
let penColor;
let backgroundColorInput;

function setup() {
//This creates a canvas and allows the canvas to be used as a variable later on
  let canvas = createCanvas(windowWidth,windowHeight);
  backgroundColorInput = prompt("Select a color for the background. : ", "");
  background(backgroundColorInput);
  stroke(0);
  penSize = 3;
}

function draw(){
//This makes it so that the pen stroke can't be less than 1
  penSize = constrain(penSize, 1, 100);
 
  //This bit of code is in charge of the actual drawings made on thre canvas.
  if (mouseIsPressed){
    strokeWeight(penSize);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
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
  if (key === "p"){
    penColor = prompt("Select a color for the pen. : ", "");
    stroke(penColor)
  }
  
  //This clears the canvas 
  if (key === "c"){
    background(backgroundColorInput);
  }

  //This allows the user to save the current canvas as an image
  if (key === " "){
    saveCanvas(canvas, "My Drawing", "jpg");
  }
  //This basically creates an eraser for the user to use on the canvas
  if (key === "e"){
    penColor = backgroundColorInput;
  }
  
  //This cycles the color of the pen 
  if (key === "q"){
    stroke(random(0, 255), random(0,255), random(0, 255));
  }
  
  //This resets the canvas
  if (key === "r"){
    setup();
  }
}
