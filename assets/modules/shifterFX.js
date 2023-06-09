let pitchShifterSlider = document.getElementById("pitch-level");
let pitchShifterValue = document.getElementById("pitch-level-value");
pitchShifterValue.innerHTML = pitchShifterSlider.value;

const shift = new Tone.FrequencyShifter(pitchShifterSlider.value);

pitchShifterSlider.oninput = function () {
  pitchShifterValue.innerHTML = this.value;
  console.log("Slider value: ", pitchShifterValue.innerHTML);
  updatePitchSliders();
};

function updatePitchSliders() {
  shift.frequency = pitchShifterValue.innerHTML;
}

export { shift };