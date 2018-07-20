let resHeight = 600;
let resWidth = 900;

let viewProjects = document.getElementById("view-projects")
viewProjects.onclick = function(){
  $.fn.fullpage.moveTo(2);
}


let navIcon = document.getElementById("nc-icon")
navIcon.onclick = function (){
  window.open("https://www.neumont.edu");
}

let jsonFile = '../assets/json/projects.json';
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
  console.log('data loaded')
  // preloadImages();
  createProjectSlide();
}
function createProjectSlide() {
  let slideSection = $('<div class="section" id="projectSlides"></div>')
  for (let i = 0; i < content.length; i++) {
    let slide = $("<div class='slide'></div>")
    let row = $("<div class='row fit'</div>");
    let bgImg = $("<div class='col-m-5 project-bg'></div>");
    let contentDiv = $("<div class='col-m-7 project-content theme-white'></div>")
    
    let slideTitle = $("<h1 class='uppercase project-name'></h1>").text(`${content[i].title}`);
    let slideAuthor = $("<h3 class='uppercase project-owner'></h3>").text(`${content[i].author}`);
    let slideDescription = $("<p></p>").text(`${content[i].description}`);
    let slideLink = $(`<a target="_blank" href="${content[i].anchor.link}"></a>`).text(`${content[i].anchor.text}`);

    // preloadImg(i);
    bgImg.css("background-image", `url(${content[i].image})`)

    contentDiv.append(slideTitle);
    contentDiv.append(slideAuthor);
    contentDiv.append(slideDescription);
    contentDiv.append(slideLink);
    row.append(bgImg);
    row.append(contentDiv);
    slide.append(row);
    slideSection.append(slide);
  }
  $('#fullpage').append(slideSection);
  $('#fullpage').fullpage({
    sectionsColor: ['#fff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '#menu',
    slidesNavigation: true,
    scrollOverflow: true,

    afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
    },
    onSlideLeave: function (anchorLink, index, slideIndex, direction) {
    }
  });
  // $.getScript("../assets/scripts/jquery.fullPage.js");
  // $.getScript("../assets/scripts/scrolloverflow.min.js");
  // initFP();
  // $("#projectSlides").load(location.href+" #projectSlides>*","");
}
function preloadImages() {
  for (let i = 0; i < content.length; i++) {
    let img = new Image();
    img.src = content[i].image
    console.log(img)
  }  
}
function preloadImg(i) {
  let img = new Image();
  img.src = content[i].image
}