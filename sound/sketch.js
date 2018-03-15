let music;
let scream;
let tyler;

function preload(){
  music = loadSound("assets/song.mp3");
  scream = loadSound("assets/scream.mp3");
  tyler = loadImage(" tyler.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  music.setVolume(0.5);
  scream.setVolume(1);
  music.play();
}
function draw(){
  aaaaaaaaaaaaaaaaaaaaaaaaa();


}

function aaaaaaaaaaaaaaaaaaaaaaaaa(){
  if(mouseIsPressed){
    scream.play();
    background(tyler);
  }
  if(!mouseIsPressed){
    background(255);
  }
}
