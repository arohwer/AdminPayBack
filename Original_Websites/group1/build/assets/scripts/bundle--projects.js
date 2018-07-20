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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resHeight = 600;
var resWidth = 900;

var viewProjects = document.getElementById("view-projects");
viewProjects.onclick = function () {
  $.fn.fullpage.moveTo(2);
};

var navIcon = document.getElementById("nc-icon");
navIcon.onclick = function () {
  window.open("https://www.neumont.edu");
};

var jsonFile = '../assets/json/projects.json';
var content = void 0;
var request = new XMLHttpRequest();

loadData();

function loadData() {
  request.open('GET', jsonFile);
  request.onload = loadComplete;
  request.send();
}

function loadComplete(evt) {
  content = JSON.parse(request.responseText);
  console.log('data loaded');
  // preloadImages();
  createProjectSlide();
}
function createProjectSlide() {
  var slideSection = $('<div class="section" id="projectSlides"></div>');
  for (var i = 0; i < content.length; i++) {
    var slide = $("<div class='slide'></div>");
    var row = $("<div class='row fit'</div>");
    var bgImg = $("<div class='col-m-5 project-bg'></div>");
    var contentDiv = $("<div class='col-m-7 project-content theme-white'></div>");

    var slideTitle = $("<h1 class='uppercase project-name'></h1>").text("" + content[i].title);
    var slideAuthor = $("<h3 class='uppercase project-owner'></h3>").text("" + content[i].author);
    var slideDescription = $("<p></p>").text("" + content[i].description);
    var slideLink = $("<a target=\"_blank\" href=\"" + content[i].anchor.link + "\"></a>").text("" + content[i].anchor.text);

    // preloadImg(i);
    bgImg.css("background-image", "url(" + content[i].image + ")");

    contentDiv.append(slideTitle);
    contentDiv.append(slideAuthor);
    contentDiv.append(slideDescription);
    contentDiv.append(slideLink);
    row.append(bgImg);
    row.append(contentDiv);
    slide.append(row);
    slideSection.append(slide);
  }
  $('#fullpage').append(slideSection);
  $('#fullpage').fullpage({
    sectionsColor: ['#fff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    slidesNavigation: true,
    scrollOverflow: true,

    afterSlideLoad: function afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {},
    onSlideLeave: function onSlideLeave(anchorLink, index, slideIndex, direction) {}
  });
  // $.getScript("../assets/scripts/jquery.fullPage.js");
  // $.getScript("../assets/scripts/scrolloverflow.min.js");
  // initFP();
  // $("#projectSlides").load(location.href+" #projectSlides>*","");
}
function preloadImages() {
  for (var i = 0; i < content.length; i++) {
    var img = new Image();
    img.src = content[i].image;
    console.log(img);
  }
}
function preloadImg(i) {
  var img = new Image();
  img.src = content[i].image;
}

/***/ })
/******/ ]);