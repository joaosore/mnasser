import Barba from "barba.js";
import ScrollReveal from "scrollreveal";

// Conceitos Page
var Conceitospage = Barba.BaseView.extend({
  namespace: "pageinspiracao",
  onEnter: function() {
    console.log("onEnter: pageinspiracao");
    animeteEnter();
    $("body").focus();
  },
  onEnterCompleted: function() {
    console.log("onEnterCompleted: pageinspiracao");
  },
  onLeave: function() {
    console.log("onLeave: pageinspiracao");
    animeteLeave();
  },
  onLeaveCompleted: function() {
    console.log("onLeaveCompleted: pageinspiracao");
  }
});
Conceitospage.init();

function animeteEnter() {
  $("footer .page").addClass("exit");
  $("header .page .menu").addClass("enter");
  $(".logo .box-logo").addClass("animate");
  $(".logo .mask").addClass("enter");
  $("header .page .lg").fadeIn();

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
  $("header .page .menu").removeClass("enter");
  $(".logo .box-logo").removeClass("animate");
  $(".logo .mask").removeClass("enter");
  $(".conceitos h2").fadeOut();
  $(".conceitos .box-conteudo p").fadeOut();
  $("header .page .lg").fadeOut();
  ScrollReveal().clean("header .page .lg ul li");
  ScrollReveal().clean("header .page .menu ul li");
}
