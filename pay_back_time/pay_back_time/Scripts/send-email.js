(function () {
    emailjs.init('user_OVSXlfcLPuE3cekERMrXu');
})();

window.onload = function () {
    var user = {
        name: ViewBag.name,
        email: ViewBag.email
    };

    emailjs.send('outlook_test', 'example_test', user)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}