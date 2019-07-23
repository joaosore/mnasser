$(document).on("click", ".btn-close", function() {
  $(this)
    .parent()
    .parent()
    .removeClass("open");
  $("body").removeClass("disable-scroll");
});

$(document).on("click", ".btn-modal.judicial", function() {
  $(".box.judicial").addClass("open");
  var $doc = $("html, body");
  window.location.hash = "#experiencia";
  $doc.animate(
    {
      scrollTop: $(".experiencia").offset().top
    },
    500
  );
  $(".item").css("opacity", "1");
  $(".item").css(
    "transform",
    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
  );

  $(".item p").css("opacity", "1");
  $(".item p").css(
    "transform",
    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
  );
  $("body").addClass("disable-scroll");
});

$(document).on("click", ".btn-modal.arbitragem", function() {
  $(".box.arbitragem").addClass("open");
  var $doc = $("html, body");
  window.location.hash = "#experiencia";
  $doc.animate(
    {
      scrollTop: $(".experiencia").offset().top
    },
    500
  );
  $(".item").css("opacity", "1");
  $(".item").css(
    "transform",
    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
  );

  $(".item p").css("opacity", "1");
  $(".item p").css(
    "transform",
    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
  );
  $("body").addClass("disable-scroll");
});

$(document).on("click", ".menu-h", function() {
  $("header").addClass("active");
});

$(window).on("load", function() {
  var $doc = $("html, body");
  var hash = window.location.hash;
  var res = hash.replace("#", ".");
  console.log(res);
  $doc.animate(
    {
      scrollTop: $(res).offset().top
    },
    500
  );

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
