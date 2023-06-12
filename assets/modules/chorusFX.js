let chorusFrequencySlider = document.getElementById("chorus-frequency");
let chorusFrequencyValue = document.getElementById("chorus-frequency-value");
chorusFrequencyValue.innerHTML = chorusFrequencySlider.value;

let chorusDelaySlider = document.getElementById("chorus-delay");
let chorusDelayValue = document.getElementById("chorus-delay-value");
chorusDelayValue.innerHTML = chorusDelaySlider.value;

let chorusDepthSlider = document.getElementById("chorus-depth");
let chorusDepthValue = document.getElementById("chorus-depth-value");
chorusDepthValue.innerHTML = chorusDepthSlider.value;

const chorus = new Tone.Chorus({
  frequency: chorusFrequencySlider.value,
  delayTime: chorusDelaySlider.value,
  depth: chorusDepthSlider.value,
  type: "sine",
  spread: 0,
  wet: 0.7,
});

chorusFrequencySlider.oninput = function () {
  chorusFrequencyValue.innerHTML = this.value;
  console.log("Slider value: ", chorusFrequencyValue.innerHTML);
  updateChorusSliders();
};

chorusDelaySlider.oninput = function () {
  chorusDelayValue.innerHTML = this.value;
  console.log("Slider value: ", chorusDelayValue.innerHTML);
  updateChorusSliders();
};

chorusDepthSlider.oninput = function () {
  chorusDepthValue.innerHTML = this.value;
  console.log("Slider value: ", chorusDepthValue.innerHTML);
  updateChorusSliders();
};

function updateChorusSliders() {
  console.log("Updating chorus sliders...");
  let frequency = parseFloat(chorusFrequencyValue.innerHTML);
  let delayTime = parseFloat(chorusDelayValue.innerHTML);
  let depth = parseFloat(chorusDepthValue.innerHTML);

  chorus.set({
    frequency: frequency,
    delayTime: delayTime,
    depth: depth,
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
};
