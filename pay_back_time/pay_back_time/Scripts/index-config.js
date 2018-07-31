let resHeight = 600;
let resWidth = 900;
let shouldAnimate;
if (window.innerWidth < resWidth || window.innerHeight < resHeight) {
    shouldAnimate = false
} else {
    shouldAnimate = true
}

let navIcon = document.getElementById("nc-icon")
navIcon.onclick = function () {
    window.open("https://www.neumont.edu");
}

let modal = document.getElementById("main-modal");
let modal_btn = document.getElementById("modal-btn");
let span = document.getElementsByClassName("close")[0];

modal_btn.onclick = function () {
    modal.style.display = "block";
    fullpage_api.setAllowScrolling(false);
    fullpage_api.setKeyboardScrolling(false);
    document.body.style.overflow = 'hidden';
}

span.onclick = function () {
    modal.style.display = "none";
    fullpage_api.setAllowScrolling(true);
    fullpage_api.setKeyboardScrolling(true);
    document.body.style.overflow = 'visible';

}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        fullpage_api.setAllowScrolling(true);
        fullpage_api.setKeyboardScrolling(true);
        document.body.style.overflow = 'visible';
    }
}