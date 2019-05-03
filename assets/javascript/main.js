$(document).ready(function () {
    var $nameInput = $("#train-name-input");
    var $localeInput = $("#train-location-input");
    var $timeInput = $("#train-time-input");

    $("#train-line-form").on("submit", function (e) {
        e.preventDefault();

        console.log(dataAuthenticate());

        if (dataAuthenticate()) {

        }
    })


    function dataAuthenticate() {
        if ($nameInput.length > 0 && $localeInput.length > 0 && $timeInput.length > 4) {
            if (parseInt($timeInput.val()) !== NaN) {
                return true;
            }
            else {
                $("#empty-form-warning").text("Time must be in a numerical time format with a colon to separate hours and minutes.")
                return false;
            }
        }
        else {
            $("#empty-form-warning").text("You must fill all form fields.");
            return false;
        }
    }

    function updateTimeTracker() {

    }
})