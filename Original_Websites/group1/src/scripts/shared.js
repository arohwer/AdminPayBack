let hamburger = document.getElementById("hamburger");
hamburger.onclick = function () {
  let navMobile = document.getElementsByClassName("navbar-fixed-top")[0];
  if (navMobile == null) {
    navMobile = document.getElementsByClassName("navbar-fixed-top-after")[0];
  }
  navMobile.style.transition = "all .5s";
  navMobile.style.width = '100%'
  setTimeout(function () {
    navMobile.style.transition = "none";
  }, 500);
}

let sideIcon = document.getElementById("nc-icon-side")
sideIcon.onclick = function () {
  window.open("https://www.neumont.edu")
}

let closeMenu = document.getElementById("close-menu");
closeMenu.onclick = function () {
  let navMobile = document.getElementsByClassName("navbar-fixed-top")[0];
  if (navMobile == null) {
    navMobile = document.getElementsByClassName("navbar-fixed-top-after")[0];
  }
  navMobile.style.transition = "all .5s";
  navMobile.style.width = '0'
  setTimeout(function () {
    navMobile.style.transition = "none";
  }, 500);
}
