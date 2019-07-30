var click = false;

$(window).on("scroll", function() {
  var scrollPosition = $(window).scrollTop();
  scroll(scrollPosition);
});

$(window).on("load", function() {
  var scrollPosition = $(window).scrollTop();
  scroll(scrollPosition);

  $(document).on("click", "a", function() {
    click = true;

    var $doc = $("html, body");
    var item = $.attr(this, "href");
    window.location.hash = item;
    item = item.replace("#", ".");

    $doc.animate(
      {
        scrollTop: $(item).offset().top
      },
      500
    );

    $("header").removeClass("active");

    setTimeout(() => {
      click = false;
    }, 1000);

    return false;
  });
});

st = 0;

function scroll(scrollPosition) {
  if ($(".video").hasClass("open")) {
    $(".video").removeClass("open");
    elem = $(".play-viedo")[0];
    elem.muted = true;
    elem.controls = false;
    if ($(document).width() > 600) {
      $(".box-logo").fadeIn();
    }
  }

  var video = $(".video").height();

  if (scrollPosition <= video) {
    var y = (scrollPosition * 1) / video;
    switch (parseFloat(y).toFixed(1)) {
      case "0.0":
        $(".video").css("opacity", "1");
        break;
      case "0.1":
        $(".video").css("opacity", "0.8");
        break;
      case "0.2":
        $(".video").css("opacity", "0.7");
        break;
      case "0.3":
        $(".video").css("opacity", "0.6");
        break;
      case "0.4":
        $(".video").css("opacity", "0.5");
        break;
      case "0.5":
        $(".video").css("opacity", "0.4");
        break;
      case "0.6":
        $(".video").css("opacity", "0.3");
        break;
      case "0.7":
        $(".video").css("opacity", "0.2");
        break;
      case "0.8":
        $(".video").css("opacity", "0.1");
        break;
      case "0.9":
        $(".video").css("opacity", "0.0");
        break;
      case "1.0":
        $(".video").css("opacity", "0.0");
        break;
    }
  }

  var video_top = $($(".video")).offset().top;
  var video_bottom = video_top + $(".video").height();

  var conceito_top = $($(".conceito")).offset().top;
  var conceito_bottom = conceito_top + $(".conceito").height();

  var inspiracao_top = $($(".inspiracao")).offset().top - 5;
  var inspiracao_bottom = inspiracao_top + $(".inspiracao").height();

  var pessoas_top = $($(".pessoas")).offset().top - 5;
  var pessoas_bottom = pessoas_top + $(".pessoas").height();

  var pessoas_item_top = $($(".pessoas_item")).offset().top - 5;
  var pessoas_item_bottom = pessoas_item_top + $(".pessoas_item").height();

  var experiencia_top = $($(".experiencia")).offset().top - 5;
  var experiencia_bottom = experiencia_top + $(".experiencia").height();

  var imprensa_top = $($(".imprensa")).offset().top - 5;
  var imprensa_bottom = imprensa_top + $(".imprensa").height();

  var contato_top = $($(".contato")).offset().top - 5;
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
  } else if (
    scrollPosition >= pessoas_top &&
    scrollPosition < pessoas_item_bottom
  ) {
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

  if (
    scrollPosition >= conceito_top - $(window).height() / 2 &&
    scrollPosition < pessoas_item_top - $(window).height() / 1.5
  ) {
    $(".box-logo").addClass("open");
    $(".box-logo").removeClass("remove");
  } else if (scrollPosition < conceito_top) {
    $(".box-logo").removeClass("open");
  }

  if (
    scrollPosition >= pessoas_item_top - $(window).height() / 1.5 &&
    scrollPosition < experiencia_top - $(window).height() / 1.5
  ) {
    $(".box-logo").addClass("remove");
    $(".box-logo").removeClass("open");
  }

  if (scrollPosition >= experiencia_top - $(window).height() / 1.5) {
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

var lastScrollTop = 0;
var scroll_menu = true;

function video_scroll() {
  var scroll_video = true;
  var scroll_conceito = true;

  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      console.log("down");
      if (scroll_video) {
        if (click == false) {
          var $doc = $("html, body");
          $doc.animate(
            {
              scrollTop: $(".conceito").offset().top
            },
            0
          );
          scroll_video = false;
          scroll_conceito = true;
        }
      }
    } else {
      console.log("up");
      if (st < 50) {
        scroll_video = true;
      }

      if (scroll_conceito) {
        if (st <= $(".conceito").offset().top) {
          var $doc = $("html, body");
          $doc.animate(
            {
              scrollTop: $(".proposito").offset().top
            },
            0
          );
        }
      }
    }

    lastScrollTop = st;
  });
}

