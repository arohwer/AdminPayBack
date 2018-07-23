/******/ (function(modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/ var installedModules = {}; // The require function
  /******/
  /******/ /******/ function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/ if (installedModules[moduleId]) {
      /******/ return installedModules[moduleId].exports;
      /******/
    } // Create a new module (and put it into the cache)
    /******/ /******/ var module = (installedModules[moduleId] = {
      /******/ i: moduleId,
      /******/ l: false,
      /******/ exports: {}
      /******/
    }); // Execute the module function
    /******/
    /******/ /******/ modules[moduleId].call(
      module.exports,
      module,
      module.exports,
      __webpack_require__
    ); // Flag the module as loaded
    /******/
    /******/ /******/ module.l = true; // Return the exports of the module
    /******/
    /******/ /******/ return module.exports;
    /******/
  } // expose the modules object (__webpack_modules__)
  /******/
  /******/
  /******/ /******/ __webpack_require__.m = modules; // expose the module cache
  /******/
  /******/ /******/ __webpack_require__.c = installedModules; // define getter function for harmony exports
  /******/
  /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
    /******/ if (!__webpack_require__.o(exports, name)) {
      /******/ Object.defineProperty(exports, name, {
        /******/ configurable: false,
        /******/ enumerable: true,
        /******/ get: getter
        /******/
      });
      /******/
    }
    /******/
  }; // getDefaultExport function for compatibility with non-harmony modules
  /******/
  /******/ /******/ __webpack_require__.n = function(module) {
    /******/ var getter =
      module && module.__esModule
        ? /******/ function getDefault() {
            return module["default"];
          }
        : /******/ function getModuleExports() {
            return module;
          };
    /******/ __webpack_require__.d(getter, "a", getter);
    /******/ return getter;
    /******/
  }; // Object.prototype.hasOwnProperty.call
  /******/
  /******/ /******/ __webpack_require__.o = function(object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  }; // __webpack_public_path__
  /******/
  /******/ /******/ __webpack_require__.p = ""; // Load entry module and return exports
  /******/
  /******/ /******/ return __webpack_require__((__webpack_require__.s = 0));
  /******/
})(
  /************************************************************************/
  /******/ [
    /* 0 */
    /***/ function(module, exports, __webpack_require__) {
      "use strict";

      var navMenuBtn = document.getElementsByClassName("navMenuBtn")[0];
      var navMenu = document.getElementsByClassName("navMenu")[0];
      var imgGrid = document.getElementsByClassName("imageGrid")[0];
      var application = document.getElementsByClassName("application")[0];
      var INDIC_AMOUNT = 4;

      var pageLinks = void 0;
      var images = void 0;
      var filesToLoad = [
        "scripts/carousel-images.json",
        "scripts/information.json",
        "scripts/pages.json",
        "scripts/imageGrid.json",
        "scripts/calendar.json",
        "scripts/application.json",
        "scripts/projects.json"
      ];

      var carouselPhotos = [];
      var information = [];
      var isCarousel = false;
      var isLeft = false;
      var isRight = false;
      var isInfoPage = false;
      var isChange = false;
      var isCalendar = false;
      var events = [];
      var isProjects = false;
      var projects = [];
      var isModal = false;
      var today = new Date();
      var months = new Array(12);
      months[0] = "January";
      months[1] = "February";
      months[2] = "March";
      months[3] = "April";
      months[4] = "May";
      months[5] = "June";
      months[6] = "July";
      months[7] = "August";
      months[8] = "September";
      months[9] = "October";
      months[10] = "November";
      months[11] = "December";

      var todayMonthNum = today.getMonth();
      var todayMonthString = months[todayMonthNum];

      var loadJSON = function loadJSON(filename, callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");

        xobj.open("GET", filename, true);
        xobj.onreadystatechange = function() {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
        };
        xobj.send(null);
      };

      var init = function init(response) {
        var _loop = function _loop(i) {
          loadJSON(filesToLoad[i], function(responseText) {
            if (filesToLoad[i].toString() == "scripts/carousel-images.json") {
              carouselPhotos = JSON.parse(responseText);
              if (isCarousel == true) {
                var _container = document.getElementById("carousel-container");
                for (var j = 0; j < carouselPhotos.images.length; j++) {
                  var div = document.createElement("div");
                  div.className = "carousel-image";
                  var img = document.createElement("img");
                  img.src = carouselPhotos.images[j].link;
                  div.appendChild(img);
                  var caption = document.createElement("div");
                  caption.className = "carousel-caption";
                  caption.innerHTML = carouselPhotos.images[j].caption;
                  div.appendChild(caption);

                  _container.appendChild(div);
                }
                var leftLink = document.createElement("a");
                leftLink.id = "left-arrow";
                leftLink.className = "carousel-left";
                leftLink.innerHTML = "&#10094";
                _container.appendChild(leftLink);
                var rightLink = document.createElement("a");
                rightLink.id = "right-arrow";
                rightLink.className = "carousel-right";
                rightLink.innerHTML = "&#10095";
                _container.appendChild(rightLink);

                var indicatorCont = document.createElement("div");
                indicatorCont.id = "indic-container";
                indicatorCont.className = "indicator-container";
                for (var _i = 0; _i < carouselPhotos.images.length; _i++) {
                  var _span = document.createElement("span");
                  _span.id = "span_" + _i;
                  _span.className = "carousel-indicator";
                  indicatorCont.appendChild(_span);
                }
                _container.appendChild(indicatorCont);

                carouselInit();
              }
            }
            if (filesToLoad[i].toString() == "scripts/information.json") {
              information = JSON.parse(responseText);
              if (isInfoPage == true) {
                var _container2 = document.getElementById("infoContainer");
                for (var _j = 0; _j < information.length; _j++) {
                  var _div = document.createElement("div");
                  _div.className = "section";
                  _div.className = "aboutDiv";
                  if (_j == 0 || _j % 2 == 0) {
                    _div.classList += " stagger-left";
                  } else {
                    _div.classList += " stagger-right";
                  }
                  var title = document.createElement("h4");
                  title.className = "bold-heading";
                  title.classList += " yellow-heading";
                  title.innerHTML = information[_j].name;
                  _div.appendChild(title);
                  var text = document.createElement("p");
                  text.innerHTML = information[_j].text;
                  _div.appendChild(text);

                  for (var _i2 = 0; _i2 < information[_j].files.length; _i2++) {
                    if (information[_j].files[_i2] != "noFiles") {
                      var link = document.createElement("a");
                      link.className = "link";
                      //this will be the path to the file on the server
                      //`http://www.webfavs.com/neumont/group5/files/${information[j].files[i]}`
                      //`ftp://webfavs.com/group5/files/${information[j].files[i]}`
                      //`ftp://neumont@webfavs.com:neumont1234@webfavs.com/group5/files/${information[j].files[i]}`
                      link.href =
                        "http://www.webfavs.com/neumont/group5/files/" +
                        information[_j].files[_i2].filename;
                      // link.target = "_blank";
                      // link.download = `${
                      //   information[j].files[i]}`;
                      link.text = information[_j].files[_i2].display;
                      _div.appendChild(link);
                    }
                  }

                  _container2.appendChild(_div);
                }
              }
            }
            if (filesToLoad[i].toString() == "scripts/pages.json") {
              pageLinks = JSON.parse(responseText);
              //blank array that will hold the container for the links so they lay in a row
              var containers = [];
              var size = pageLinks.length;
              while (size > 0) {
                var menuContainer = document.createElement("div");
                menuContainer.className = "navLinkCont";
                containers.push(menuContainer);
                size -= 3;
              }
              if (size < 0) {
                var menuContainer = document.createElement("div");
                menuContainer.className = "navLinkCont";
                containers.push(menuContainer);
              }

              for (var index = 0; index < pageLinks.length; index++) {
                var page = pageLinks[index];
                var menuItem = document.createElement("a");
                menuItem.innerHTML = page.name;
                menuItem.className = "menuItem";
                menuItem.setAttribute("href", page.file);
                for (var _index = 0; _index < containers.length; _index++) {
                  var _container3 = containers[_index];
                  if (_container3.children.length < 3) {
                    _container3.appendChild(menuItem);
                    break;
                  }
                }
              }

              for (var _index2 = 0; _index2 < containers.length; _index2++) {
                var _container4 = containers[_index2];
                navMenu.appendChild(_container4);
              }
            }
            if (filesToLoad[i].toString() == "scripts/imageGrid.json") {
              images = JSON.parse(responseText);
              if (imgGrid != null || imgGrid != undefined) {
                var containers = [];
                var size = images.length;

                while (size > 0) {
                  var container = document.createElement("div");
                  container.className = "imageRow";
                  containers.push(container);
                  size -= 2;
                }
                if (size < 0) {
                  var container = document.createElement("div");
                  container.className = "imageRow";
                  containers.push(container);
                }

                for (var _index3 = 0; _index3 < images.length; _index3++) {
                  var image = images[_index3];
                  var imageElement = document.createElement("div");
                  imageElement.className = "imageCell";
                  imageElement.style.backgroundImage =
                    "url(" + image.imgDir + ")";
                  var pElement = document.createElement("p");
                  var span = document.createElement("span");
                  span.onclick = function() {
                    window.location.href = "projects.html";
                  };
                  pElement.innerHTML = image.name;
                  span.appendChild(pElement);
                  imageElement.appendChild(span);

                  for (
                    var _index4 = 0;
                    _index4 < containers.length;
                    _index4++
                  ) {
                    var _container5 = containers[_index4];
                    if (_container5.children.length < 2) {
                      _container5.appendChild(imageElement);
                      break;
                    }
                  }
                }

                for (var _index5 = 0; _index5 < containers.length; _index5++) {
                  var _container6 = containers[_index5];
                  imgGrid.appendChild(_container6);
                }
              }
            }
            if (filesToLoad[i].toString() == "scripts/projects.json") {
              projects = JSON.parse(responseText);
              if (document.getElementById("projectContainer")) {
                var _container7 = document.getElementById("projectContainer");
                // container.className = "projects";
                _container7.className = "column";
                for (var _j2 = 0; _j2 < projects.length; _j2++) {
                  var project = projects[_j2];
                  //container
                  var cardDirection = false;
                  var card = document.createElement("div");
                  card.className = "project-card";

                  //project image
                  var _image = document.createElement("img");
                  _image.className = "projPhoto";
                  _image.src = project.img;

                  //on hover container
                  var overlayContent = document.createElement("div");
                  overlayContent.className = "projInfo";
                  //project title
                  var projTitle = document.createElement("h4");
                  projTitle.className = "bold-heading";
                  projTitle.classList += " yellow-heading";
                  projTitle.innerHTML = project.name;
                  overlayContent.appendChild(projTitle);
                  //student name
                  var studentNameTwo = document.createElement("h4");
                  studentNameTwo.className = "bold-heading";
                  studentNameTwo.classList += " yellow-heading";
                  studentNameTwo.innerHTML = project.student;
                  overlayContent.appendChild(studentNameTwo);
                  //project description
                  var _text = document.createElement("p");
                  _text.className = "projectDes";
                  _text.innerHTML = project.desc;
                  overlayContent.appendChild(_text);

                  card.appendChild(_image);
                  card.appendChild(overlayContent);

                  _container7.appendChild(card);
                }
              }
            }
            if (filesToLoad[i].toString() == "scripts/calendar.json") {
              events = JSON.parse(responseText);
              if (isCalendar == true) {
                var _container8 = document.getElementById("calendar-container");
                var curr_month = months[new Date().getMonth()];

                //Iterate through the values in the json object
                for (var month in events) {
                  if (events.hasOwnProperty(month)) {
                    //Determine if the event is in a past month

                    if (months.indexOf(curr_month) <= months.indexOf(month)) {
                      // Month is either the current or a later month : Display
                      // Here create element
                    }else{
                      // Month is older than current : Archive
                      // Create Element for Admin Archive View
                      
                    }
                  }
                }
              }
              if (isModal == true) {
                modalInit();
              }
            }
            if (filesToLoad[i].toString() == "scripts/application.json") {
              if (document.getElementById("application")) {
                var form = document.getElementById("application");
                var formSections = JSON.parse(responseText);

                for (
                  var _index8 = 0;
                  _index8 < formSections.length;
                  _index8++
                ) {
                  var section = formSections[_index8];
                  // console.log(section);
                  var _div2 = document.createElement("div");
                  _div2.className = "formSection";
                  var header = document.createElement("h3");
                  header.className = "sectionHeader";
                  header.innerHTML = section.sectionName;
                  var inputCont = document.createElement("div");
                  inputCont.className = "inputContainer";
                  _div2.appendChild(header);
                  for (
                    var _index9 = 0;
                    _index9 < section.inputs.length;
                    _index9++
                  ) {
                    var input = section.inputs[_index9];
                    //console.log(input);
                    var label = document.createElement("label");
                    label.innerHTML = input.name;
                    label.className = "inputLabel";
                    var field = document.createElement("input");
                    field.setAttribute("type", input.type);
                    field.setAttribute("name", input.id);

                    inputCont.appendChild(label);
                    inputCont.appendChild(field);
                  }
                  _div2.appendChild(inputCont);
                  form.appendChild(_div2);
                }
                var submit = document.createElement("input");
                submit.setAttribute("type", "submit");
                submit.setAttribute("value", "Submit Application");

                form.appendChild(submit);
              }
            }
          });
        };

        for (var i = 0; i < filesToLoad.length; i++) {
          _loop(i);
        }
      };

      var elementsInit = function elementsInit() {
        var allElements = document.body.getElementsByTagName("*");
        for (var i = 0; i < allElements.length; i++) {
          if (allElements[i].classList.contains("carousel")) {
            //console.log("carousel found");
            isCarousel = true;
          }
          if (allElements[i].classList.contains("info")) {
            isInfoPage = true;
          }
          if (allElements[i].classList.contains("projects")) {
            isProjects = true;
          }
          if (allElements[i].classList.contains("calendar")) {
            isCalendar = true;
          }
        }
      };

      var imgIndex = 0;

      var carouselInit = function carouselInit() {
        if (isCarousel == true) {
          var indicatorContainer = document.getElementById("indic-container");
          var leftArrow = document.getElementById("left-arrow");
          var rightArrow = document.getElementById("right-arrow");
          leftArrow.onclick = function() {
            //console.log("adding arrow click");
            isLeft = true;
            imgIndex += -1;
            runCarousel();
          };
          rightArrow.onclick = function() {
            //console.log("adding arrow click");
            isRight = true;
            runCarousel();
          };

          var _loop2 = function _loop2(i) {
            var span = document.getElementById("span_" + i);
            span.onclick = function() {
              isChange = true;
              //console.log("in change pic ", i);
              //console.log("in change pic minus ", i - 1);

              imgIndex = i - 1;
              //console.log("to image ", imgIndex);
              runCarousel();
            };
          };

          for (var i = 0; i < carouselPhotos.images.length; i++) {
            _loop2(i);
          }
          centerIndicators(INDIC_AMOUNT);
        }
      };

      var runCarousel = function runCarousel() {
        //console.log("image index ", imgIndex);
        if (isCarousel == true) {
          isRight = false;

          var _images = document.getElementsByClassName("carousel-image");
          var indicators = document.getElementsByClassName(
            "carousel-indicator"
          );

          for (var i = 0; i < _images.length; i++) {
            _images[i].style.display = "none";
          }

          if (isLeft != true) {
            imgIndex++;
          }

          if (imgIndex >= _images.length) {
            imgIndex = 0;
          } else if (imgIndex == 0) {
            imgIndex = 0;
          } else if (imgIndex == -1) {
            imgIndex = _images.length - 1;
          }

          for (var j = 0; j < indicators.length; j++) {
            indicators[j].className = indicators[j].className.replace(
              " active-carousel",
              ""
            );
          }

          _images[imgIndex].style.display = "block";
          indicators[imgIndex].className += " active-carousel";

          if (isLeft == true) {
            isLeft = false;
          }
          centerIndicators(INDIC_AMOUNT);
        }
      };

      var centerIndicators = function centerIndicators(amount) {
        //console.log("in centerIndicators")
        if (document.getElementById("indic-container")) {
          var width = document.getElementById("carousel-container").clientWidth;
          //console.log(width);
          var indicSize = document.getElementById("indic-container")
            .clientWidth;
          var per = indicSize / width;
          //console.log(per);
          var remainingWidth = 1 - per;
          //console.log(remainingWidth, "this is the remaining width");
          var sideLength = (width * remainingWidth) / 2 / width;
          document.getElementsByClassName(
            "indicator-container"
          )[0].style.marginLeft =
            sideLength * 100 + "%";
        }
      };

      var modalInit = function modalInit() {
        if (isModal == true) {
          var triggers;

          (function() {
            triggers = document.getElementsByClassName("event-card");

            var close = document.getElementsByClassName("close");

            var _loop3 = function _loop3(i) {
              triggers[i].addEventListener("click", function() {
                var modal = triggers[i].getAttribute("data-modal");
                document.getElementById(modal).style.display = "block";
              });
            };

            for (var i = 0; i < triggers.length; i++) {
              _loop3(i);
            }

            var _loop4 = function _loop4(j) {
              close[j].addEventListener("click", function() {
                var modal = close[j].closest(".modal");
                modal.style.display = "none";
              });
            };

            for (var j = 0; j < close.length; j++) {
              _loop4(j);
            }
          })();
        }
      };

      elementsInit();
      var run = setTimeout(init(), 3000);
      var carouselLoop = setInterval(runCarousel, 4000);

      navMenuBtn.addEventListener("click", function() {
        var className = navMenu.className;
        if (className.includes("active")) {
          navMenu.className = className.replace("active", "hidden");
          //console.log("removing active");
        } else {
          navMenu.className = className.replace("hidden", "active");
          //console.log("removing hidden");
        }
      });

      var navAdjust = setInterval(function() {
        if (
          document.body.style.marginTop !=
          document.getElementsByClassName("navbar")[0].clientHeight
        ) {
          adjustNavMenu();
        }
      }, 100);

      function adjustNavMenu() {
        var navbar = document.getElementsByClassName("navbar")[0];
        var curNavheight = navbar.clientHeight;
        // console.log("current navHeight", curNavheight);
        var menu = document.getElementsByClassName("navMenu")[0];
        menu.style.top = navbar.className.includes(" shrink")
          ? curNavheight + 3 + "px"
          : curNavheight + "px";
        // document.body.style.paddingTop = ((document.body.clientWidth < 600) ? curNavheight + 3 + "px" : curNavheight + "px");
        // console.log(menu.style.marginTop);
        document.body.style.marginTop = curNavheight + "px";
      }

      window.onscroll = function() {
        if (
          document.body.scrollTop > 160 ||
          (document.documentElement.scrollTop > 160 &&
            document.body.clientWidth > 600)
        ) {
          if (
            !document
              .getElementsByClassName("navbar")[0]
              .className.includes(" shrink")
          ) {
            document.getElementsByClassName("navbar")[0].className += " shrink";
            document
              .getElementsByClassName("logo")[0]
              .setAttribute("src", "images/logos/nc_logo(1).png");
            adjustNavMenu();
          }
        } else {
          document.getElementsByClassName(
            "navbar"
          )[0].className = document
            .getElementsByClassName("navbar")[0]
            .className.replace(" shrink", "");
          document
            .getElementsByClassName("logo")[0]
            .setAttribute("src", "images/logos/nc_horiz-fc-onwhite.png");
          adjustNavMenu();
        }
      };
      window.onclick = function(event) {
        var target = event.target;
        if (
          target.className != "navMenuBtn" &&
          target.className != "navMenu" &&
          target.className != "btnText"
        ) {
          var className = navMenu.className;
          //console.log(className);

          if (className.includes(" active")) {
            navMenu.className = className.replace(" active", " hidden");
          }
        }
      };

      /***/
    }
    /******/
  ]
);
