/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hamburger = document.getElementById("hamburger");
hamburger.onclick = function () {
  var navMobile = document.getElementsByClassName("navbar-fixed-top")[0];
  if (navMobile == null) {
    navMobile = document.getElementsByClassName("navbar-fixed-top-after")[0];
  }
  navMobile.style.transition = "all .5s";
  navMobile.style.width = '100%';
  setTimeout(function () {
    navMobile.style.transition = "none";
  }, 500);
};

var sideIcon = document.getElementById("nc-icon-side");
sideIcon.onclick = function () {
  window.open("https://www.neumont.edu");
};

var closeMenu = document.getElementById("close-menu");
closeMenu.onclick = function () {
  var navMobile = document.getElementsByClassName("navbar-fixed-top")[0];
  if (navMobile == null) {
    navMobile = document.getElementsByClassName("navbar-fixed-top-after")[0];
  }
  navMobile.style.transition = "all .5s";
  navMobile.style.width = '0';
  setTimeout(function () {
    navMobile.style.transition = "none";
  }, 500);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function progress() {
    var width = 0;
    var id = setInterval(frame, 20);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            $('.bar').css("width", width + '%');
            $('.percent').text(width + "%");
            if (width == 100) {

                $('.loaderImg').addClass('fadeUp');
                $('.progress-bar').addClass('fadeUp');
                $('.percent').addClass('fadeUp');

                setTimeout(function () {
                    $('.loader').addClass('fade');
                }, 500);
                document.getElementById("videoPlayer").play();
            }
        }
    }
}

$(document).ready(function () {
    progress();
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resHeight = 600;
var resWidth = 900;
var shouldAnimate = void 0;
if ($(window).width() < resWidth || $(window).height() < resHeight) {
  shouldAnimate = false;
} else {
  shouldAnimate = true;
}
$(document).ready(function () {
  $("body").removeClass("preload");
  $('#fullpage').fullpage({
    sectionsColor: ['#000', '#fff', '#636363', 'auto', '#fff', '#636363'],
    css3: false,
    navigation: true,
    responsiveHeight: resHeight,
    responsiveWidth: resWidth,
    afterResponsive: function afterResponsive(isResponsive) {
      if (isResponsive) {
        shouldAnimate = false;
      } else {
        shouldAnimate = true;
      }
    },
    onLeave: function onLeave(index, nextIndex, direction) {
      if (shouldAnimate) {
        var $prevText = "";
        if (index != 1) {
          if (index == 2) {
            $prevText = $('.section2 .animated-text');
          } else if (index == 3) {
            $prevText = $('.section3 .animated-text');
          } else if (index == 4) {
            $prevText = $('.section4 .animated-text');
          } else if (index == 5) {
            $prevText = $('.section5 .animated-text');
          } else if (index == 6) {
            $prevText = $('.section6 .animated-text');
          }
          $prevText.removeClass('animated fadeInLeftBig fadeInRightBig');
        }
        if (nextIndex != 1) {
          var $textToAnimate = "";
          if (nextIndex == 2) {

            $textToAnimate = $('.section2 .animated-text');
          } else if (nextIndex == 3) {
            $prevText = $('.section2 .animated-text');
            $prevText.removeClass('animated fadeInLeftBig');
            $textToAnimate = $('.section3 .animated-text');
          } else if (nextIndex == 4) {
            $textToAnimate = $('.section4 .animated-text');
          } else if (nextIndex == 5) {
            $textToAnimate = $('.section5 .animated-text');
          } else if (nextIndex == 6) {
            $textToAnimate = $('.section6 .animated-text');
          }
          if (nextIndex == 3 || nextIndex == 5) {
            $textToAnimate.addClass('animated fadeInRightBig');
          } else {
            $textToAnimate.addClass('animated fadeInLeftBig');
          }
          var delay = .2;
          for (var i = 0; i < $textToAnimate.length; i++) {
            $textToAnimate.eq(i).css('animation-delay', delay + "s");
            delay += .2;
          }
        }
      }
      if (nextIndex == 1) {
        $("nav").removeClass('navbar-fixed-top-after');
        $("nav").addClass('navbar-fixed-top');
      } else {
        $("nav").addClass('navbar-fixed-top-after');
        $("nav").removeClass('navbar-fixed-top');
      }
    }
  });
  //END OF FULLPAGE CONFIG
});

var learnMore = document.getElementById("learnMoreBtn");
learnMore.onclick = function () {
  $.fn.fullpage.moveTo(2);
};

var navIcon = document.getElementById("nc-icon");
navIcon.onclick = function () {
  window.open("https://www.neumont.edu");
};

var modal = document.getElementById("main-modal");
var modal_btn = document.getElementById("modal-btn");
var span = document.getElementsByClassName("close")[0];

modal_btn.onclick = function () {
  modal.style.display = "block";
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
  $('body').css('overflow', 'hidden');
};

span.onclick = function () {
  modal.style.display = "none";
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
  $('body').css('overflow', 'visible');
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
    $('body').css('overflow', 'visible');
  }
};

/***/ })
/******/ ]);