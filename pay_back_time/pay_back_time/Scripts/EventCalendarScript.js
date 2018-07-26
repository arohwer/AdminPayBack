
function setFields() {
    var dateField = document.getElementById("eventDate");
    var timeField = document.getElementById("eventTime");
    var imageField = document.getElementById("imagePath");

    var dateInput = document.getElementById("event-date");
    var timeInput = document.getElementById("event-time");
    var imageInput = document.getElementById("image-upload");

    dateField.value = dateInput.value;
    timeField.value = timeInput.value;
    imageField.value = imageInput.value;
    console.log("image path", imageField.value);
}

var placeSearch, autocomplete;

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete((document.getElementById('autocomplete')),
        { types: ['geocode'] });

    autocomplete.addListener('place_changed', getAddress);
}

function geolocate() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var geolocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            var circle = new google.maps.Circle({
                center: geolocation,
                radius: position.coords.accuracy
            });
            autocomplete.setBounds(circle.getBounds());
        });
    }
}

function getAddress() {
    var place = autocomplete.getPlace();
    console.log("place", place);
    var address = place.formatted_address.toString().slice(0, -1);
    console.log("address", address);
    var url = place.url;
    console.log("url", url);

    var location = document.getElementById("location");
    location.value = address + " $ " + url;
}

function elementsInit() {
    let allElements = document.body.getElementsByTagName("*");
    for (let i = 0; i < allElements.length; i++) {
        if (allElements[i].classList.contains("location")) {
            initAutocomplete();
        }
    }
}

//elementsInit();