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

  // if (document.addEventListener) {
  //   document.addEventListener("webkitfullscreenchange", exitHandler, false);
  //   document.addEventListener("mozfullscreenchange", exitHandler, false);
  //   document.addEventListener("fullscreenchange", exitHandler, false);
  //   document.addEventListener("MSFullscreenChange", exitHandler, false);
  // }
}

function autoPlay() {
  elem = $(".play-viedo")[0];
  elem.autoplay = true;
  elem.muted = true;
  elem.volume = 0.2;
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
  elem.load();
  elem.muted = false;
  elem.volume = 0.2;
  if ($(".video").hasClass("open")) {
    $(".video").removeClass("open");
    elem.load();
    elem.muted = true;
    elem.controls = false;
    if ($(document).width() > 600) {
      $(".box-logo").fadeIn();
    }
  } else {
    elem.controls = true;
    $(".video").addClass("open");
    if ($(document).width() > 600) {
      $(".box-logo").fadeOut();
    }
  }
}
