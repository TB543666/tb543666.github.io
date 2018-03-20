let sizeSlider, rSlider, gSlider, bSlider;
let sliderR, sliderG, sliderB, polySize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  setupSlider();
}

function draw() {
  sliderR = rSlider.value();
  sliderG = gSlider.value();
  sliderB = bSlider.value();
  fill(sliderR, sliderG, sliderB);
  rectMode(CENTER);
  stroke(0);
  rect(1200, 32, 80, 30);
}

// Creates all the slider variables and places them in the screen.
function setupSlider() {

  // createSlider() gives the slider a range of 0, 255 (for RGB) and sets the default as 100
  rSlider = createSlider(0, 255, 100);
  gSlider = createSlider(0, 255, 100);
  bSlider = createSlider(0, 255, 100);
  sizeSlider = createSlider(5, 100, 30);
  rSlider.position(720, 25);
  gSlider.position(860, 25);
  bSlider.position(1000, 25);
  sizeSlider.position(1300, 25);

}
