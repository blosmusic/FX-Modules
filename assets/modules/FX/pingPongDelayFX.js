let pingpongTimeSlider = document.getElementById("pingpong-time");
let pingpongTimeValue = document.getElementById("pingpong-time-value");
pingpongTimeValue.innerHTML = pingpongTimeSlider.value;

let pingpongFeedbackSlider = document.getElementById("pingpong-feedback");
let pingpongFeedbackValue = document.getElementById("pingpong-feedback-value");
pingpongFeedbackValue.innerHTML = pingpongFeedbackSlider.value;

let pingpongWetDrySlider = document.getElementById("pingpong-wet-dry");
let pingpongWetDryValue = document.getElementById("pingpong-wet-dry-value");
pingpongWetDryValue.innerHTML = pingpongWetDrySlider.value;

const pingPong = new Tone.PingPongDelay({
  delayTime: pingpongTimeSlider.value,
  feedback: pingpongFeedbackSlider.value,
  maxDelay: 1,
  wet: pingpongWetDrySlider.value,
});

pingpongTimeSlider.oninput = function () {
  pingpongTimeValue.innerHTML = this.value;
  // console.log("Slider value: ", pingpongTimeValue.innerHTML);
  updatePingPongSliders();
};

pingpongFeedbackSlider.oninput = function () {
  pingpongFeedbackValue.innerHTML = this.value;
  // console.log("Slider value: ", pingpongFeedbackValue.innerHTML);
  updatePingPongSliders();
};

pingpongWetDrySlider.oninput = function () {
  pingpongWetDryValue.innerHTML = this.value;
  // console.log("Slider value: ", pingpongWetDryValue.innerHTML);
  updatePingPongSliders();
};

function updatePingPongSliders() {
  let delayTime = parseFloat(pingpongTimeValue.innerHTML);
  let feedback = parseFloat(pingpongFeedbackValue.innerHTML);
  let wetDry = parseFloat(pingpongWetDryValue.innerHTML);

  pingPong.set({
    delayTime: delayTime,
    feedback: feedback,
    wet: wetDry,
  });
}

export {
  pingPong,
  pingpongTimeValue,
  pingpongTimeSlider,
  updatePingPongSliders,
  pingpongFeedbackValue,
  pingpongFeedbackSlider,
  pingpongWetDryValue,
  pingpongWetDrySlider,
};
