// This funtion is called when the mediaPlayer button is pressed, it goes on to removes all the elements on the intro screen and then it changes the state.
function mediaPlayerState() {
  clearElements();
  state = 2;
}

// This funtion is called when the nightCoreConverter button is pressed, it goes on to removes all the elements on the intro screen and then it changes the state.
function nightCoreConverterState() {
  clearElements();
  state = 3;
}

// This function is supposed to change the state to the radio player state
function radioPlayerState() {
  clearElements();
  state = 4;
}
// This fcuntion is called when the secretPlayer button is pressed, it goes on to removes all the elements on the intro screen and then it changes the state.
function secretPlayerState() {
  clearElements();
  state = "secret";
  stateChecker = true;
}

// This function is used to remove the buttons found on the intro screen, this is need because otherwise the buttons will continue to show up in other states.
function clearElements() {
  removeElements(mediaPlayer);
  removeElements(nightCoreConverter);
}

// This function restarts the program and it is called when the back button is pressed or when the esc key is pressed.
function reloadProgram() {
  window.location.reload(true);
}

// This function is in charge o saving the audio file (WORK IN PROGRESS).
function saveAudio() {
  saveSound(audio, "Nightcore");
}

// This function is called when the play button is pressed and it essentially just plays the audio file.
function playAudio() {
  if (playing){
    audio.play();
    playing = false;
  }
}

// This function is called when the pause button is pressed and it ssentially just pauses the audio file that is playing.
function pauseAudio() {
  audio.pause();
  playing = true;
}
