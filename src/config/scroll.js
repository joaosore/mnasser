import Barba from "barba.js";

var scroll = true;

$("body").on("wheel", function(e) {
  if (e.originalEvent.deltaY < 0) {
    console.log("Scroll up");
    if (scroll) {
      Barba.Pjax.goTo("/");
      scroll = false;
      resetScroll();
    }
  } else {
    console.log("Scroll down");
    if (scroll) {
      Barba.Pjax.goTo("/conceitos");
      scroll = false;
      resetScroll();
    }
  }
});

function resetScroll() {
  setTimeout(function() {
    scroll = true;
  }, 2000);
}
