let chorusFrequencySlider = document.getElementById("chorus-frequency");
let chorusFrequencyValue = document.getElementById("chorus-frequency-value");
chorusFrequencyValue.innerHTML = chorusFrequencySlider.value;

let chorusDelaySlider = document.getElementById("chorus-delay");
let chorusDelayValue = document.getElementById("chorus-delay-value");
chorusDelayValue.innerHTML = chorusDelaySlider.value;

let chorusDepthSlider = document.getElementById("chorus-depth");
let chorusDepthValue = document.getElementById("chorus-depth-value");
chorusDepthValue.innerHTML = chorusDepthSlider.value;

let chorusWetDrySlider = document.getElementById("chorus-wet-dry");
let chorusWetDryValue = document.getElementById("chorus-wet-dry-value");
chorusWetDryValue.innerHTML = chorusWetDrySlider.value;

const chorus = new Tone.Chorus({
  frequency: chorusFrequencySlider.value,
  delayTime: chorusDelaySlider.value,
  depth: chorusDepthSlider.value,
  type: "sine",
  spread: 0,
  wet: chorusWetDrySlider.value,
});

chorusFrequencySlider.oninput = function () {
  chorusFrequencyValue.innerHTML = this.value;
  // console.log("Slider value: ", chorusFrequencyValue.innerHTML);
  updateChorusSliders();
};

chorusDelaySlider.oninput = function () {
  chorusDelayValue.innerHTML = this.value;
  // console.log("Slider value: ", chorusDelayValue.innerHTML);
  updateChorusSliders();
};

chorusDepthSlider.oninput = function () {
  chorusDepthValue.innerHTML = this.value;
  // console.log("Slider value: ", chorusDepthValue.innerHTML);
  updateChorusSliders();
};

chorusWetDrySlider.oninput = function () {
  chorusWetDryValue.innerHTML = this.value;
  // console.log("Slider value: ", chorusWetDryValue.innerHTML);
  updateChorusSliders();
};

function updateChorusSliders() {
  // console.log("Updating chorus sliders...");
  let frequency = parseFloat(chorusFrequencyValue.innerHTML);
  let delayTime = parseFloat(chorusDelayValue.innerHTML);
  let depth = parseFloat(chorusDepthValue.innerHTML);
  let wetDry = parseFloat(chorusWetDryValue.innerHTML);

  chorus.set({
    frequency: frequency,
    delayTime: delayTime,
    depth: depth,
    wet: wetDry,
  });
}

export {
  chorus,
  chorusFrequencyValue,
  chorusFrequencySlider,
  updateChorusSliders,
  chorusDelayValue,
  chorusDelaySlider,
  chorusDepthValue,
  chorusDepthSlider,
  chorusWetDryValue,
  chorusWetDrySlider,
};
