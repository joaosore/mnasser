const fullpage = require("fullpage.js");
import { animateEnter, animateLeave, activeAnimate } from "./animation.js";
import ScrollReveal from "scrollreveal";

$(window).on("load", function() {
  Size();
});

function Size() {
  if ($(window).width() <= 991) {
    animateMobile();
    $("html, body").css("overflow-y", "auto");
  } else {
    activeAnimate();
    $("html, body").css("overflow-y", "hidden");
    new fullpage("#fullpage", {
      menu: "#menu",
      lockAnchors: false,
      normalScrollElements: ".scroll-c, .conteudos",
      anchors: [
        "",
        "conceito",
        "inspiracao",
        "paulo-magalhaes-nasser",
        "camila-rezende-martins",
        "ana-carolina-bariviera-barros",
        "priscila-gomes",
        "experiencia",
        "imprensa",
        "contato"
      ],
      onLeave: function(origin, destination, direction) {
        animateLeave(origin.anchor, direction);
      },
      afterLoad: function(origin, destination, direction) {
        animateEnter(destination.anchor);
      }
    });
  }
}
$(document).on("click", ".btn-modal", function() {
  $(".box-itens-modal").addClass("enter");
});

$(document).on("click", ".close-c", function() {
  $(".box-itens-modal").removeClass("enter");
});

$(document).on("click", ".acordion", function() {
  if (
    $(this)
      .find(".conteudo")
      .hasClass("open")
  ) {
    $(".acordion .conteudo").removeClass("open");
    $(".acordion .titulo").removeClass("open");
  } else {
    $(".acordion .conteudo").removeClass("open");
    $(".acordion .titulo").removeClass("open");
    $(this)
      .find(".conteudo")
      .addClass("open");
    $(this)
      .find(".titulo")
      .addClass("open");
  }
});

function animateMobile() {
  console.log("AQUI");

  ScrollReveal().reveal(".video", {
    delay: 375,
    duration: 500,
    reset: true,
    opacity: 0
  });

  ScrollReveal().reveal(".img-person", {
    delay: 375,
    duration: 500,
    opacity: 0
  });

  ScrollReveal().reveal("h2", {
    delay: 375,
    duration: 750,
    opacity: 0,
    origin: "right",
    distance: "100px",
    beforeReveal: removeHiddenConteudoBoxImg
  });

  ScrollReveal().reveal("p", {
    delay: 375,
    duration: 500,
    opacity: 0,
    origin: "right",
    distance: "100px",
    beforeReveal: removeHiddenConteudoBoxImg
  });
}

function removeHiddenConteudoBoxImg() {
  $(".conteudos p").css("opacity", "1");
  $(".conteudos p").css(
    "transform",
    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
  );
}

$(document).on("click", ".menu-hamburger img", function() {
  $("header").addClass("open");
});

$(document).on("click", "header .close-c", function() {
  $("header").removeClass("open");
});
