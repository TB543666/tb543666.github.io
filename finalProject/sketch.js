// Audio Player
// Tony Li
// May 9, 2018

// Variables
let audio;
let state;
let dropArea;
let ampSlider, ampValue;
let playButton, pauseButton,backButton, saveButton, fileButton;
let mediaPlayer, nightCoreConverter, radioPlayer;
let rateValue = 1.25;
let stateChecker = false;
let ampSliderState = false;
let playing = true;
let scrubber;
let secretAudio, secretBackground;

// This function is used to load the files that are used later in the program
function preload() {
  secretAudio = loadSound("assets/secret/secret.mp3");
  secretBackground = loadImage("assets/secret/background.jpg");
}

// This funtcion sets up the cavas and the state of the program.
function setup() {
  state = 1;
  dropArea = createCanvas(windowWidth, windowHeight);
  dropArea.drop(dropFile);
}

// This function is associated with the dropping of audio files onto the canvas,once an audio file is dropped onto the canvas the variable 'audio' is then set to the audio file that is dropped onto the canvas.
function dropFile(file){
  if (file.type === "audio") {
    stateChecker = true;
    audio = loadSound(file.data);
  }
}

// This function detects when a key is pressed and then calls a function.
function keyPressed() {
  if (keyCode === ESCAPE) {
    reloadProgram();
  }

  if (state === 3 || state === "secret") {
    if (keyCode === UP_ARROW) {
      rateValue = rateValue + 0.25;
    }
    if (keyCode === DOWN_ARROW) {
      rateValue = rateValue - 0.25;
    }
  }
}

// This function is in charge of changing the time of the song
function doubleClicked() {
  if (audio.isPlaying()) {
    audio.jump(mouseX/scrubber);
  }
  if (secretAudio.isPlaying()) {
    secretAudio.jump(mouseX/scrubber);
  }
}

// This function is the main part of the program as it calls different functions depending on the what the state variable is set to.
function draw(file) {
  if (state === 1) {
    background(60, 161, 195);
    screenText();
    setupButtons();
  }

  if (state === 2) {
    background(60, 161, 195);
    screenText();
    reloadProgramButton();

    // This part of the program is needed as it allows for certain functions to only be called once in the draw function.
    if (stateChecker){

      // This function is used to create the wacve effect seen on the different states
      // let siriWave = new SiriWave({
      //   width: 1910,
      //   height: 200,
      //   speed: 0.03,
      //   container: document.getElementById("wave"),
      //   autostart: true,
      // });

      setupButtons();
      setupSliders();
      stateChecker = false;
      ampSliderState = true;
    }

    // This part of the function is in charge of adjusting the volume of the song.
    if (ampSliderState === true) {
      ampValue = ampSlider.value();
      audio.amp(ampValue);
      scrubber = width/audio.duration();
      fill(42, 113, 137);
      noStroke();
      rect(0,0,scrubber*audio.currentTime(),height);
      fill(184, 230, 255);
      screenText();
    }
  }

  if(state === 3) {
    background(60, 161, 195);
    screenText();
    reloadProgramButton();
    saveAudioButton();

    // This part of the program is needed as it allows for certain functions to only be called once in the draw function.
    if (stateChecker){

      // let siriWave = new SiriWave({
      //   width: 1910,
      //   height: 200,
      //   speed: 0.03,
      //   container: document.getElementById("wave"),
      //   autostart: true,
      // });

      setupButtons();
      setupSliders();
      stateChecker = false;
      ampSliderState = true;
    }

    // This part of the function is in charge of adjusting the volume of the song.
    if (ampSliderState === true) {
      ampValue = ampSlider.value();
      audio.amp(ampValue);
      audio.rate(rateValue);
      scrubber = width/audio.duration();
      fill(42, 113, 137);
      noStroke();
      rect(0,0,scrubber*audio.currentTime(),height);
      fill(184, 230, 255);
      screenText();
    }
  }

  if (state === "secret"){
    background(secretBackground);
    screenText();
    reloadProgramButton();

    // This part of the program is needed as it allows for certain functions to only be called once in the draw function.
    if (stateChecker){
      setupSliders();
      secretAudio.loop();
      stateChecker = false;
      ampSliderState = true;
    }

    // This part of the function is in charge of adjusting the volume of the song.
    if (ampSliderState === true) {
      ampValue = ampSlider.value();
      secretAudio.amp(ampValue);
      secretAudio.rate(rateValue);
      scrubber = width/secretAudio.duration();
      fill(42, 113, 137);
      noStroke();
      rect(0,0,scrubber*secretAudio.currentTime(),height);
      fill(184, 230, 255);
      screenText();
    }
  }
}
