// This function sets up the slider used to change the volume of the audio variable.
function setupSliders(){
  ampSlider = createSlider(0, 1, 0.4,0);
  ampSlider.position(width/2-500,height/2);
  ampSlider.style("width", "1000px");
}
