let myTimer;


function setup() {
  createCanvas(windowWidth, windowHeight);
  myTimer = new Timer(3000);
}

function draw() {
  fill(random(0,255), random(0,255), random(0,255));

  if (myTimer.isDone()){
    ellipse(random(width),random(height),random(25, 100),random(25,100));
    myTimer.reset(0.001);
  }
}

class Timer{
  constructor(waitTime){
    this.waitTime = waitTime;
    this.startTime = millis();
    this.finishtTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  reset(newWaitTime){
    this.waitTime = newWaitTime;
    this.startTime = millis();
    this.finishtTime = this.startTime + this.waitTime;
    this.timerIsDone = false;
  }

  isDone(){
    if (millis() >= this.finishtTime){
      return true;
    }
    else{
      return false;
    }
  }
}
