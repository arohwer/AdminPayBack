let resHeight = 600;
let resWidth = 900;
let shouldAnimate;
if(window.innerWidth < resWidth || window.innerHeight < resHeight) {
  shouldAnimate = false
} else {
  shouldAnimate = true
}
// document.addEventListener('DOMContentLoaded', function() {
//   console.log('loaded')
//   document.body.classList.remove("preload");
//   new fullpage('#fullpage', {
//     licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
//     sectionsColor: ['#000', '#fff', '#636363', 'auto', '#fff', '#636363'],
//     css3: false,
//     navigation: true,
//     responsiveHeight: resHeight,
//     responsiveWidth: resWidth,
  
//     afterResponsive: function (isResponsive) {
//       if (isResponsive) {
//         shouldAnimate = false;
//       } else {
//         shouldAnimate = true;
//       }
//     },
//     onLeave: function (origin, nextOrigin, direction) {
//       if (shouldAnimate) {
//         let prevText= "";
//         if (origin.index != 0) {
//           if (origin.index == 1) {
//             prevText = document.querySelectorAll('.section2 .animated-text');
//           } else if (origin.index == 2) {
//             prevText = document.querySelectorAll('.section3 .animated-text');
//           } else if (origin.index == 3) {
//             prevText = document.querySelectorAll('.section4 .animated-text');
//           } else if (origin.index == 4) {
//             prevText = document.querySelectorAll('.section5 .animated-text');
//           } else if (origin.index == 5) {
//             prevText = document.querySelectorAll('.section6 .animated-text');
//           }
//           prevText.forEach(element => {
//             element.classList.remove("animated", "fadeInLeftBig" ,"fadeInRightBig");
//           });
//           // prevText.classList.remove("animated", "fadeInLeftBig" ,"fadeInRightBig");

//         }
//         if (nextOrigin.index != 0) {
//           let textToAnimate = "";
//           if (nextOrigin.index == 1) {
//             textToAnimate = document.querySelectorAll('.section2 .animated-text');
//           } else if (nextOrigin.index == 2) {
//             textToAnimate = document.querySelectorAll('.section2 .animated-text');
//           } else if (nextOrigin.index == 3) {
//             textToAnimate = document.querySelectorAll('.section2 .animated-text');
//           } else if (nextOrigin.index == 4) {
//             textToAnimate = document.querySelectorAll('.section2 .animated-text');
//           } else if (nextOrigin.index == 5) {
//             textToAnimate = document.querySelectorAll('.section2 .animated-text');
//           }
//           if (nextOrigin.index == 2 || nextOrigin.index == 4) {
//             console.log("hello right")
//             textToAnimate.forEach(element => {
//               element.classList.add("animated", "fadeInRightBig");
//             });
//             console.log('texttoanimate', textToAnimate)
//             // textToAnimate.classList.add("animated");
//             // textToAnimate.classList.add("fadeInLeftBig");
//           } else {
//             console.log("hello left")
//             textToAnimate.forEach(element => {
//               element.classList.add("animated", "fadeInLeftBig");
//             });
//             // textToAnimate.classList.add("animated", "fadeInLeftBig");
//           }
//           let delay = .2;
//           // for (let i = 0; i < textToAnimate.length; i++) {
            
