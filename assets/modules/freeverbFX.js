let reverbDecaySlider = document.getElementById("reverb-decay");
let reverbDecayValue = document.getElementById("reverb-decay-value");
reverbDecayValue.innerHTML = reverbDecaySlider.value;

let reverbWetDrySlider = document.getElementById("reverb-wet-dry");
let reverbWetDryValue = document.getElementById("reverb-wet-dry-value");
reverbWetDryValue.innerHTML = reverbWetDrySlider.value;

const reverb = new Tone.Reverb({
  decay: reverbDecaySlider.value,
  wet: reverbWetDrySlider.value,
});

reverbDecaySlider.oninput = function () {
  reverbDecayValue.innerHTML = this.value;
  console.log("Slider value: ", reverbDecayValue.innerHTML);
  updateReverbSliders();
};

reverbWetDrySlider.oninput = function () {
  reverbWetDryValue.innerHTML = this.value;
  console.log("Slider value: ", reverbWetDryValue.innerHTML);
  updateReverbSliders();
};

function updateReverbSliders() {
  let decay = parseFloat(reverbDecayValue.innerHTML);
  let wetDry = parseFloat(reverbWetDryValue.innerHTML);

  reverb.set({
    decay: decay,
    wet: wetDry,
  });
}

export {
  reverb,
  reverbDecayValue,
  reverbDecaySlider,
  updateReverbSliders,
  reverbWetDryValue,
  reverbWetDrySlider,
};
