const reverbDecayTimeSlider = document.getElementById("reverb-decay");
const reverbDecayTimeValue = document.getElementById("reverb-decay-value");
reverbDecayTimeValue.innerHTML = reverbDecayTimeSlider.value;

const reverbPreDelaySlider = document.getElementById("reverb-predelay");
const reverbPreDelayValue = document.getElementById("reverb-predelay-value");
reverbPreDelayValue.innerHTML = reverbPreDelaySlider.value;

const reverbWetDrySlider = document.getElementById("reverb-wet-dry");
const reverbWetDryValue = document.getElementById("reverb-wet-dry-value");
reverbWetDryValue.innerHTML = reverbWetDrySlider.value;

const reverb = new Tone.Reverb({
  decay: parseFloat(reverbDecayTimeSlider.value),
  preDelay: parseFloat(reverbPreDelaySlider.value) * 0.001,
  wet: parseFloat(reverbWetDrySlider.value),
});

function updateReverbSliders() {
  reverb.set({
    decay: parseFloat(reverbDecayTimeValue.innerHTML),
    preDelay: parseFloat(reverbPreDelayValue.innerHTML) * 0.001,
    wet: parseFloat(reverbWetDryValue.innerHTML),
  });
}

reverbDecayTimeSlider.oninput =
  reverbPreDelaySlider.oninput =
  reverbWetDrySlider.oninput =
    function () {
      reverbDecayTimeValue.innerHTML = reverbDecayTimeSlider.value;
      reverbPreDelayValue.innerHTML = reverbPreDelaySlider.value;
      reverbWetDryValue.innerHTML = reverbWetDrySlider.value;
      updateReverbSliders();
    };

export {
  reverb,
  reverbDecayTimeValue,
  reverbDecayTimeSlider,
  reverbPreDelayValue,
  reverbPreDelaySlider,
  updateReverbSliders,
  reverbWetDryValue,
  reverbWetDrySlider,
};
