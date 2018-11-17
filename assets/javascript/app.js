// Initialize Firebase
var config = {
    apiKey: "AIzaSyAYX2k9gyEmIdcJ-ZW0NtgLFPlvt-Ry7z8",
    authDomain: "train-scheduler-ee42b.firebaseapp.com",
    databaseURL: "https://train-scheduler-ee42b.firebaseio.com",
    projectId: "train-scheduler-ee42b",
    storageBucket: "train-scheduler-ee42b.appspot.com",
    messagingSenderId: "839014118578"
};
firebase.initializeApp(config);

//Reference to database
var database = firebase.database();

$("#add-new-train").on("click", function (event) {
    event.preventDefault();

    var trainName = $("#train-name").val().trim();
    var destination = $("#destination").val().trim();
    var firstTrainTime = $("#first-train-time").val().trim();
    var frequency = $("#frequency-period").val().trim();

    var newTrain = {
        trainName: trainName,
        destination: destination,
        firstTrainTime: firstTrainTime,
        frequencyPeriod: frequency,
    };

    database.ref().push(newTrain);

    console.log(newTrain.trainName, newTrain.destination, newTrain.firstTrainTime, newTrain.frequencyPeriod);
});

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());
    var snap = childSnapshot.val();


    var startTime = moment(snap.firstTrainTime, "HH:mm");

    console.log(startTime);

    var trainName = snap.trainName;
    var destination = snap.destination;
    var frequency = snap.frequencyPeriod;
    console.log(frequency);

    var currentTime = moment();
    var startTimeConverted = moment(startTime).subtract(1, "years");
    var diffTime = moment().diff(moment(startTimeConverted), "minutes");
    var timeRemainder = diffTime % frequency;
    var minutesAway = frequency - timeRemainder;
    var nextArrival = moment().add(minutesAway, "minutes");

    $(`
<tr>
<td>${trainName}</td>
<td>${destination}</td>
<td>${frequency}</td>
<td>${nextArrival.format("hh:mm a")}</td>
<td>${minutesAway}</td>
<tr>
`).appendTo('#train-schedule-table');
})
