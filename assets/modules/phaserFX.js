const phaserQSlider = document.getElementById("phaser-q");
const phaserQValue = document.getElementById("phaser-q-value");
phaserQValue.innerHTML = phaserQSlider.value;

const phaserBaseFrequencySlider = document.getElementById(
  "phaser-base-frequency"
);
const phaserBaseFrequencyValue = document.getElementById(
  "phaser-base-frequency-value"
);
phaserBaseFrequencyValue.innerHTML = phaserBaseFrequencySlider.value;

const phaserFrequencySlider = document.getElementById("phaser-frequency");
const phaserFrequencyValue = document.getElementById("phaser-frequency-value");
phaserFrequencyValue.innerHTML = phaserFrequencySlider.value;

const phaserOctavesSlider = document.getElementById("phaser-octaves");
const phaserOctavesValue = document.getElementById("phaser-octaves-value");
phaserOctavesValue.innerHTML = phaserOctavesSlider.value;

const phaserStagesSlider = document.getElementById("phaser-stages");
const phaserStagesValue = document.getElementById("phaser-stages-value");
phaserStagesValue.innerHTML = phaserStagesSlider.value;

const phaserWetDrySlider = document.getElementById("phaser-wet-dry");
const phaserWetDryValue = document.getElementById("phaser-wet-dry-value");
phaserWetDryValue.innerHTML = phaserWetDrySlider.value;

const phaser = new Tone.Phaser({
  Q: parseFloat(phaserQSlider.value),
  baseFrequency: parseFloat(phaserBaseFrequencySlider.value),
  frequency: parseFloat(phaserFrequencySlider.value),
  octaves: parseFloat(phaserOctavesSlider.value),
  stages: parseFloat(phaserStagesSlider.value),
  wet: parseFloat(phaserWetDrySlider.value),
  // Q: 6,
  // baseFrequency: 500,
  // frequency: 0.5,
  // octaves: 3,
  // stages: 8,
  // wet: 0.5
});


function updatePhaserSliders() {
  phaser.set({
    Q: parseFloat(phaserQValue.innerHTML),
    baseFrequency: parseFloat(phaserBaseFrequencyValue.innerHTML),
    frequency: parseFloat(phaserFrequencyValue.innerHTML),
    octaves: parseFloat(phaserOctavesValue.innerHTML),
    stages: parseFloat(phaserStagesValue.innerHTML),
    wet: parseFloat(phaserWetDryValue.innerHTML),
  });
}

phaserQSlider.oninput =
  phaserBaseFrequencySlider.oninput =
  phaserFrequencySlider.oninput =
  phaserOctavesSlider.oninput =
  phaserStagesSlider.oninput =
  phaserWetDrySlider.oninput =
    function () {
      phaserQValue.innerHTML = phaserQSlider.value;
      phaserBaseFrequencyValue.innerHTML = phaserBaseFrequencySlider.value;
      phaserFrequencyValue.innerHTML = phaserFrequencySlider.value;
      phaserOctavesValue.innerHTML = phaserOctavesSlider.value;
      phaserStagesValue.innerHTML = phaserStagesSlider.value;
      phaserWetDryValue.innerHTML = phaserWetDrySlider.value;
      updatePhaserSliders();
    };

export {
  phaser,
  phaserQValue,
  phaserQSlider,
  phaserBaseFrequencyValue,
  phaserBaseFrequencySlider,
  phaserFrequencyValue,
  phaserFrequencySlider,
  phaserOctavesValue,
  phaserOctavesSlider,
  phaserStagesValue,
  phaserStagesSlider,
  phaserWetDryValue,
  phaserWetDrySlider,
  updatePhaserSliders,
};
