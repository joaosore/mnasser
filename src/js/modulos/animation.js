export function activeAnimate() {
  animate(".conceito h2", true);
  animate(".conceito p", true);

  animate(".inspiracao h2", true);
  animate(".inspiracao p", true);

  animate(".pessoas.item_0 .email", true, "right");
  animate(".pessoas.item_0 .btns-redes", true, "right");
  animate(".pessoas.item_0 .titulo", true, "right");
  animate(".pessoas.item_0 p", true, "right");
  //animate(".pessoas.item_0 .img-person", true);

  animate(".pessoas.item_1 .email", true);
  animate(".pessoas.item_1 .btns-redes", true);
  animate(".pessoas.item_1 .titulo", true);
  animate(".pessoas.item_1 p", true);
  //animate(".pessoas.item_1 .img-person", true, "right");

  animate(".pessoas.item_2 .email", true, "right");
  animate(".pessoas.item_2 .btns-redes", true, "right");
  animate(".pessoas.item_2 .titulo", true, "right");
  animate(".pessoas.item_2 p", true, "right");
  //animate(".pessoas.item_2 .img-person", true);

  animate(".pessoas.item_3 .email", true);
  animate(".pessoas.item_3 .btns-redes", true);
  animate(".pessoas.item_3 .titulo", true);
  animate(".pessoas.item_3 p", true);
  //animate(".pessoas.item_3 .img-person", true, "right");

  animate(".experiencia h2", true);
  animate(".experiencia p", true);
  animate(".btn-modal", true);

  animate(".imprensa .titulo", true);
  animate(".imprensa p", true);
  animate(".imprensa .fonte", true);

  animate(".contato h2", true);
  animate(".contato p", true);
}

export function animateEnter(anchor) {
  activeMenu(anchor);
  switch (anchor) {
    case "":
      $(".menu").removeClass("enter");
      $(".video").addClass("enter");
      var elem = $(".play-viedo")[0];
      elem.autoplay = true;
      elem.muted = true;
      elem.load();
      break;
    case "conceito":
      $(".menu").addClass("enter");
      $(".box").addClass("size");
      $(".logo").addClass("enter");
      $(".img-logo").addClass("size");
      $(".img-logo").fadeIn();
      animate(".conceito h2");
      animate(".conceito p");
      break;
    case "inspiracao":
      $(".menu").addClass("enter");
      $(".box").addClass("size");
      $(".logo").addClass("enter");
      $(".img-logo").addClass("size");
      $(".img-logo").fadeIn();
      animate(".inspiracao h2");
      animate(".inspiracao p");
      break;
    case "paulo-magalhaes-nasser":
      $(".menu").removeClass("enter");
      $(".box").removeClass("size");
      $(".logo").removeClass("enter");
      $(".img-logo").removeClass("size");
      $(".img-logo").fadeOut();
      animate(".pessoas.item_0 p");
      animate(".pessoas.item_0 .email");
      animate(".pessoas.item_0 .btns-redes");
      animate(".pessoas.item_0 .titulo");
      //animate(".pessoas.item_0 .img-person");
      break;
    case "camila-rezende-martins":
      $(".menu").removeClass("enter");
      $(".box").removeClass("size");
      $(".logo").removeClass("enter");
      $(".img-logo").removeClass("size");
      $(".img-logo").fadeOut();
      animate(".pessoas.item_1 p");
      animate(".pessoas.item_1 .email");
      animate(".pessoas.item_1 .btns-redes");
      animate(".pessoas.item_1 .titulo");
      //animate(".pessoas.item_1 .img-person");
      break;
    case "ana-carolina-bariviera-barros":
      $(".menu").removeClass("enter");
      $(".box").removeClass("size");
      $(".logo").removeClass("enter");
      $(".img-logo").removeClass("size");
      $(".img-logo").fadeOut();
      animate(".pessoas.item_2 p");
      animate(".pessoas.item_2 .email");
      animate(".pessoas.item_2 .btns-redes");
      animate(".pessoas.item_2 .titulo");
      //animate(".pessoas.item_2 .img-person");
      break;
    case "priscila-gomes":
      $(".menu").removeClass("enter");
      $(".box").removeClass("size");
      $(".logo").removeClass("enter");
      $(".img-logo").removeClass("size");
      $(".img-logo").fadeOut();
      animate(".pessoas.item_3 p");
      animate(".pessoas.item_3 .email");
      animate(".pessoas.item_3 .btns-redes");
      animate(".pessoas.item_3 .titulo");
      //animate(".pessoas.item_3 .img-person");
      break;
    case "experiencia":
      $(".menu").addClass("enter");
      $(".box").addClass("size");
      $(".logo").addClass("enter");
      $(".img-logo").addClass("size");
      $(".img-logo").fadeIn();
      animate(".experiencia h2");
      animate(".experiencia p");
      animate(".btn-modal");
      break;
    case "imprensa":
      $(".menu").addClass("enter");
      $(".box").addClass("size");
      $(".logo").addClass("enter");
      $(".img-logo").addClass("size");
      $(".img-logo").fadeIn();
      animate(".imprensa .titulo");
      animate(".imprensa p");
      animate(".imprensa .fonte");
      break;
    case "contato":
      $(".menu").addClass("enter");
      $(".box").addClass("size");
      $(".logo").addClass("enter");
      $(".img-logo").addClass("size");
      $(".img-logo").fadeIn();
      animate(".contato h2");
      animate(".contato p");
      break;
  }
}

