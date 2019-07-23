var $doc = $("html, body");
$("a").click(function() {
  var item = $.attr(this, "href");
  window.location.hash = item;
  item = item.replace("#", ".");
  $doc.animate(
    {
      scrollTop: $(item).offset().top
    },
    500
  );
  return false;
});

$(window).on("scroll", function() {
  var scrollPosition = $(window).scrollTop();
  scroll(scrollPosition);
});

$(window).on("load", function() {
  var scrollPosition = $(window).scrollTop();
  scroll(scrollPosition);
});

function scroll(scrollPosition) {
  var video_top = $($(".video")).offset().top;
  var video_bottom = video_top + $(".video").height();

  var conceito_top = $($(".conceito")).offset().top;
  var conceito_bottom = conceito_top + $(".conceito").height();

  var inspiracao_top = $($(".inspiracao")).offset().top;
  var inspiracao_bottom = inspiracao_top + $(".inspiracao").height();

  var pessoas_top = $($(".pessoas")).offset().top;
  var pessoas_bottom = pessoas_top + $(".pessoas").height();

  var experiencia_top = $($(".experiencia")).offset().top;
  var experiencia_bottom = experiencia_top + $(".experiencia").height();

  var imprensa_top = $($(".imprensa")).offset().top;
  var imprensa_bottom = imprensa_top + $(".imprensa").height();

  var contato_top = $($(".contato")).offset().top;
  var contato_bottom = contato_top + $(".contato").height();

  if (scrollPosition >= video_top && scrollPosition < video_bottom) {
    window.location.hash = "#proposito";
  } else if (
    scrollPosition >= conceito_top &&
    scrollPosition < conceito_bottom
  ) {
    window.location.hash = "#conceito";
  } else if (
    scrollPosition >= inspiracao_top &&
    scrollPosition < inspiracao_bottom
  ) {
    window.location.hash = "#inspiracao";
  } else if (scrollPosition >= pessoas_top && scrollPosition < pessoas_bottom) {
    window.location.hash = "#pessoas";
  } else if (
    scrollPosition >= experiencia_top &&
    scrollPosition < experiencia_bottom
  ) {
    window.location.hash = "#experiencia";
  } else if (
    scrollPosition >= imprensa_top &&
    scrollPosition < imprensa_bottom
  ) {
    window.location.hash = "#imprensa";
  } else if (scrollPosition >= contato_top && scrollPosition < contato_bottom) {
    window.location.hash = "#contato";
  }

  console.log($(".conceito").height() / 2);

  if (scrollPosition >= conceito_top - 650) {
    $(".box-logo").addClass("open");
    $(".box-logo").removeClass("remove");
  } else if (scrollPosition < conceito_top) {
    $(".box-logo").removeClass("open");
  }

  if (scrollPosition >= pessoas_top - 650) {
    $(".box-logo").removeClass("open");
    $(".box-logo").addClass("remove");
  }

  if (scrollPosition >= experiencia_top - 100) {
    $(".box-logo").addClass("open");
    $(".box-logo").removeClass("remove");
  }
  menu();
}

function menu() {
  var url = window.location.hash;
  $(".menu li").removeClass("active");
  $(".menu li a[href='" + url + "']")
    .parent()
    .addClass("active");
}
