// Listen for messages from the background script to control video playback
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "pause") {
    pauseVideoOrShort();
  } else if (request.action === "play") {
    resumeVideoOrShort();
  }
});

function pauseVideoOrShort() {
  let video = document.querySelector('video');
  if (video && !video.paused) {
    video.pause();
  }
}

function resumeVideoOrShort() {
  let video = document.querySelector('video');
  if (video && video.paused) {
    video.play();
  }
}