export function animateLeave(anchor, direction) {
  switch (anchor) {
    case "":
      $(".video").removeClass("enter");
      $(".box").addClass("size");
      $(".logo").addClass("enter");
      $(".img-logo").addClass("size");
      $(".img-logo").fadeIn();
      break;
    case "conceito":
      if (direction == "up") {
        $(".video").addClass("enter");
        $(".box").removeClass("size");
        $(".logo").removeClass("enter");
        $(".img-logo").removeClass("size");
        $(".img-logo").fadeIn();
        $(".menu").removeClass("enter");
      }
      if (direction == "down") {
        $(".box").addClass("size");
        $(".logo").addClass("enter");
        $(".img-logo").addClass("size");
        $(".img-logo").fadeIn();
      }
      $(".conceito h2").removeClass("enter");
      $(".conceito p").removeClass("enter");
      break;
    case "inspiracao":
      if (direction == "down") {
        $(".box").removeClass("size");
        $(".logo").removeClass("enter");
        $(".img-logo").removeClass("size");
        $(".img-logo").fadeOut();
      }
      $(".inspiracao h2").removeClass("enter");
      $(".inspiracao p").removeClass("enter");
      break;
    case "paulo-magalhaes-nasser":
      if (direction == "up") {
        $(".box").addClass("size");
        $(".logo").addClass("enter");
        $(".img-logo").addClass("size");
        $(".img-logo").fadeIn();
      }
      $(".pessoas.item_0 h2").removeClass("enter");
      $(".pessoas.item_0 p").removeClass("enter");
      $(".pessoas.item_0 .email").removeClass("enter");
      $(".pessoas.item_0 .btns-redes").removeClass("enter");
      $(".pessoas.item_0 .titulo").removeClass("enter");
      //$(".pessoas.item_0 .img-person").removeClass("enter");
      break;
    case "camila-rezende-martins":
      $(".pessoas.item_1 h2").removeClass("enter");
      $(".pessoas.item_1 p").removeClass("enter");
      $(".pessoas.item_1 .email").removeClass("enter");
      $(".pessoas.item_1 .btns-redes").removeClass("enter");
      $(".pessoas.item_1 .titulo").removeClass("enter");
      //$(".pessoas.item_1 .img-person").removeClass("enter");
      break;
    case "ana-carolina-bariviera-barros":
      $(".pessoas.item_2 h2").removeClass("enter");
      $(".pessoas.item_2 p").removeClass("enter");
      $(".pessoas.item_2 .email").removeClass("enter");
      $(".pessoas.item_2 .btns-redes").removeClass("enter");
      $(".pessoas.item_2 .titulo").removeClass("enter");
      //$(".pessoas.item_2 .img-person").removeClass("enter");
      break;
    case "priscila-gomes":
      if (direction == "down") {
        $(".box").addClass("size");
        $(".logo").addClass("enter");
        $(".img-logo").addClass("size");
        $(".img-logo").fadeIn();
      }
      $(".pessoas.item_3 h2").removeClass("enter");
      $(".pessoas.item_3 p").removeClass("enter");
      $(".pessoas.item_3 .email").removeClass("enter");
      $(".pessoas.item_3 .btns-redes").removeClass("enter");
      $(".pessoas.item_3 .titulo").removeClass("enter");
      //$(".pessoas.item_3 .img-person").removeClass("enter");
      break;
    case "experiencia":
      if (direction == "up") {
        $(".box").removeClass("size");
        $(".logo").removeClass("enter");
        $(".img-logo").removeClass("size");
        $(".img-logo").fadeOut();
      }
      $(".experiencia h2").removeClass("enter");
      $(".experiencia p").removeClass("enter");
      $(".btn-modal").removeClass("enter");
      break;
    case "imprensa":
      $(".imprensa .titulo").removeClass("enter");
      $(".imprensa p").removeClass("enter");
      $(".imprensa .fonte").removeClass("enter");
      break;
    case "contato":
      $(".contato h2").removeClass("enter");
      $(".contato p").removeClass("enter");
      break;
  }
}

function animate(el, start = false, origin = "left") {
  $(el).addClass("animete");
  $(el).addClass(origin);

  if (start == false) {
    var i = 0;
    const index = $(el).length;
    const interval = setInterval(() => {
      if (i > index) {
        clearInterval(interval);
      }
      $(el + ":eq(" + i + ")").addClass("enter");
      i = i + 1;
    }, 25);
  }
}

function activeMenu(menu) {
  if (
    menu == "paulo-magalhaes-nasser" ||
    menu == "camila-rezende-martins" ||
    menu == "ana-carolina-bariviera-barros" ||
    menu == "priscila-gomes"
  ) {
    $(".menu li").removeClass("active");
    $(".menu li[data-menu='#paulo-magalhaes-nasser']").addClass("active");
  } else if (menu.length > 0) {
    $(".menu li").removeClass("active");
    $(".menu li[data-menu='#" + menu + "']").addClass("active");
  }
}
