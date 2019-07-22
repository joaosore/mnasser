import ScrollReveal from "scrollreveal";

setTimeout(function() {
  $("header").css("opacity", "1");
  $("header").css(
    "transform",
    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
  );

  $("header li").css("opacity", "1");
  $("header li").css(
    "transform",
    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
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
}, 1500);

$(window).on("load", function() {
  // Header
  ScrollReveal().reveal("header", {
    delay: 875,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "top",
    distance: "100px"
  });

  ScrollReveal().reveal("header li", {
    delay: 1375,
    duration: 500,
    opacity: 0,
    origin: "left",
    distance: "100px",
    interval: 50
  });

  // // Secção Video
  // ScrollReveal().reveal(".video", {
  //   delay: 375,
  //   duration: 500,
  //   reset: true,
  //   opacity: 0,
  //   scale: 2
  // });

  // Secção Conceito
  ScrollReveal().reveal(".conceito .logo", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "left",
    distance: "100px"
  });

  ScrollReveal().reveal(".conceito .conteudo h1", {
    delay: 375,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "right",
    distance: "100px"
  });

  ScrollReveal().reveal(".conceito .conteudo p", {
    delay: 375,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "right",
    distance: "100px",
    interval: 50
  });

  // Secção Inspiração
  ScrollReveal().reveal(".inspiracao .logo", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "left",
    distance: "100px"
  });

  ScrollReveal().reveal(".inspiracao .conteudo h1", {
    delay: 375,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "right",
    distance: "100px"
  });

  ScrollReveal().reveal(".inspiracao .conteudo p", {
    delay: 375,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "right",
    distance: "100px",
    interval: 50
  });

  // Secção Pessoas
  ScrollReveal().reveal(".pessoas p", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "left",
    distance: "100px",
    interval: 50
  });

  ScrollReveal().reveal(".pessoas .email", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "left",
    distance: "100px",
    interval: 50
  });

  ScrollReveal().reveal(".pessoas .btns-redes a", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "left",
    distance: "100px",
    interval: 50
  });

  ScrollReveal().reveal(".pessoas .titulo", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "left",
    distance: "100px",
    interval: 50
  });

  ScrollReveal().reveal(".pessoas .foto", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "right",
    distance: "100px",
    interval: 50
  });

  // Secção Experiencia
  ScrollReveal().reveal(".experiencia .logo", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "left",
    distance: "100px"
  });

  ScrollReveal().reveal(".experiencia .conteudo h1", {
    delay: 375,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "right",
    distance: "100px"
  });

  ScrollReveal().reveal(".experiencia .conteudo p", {
    delay: 375,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "right",
    distance: "100px",
    interval: 50
  });

  ScrollReveal().reveal(".experiencia .btn-modal", {
    delay: 575,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "right",
    distance: "100px"
  });

  // Secção Imprensa
  ScrollReveal().reveal(".imprensa .logo", {
    delay: 975,
    duration: 500,
    reset: true,
    opacity: 0,
    origin: "left",
    distance: "100px"
  });

  ScrollReveal().reveal(".imprensa .conteudo .titulo", {
    delay: 375,
    duration: 500,
    opacity: 0,
    origin: "right",
    distance: "100px"
  });

  ScrollReveal().reveal(".imprensa .box-conteudo p", {
    delay: 375,
    duration: 500,
    opacity: 0,
    origin: "right",
    distance: "100px",
    interval: 50,
    beforeReveal: removeP
  });

  ScrollReveal().reveal(".imprensa .item", {
    delay: 575,
    duration: 500,
    opacity: 0,
    origin: "right",
    distance: "100px"
  });

  ScrollReveal().reveal(".imprensa .fonte", {
    delay: 575,
    duration: 500,
    opacity: 0,
    origin: "right",
    distance: "100px"
  });

  // Secção Contato
  ScrollReveal().reveal(".contato h2", {
    delay: 375,
    duration: 500,
    opacity: 0,
    origin: "right",
    distance: "100px",
    interval: 50
  });

  ScrollReveal().reveal(".contato p", {
    delay: 375,
    duration: 500,
    opacity: 0,
    origin: "right",
    distance: "100px",
    interval: 50
  });
});

function removeP(el) {
  $(".imprensa .box-conteudo p").css("opacity", "1");
  $(".imprensa .box-conteudo p").css(
    "transform",
    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)"
  );
}
