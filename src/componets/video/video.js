import { openModal, closeModal } from "../../componets/modal/modal";

var elem;
var fullscreen = false;

export function init_video() {
  elem = document.getElementById("inicial-video");

  setTimeout(function() {
    autoPlay();
  }, 1000);

  $(document).on("click", ".btn-play", function() {
    openVideo();
  });

  if (document.addEventListener) {
    document.addEventListener("webkitfullscreenchange", exitHandler, false);
    document.addEventListener("mozfullscreenchange", exitHandler, false);
    document.addEventListener("fullscreenchange", exitHandler, false);
    document.addEventListener("MSFullscreenChange", exitHandler, false);
  }
}

function autoPlay() {
  elem.autoplay = true;
  elem.volume = 0;
  elem.load();
}

function exitHandler() {
  if (
    document.webkitIsFullScreen ||
    document.mozFullScreen ||
    document.msFullscreenElement !== null
  ) {
    if (!fullscreen) {
      fullscreen = true;
    } else {
      autoPlay();
      fullscreen = false;
    }
  }
}

function openVideo() {
  elem.play();
  elem.volume = 1;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