//           //   textToAnimate.eq(i).css('animation-delay', `${delay}s`)
//           //   delay += .2;
//           // }
//           textToAnimate.forEach(element => {
//             element.style.animationDelay = `${delay}s`
//             delay += .2;
//           });
//         }
//       }
//       if (nextOrigin.index == 0) {
//         document.getElementsByTagName('nav')[0].classList.remove('navbar-fixed-top-after')
//         document.getElementsByTagName('nav')[0].classList.add('navbar-fixed-top')
//         // $("nav").removeClass('navbar-fixed-top-after');
//         // $("nav").addClass('navbar-fixed-top');
//       } else {
//         document.getElementsByTagName('nav')[0].classList.add('navbar-fixed-top-after')
//         document.getElementsByTagName('nav')[0].classList.remove('navbar-fixed-top')
//         // $("nav").addClass('navbar-fixed-top-after');
//         // $("nav").removeClass('navbar-fixed-top');
//       }
//     }
//   })
// });
// $(document).ready(function () {
//   $("body").removeClass("preload");
//   $('#fullpage').fullpage({
//     sectionsColor: ['#000', '#fff', '#636363', 'auto', '#fff', '#636363'],
//     css3: false,
//     navigation: true,
//     responsiveHeight: resHeight,
//     responsiveWidth: resWidth,
//     afterResponsive: function (isResponsive) {
//       if (isResponsive) {
//         shouldAnimate = false;
//       } else {
//         shouldAnimate = true;
//       }
//     },
//     onLeave: function (index, nextIndex, direction) {
//       if (shouldAnimate) {
//         let $prevText= "";
//         if (index != 1) {
//           if (index == 2) {
//             $prevText = $('.section2 .animated-text');
//           } else if (index == 3) {
//             $prevText = $('.section3 .animated-text');
//           } else if (index == 4) {
//             $prevText = $('.section4 .animated-text');
//           } else if (index == 5) {
//             $prevText = $('.section5 .animated-text');
//           } else if (index == 6) {
//             $prevText = $('.section6 .animated-text');
//           }
//           $prevText.removeClass('animated fadeInLeftBig fadeInRightBig');

//         }
//         if (nextIndex != 1) {
//           let $textToAnimate = "";
//           if (nextIndex == 2) {

//             $textToAnimate = $('.section2 .animated-text');
//           } else if (nextIndex == 3) {
//             $prevText = $('.section2 .animated-text');
//             $prevText.removeClass('animated fadeInLeftBig');
//             $textToAnimate = $('.section3 .animated-text');
//           } else if (nextIndex == 4) {
//             $textToAnimate = $('.section4 .animated-text');
//           } else if (nextIndex == 5) {
//             $textToAnimate = $('.section5 .animated-text');
//           } else if (nextIndex == 6) {
//             $textToAnimate = $('.section6 .animated-text');
//           }
//           if (nextIndex == 3 || nextIndex == 5) {
//             $textToAnimate.addClass('animated fadeInRightBig');
//           } else {
//             $textToAnimate.addClass('animated fadeInLeftBig');
//           }
//           let delay = .2;
//           for (let i = 0; i < $textToAnimate.length; i++) {
//             $textToAnimate.eq(i).css('animation-delay', `${delay}s`)
//             delay += .2;
//           }
//         }
//       }
//       if (nextIndex == 1) {
//         $("nav").removeClass('navbar-fixed-top-after');
//         $("nav").addClass('navbar-fixed-top');
//       } else {
//         $("nav").addClass('navbar-fixed-top-after');
//         $("nav").removeClass('navbar-fixed-top');
//       }
//     }
//   });
//   //END OF FULLPAGE CONFIG

// });

let learnMore = document.getElementById("learnMoreBtn");
learnMore.onclick = function (){
  // fullpage_api.moveTo(2);
}

let navIcon = document.getElementById("nc-icon")
navIcon.onclick = function (){
  window.open("https://www.neumont.edu");
}



let modal = document.getElementById("main-modal");
let modal_btn = document.getElementById("modal-btn");
let span = document.getElementsByClassName("close")[0];

modal_btn.onclick = function () {
  modal.style.display = "block";
  fullpage_api.setAllowScrolling(false);
  fullpage_api.setKeyboardScrolling(false);
  // $('body').css('overflow','hidden');
  document.body.style.overflow = 'hidden';
}

span.onclick = function() {
  modal.style.display = "none";
  fullpage_api.setAllowScrolling(true);
  fullpage_api.setKeyboardScrolling(true);
  // $('body').css('overflow','visible');
  document.body.style.overflow = 'visible';
  
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);
    // $('body').css('overflow','visible');
    document.body.style.overflow = 'visible';
  }
}