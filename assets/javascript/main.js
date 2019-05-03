// Initialize Firebase
var config = {
    apiKey: "AIzaSyAaqkzl5CZiUmleyeSb7ngZHeaWn5cEy5Q",
    authDomain: "train-time-schedule-c3d03.firebaseapp.com",
    databaseURL: "https://train-time-schedule-c3d03.firebaseio.com",
    projectId: "train-time-schedule-c3d03",
    storageBucket: "train-time-schedule-c3d03.appspot.com",
    messagingSenderId: "23222976120"
};

firebase.initializeApp(config);

var database = firebase.database()

$(document).ready(function () {

    $("#train-line-form").on("submit", function (e) {
        var $nameInput = $("#train-name-input");
        var $localeInput = $("#train-location-input");
        var $timeInput = $("#train-time-input");

        e.preventDefault();

        // Form filled
        if ($nameInput.val().length > 0 && $localeInput.val().length > 0 && $timeInput.val().length > 2) {
            // Push to database
            database.ref().push({
                name: $nameInput.val().trim(),
                location: $localeInput.val().trim(),
                time: $timeInput.val().trim()
            });
        }
        else { $("#empty-form-warning").text("You must fill all form fields."); }
    })

    database.ref().on("child_added", function (snapshot) {
        // Track object properties
        var trainName = snapshot.val().name;
        var trainLocation = snapshot.val().location;
        var trainTime = snapshot.val().time;

        console.log(trainName);
        console.log(trainLocation);
        console.log(trainTime);

        // Table well
        var newRow = $("<tr>").append(
            $("<td>").text(trainName),
            $("<td>").text(trainLocation),
            $("<td>").text(trainTime),
            $("<td>").text(calculateArrival(trainTime)),
        );

        $("#trains-table > tbody").prepend(newRow);

    }, function (errorObject) {
        console.log("Oopsies: " + errorObject.code);
    });

    // Calculate arrival time
    function calculateArrival() {
        return "12"
    }

    // display database entries
    function updateTimeTracker() {

    }
})