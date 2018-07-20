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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resHeight = 600;
var resWidth = 900;
$(document).ready(function () {
  $('#fullpage').fullpage({
    sectionsColor: ['#f3f3f3'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',

    scrollOverflow: true,
    afterResponsive: function afterResponsive(isResponsive) {}
  });
});

var navIcon = document.getElementById("nc-icon");
navIcon.onclick = function () {
  window.open("https://www.neumont.edu");
};

var modal = document.getElementById("main-modal");
var modal_btn = document.getElementById("modal-btn");
var span = document.getElementsByClassName("close")[0];

var applyBtn = document.getElementById("apply-btn");
applyBtn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/***/ })

/******/ });