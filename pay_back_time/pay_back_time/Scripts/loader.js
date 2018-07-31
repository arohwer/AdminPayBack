function progress() {
    let width = 0;
    let id = setInterval(frame, 20);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            document.getElementsByClassName('bar')[0].style.width = `${width}%`;
            document.getElementsByClassName('percent')[0].innerHTML = `${width}%`
            if (width == 100) {

                document.getElementsByClassName('loaderImg')[0].classList.add('fadeUp');
                document.getElementsByClassName('progress-bar')[0].classList.add('fadeUp');
                document.getElementsByClassName('percent')[0].classList.add('fadeUp');
                setTimeout(function () {
                    document.getElementsByClassName('loader')[0].classList.add('fade');
                }, 500);
                document.getElementById("videoPlayer").play();

            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
    progress()
})
