const freeverbDampeningFrequencySlider = document.getElementById("freeverb-dampening");
const freeverbDampeningFrequencyValue = document.getElementById("freeverb-dampening-value");
freeverbDampeningFrequencyValue.innerHTML = freeverbDampeningFrequencySlider.value;

const freeverbRoomSizeSlider = document.getElementById("freeverb-room-size");
const freeverbRoomSizeValue = document.getElementById(
  "freeverb-room-size-value"
);
freeverbRoomSizeValue.innerHTML = freeverbRoomSizeSlider.value;

const freeverbWetDrySlider = document.getElementById("freeverb-wet-dry");
const freeverbWetDryValue = document.getElementById("freeverb-wet-dry-value");
freeverbWetDryValue.innerHTML = freeverbWetDrySlider.value;

const freeverb = new Tone.Freeverb({
  dampening: freeverbDampeningFrequencySlider.value,
  roomSize: freeverbRoomSizeSlider.value,
  wet: freeverbWetDrySlider.value,
});

function updateFreeverbSliders() {
  freeverb.set({
    dampening: parseFloat(freeverbDampeningFrequencyValue.innerHTML),
    roomSize: parseFloat(freeverbRoomSizeValue.innerHTML),
    wet: parseFloat(freeverbWetDryValue.innerHTML),
  });
}

freeverbDampeningFrequencySlider.oninput =
  freeverbRoomSizeSlider.oninput =
  freeverbWetDrySlider.oninput =
    function () {
      freeverbDampeningFrequencyValue.innerHTML = freeverbDampeningFrequencySlider.value;
      freeverbRoomSizeValue.innerHTML = freeverbRoomSizeSlider.value;
      freeverbWetDryValue.innerHTML = freeverbWetDrySlider.value;
      updateFreeverbSliders();
    };

export {
  freeverb,
  freeverbDampeningFrequencyValue,
  freeverbDampeningFrequencySlider,
  freeverbRoomSizeValue,
  freeverbRoomSizeSlider,
  updateFreeverbSliders,
  freeverbWetDryValue,
  freeverbWetDrySlider,
};
