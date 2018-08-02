var modal = document.getElementById("main-modal");
var modal_btn = document.getElementById("modal-btn");
var span = document.getElementsByClassName("close")[0];

<<<<<<< HEAD
var viewApp_btn = document.getElementById("viewApp-btn");
=======
var viewApp_btn = document.getElementById("view-app");
>>>>>>> application
viewApp_btn.onclick = function () {
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