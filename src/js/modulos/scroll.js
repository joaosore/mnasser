const fullpage = require("fullpage.js");
import { animateEnter, animateLeave, activeAnimate } from "./animation.js";
import ScrollReveal from "scrollreveal";

$(window).on("load", function() {
  Size();

  if (getCookie("linguagem").length == 0) {
    $('.lg a[data-lg="pt"]')
      .parent()
      .addClass("active");
  }

  $('.lg a[data-lg="' + getCookie("linguagem") + '"]')
    .parent()
    .addClass("active");
});

$(document).on("click", ".lg a", function() {
  lg($(this).data("lg"));
});

function lg(lg) {
  switch (lg) {
    case "en":
      setCookie("linguagem", "en", 30);
      break;

    case "es":
      setCookie("linguagem", "es", 30);
      break;

    default:
      setCookie("linguagem", "pt", 30);
      break;
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function Size() {
  if ($(window).width() <= 991) {
    ancora(window.location.hash);
    animateMobile();
    menuMobile();
    $("html, body").css("overflow-y", "auto");
  } else {
    activeAnimate();
    $("html, body").css("overflow-y", "hidden");
    new fullpage("#fullpage", {
      menu: "#menu",
      lockAnchors: false,
      normalScrollElements: ".conteudos, .enable-scroll-interno",
      anchors: [
        "",
        "conceito",
        "inspiracao",
        "paulo-magalhaes-nasser",
        "camila-rezende-martins",
        "ana-carolina-bariviera-barros",
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
    $(".imprensa .scroll-c").removeClass("top");
    $(".acordion .conteudo").removeClass("open");
    $(".acordion .titulo").removeClass("open");
  } else {
    $(".imprensa .scroll-c").addClass("top");

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

function menuMobile() {
  $(document).on("click", ".menu-hamburger img", function() {
    $("header").addClass("open");
  });

  $(document).on("click", "header .close-c", function() {
    $("header").removeClass("open");
  });

  $("a").click(function() {
    var item = $.attr(this, "href").replace("#", ".");
    if ($("body").find(item).length > 0) {
      ancora(item);
      window.location.hash = $.attr(this, "href");
      $("header").removeClass("open");
      return false;
    }
  });
}

function ancora(item) {
  var item = item.replace("#", ".");
  var $doc = $("html, body");
  if (item.length > 0) {
    $doc.animate(
      {
        scrollTop: $(item).offset().top - 75
      },
      500
    );
  }
}
