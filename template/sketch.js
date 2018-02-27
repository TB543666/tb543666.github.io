<<<<<<< HEAD
// 1. Create the button
let button = document.createElement("button");
button.innerHTML = "Do Something";

// 2. Append somewhere
let body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("did something");
});

/* Read 

https://css-tricks.com/use-button-element/
*/
=======
// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables
let gear;

// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images (since JS is asynchronous)
function preload() {
  gear = loadImage("images/gear.png");
}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);

  image(gear, 0, 0);

  stroke(0);
  line(0, 0, 200, 200);

  fill(0, 255, 0, 100);
  noStroke();

  rect(mouseX, mouseY, 100, 300);
  ellipse(400, 150, 300, 200);
}
>>>>>>> eef27b3a0eec30799a4ceffa7e64894ee3f3e37c
