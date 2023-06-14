//import audio modules
import fft from "./modules/fftAnalyser.js";
import { meter, audioInputLevelMeter } from "./modules/meter.js";
// import FX modules
import { shift } from "./modules/shifterFX.js";
import { autoWah } from "./modules/autowahFX.js";
import { dist } from "./modules/distortionFX.js";
import { chebydistortion } from "./modules/chebyDistFX.js";
import { crusher } from "./modules/crusherFX.js";
import { chorus } from "./modules/chorusFX.js";
import { phaser } from "./modules/phaserFX.js";
import { tremolo } from "./modules/tremoloFX.js";
import { vibrato } from "./modules/vibratoFX.js";
import { feedbackDelay } from "./modules/delayFX.js";
import { pingPong } from "./modules/pingPongDelayFX.js";
import { jcReverb } from "./modules/jcReverbFX.js";
import { reverb } from "./modules/reverbFX.js";

// Import DOM elements
const startButton = document.querySelector("h4");
const audioStartToggle = document.getElementById("audio-start-toggle");
const audioSourceIndicator = document.getElementById("audio-source-indication");

// Audio Context
Tone.context.lookAhead = 0;
Tone.context.updateInterval = 0.01;
Tone.context.bufferSize = 128;

// Create audio source
const audioSource = new Tone.UserMedia();
const monoSignal = new Tone.Mono();
const monoLeft = new Tone.Mono({ channelCount: 1 });
const monoRight = new Tone.Mono({ channelCount: -1 });
const destination = Tone.Destination;

let meterInterval = null;

// Start audio context
startButton.addEventListener("click", async () => {
  await Tone.start();
  startButton.innerText = "Permission Granted";
});

// Toggle audio source on/off
audioStartToggle.addEventListener("click", () => {
  if (audioStartToggle.innerText === "START") {
    startVoiceChanger();
  } else if (audioStartToggle.innerText === "STOP") {
    stopVoiceChanger();
  }
});

function startVoiceChanger() {
  audioStartToggle.innerText = "STOP";
  audioSourceIndicator.style.backgroundColor = "red";
  audioSourceIndicator.style.boxShadow = "0 0 0 1.5px red";
  audioSource
    .open()
    .then(() => {
      // promise resolves when input is available
      console.log("audio source open");
      // make audio source mono
      audioSource.connect(monoSignal);
      monoSignal.connect(fft);
      // connect mic to FX chain
      fft.connect(shift);
      shift.connect(autoWah);
      autoWah.connect(dist);
      dist.connect(chebydistortion);
      chebydistortion.connect(crusher);
      crusher.connect(chorus.start());
      chorus.connect(phaser);
      phaser.connect(tremolo.start());
      tremolo.connect(vibrato);
      vibrato.connect(feedbackDelay);
      feedbackDelay.connect(pingPong);
      pingPong.connect(jcReverb);
      jcReverb.connect(reverb);
      reverb.connect(meter);
      // connect audio chain to destination
      meter.connect(destination);
      // check audio levels
      // meterInterval = setInterval(audioInputLevelMeter, 1000);
    })
    .catch((e) => {
      // promise is rejected when the user doesn't have or allow audio source access
      console.log("audio source not open");
    });
}

function stopVoiceChanger() {
  console.log("audio source closed");
  audioStartToggle.innerText = "START";
  audioSourceIndicator.style.backgroundColor = "darkred";
  audioSourceIndicator.style.boxShadow = "0 0 0 0 #333";
  audioSource.close();
  clearInterval(meterInterval);
}
