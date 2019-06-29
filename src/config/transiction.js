import Barba from "barba.js";

import "./default.scss";

const Loading = require("../componets/loading/loading");
const Scroll = require("./scroll");
const LazyLoad = require("lazysizes");
const Logo = require("../componets/logo/logo");
const { updateMenuLg, updateMenu } = require("../componets/header/header");
const Footer = require("../componets/footer/footer");
const Home = require("../pages/home/home");
const Conceitos = require("../pages/conceitos/conceitos");

var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    Promise.all([this.newContainerLoading, this.fadeOut()]).then(
      this.fadeIn.bind(this)
    );
  },
  fadeOut: function() {
    return $(this.oldContainer)
      .animate({ opacity: 1 })
      .promise();
  },
  fadeIn: function() {
    var _this = this;
    var $el = $(this.newContainer);
    $(this.oldContainer).hide();
    $el.css({
      visibility: "visible",
      opacity: 1
    });
    $el.animate({ opacity: 1 }, 400, function() {
      _this.done();
    });
  }
});

Barba.Dispatcher.on("transitionCompleted", function(
  currentStatus,
  oldStatus,
  container
) {
  updateMenuLg();
  updateMenu();
});

Barba.Dispatcher.on("initStateChange", function(
  currentStatus,
  oldStatus,
  container
) {});

Barba.Pjax.getTransition = function() {
  return FadeTransition;
};

Barba.Pjax.cacheEnabled = false;

Barba.Pjax.start();
