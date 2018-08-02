//var modal = document.getElementById("main-modal");
var modal_btn = document.getElementById("modal-btn");
var span = document.getElementsByClassName("close")[0];

var applicationModals = document.getElementsByClassName("application-modal");
function viewApp(item, id) {
    document.getElementById(`application-${id}`).style.display = "block";
    applicationViewed(id);
}

function closeModal() {
    for (var i = 0; i < applicationModals.length; i++) {
        applicationModals[i].style.display = "none"
    }
}


window.onclick = function (event) {
    for (var i = 0; i < applicationModals.length; i++) {
        if (event.target == applicationModals[i]) {
            applicationModals[i].style.display = "none"
        }
    }
};


 
function applicationViewed(id) {
    var req = new XMLHttpRequest();
    req.open('GET', `Viewed?applicationID=${id}`, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
        } else {
            alert('We encountered an error!');
        }
    }
    req.send();
}
function applicationSaved(item, id) {
    var req = new XMLHttpRequest();
    req.open('GET', `Saved?applicationID=${id}`, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            item.classList.toggle('app-icon-enabled');
        } else {
            alert('We encountered an error!');
        }
    }
    req.send();
}

function applicationArchived(item, id) {
    var req = new XMLHttpRequest();
    req.open('GET', `Archived?applicationID=${id}`, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            item.classList.toggle('app-icon-enabled');
        } else {
            alert('We encountered an error!');
        }
    }
    req.send();
}

function applicationDeleted(item, id) {
    var req = new XMLHttpRequest();
    req.open('GET', `Deleted?applicationID=${id}`, true);
    req.setRequestHeader('Content-Type', 'application/json');

    req.onload = function () {
        if (req.status >= 200 && req.status < 400) {
            item.style.display = 'none';
            location.reload();
        } else {
            alert('We encountered an error!');
        }
    }
    req.send();
}

