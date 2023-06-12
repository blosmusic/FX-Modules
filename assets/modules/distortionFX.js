let distortionLevelSlider = document.getElementById("distortion-level");
let distortionLevelValue = document.getElementById("distortion-level-value");
distortionLevelValue.innerHTML = distortionLevelSlider.value;

let distortionWetDrySlider = document.getElementById("distortion-wet-dry");
let distortionWetDryValue = document.getElementById("distortion-wet-dry-value");
distortionWetDryValue.innerHTML = distortionWetDrySlider.value;

const dist = new Tone.Distortion({
  distortion: distortionLevelSlider.value,
  oversample: "2x",
  wet: distortionWetDrySlider.value,
});

distortionLevelSlider.oninput = function () {
  distortionLevelValue.innerHTML = this.value;
  // console.log("Slider value: ", distortionLevelValue.innerHTML);
  updateDistortionSliders();
};

distortionWetDrySlider.oninput = function () {
  distortionWetDryValue.innerHTML = this.value;
  // console.log("Slider value: ", distortionWetDryValue.innerHTML);
  updateDistortionSliders();
};

function updateDistortionSliders() {
  dist.distortion = distortionLevelValue.innerHTML;
  dist.wet.value = distortionWetDryValue.innerHTML;
}

export {
  dist,
  distortionLevelValue,
  distortionLevelSlider,
  distortionWetDryValue,
  distortionWetDrySlider,
  updateDistortionSliders,
};
