var audio = document.getElementById("sm-audio");
var audioPlayPauseBTN = document.getElementById("audioPlayPauseBTN");
var enableScrollPlayMusicBTN = document.getElementById(
  "enableScrollPlayMusicBTN"
);
var count = 0;

function audioPlayPause() {
  if (count === 0) {
    count = 1;
    audio.play();
    audioPlayPauseBTN.innerHTML = "Audio Playing";
  } else {
    count = 0;
    audio.pause();
    audioPlayPauseBTN.innerHTML = "Audio Paused";
  }
}

function enableScrollPlayMusic() {
  // Enable scrolling by removing the 'no-scroll' class from the body
  document.body.classList.remove("no-scroll");

  // Scroll smoothly to #sm-main section
  const mainSection = document.getElementById("sm-main");
  mainSection.scrollIntoView({ behavior: "smooth" });

  // Play the audio
  audio.play();
  audioPlayPauseBTN.innerHTML = "Audio Playing";
}

// Initially disable scrolling on page load
document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("no-scroll");
});
