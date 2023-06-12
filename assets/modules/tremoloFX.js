let tremoloFrequencySlider = document.getElementById("tremolo-frequency");
let tremoloFrequencyValue = document.getElementById("tremolo-frequency-value");
tremoloFrequencyValue.innerHTML = tremoloFrequencySlider.value;

let tremoloDepthSlider = document.getElementById("tremolo-depth");
let tremoloDepthValue = document.getElementById("tremolo-depth-value");
tremoloDepthValue.innerHTML = tremoloDepthSlider.value;

const tremolo = new Tone.Tremolo(
  9,
  0.75 //{

  // frequency: tremoloFrequencySlider.value,
  // depth: tremoloDepthSlider.value
  // }
);

tremoloFrequencySlider.oninput = function () {
  tremoloFrequencyValue.innerHTML = this.value;
  console.log("Slider value: ", tremoloFrequencyValue.innerHTML);
  updateTremoloSliders();
};

tremoloDepthSlider.oninput = function () {
  tremoloDepthValue.innerHTML = this.value;
  console.log("Slider value: ", tremoloDepthValue.innerHTML);
  updateTremoloSliders();
};

function updateTremoloSliders() {
  console.log("Tremolo frequency: ", tremoloFrequencyValue.innerHTML);
  console.log("Tremolo depth: ", tremoloDepthValue.innerHTML);
  let frequency = parseFloat(tremoloFrequencyValue.innerHTML);
  let depth = parseFloat(tremoloDepthValue.innerHTML);

  tremolo.set({
    frequency: frequency,
    depth: depth,
  });
  }

export {
  tremolo,
  tremoloFrequencyValue,
  tremoloFrequencySlider,
  updateTremoloSliders,
};
