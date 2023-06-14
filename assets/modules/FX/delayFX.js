let delayTimeSlider = document.getElementById("delay-time");
let delayTimeValue = document.getElementById("delay-time-value");
delayTimeValue.innerHTML = delayTimeSlider.value;

let delayFeedbackSlider = document.getElementById("delay-feedback");
let delayFeedbackValue = document.getElementById("delay-feedback-value");
delayFeedbackValue.innerHTML = delayFeedbackSlider.value;

let delayWetDrySlider = document.getElementById("delay-wet-dry");
let delayWetDryValue = document.getElementById("delay-wet-dry-value");
delayWetDryValue.innerHTML = delayWetDrySlider.value;

const feedbackDelay = new Tone.FeedbackDelay({
  delayTime: delayTimeSlider.value,
  feedback: delayFeedbackSlider.value,
  maxDelay: 1,
  wet: delayWetDrySlider.value,
});

delayTimeSlider.oninput = function () {
  delayTimeValue.innerHTML = this.value;
  // console.log("Slider value: ", delayTimeValue.innerHTML);
  updateDelaySliders();
};

delayFeedbackSlider.oninput = function () {
  delayFeedbackValue.innerHTML = this.value;
  // console.log("Slider value: ", delayFeedbackValue.innerHTML);
  updateDelaySliders();
};

delayWetDrySlider.oninput = function () {
  delayWetDryValue.innerHTML = this.value;
  // console.log("Slider value: ", delayWetDryValue.innerHTML);
  updateDelaySliders();
};

function updateDelaySliders() {
  let delayTime = parseFloat(delayTimeValue.innerHTML);
  let feedback = parseFloat(delayFeedbackValue.innerHTML);
  let wetDry = parseFloat(delayWetDryValue.innerHTML);

  feedbackDelay.set({
    delayTime: delayTime,
    feedback: feedback,
    wet: wetDry,
  });
}

export {
  feedbackDelay,
  delayTimeValue,
  delayTimeSlider,
  updateDelaySliders,
  delayFeedbackValue,
  delayFeedbackSlider,
  delayWetDryValue,
  delayWetDrySlider,
};
