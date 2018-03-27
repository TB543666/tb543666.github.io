let grid = [[0,1,0], [1,1,0], [0,0,1]];
let rows = 100;
let cols = 100;
let cellSize;


function setup() {
  createCanvas(600,600);
  cellSize = width/cols;
}

function draw() {
  background(255);
  displayGrid();


}

function displayGrid(){
  for (let x=0; x<grid.length; x++){
    for (let y=0; y<grid[0].length; y++){
      if(grid[x][y] ===0){
        fill(0);
      }
      else{
        fill(255);
      }

      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}

function createRandom2dArray(cols, rows){
  let randomGrid = [];
  for (let x=0; x<cols; x++){
    randomGrid.push([]);
    for (let y=0; y<rows; y++){
      if (random(100) < 50){
        randomGrid[x].push(0);
      }
      else{
        randomGrid[x].push(1);
      }
    }

  }
  return randomGrid;
}

function mousePressed(){
  grid = createRandom2dArray(cols, rows);
}
