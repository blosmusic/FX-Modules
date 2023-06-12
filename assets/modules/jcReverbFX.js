let jcReverbSizeSlider = document.getElementById("jc-reverb-size");
let jcReverbSizeValue = document.getElementById("jc-reverb-size-value");
jcReverbSizeValue.innerHTML = jcReverbSizeSlider.value;

let jcReverbWetDrySlider = document.getElementById("jc-reverb-wet-dry");
let jcReverbWetDryValue = document.getElementById("jc-reverb-wet-dry-value");
jcReverbWetDryValue.innerHTML = jcReverbWetDrySlider.value;

const jcReverb = new Tone.JCReverb({
  roomSize: jcReverbSizeSlider.value,
  wet: jcReverbWetDrySlider.value,
});

jcReverbSizeSlider.oninput = function () {
  jcReverbSizeValue.innerHTML = this.value;
  console.log("Slider value: ", jcReverbSizeValue.innerHTML);
  updatejcReverbSliders();
};

jcReverbWetDrySlider.oninput = function () {
  jcReverbWetDryValue.innerHTML = this.value;
  console.log("Slider value: ", jcReverbWetDryValue.innerHTML);
  updatejcReverbSliders();
};

function updatejcReverbSliders() {
  let jcReverbSize = parseFloat(jcReverbSizeValue.innerHTML);
  let wetDry = parseFloat(jcReverbWetDryValue.innerHTML);

  jcReverb.set({
    roomSize: jcReverbSize,
    wet: wetDry,
  });
}

export {
  jcReverb,
  jcReverbSizeValue,
  jcReverbSizeSlider,
  updatejcReverbSliders,
  jcReverbWetDryValue,
  jcReverbWetDrySlider,
};
