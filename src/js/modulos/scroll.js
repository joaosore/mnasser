const fullpage = require("fullpage.js");
import { animateEnter, animateLeave, activeAnimate } from "./animation.js";

$(window).on("load", function() {
  Size();
});

$(window).resize(function() {
  window.location.href = "/";
  Size();
});

function Size() {
  if ($(window).width() <= 991) {
    $("html, body").css("overflow-y", "auto");
    setTimeout(() => {
      animateEnter("conceito");
      animateEnter("inspiracao");
      animateEnter("pessoas");
      animateEnter("experiencia");
      animateEnter("imprensa");
      animateEnter("contato");
    }, 1500);
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
