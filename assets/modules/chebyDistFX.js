let chebydistortionLevelSlider = document.getElementById(
  "chebydistortion-level"
);
let chebydistortionLevelValue = document.getElementById(
  "chebydistortion-level-value"
);
chebydistortionLevelValue.innerHTML = chebydistortionLevelSlider.value;

let chebydistortionWetDrySlider = document.getElementById(
  "chebydistortion-wet-dry"
);
let chebydistortionWetDryValue = document.getElementById(
  "chebydistortion-wet-dry-value"
);
chebydistortionWetDryValue.innerHTML = chebydistortionWetDrySlider.value;

const chebydistortion = new Tone.Chebyshev({
  order: parseInt(chebydistortionLevelSlider.value),
  oversample: "2x",
  wet: chebydistortionWetDrySlider.value,
});

chebydistortionLevelSlider.oninput = function () {
  chebydistortionLevelValue.innerHTML = this.value;
  console.log("Slider value: ", chebydistortionLevelValue.innerHTML);
  updateChebydistortionSliders();
};

chebydistortionWetDrySlider.oninput = function () {
  chebydistortionWetDryValue.innerHTML = this.value;
  console.log("Slider value: ", chebydistortionWetDryValue.innerHTML);
  updateChebydistortionSliders();
};

function updateChebydistortionSliders() {
  let order = parseInt(chebydistortionLevelValue.innerHTML);
  let wet = parseFloat(chebydistortionWetDryValue.innerHTML);

  chebydistortion.set({ order: order, wet: wet });
}

export {
  chebydistortion,
  chebydistortionLevelValue,
  chebydistortionLevelSlider,
  chebydistortionWetDryValue,
  chebydistortionWetDrySlider,
  updateChebydistortionSliders,
};
