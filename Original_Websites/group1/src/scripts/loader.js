function progress() {
    let width = 0;
    let id = setInterval(frame, 20);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            $('.bar').css("width", width + '%');
            $('.percent').text(width + "%");
            if (width == 100) {

                $('.loaderImg').addClass('fadeUp');
                $('.progress-bar').addClass('fadeUp');
                $('.percent').addClass('fadeUp');

                setTimeout(function () {
                    $('.loader').addClass('fade');
                }, 500);
                document.getElementById("videoPlayer").play();

            }
        }
    }
}

$(document).ready(function () {
    progress()
});
