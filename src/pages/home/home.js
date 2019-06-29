import Barba from "barba.js";
import ScrollReveal from "scrollreveal";

import { init_video } from "../../componets/video/video";

import "./home.scss";

// Home Page
var Homepage = Barba.BaseView.extend({
  namespace: "pagehome",
  onEnter: function() {
    console.log("onEnter: pagehome");
    animeteEnter();
    init_video();
  },
  onEnterCompleted: function() {
    console.log("onEnterCompleted: pagehome");
  },
  onLeave: function() {
    console.log("onLeave: pagehome");
    animeteLeave();
  },
  onLeaveCompleted: function() {
    console.log("onLeaveCompleted: pagehome");
  }
});
Homepage.init();

function animeteEnter() {
  $("header .page .menu").removeClass("enter");
  $("footer .page").removeClass("exit");
  // Cars
  ScrollReveal().reveal("#inicial-video", {
    scale: "2",
    easing: "ease-in",
    duration: 1000,
    delay: 250,
    reset: true
  });
  ScrollReveal().reveal(".inicial .mask", {
    scale: "2",
    opacity: 0,
    easing: "ease-in",
    duration: 1000,
    delay: 250,
    reset: true
  });
  ScrollReveal().reveal(".logo", {
    distance: "100px",
    origin: "top",
    opacity: 0,
    easing: "ease-in",
    duration: 1000,
    delay: 350,
    reset: true
  });
  ScrollReveal().reveal("footer .page h6:nth-child(1)", {
    distance: "100px",
    origin: "left",
    opacity: 0,
    easing: "ease-in",
    duration: 1000,
    delay: 1250,
    reset: true
  });
  ScrollReveal().reveal("footer .page h6:nth-child(2)", {
    distance: "100px",
    origin: "rigth",
    opacity: 0,
    easing: "ease-in",
    duration: 1000,
    delay: 1250,
    reset: true
  });

  ScrollReveal().reveal("header .page .lg ul li", {
    distance: "25px",
    origin: "left",
    opacity: 0,
    easing: "ease-in-out",
    duration: 1000,
    delay: 1250,
    interval: 100,
    reset: true
  });
}

function animeteLeave() {
  ScrollReveal().clean("header .page .lg ul li");
  ScrollReveal().clean("footer .page h6:nth-child(1)");
  ScrollReveal().clean("footer .page h6:nth-child(2)");
  ScrollReveal().clean("#inicial-video");
  ScrollReveal().clean(".inicial .mask");
}
