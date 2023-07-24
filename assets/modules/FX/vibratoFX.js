let vibratoFrequencySlider = document.getElementById("vibrato-frequency");
let vibratoFrequencyValue = document.getElementById("vibrato-frequency-value");
vibratoFrequencyValue.innerHTML = vibratoFrequencySlider.value;

let vibratoDepthSlider = document.getElementById("vibrato-depth");
let vibratoDepthValue = document.getElementById("vibrato-depth-value");
vibratoDepthValue.innerHTML = vibratoDepthSlider.value;

let vibratoWetDrySlider = document.getElementById("vibrato-wet-dry");
let vibratoWetDryValue = document.getElementById("vibrato-wet-dry-value");
vibratoWetDryValue.innerHTML = vibratoWetDrySlider.value;

const vibrato = new Tone.Vibrato({
  frequency: vibratoFrequencySlider.value,
  depth: vibratoDepthSlider.value,
  wet: vibratoWetDrySlider.value,
  type: "sine",
});

vibratoFrequencySlider.oninput = function () {
  vibratoFrequencyValue.innerHTML = this.value;
  // console.log("Slider value: ", vibratoFrequencyValue.innerHTML);
  updateVibratoSliders();
};

vibratoDepthSlider.oninput = function () {
  vibratoDepthValue.innerHTML = this.value;
  // console.log("Slider value: ", vibratoDepthValue.innerHTML);
  updateVibratoSliders();
};

vibratoWetDrySlider.oninput = function () {
  vibratoWetDryValue.innerHTML = this.value;
  // console.log("Slider value: ", vibratoWetValue.innerHTML);
  updateVibratoSliders();
};

function updateVibratoSliders() {
  // console.log("vibrato frequency: ", vibratoFrequencyValue.innerHTML);
  // console.log("vibrato depth: ", vibratoDepthValue.innerHTML);
  // console.log("vibrato wet/dry: ", vibratoWetDryValue.innerHTML);
  let frequency = parseFloat(vibratoFrequencyValue.innerHTML);
  let depth = parseFloat(vibratoDepthValue.innerHTML);
  let wetDry = parseFloat(vibratoWetDryValue.innerHTML);

  vibrato.set({
    frequency: frequency,
    depth: depth,
    wet: wetDry,
  });
}

export {
  vibrato,
  vibratoFrequencyValue,
  vibratoFrequencySlider,
  updateVibratoSliders,
  vibratoDepthValue,
  vibratoDepthSlider,
  vibratoWetDryValue,
  vibratoWetDrySlider,
};
