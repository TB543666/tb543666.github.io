// grid demo
// Dan Schellenberg
// Mar 26, 2018

let rows = 65;
let cols = 65;
let grid;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}


function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      randomGrid[x].push(1);
    }
  }
  return randomGrid;
}
