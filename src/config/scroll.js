import Barba from "barba.js";

var scroll = true;
var scrollPosition = 1;

var pagesPt = [
  "",
  "conceitos",
  "inspiracao",
  "pessoas",
  "experiencia",
  "emprensa",
  "contato"
];

var pagesEn = [
  "en/home",
  "en/concepto",
  "en/inspiracion",
  "en/personas",
  "en/experiencia",
  "en/prensa",
  "en/contacto"
];

var pagesEs = [
  "es/inicio",
  "es/concept",
  "es/inspiration",
  "es/people",
  "es/experience",
  "es/press",
  "es/contact"
];

switch (getCookie("pll_language")) {
  case "pt":
    scrollPosition = pagesPt.indexOf(window.location.pathname);
    break;
  case "en":
    scrollPosition = pagesEn.indexOf(window.location.pathname);
    break;
  case "es":
    scrollPosition = pagesEs.indexOf(window.location.pathname);
    break;
}

$("body").on("wheel", function(e) {
  if (e.originalEvent.deltaY < 0) {
    console.log("Scroll up");
    if (scroll) {
      Barba.Pjax.goTo("/" + page("up"));
      scroll = false;
      resetScroll();
    }
  } else {
    console.log("Scroll down");
    if (scroll) {
      Barba.Pjax.goTo("/" + page("down"));
      scroll = false;
      resetScroll();
    }
  }
});

function page(conf) {
  switch (conf) {
    case "up":
      if (scrollPosition > 0) {
        scrollPosition = scrollPosition - 1;
      }
      break;
    case "down":
      if (scrollPosition < pagesPt.length - 1) {
        scrollPosition = scrollPosition + 1;
      }
      break;
  }

  console.log(scrollPosition);

  return getLg()[scrollPosition];
}

function getLg() {
  var menu = [];
  switch (getCookie("pll_language")) {
    case "pt":
      menu = pagesPt;
      break;
    case "en":
      menu = pagesEn;
      break;
    case "es":
      menu = pagesEs;
      break;
  }
  return menu;
}

function resetScroll() {
  setTimeout(function() {
    scroll = true;
  }, 1000);
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
