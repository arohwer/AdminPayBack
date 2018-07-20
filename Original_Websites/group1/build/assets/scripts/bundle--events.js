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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
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
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var resHeight = 600;
var resWidth = 900;

var jsonFile = '../assets/json/events.json';
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
  createUpcomingEvents();
}

function createUpcomingEvents() {

  var eventSection = $('<div class="section fp-auto-height" id="upcoming-events"></div>');
  for (var i = 0; i < content.length; i++) {
    var row = $("<div class='row theme-steelgray event-container'></div>");
    var imgDiv = $("<div class='col-xl-5 event-img'></div>");
    var contentSpacer7 = $("<div class='col-xl-7 content-spacer'></div>");
    var button = $('<div class=\'nc-btn uppercase view-event\' id="modal-btn' + i + '">VIEW DETAILS</div>');

    imgDiv.css("background-image", 'url(' + content[i].image + ')');

    var eventDate = $("<h2 class='uppercase event-date'></h2>").text(content[i].date.dayOfWeek + ', ' + content[i].date.month + ' ' + content[i].date.day + ', ' + content[i].date.year);
    var eventName = $("<h2 class='font-bold block nc-yellow uppercase event-name'></h2>").text('' + content[i].title);
    var eventOverview = $("<p class='event-overview'></p>").text('' + content[i].overview);

    row.append(imgDiv);
    row.append(contentSpacer7);
    contentSpacer7.append(eventDate);
    contentSpacer7.append(eventName);
    contentSpacer7.append(eventOverview);
    contentSpacer7.append(button);

    ////DYNAMIC MODALS/////
    var mainModal = $('<div id=\'main-modal' + i + '\' class=\'modal\'></div>');
    var modalContainer = $("<div class='modal-container'></div>");
    var modalHeader = $("<div class='modal-header'></div>");
    var modalBody = $("<div class='modal-body'></div>");

    var modalClose = $('<span class=\'close\' id=\'close' + i + '\'>&times;</span>');
    var headerh2 = $("<h2></h2>").text('EVENT DETAILS');

    var modalEvent = $('<h2 class="font-bold uppercase">Event: <span class=\'font-light\'>' + content[i].title + '</span></h2>');
    var modalLocation = $('<h3 class="font-bold">LOCATION: <span class=\'font-light\'>' + content[i].location + '</span></h3>\'');
    var modalTime = $('<h3 class="font-bold">TIME: <span class=\'font-light\'>' + content[i].time + '</span></h3>\'');
    var modalLink = $('<h3 class="font-bold">FACEBOOK LINK: <a class=\'font-light\' target=\'_blank\' href="' + content[i].anchor.link + '">' + content[i].anchor.link + '</a></span></h3>\'');
    var modalDescLabel = $('<h3 class="font-bold"></h3>').text('DESCRIPTION:');
    var modalDesc = $('<p></p>').text('' + content[i].description);

    mainModal.append(modalContainer);
    modalContainer.append(modalHeader);
    modalContainer.append(modalBody);
    modalHeader.append(modalClose);
    modalHeader.append(headerh2);

    modalBody.append(modalEvent);
    modalBody.append(modalLocation);
    modalBody.append(modalTime);
    modalBody.append(modalLink);
    modalBody.append(modalDescLabel);
    modalBody.append(modalDesc);

    $("body").append(mainModal);
    eventSection.append(row);
  }
  $('#fullpage').append(eventSection);
  $('#fullpage').fullpage({
    sectionsColor: ['#fff'],
    anchors: ['firstPage', 'secondPage'],
    scrollOverflow: true

  });
}

$(document).ready(function () {
  $(document).on('click', '.view-event', function () {
    var id = $(this).attr('id');
    var modal_num = id.replace('modal-btn', '');
    $('#main-modal' + modal_num).css('display', 'block');
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    $('body').css('overflow', 'hidden');
  });

  $(document).on('click', '.close', function () {
    var closeID = $(this).attr('id');
    var close_num = closeID.replace('close', '');
    $('#main-modal' + close_num).css('display', 'none');
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
    $('body').css('overflow', 'visible');
  });
});

var viewEvents = document.getElementById("view-events");
viewEvents.onclick = function () {
  $.fn.fullpage.moveTo(2);
};

var navIcon = document.getElementById("nc-icon");
navIcon.onclick = function () {
  window.open("https://www.neumont.edu");
};

var modals = document.getElementsByClassName("modal");
window.onclick = function (event) {
  for (var i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
      $('body').css('overflow', 'visible');
    }
  }
};

/***/ })
/******/ ]);