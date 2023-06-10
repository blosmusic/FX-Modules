// import FX modules
import {
  pitchShifterSlider,
  pitchShifterValue,
  shift,
  updatePitchSliders,
  pitchShiftMode,
  updatePitchMode,
} from "./modules/shifterFX.js";
import {
  dist,
  distortionLevelValue,
  distortionLevelSlider,
  updateDistortionSliders,
} from "./modules/distortionFX.js";
import {
  crusher,
  bitCrusherLevelValue,
  bitCrusherLevelSlider,
  updateCrusherSliders,
} from "./modules/crusherFX.js";
import {
  chorus,
  chorusFrequencyValue,
  chorusFrequencySlider,
  updateChorusSliders,
  chorusDelayValue,
  chorusDelaySlider,
  chorusDepthValue,
  chorusDepthSlider,
} from "./modules/chorusFX.js";
import {
  tremolo,
  tremoloFrequencyValue,
  tremoloFrequencySlider,
  updateTremoloSliders,
} from "./modules/tremoloFX.js";
import {
  feedbackDelay,
  delayTimeValue,
  delayTimeSlider,
  updateDelaySliders,
} from "./modules/delayFX.js";
import {
  reverb,
  reverbSizeValue,
  reverbSizeSlider,
  updateReverbSliders,
} from "./modules/reverbFX.js";

document.querySelector("h4").addEventListener("click", async () => {
  await Tone.start();
  document.querySelector("h4").innerText = "Permission Granted";
  console.log("audio is ready");
});

let voiceStartToggle = document.getElementById("voice-start-toggle");
let micIndicator = document.getElementById("mic-indication");

// Create Tone buffer
Tone.context.lookAhead = 0;
Tone.context.updateInterval = 0.01;
Tone.context.bufferSize = 256;

// get microphone input
const mic = new Tone.UserMedia();
const micFFT = new Tone.FFT(32);
const meter = new Tone.Meter(0.8);
let inputLevelValueRead = null;
const monoOutput = new Tone.Mono();
const destination = Tone.Destination;

// read input level - check if mic is open
function processAudioInputLevel() {
  console.log("processAudioInputLevel called");
  inputLevelValueRead = meter.getValue().toFixed(2);
  // print the incoming mic levels in decibels
  console.log("The Decibel level is:", inputLevelValueRead, "dB");
}

// toggle mic on/off
voiceStartToggle.addEventListener("click", () => {
  if (voiceStartToggle.innerText === "START") {
    startVoiceChanger();
    updateSliders();
  } else if (voiceStartToggle.innerText === "STOP") {
    stopVoiceChanger();
  }
});

function startVoiceChanger() {
  voiceStartToggle.innerText = "STOP";
  console.log("mic started");
  micIndicator.style.backgroundColor = "red";
  micIndicator.style.boxShadow = "0 0 0 1.5px red";
  mic
    .open()
    .then(() => {
      // promise resolves when input is available
      console.log("mic open");
      // what to do when the mic is open
      mic
        .chain(
          shift,
          // dist,
          // crusher,
          chorus,
          // tremolo,
          // feedbackDelay,
          // reverb,
          meter,
          monoOutput,
          destination
        )
        .start();
      // check input levels
      // setInterval(processAudioInputLevel, 1000);
    })
    .catch((e) => {
      // promise is rejected when the user doesn't have or allow mic access
      console.log("mic not open");
    });
}

function stopVoiceChanger() {
  voiceStartToggle.innerText = "START";
  console.log("mic stopped");
  micIndicator.style.backgroundColor = "darkred";
  micIndicator.style.boxShadow = "0 0 0 0 #333";
  mic.close();
}

function updateSliders() {
  updatePitchSliders();
  updateDistortionSliders();
  updateCrusherSliders();
  updateChorusSliders();
  updateTremoloSliders();
  updateDelaySliders();
  updateReverbSliders();
}