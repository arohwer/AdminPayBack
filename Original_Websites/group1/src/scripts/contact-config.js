let resHeight = 600;
let resWidth = 900;
$(document).ready(function() {
  $('#fullpage').fullpage({
    sectionsColor: ['#f3f3f3'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',

    scrollOverflow:true,
    afterResponsive: function(isResponsive){

    }
  });
});

let navIcon = document.getElementById("nc-icon")
navIcon.onclick = function (){
  window.open("https://www.neumont.edu");
}

let modal = document.getElementById("main-modal");
let modal_btn = document.getElementById("modal-btn");
let span = document.getElementsByClassName("close")[0];

let applyBtn = document.getElementById("apply-btn")
applyBtn.onclick = function (){
  modal.style.display = "block";

}

span.onclick = function() {
  modal.style.display = "none";

}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";

  }
}