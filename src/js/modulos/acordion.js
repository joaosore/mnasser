$(document).on("click", ".acordion", function() {
  if (
    $(this)
      .find(".box-conteudo")
      .hasClass("open")
  ) {
    $(".box-conteudo").removeClass("open");
    $(".conteudo").removeClass("open");
  } else {
    $(".conteudo").addClass("open");
    $(".box-conteudo").removeClass("open");
    $(this)
      .find(".box-conteudo")
      .addClass("open");
  }
});
