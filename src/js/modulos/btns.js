$(document).on("click", ".btn-close", function() {
  $(this)
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