if ($(window).width() > 750) {
  //video_scroll();
}

function menu_hidden() {
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop) {
      $("header").addClass("hidden");
      scroll_menu = false;
    } else {
      $("header").removeClass("hidden");
      scroll_menu = true;
    }

    setInterval(() => {
      if (st == lastScrollTop) {
        $("header").removeClass("hidden");
      }
    }, 500);

    lastScrollTop = st;
  });
}
menu_hidden();

var lastScrollTop2 = 0;
function img_person() {
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    if (st > lastScrollTop2) {
      if (st >= $(".pessoas_item .pessoa:nth-child(1)").offset().top) {
        if (
          st + $(window).height() <=
          $(".pessoas_item .pessoa:nth-child(2)").offset().top - 100
        ) {
          $(".pessoas_item .pessoa:nth-child(1) .foto .img-person").addClass(
            "fixed"
          );
        } else {
          $(".pessoas_item .pessoa:nth-child(1) .foto .img-person").removeClass(
            "fixed"
          );
          $(".pessoas_item .pessoa:nth-child(1) .foto").addClass("bottom");
        }
      }
      if (st >= $(".pessoas_item .pessoa:nth-child(2)").offset().top + 100) {
        if (
          st + $(window).height() <=
          $(".pessoas_item .pessoa:nth-child(3)").offset().top - 100
        ) {
          $(".pessoas_item .pessoa:nth-child(2) .foto .img-person").addClass(
            "fixed"
          );
        } else {
          $(".pessoas_item .pessoa:nth-child(2) .foto .img-person").removeClass(
            "fixed"
          );
          $(".pessoas_item .pessoa:nth-child(2) .foto").addClass("bottom");
        }
      }

      if (st >= $(".pessoas_item .pessoa:nth-child(3)").offset().top + 100) {
        if (st + $(window).height() <= $(".experiencia").offset().top - 100) {
          $(".pessoas_item .pessoa:nth-child(3) .foto .img-person").addClass(
            "fixed"
          );
        } else {
          $(".pessoas_item .pessoa:nth-child(3) .foto .img-person").removeClass(
            "fixed"
          );
          $(".pessoas_item .pessoa:nth-child(3) .foto").addClass("bottom");
        }
      }
    } else {
      if (
        st <=
        $(".pessoas_item .pessoa:nth-child(2)").offset().top -
          $(window).height() -
          100
      ) {
        if (st >= $(".pessoas_item .pessoa:nth-child(1)").offset().top) {
          $(".pessoas_item .pessoa:nth-child(1) .foto .img-person").addClass(
            "fixed"
          );
          $(".pessoas_item .pessoa:nth-child(1) .foto").removeClass("bottom");
        } else {
          $(".pessoas_item .pessoa:nth-child(1) .foto .img-person").removeClass(
            "fixed"
          );
        }
      }
      if (
        st <=
        $(".pessoas_item .pessoa:nth-child(3)").offset().top -
          $(window).height() -
          100
      ) {
        if (st >= $(".pessoas_item .pessoa:nth-child(2)").offset().top + 100) {
          $(".pessoas_item .pessoa:nth-child(2) .foto .img-person").addClass(
            "fixed"
          );
          $(".pessoas_item .pessoa:nth-child(2) .foto").removeClass("bottom");
        } else {
          $(".pessoas_item .pessoa:nth-child(2) .foto .img-person").removeClass(
            "fixed"
          );
        }
      }

      if (st <= $(".experiencia").offset().top - $(window).height() - 100) {
        if (st >= $(".pessoas_item .pessoa:nth-child(3)").offset().top + 100) {
          $(".pessoas_item .pessoa:nth-child(3) .foto .img-person").addClass(
            "fixed"
          );
          $(".pessoas_item .pessoa:nth-child(3) .foto").removeClass("bottom");
        } else {
          $(".pessoas_item .pessoa:nth-child(3) .foto .img-person").removeClass(
            "fixed"
          );
        }
      }
    }
    lastScrollTop2 = st;
  });
}
$(document).on("resize", function() {
  if ($(window).width() > 750) {
    img_person();
  }
});

if ($(window).width() > 750) {
  img_person();
}

// if ($(window).width() <= 750) {
//   var video = $(".video").height();
//   var play = $(".play-viedo").height();

//   $(".btn-play").css("height", play);

//   var x = play + 54;
//   var y = video - x;

//   $(".box-logo").css("height", y);
// }
