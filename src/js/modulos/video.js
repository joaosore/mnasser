var elem;
var fullscreen = false;

init_video();

function init_video() {
  elem = $(".play-viedo")[0];

  setTimeout(() => {
    autoPlay();
  }, 300);

  $(document).on("click", ".play-viedo", function() {
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
  elem = $(".play-viedo")[0];
  elem.autoplay = true;
  elem.muted = true;
  elem.load();
}

function exitHandler() {
  console.log(fullscreen);
  if (
    document.webkitIsFullScreen ||
    document.mozFullScreen ||
    document.msFullscreenElement !== null
  ) {
    if (!fullscreen) {
      fullscreen = true;
      elem.load();
      elem.muted = false;
    } else {
      autoPlay();
      fullscreen = false;
    }
  }
}

function openVideo() {
  elem = $(".play-viedo")[0];
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
