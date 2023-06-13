// import FX modules
import {
  // pitchShifterSlider,
  // pitchShifterValue,
  shift,
  // updatePitchSliders,
  // pitchShiftMode,
  // updatePitchMode,
} from "./modules/shifterFX.js";
import {
  dist,
  distortionLevelValue,
  distortionLevelSlider,
  distortionWetDryValue,
  distortionWetDrySlider,
  updateDistortionSliders,
} from "./modules/distortionFX.js";
import {
  chebydistortion,
  chebydistortionLevelValue,
  chebydistortionLevelSlider,
  chebydistortionWetDryValue,
  chebydistortionWetDrySlider,
  updateChebydistortionSliders,
} from "./modules/chebyDistFX.js";
import {
  crusher,
  bitCrusherLevelValue,
  bitCrusherLevelSlider,
  bitCrusherWetDryValue,
  bitCrusherWetDrySlider,
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
  chorusWetDryValue,
  chorusWetDrySlider,
} from "./modules/chorusFX.js";
import {
  tremolo,
  tremoloFrequencyValue,
  tremoloFrequencySlider,
  updateTremoloSliders,
  tremoloDepthValue,
  tremoloDepthSlider,
  tremoloWetDryValue,
  tremoloWetDrySlider,
} from "./modules/tremoloFX.js";
import {
  feedbackDelay,
  // maxDelayTime,
  delayTimeValue,
  delayTimeSlider,
  updateDelaySliders,
  delayFeedbackValue,
  delayFeedbackSlider,
  delayWetDryValue,
  delayWetDrySlider,
} from "./modules/delayFX.js";
import {
  jcReverb,
  jcReverbSizeValue,
  jcReverbSizeSlider,
  updatejcReverbSliders,
  jcReverbWetDryValue,
  jcReverbWetDrySlider,
} from "./modules/jcReverbFX.js";
import {
  reverb,
  reverbDecayTimeValue,
  reverbDecayTimeSlider,
  reverbPreDelayValue,
  reverbPreDelaySlider,
  updateReverbSliders,
  reverbWetDryValue,
  reverbWetDrySlider,
} from "./modules/reverbFX.js";

document.querySelector("h4").addEventListener("click", async () => {
  await Tone.start();
  document.querySelector("h4").innerText = "Permission Granted";
  console.log("audio is ready");
});

let audioStartToggle = document.getElementById("audio-start-toggle");
let micIndicator = document.getElementById("mic-indication");

// Create Tone buffer
Tone.context.lookAhead = 0;
Tone.context.updateInterval = 0.01;
Tone.context.bufferSize = 128;

// get microphone input
const mic = new Tone.UserMedia();
const micFFT = new Tone.FFT(32);
const meter = new Tone.Meter(0.8);
let inputLevelValueRead = null;
const monoOutput = new Tone.Mono();
const monoLeft = new Tone.Mono({ channelCount: 1 });
const monoRight = new Tone.Mono({ channelCount: -1 });
const destination = Tone.Destination;

// read input level - check if mic is open
function processAudioInputLevel() {
  inputLevelValueRead = meter.getValue().toFixed(2);
  // print the incoming mic levels in decibels
  console.log("The Decibel level is:", inputLevelValueRead, "dB");
}

// toggle mic on/off
audioStartToggle.addEventListener("click", () => {
  if (audioStartToggle.innerText === "START") {
    startVoiceChanger();
    // updateSliders();
  } else if (audioStartToggle.innerText === "STOP") {
    stopVoiceChanger();
  }
});

function startVoiceChanger() {
  audioStartToggle.innerText = "STOP";
  console.log("mic started");
  micIndicator.style.backgroundColor = "red";
  micIndicator.style.boxShadow = "0 0 0 1.5px red";
  mic
    .open()
    .then(() => {
      // promise resolves when input is available
      console.log("mic open");
      // what to do when the mic is open
      mic.connect(micFFT);
      // connect mic to FX chain
      micFFT.connect(shift);
      shift.connect(dist);
      dist.connect(chebydistortion);
      chebydistortion.connect(crusher);
      crusher.connect(chorus.start());
      chorus.connect(tremolo.start());
      tremolo.connect(feedbackDelay);
      feedbackDelay.connect(jcReverb);
      jcReverb.connect(reverb);
      reverb.connect(meter);
      // connect FX to output and destination
      meter.chain(monoOutput, destination);
      // meter.chain(monoLeft, monoRight, destination);
      // check input levels
      // setInterval(processAudioInputLevel, 1000);
    })
    .catch((e) => {
      // promise is rejected when the user doesn't have or allow mic access
      console.log("mic not open");
    });
}

function stopVoiceChanger() {
  audioStartToggle.innerText = "START";
  console.log("mic stopped");
  micIndicator.style.backgroundColor = "darkred";
  micIndicator.style.boxShadow = "0 0 0 0 #333";
  mic.close();
}
