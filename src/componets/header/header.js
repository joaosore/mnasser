import "./header.scss";

export function updateMenu() {
  $(".menu a").removeClass("active");
  $('.menu a[href="' + window.location.href + '"]').addClass("active");
}
export function updateMenuLg() {
  $(".lg a").removeClass("active");

  $(".lg")
    .find("." + getCookie("pll_language"))
    .addClass("active");

  $(".lg .pt").attr("href", window.location.origin + "/");
  $(".lg .en").attr("href", window.location.origin + "/en/home");
  $(".lg .es").attr("href", window.location.origin + "/es/inicio");

  $(document).on("click", ".lg a", function() {
    setCookie("pll_language", $(this).data("lg"));
  });
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
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
