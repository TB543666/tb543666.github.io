let baseValue = 20;

function setup() {
createCanvas(windowWidth,windowHeight);

//let button = createButton('Clear');
//button.position(30, 30);
}

function draw(){
  rect(50,50,50,50);
}

function mouseDragged() {
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  ellipse(mouseX,mouseY,baseValue,baseValue);
}

/*function mouseClicked(){
  if (50 <= mouseX <= 100 && 50 <= mouseY <= 100){
    background(0);
*/
