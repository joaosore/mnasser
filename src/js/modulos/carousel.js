import owlCarousel from "owl.carousel";

export function start_carousel_pessoas() {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    margin: 10,
    nav: false,
    dots: false,
    items: 1,
    autoplay: true,
    autoplayTimeout: 7500,
    autoplayHoverPause: true,
    loop: true
  });

  $(
    ".thumb-carousel ul li:eq(0), .thumb-carousel ul li:eq(4), .thumb-carousel ul li:eq(7)"
  ).addClass("active");

  owl.on("changed.owl.carousel", function(event) {
    var { item } = event;

    var index =
      1 +
        ((event.property.value - Math.ceil(event.item.count / 2)) %
          event.item.count) ||
      0 ||
      1;

    $(this)
      .parent()
      .find(".thumb-carousel ul li")
      .removeClass("active");

    $(this)
      .parent()
      .find(".thumb-carousel ul li:eq(" + (index - 1) + ")")
      .addClass("active");
  });

  $(document).on("click", ".thumb-carousel ul li", function() {
    var index = $(this).index();
    owl.trigger("to.owl.carousel", [index, 350]);
  });
}
start_carousel_pessoas();
