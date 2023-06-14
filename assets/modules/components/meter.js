const meter = new Tone.Meter(0.8);
let inputLevelValueRead = null;

// read input level - check if mic is open
function audioInputLevelMeter() {
  inputLevelValueRead = meter.getValue().toFixed(2);
  // print the incoming mic levels in decibels
  console.log("The Decibel level is:", inputLevelValueRead, "dB");
}

export { meter, audioInputLevelMeter }