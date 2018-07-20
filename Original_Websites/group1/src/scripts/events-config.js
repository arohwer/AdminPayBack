let resHeight = 600;
let resWidth = 900;

let jsonFile = '../assets/json/events.json';
let content;
let request = new XMLHttpRequest();

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
    
  let eventSection = $('<div class="section fp-auto-height" id="upcoming-events"></div>')
  for (let i = 0; i < content.length; i++) {
    let row = $("<div class='row theme-steelgray event-container'></div>");
    let imgDiv = $("<div class='col-xl-5 event-img'></div>");
    let contentSpacer7 = $("<div class='col-xl-7 content-spacer'></div>");
    let button = $(`<div class='nc-btn uppercase view-event' id="modal-btn${i}">VIEW DETAILS</div>`);

    imgDiv.css("background-image", `url(${content[i].image})`)

    let eventDate = $("<h2 class='uppercase event-date'></h2>").text(`${content[i].date.dayOfWeek}, ${content[i].date.month} ${content[i].date.day}, ${content[i].date.year}`);
    let eventName = $("<h2 class='font-bold block nc-yellow uppercase event-name'></h2>").text(`${content[i].title}`);
    let eventOverview = $("<p class='event-overview'></p>").text(`${content[i].overview}`);

    row.append(imgDiv);
    row.append(contentSpacer7);
    contentSpacer7.append(eventDate);
    contentSpacer7.append(eventName);
    contentSpacer7.append(eventOverview);
    contentSpacer7.append(button);

    ////DYNAMIC MODALS/////
    let mainModal = $(`<div id='main-modal${i}' class='modal'></div>`);
    let modalContainer = $("<div class='modal-container'></div>");
    let modalHeader = $("<div class='modal-header'></div>")
    let modalBody = $("<div class='modal-body'></div>")

    let modalClose = $(`<span class='close' id='close${i}'>&times;</span>`);
    let headerh2 = $("<h2></h2>").text(`EVENT DETAILS`);
    
    let modalEvent = $(`<h2 class="font-bold uppercase">Event: <span class='font-light'>${content[i].title}</span></h2>`);
    let modalLocation = $(`<h3 class="font-bold">LOCATION: <span class='font-light'>${content[i].location}</span></h3>'`);
    let modalTime = $(`<h3 class="font-bold">TIME: <span class='font-light'>${content[i].time}</span></h3>'`);
    let modalLink = $(`<h3 class="font-bold">FACEBOOK LINK: <a class='font-light' target='_blank' href="${content[i].anchor.link}">${content[i].anchor.link}</a></span></h3>'`);
    let modalDescLabel = $('<h3 class="font-bold"></h3>').text(`DESCRIPTION:`);
    let modalDesc = $('<p></p>').text(`${content[i].description}`);

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
    scrollOverflow: true,

  });
}

$(document).ready(function () {
  $(document).on('click', '.view-event', function () {
    let id = $(this).attr('id');
    let modal_num = id.replace('modal-btn', '');
    $(`#main-modal${modal_num}`).css('display', 'block')
    $.fn.fullpage.setAllowScrolling(false);
    $.fn.fullpage.setKeyboardScrolling(false);
    $('body').css('overflow', 'hidden');
  });

  $(document).on('click', '.close', function () {
    let closeID = $(this).attr('id');
    let close_num = closeID.replace('close', '');
    $(`#main-modal${close_num}`).css('display', 'none')
    $.fn.fullpage.setAllowScrolling(true);
    $.fn.fullpage.setKeyboardScrolling(true);
    $('body').css('overflow', 'visible');
  });
});

let viewEvents = document.getElementById("view-events")
viewEvents.onclick = function () {
  $.fn.fullpage.moveTo(2);
}

let navIcon = document.getElementById("nc-icon")
navIcon.onclick = function () {
  window.open("https://www.neumont.edu");
}

let modals = document.getElementsByClassName("modal");
window.onclick = function (event) {
  for (let i = 0; i < modals.length; i++) {
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
      $.fn.fullpage.setAllowScrolling(true);
      $.fn.fullpage.setKeyboardScrolling(true);
      $('body').css('overflow', 'visible');
    }
  }
}