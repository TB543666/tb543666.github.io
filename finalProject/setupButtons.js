// This function is used to set up the buttons on all the different states that are used.
function setupButtons() {
  if (state === 1) {
    mediaPlayer = createButton("Media Player");
    mediaPlayer.position(0, 300);
    mediaPlayer.class("btn btn-primary btn-lg btn-block");
    mediaPlayer.mousePressed(mediaPlayerState);

    nightCoreConverter = createButton("Nightcore Converter");
    nightCoreConverter.position(0, 400);
    nightCoreConverter.class("btn btn-primary btn-lg btn-block");
    nightCoreConverter.mousePressed(nightCoreConverterState);

    // radioPlayer = createButton("Radio Player");
    // radioPlayer.position(0, 500);
    // radioPlayer.class("btn btn-primary btn-lg btn-block");
    // radioPlayer.mousePressed(radioPlayerState);

    secretPlayer = createButton("Secret Player");
    secretPlayer.position(0, 950);
    secretPlayer.class("btn btn-primary btn-sm");
    secretPlayer.mousePressed(secretPlayerState);
  }

  if (state === 2) {
    playButton = createButton("P L A Y");
    playButton.position(width/2-100, height/2+50);
    playButton.class("btn btn-primary");
    playButton.mousePressed(playAudio);

    pauseButton = createButton("P A U S E");
    pauseButton.position(width/2+25, height/2+50);
    pauseButton.class("btn btn-primary");
    pauseButton.mousePressed(pauseAudio);

  }

  if (state === 3) {
    playButton = createButton("P L A Y");
    playButton.position(width/2-100, height/2+50);
    playButton.class("btn btn-primary");
    playButton.mousePressed(playAudio);

    pauseButton = createButton("P A U S E");
    pauseButton.position(width/2+25, height/2+50);
    pauseButton.class("btn btn-primary");
    pauseButton.mousePressed(pauseAudio);

  }
}

// This function sets up the bac button which calls the reloadProgram function when it is pressed.
function reloadProgramButton() {
  backButton = createButton("Back");
  backButton.position(0-10, height-42);
  backButton.class("btn btn-pimary btn-lg");
  backButton.mousePressed(reloadProgram);
}

// This button calls the saveAudio function when it is pressed
function saveAudioButton() {
  saveButton = createButton("S A V E");
  saveButton.position(width-73, height-36);
  saveButton.class("btn btn-primary");
  saveButton.mousePressed(saveAudio);
}
