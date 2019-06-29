import Barba from "barba.js";
import ScrollReveal from "scrollreveal";

import "./conceitos.scss";

// Conceitos Page
var Conceitospage = Barba.BaseView.extend({
  namespace: "pageconceitos",
  onEnter: function() {
    console.log("onEnter: pageconceitos");
    animeteEnter();
    $("body").focus();
  },
  onEnterCompleted: function() {
    console.log("onEnterCompleted: pageconceitos");
  },
  onLeave: function() {
    console.log("onLeave: pageconceitos");
    animeteLeave();
  },
  onLeaveCompleted: function() {
    console.log("onLeaveCompleted: pageconceitos");
  }
});
Conceitospage.init();

function animeteEnter() {
  $(".inicial").addClass("exit");
  $("footer .page").addClass("exit");
  $("header .page .menu").addClass("enter");
  $(".logo .box-logo").addClass("animate");
  $(".logo .mask").addClass("enter");

  ScrollReveal().reveal("header .page .menu ul li", {
    distance: "25px",
    origin: "bottom",
    opacity: 0,
    easing: "ease-in-out",
    duration: 1000,
    delay: 350,
    interval: 100
  });

  ScrollReveal().reveal("header .page .lg ul li", {
    distance: "25px",
    origin: "left",
    opacity: 0,
    easing: "ease-in-out",
    duration: 1000,
    delay: 1250,
    interval: 100
  });

  ScrollReveal().reveal(".conceitos h2", {
    distance: "100px",
    origin: "right",
    opacity: 0,
    easing: "ease-in-out",
    duration: 1000,
    delay: 0,
    interval: 100
  });

  ScrollReveal().reveal(".conceitos .box-conteudo p", {
    distance: "100px",
    origin: "right",
    opacity: 0,
    easing: "ease-in-out",
    duration: 1000,
    delay: 0,
    interval: 100
  });
}

function animeteLeave() {
  $(".logo .box-logo").removeClass("animate");
  $(".logo .mask").removeClass("enter");
  $(".conceitos h2").fadeOut();
  $(".conceitos .box-conteudo p").fadeOut();
  ScrollReveal().clean("header .page .lg ul li");
  ScrollReveal().clean("header .page .menu ul li");
}
