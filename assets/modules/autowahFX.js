const autoWahQSlider = document.getElementById("auto-wah-q");
const autoWahQValue = document.getElementById("auto-wah-q-value");
autoWahQValue.innerHTML = autoWahQSlider.value;

const autoWahBaseFrequencySlider = document.getElementById(
  "auto-wah-base-frequency"
);
const autoWahBaseFrequencyValue = document.getElementById(
  "auto-wah-base-frequency-value"
);
autoWahBaseFrequencyValue.innerHTML = autoWahBaseFrequencySlider.value;

const autoWahFollowerSlider = document.getElementById("auto-wah-follower");
const autoWahFollowerValue = document.getElementById("auto-wah-follower-value");
autoWahFollowerValue.innerHTML = autoWahFollowerSlider.value;

const autoWahGainSlider = document.getElementById("auto-wah-gain");
const autoWahGainValue = document.getElementById("auto-wah-gain-value");
autoWahGainValue.innerHTML = autoWahGainSlider.value;

const autoWahOctavesSlider = document.getElementById("auto-wah-octaves");
const autoWahOctavesValue = document.getElementById("auto-wah-octaves-value");
autoWahOctavesValue.innerHTML = autoWahOctavesSlider.value;

const autoWahSensitivitySlider = document.getElementById(
  "auto-wah-sensitivity"
);
const autoWahSensitivityValue = document.getElementById(
  "auto-wah-sensitivity-value"
);
autoWahSensitivityValue.innerHTML = autoWahSensitivitySlider.value;

const autoWahWetDrySlider = document.getElementById("auto-wah-wet-dry");
const autoWahWetDryValue = document.getElementById("auto-wah-wet-dry-value");
autoWahWetDryValue.innerHTML = autoWahWetDrySlider.value;

const autoWah = new Tone.AutoWah({
  Q: parseFloat(autoWahQSlider.value),
  baseFrequency: parseFloat(autoWahBaseFrequencySlider.value),
  follower: parseFloat(autoWahFollowerSlider.value),
  gain: parseFloat(autoWahGainSlider.value),
  octaves: parseFloat(autoWahOctavesSlider.value),
  sensitivity: parseFloat(autoWahSensitivitySlider.value),
  wet: parseFloat(autoWahWetDrySlider.value),
});

// const autoWah = new Tone.AutoWah(50, 6, -30);
// autoWah.Q.value = 6;

function updateAutoWahSliders() {
  autoWah.set({
    Q: parseFloat(autoWahQValue.innerHTML),
    baseFrequency: parseFloat(autoWahBaseFrequencyValue.innerHTML),
    follower: parseFloat(autoWahFollowerValue.innerHTML),
    gain: parseFloat(autoWahGainValue.innerHTML),
    octaves: parseFloat(autoWahOctavesValue.innerHTML),
    sensitivity: parseFloat(autoWahSensitivityValue.innerHTML),
    wet: parseFloat(autoWahWetDryValue.innerHTML),
  });
}

autoWahQSlider.oninput =
  autoWahBaseFrequencySlider.oninput =
  autoWahFollowerSlider.oninput =
  autoWahGainSlider.oninput =
  autoWahOctavesSlider.oninput =
  autoWahSensitivitySlider.oninput =
  autoWahWetDrySlider.oninput =
    function () {
      autoWahQValue.innerHTML = autoWahQSlider.value;
      autoWahBaseFrequencyValue.innerHTML = autoWahBaseFrequencySlider.value;
      autoWahFollowerValue.innerHTML = autoWahFollowerSlider.value;
      autoWahGainValue.innerHTML = autoWahGainSlider.value;
      autoWahOctavesValue.innerHTML = autoWahOctavesSlider.value;
      autoWahSensitivityValue.innerHTML = autoWahSensitivitySlider.value;
      autoWahWetDryValue.innerHTML = autoWahWetDrySlider.value;
      updateAutoWahSliders();
    };

export {
  autoWah,
  autoWahQValue,
  autoWahQSlider,
  autoWahBaseFrequencyValue,
  autoWahBaseFrequencySlider,
  autoWahFollowerValue,
  autoWahFollowerSlider,
  autoWahGainValue,
  autoWahGainSlider,
  autoWahOctavesValue,
  autoWahOctavesSlider,
  autoWahSensitivityValue,
  autoWahSensitivitySlider,
  autoWahWetDryValue,
  autoWahWetDrySlider,
  updateAutoWahSliders,
};
