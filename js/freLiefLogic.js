// Initializing Firebase
var config = {
    apiKey: "AIzaSyDhP9dTb3yFd-UOgXgcFtCON8jIQ7KxRAw",
    authDomain: "freliefapp.firebaseapp.com",
    databaseURL: "https://freliefapp.firebaseio.com",
    projectId: "freliefapp",
    storageBucket: "freliefapp.appspot.com",
    messagingSenderId: "209625703559"
};

firebase.initializeApp(config);
var database = firebase.database();

// Button for adding provider data
$("#signUp_Done").on("click", function(event) {
    event.preventDefault();
    console.log($('#category-input').val())

    // Grabs user input from the form
    var name = $("#frstName_input").val().trim();
    var offering = $("#service_input").val();
    var servicesOffered = $("#signUp_drpdwn").val();
    var address = $("#address_input").val().trim();
    var city = $("#city_input").val().trim();
    var state = $("#state_input").val().trim();
    var zip = $("#zipCode_input").val().trim();
    var phone = $("#phnNum_input").val().trim();


    // Creates local "temporary" object for holding provider data
    var newProvider = {
        name: name,
        offering: offering,
        servicesOffered: servicesOffered,
        address: address,
        city: city,
        state: state,
        zip: zip,
        phone: phone,
    };

    // Uploads provider data to the database
    database.ref().push(newProvider);

    // Alert
    $("#overlay").fadeIn(600);

    // Clears all of the text-boxes
    $("#name-input").val("");
    $("#offer-input").val("");
    // $("#category-input").val("");
    $("#address-input").val("");
    $("#city-input").val("");
    $("#state-input").val("");
    $("#zip-input").val("");
    $("#phone-input").val("");
});