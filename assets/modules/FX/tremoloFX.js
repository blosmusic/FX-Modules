let tremoloFrequencySlider = document.getElementById("tremolo-frequency");
let tremoloFrequencyValue = document.getElementById("tremolo-frequency-value");
tremoloFrequencyValue.innerHTML = tremoloFrequencySlider.value;

let tremoloDepthSlider = document.getElementById("tremolo-depth");
let tremoloDepthValue = document.getElementById("tremolo-depth-value");
tremoloDepthValue.innerHTML = tremoloDepthSlider.value;

let tremoloWetDrySlider = document.getElementById("tremolo-wet-dry");
let tremoloWetDryValue = document.getElementById("tremolo-wet-dry-value");
tremoloWetDryValue.innerHTML = tremoloWetDrySlider.value;

const tremolo = new Tone.Tremolo({
  frequency: tremoloFrequencySlider.value,
  depth: tremoloDepthSlider.value,
  spread: 0,
  wet: tremoloWetDrySlider.value,
  type: "sine",
});

tremoloFrequencySlider.oninput = function () {
  tremoloFrequencyValue.innerHTML = this.value;
  // console.log("Slider value: ", tremoloFrequencyValue.innerHTML);
  updateTremoloSliders();
};

tremoloDepthSlider.oninput = function () {
  tremoloDepthValue.innerHTML = this.value;
  // console.log("Slider value: ", tremoloDepthValue.innerHTML);
  updateTremoloSliders();
};

tremoloWetDrySlider.oninput = function () {
  tremoloWetDryValue.innerHTML = this.value;
  // console.log("Slider value: ", tremoloWetValue.innerHTML);
  updateTremoloSliders();
};

function updateTremoloSliders() {
  // console.log("Tremolo frequency: ", tremoloFrequencyValue.innerHTML);
  // console.log("Tremolo depth: ", tremoloDepthValue.innerHTML);
  // console.log("Tremolo wet/dry: ", tremoloWetDryValue.innerHTML);
  let frequency = parseFloat(tremoloFrequencyValue.innerHTML);
  let depth = parseFloat(tremoloDepthValue.innerHTML);
  let wetDry = parseFloat(tremoloWetDryValue.innerHTML);

  tremolo.set({
    frequency: frequency,
    depth: depth,
    wet: wetDry,
  });
  }

export {
  tremolo,
  tremoloFrequencyValue,
  tremoloFrequencySlider,
  updateTremoloSliders,
  tremoloDepthValue,
  tremoloDepthSlider,
  tremoloWetDryValue,
  tremoloWetDrySlider,
};
