let bitCrusherLevelSlider = document.getElementById("bitcrusher-level");
let bitCrusherLevelValue = document.getElementById("bitcrusher-level-value");
bitCrusherLevelValue.innerHTML = bitCrusherLevelSlider.value;

let bitCrusherWetDrySlider = document.getElementById("bitcrusher-wet-dry");
let bitCrusherWetDryValue = document.getElementById("bitcrusher-wet-dry-value");
bitCrusherWetDryValue.innerHTML = bitCrusherWetDrySlider.value;

const crusher = new Tone.BitCrusher({
  bits: bitCrusherLevelSlider.value,
  wet: bitCrusherWetDrySlider.value,
});

bitCrusherLevelSlider.oninput = function () {
  bitCrusherLevelValue.innerHTML = this.value;
  console.log("Slider value: ", bitCrusherLevelValue.innerHTML);
  updateCrusherSliders();
};

bitCrusherWetDrySlider.oninput = function () {
  bitCrusherWetDryValue.innerHTML = this.value;
  console.log("Slider value: ", bitCrusherWetDryValue.innerHTML);
  updateCrusherSliders();
};

function updateCrusherSliders() {
  crusher.bits = bitCrusherLevelValue.innerHTML;
  crusher.wet.value = bitCrusherWetDryValue.innerHTML;
}

export {
  crusher,
  bitCrusherLevelValue,
  bitCrusherLevelSlider,
  bitCrusherWetDryValue,
  bitCrusherWetDrySlider,
  updateCrusherSliders,
};
