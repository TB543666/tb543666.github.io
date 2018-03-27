// Terrain Generation
// Dan Schellenberg - replace with your name
// Mar 19, 2018

let heights = [];
let numberOfRectangles;
let tallestPoint = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  numberOfRectangles = width;
  generateInitialTerrain(numberOfRectangles);
}

function draw() {
  background(255);
  displayTerrain();
}

function generateInitialTerrain(numberOfRectangles) {
  let time = 0;
  let dt = 0.001;

  for (let i=0; i<numberOfRectangles; i++) {
    let currentheight = noise(time)*500;
    heights.push(currentheight);
    print(currentheight);

    if (tallestPoint < currentheight){
      tallestPoint = currentheight;
    }

    time += dt;
  }
}

function plantFlag(){
  let tallestPoint = 0;

}

function displayTerrain() {
  let rectWidth = width / numberOfRectangles;
  rectMode(CORNERS);
  fill(0);
  for (let i=0; i<numberOfRectangles; i++) {
    rect(i*rectWidth, height, (i+1)*rectWidth, height - heights[i]);
  }
}
