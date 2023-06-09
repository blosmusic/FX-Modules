let bitCrusherLevelSlider = document.getElementById("bitcrusher-level");
let bitCrusherLevelValue = document.getElementById("bitcrusher-level-value");
bitCrusherLevelValue.innerHTML = bitCrusherLevelSlider.value;

const crusher = new Tone.BitCrusher(bitCrusherLevelSlider.value);

bitCrusherLevelSlider.oninput = function () {
  bitCrusherLevelValue.innerHTML = this.value;
  console.log("Slider value: ", bitCrusherLevelValue.innerHTML);
  updateDistortionSliders();
};

function updateDistortionSliders() {
  crusher.bits = bitCrusherLevelValue.innerHTML;
}

export { crusher, bitCrusherLevelValue, bitCrusherLevelSlider, updateDistortionSliders };