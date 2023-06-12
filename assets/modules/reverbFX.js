let reverbSizeSlider = document.getElementById("reverb-size");
let reverbSizeValue = document.getElementById("reverb-size-value");
reverbSizeValue.innerHTML = reverbSizeSlider.value;

let reverbWetDrySlider = document.getElementById("reverb-wet-dry");
let reverbWetDryValue = document.getElementById("reverb-wet-dry-value");
reverbWetDryValue.innerHTML = reverbWetDrySlider.value;

const reverb = new Tone.JCReverb({
  roomSize: reverbSizeSlider.value,
  wet: reverbWetDrySlider.value,
});

reverbSizeSlider.oninput = function () {
  reverbSizeValue.innerHTML = this.value;
  console.log("Slider value: ", reverbSizeValue.innerHTML);
  updateReverbSliders();
};

reverbWetDrySlider.oninput = function () {
  reverbWetDryValue.innerHTML = this.value;
  console.log("Slider value: ", reverbWetDryValue.innerHTML);
  updateReverbSliders();
};

function updateReverbSliders() {
  let reverbSize = parseFloat(reverbSizeValue.innerHTML);
  let wetDry = parseFloat(reverbWetDryValue.innerHTML);

  reverb.set({
    roomSize: reverbSize,
    wet: wetDry,
  });
}

export {
  reverb,
  reverbSizeValue,
  reverbSizeSlider,
  updateReverbSliders,
  reverbWetDryValue,
  reverbWetDrySlider,
};
