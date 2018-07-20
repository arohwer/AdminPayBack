let resHeight = 600;
let resWidth = 900;
let shouldAnimate;
if($(window).width() < resWidth || $(window).height() < resHeight) {
  shouldAnimate = false
} else {
  shouldAnimate = true
}
$(document).ready(function () {
  $("body").removeClass("preload");
  $('#fullpage').fullpage({
    sectionsColor: ['#000', '#fff', '#636363', 'auto', '#fff', '#636363'],
    css3: false,
    navigation: true,
    responsiveHeight: resHeight,
    responsiveWidth: resWidth,
    afterResponsive: function (isResponsive) {
      if (isResponsive) {
        shouldAnimate = false;
      } else {
        shouldAnimate = true;
      }
    },
    onLeave: function (index, nextIndex, direction) {
      if (shouldAnimate) {
        let $prevText= "";
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
          let $textToAnimate = "";
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
          let delay = .2;
          for (let i = 0; i < $textToAnimate.length; i++) {
            $textToAnimate.eq(i).css('animation-delay', `${delay}s`)
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

let learnMore = document.getElementById("learnMoreBtn");
learnMore.onclick = function (){
  $.fn.fullpage.moveTo(2);
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
  $.fn.fullpage.setAllowScrolling(false);
  $.fn.fullpage.setKeyboardScrolling(false);
  $('body').css('overflow','hidden');
}

span.onclick = function() {
  modal.style.display = "none";
  $.fn.fullpage.setAllowScrolling(true);
  $.fn.fullpage.setKeyboardScrolling(true);
  $('body').css('overflow','visible');
  
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
    $('body').css('overflow','visible');

  }
}