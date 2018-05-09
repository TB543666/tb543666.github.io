let n;

function setup() {
  createCanvas(windowWidth, windowHeight);
  print(factorial(64));
}

function draw() {
  background(255);
}

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  else {
    return n* factorial(n-1);
  }
}
