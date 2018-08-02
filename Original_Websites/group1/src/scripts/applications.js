let jsonFile = '../assets/json/applications.json';
let content;
let request = new XMLHttpRequest();

loadData();

function loadData(){
    request.open('GET', jsonFile),
    request.onload = loadComplete;
    request.send();
}

function loadComplete(evt){
    content = JSON.parse(request.responseText);
    createApplications();
}

function createApplications(){
    
}
