const pitchShifterSlider = document.getElementById("pitch-level");
const pitchShifterValue = document.getElementById("pitch-level-value");
pitchShifterValue.innerHTML = pitchShifterSlider.value;

const pitchShiftMode = document.querySelectorAll('input[name="pitch-mode"]');
let pitchMode = "2-oct-plus";

const shift = new Tone.PitchShift(pitchShifterSlider.value, 0.1, 0.01);

pitchShifterSlider.oninput = function () {
  pitchShifterValue.innerHTML = this.value;
  console.log("Slider value: ", pitchShifterValue.innerHTML);
  updatePitchSliders();
};

function updatePitchSliders() {
  shift.pitch = pitchShifterValue.innerHTML;
}

pitchShiftMode.forEach((mode) => {
  mode.oninput = function () {
    pitchMode = this.value;
    console.log("Pitch mode: ", pitchMode);
    updatePitchMode();
  };
});

function updatePitchMode() {
  switch (pitchMode) {
    case "2-oct-plus":
      document.getElementById("pitch-level").max = 24;
      document.getElementById("pitch-level").min = 0;
      break;

    case "1-oct-plus":
      document.getElementById("pitch-level").max = 12;
      document.getElementById("pitch-level").min = 0;
      break;

    case "1-oct-minus":
      document.getElementById("pitch-level").max = 0;
      document.getElementById("pitch-level").min = -12;
      break;

    case "2-oct-minus":

      document.getElementById("pitch-level").max = 0;
      document.getElementById("pitch-level").min = -24;
      break;
  }
}

export {
  // pitchShifterSlider,
  // pitchShifterValue,
  shift,
  // updatePitchSliders,
  // pitchShiftMode,
  // updatePitchMode,
};
