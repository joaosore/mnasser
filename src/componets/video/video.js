import { openModal, closeModal } from "../../componets/modal/modal";

var video;

export function init_video() {
  video = document.getElementById("inicial-video");

  $(document).on("click", ".btn-play", function() {
    $(this)
      .addClass("btn-stop")
      .removeClass("btn-play");
    stopVideo();
    openModal();
  });

  $(document).on("click", ".modal.active, .close", function() {
    $(".btn-stop")
      .addClass("btn-play")
      .removeClass("btn-stop");
    closeModal();
    playVideo();
  });
}

function stopVideo() {
  video.pause();
}

function playVideo() {
  video.play();
}
