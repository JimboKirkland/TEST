$(document).ready(function() {
    $("#fr_logo").css("display", "none");
    $("html").css("display", "none");
    $("#overlay").css("display", "none");
    $("#overlay-alert").css("display", "none");
    $("html").fadeIn(500);
    $("#fr_logo").fadeIn(2000);

    ///This button takes you to the search pg from the index.html pg
    $("#need_btn").click(function() {

        window.location.href = "search_pg.html";

    });

    ///This button takes you to the offering_pg from the index.html pg
    $("#offer_btn").click(function() {

        window.location.href = "offering_signup.html";

    });

    $("#back2_btn").click(function() {

        window.location.href = "index.html";

    });


    $("#signUpBack_btn").click(function() {

        window.location.href = "index.html";

    });

    //this button take you to the search pg fron the alerts pg...
    $("#alertsBack_btn").click(function() {
        window.location.href = "search_pg.html";

    });

    $("#sUp_alerts").click(function() {
        window.location.href = "alert_signup-copy.html";
    });

    $("#ok_btn-alert").click(function() {
        $("#overlay-alert").fadeOut(500);
        window.location.href = "search_pg.html";
    });

    $("#ok_btn").click(function() {
        $("#overlay").fadeOut(500);
        window.location.href = "index.html";
    });

    $("#su_done_btn").click(function() {
        $("#overlay-alert").fadeIn(500);
    })


    $("#search_Btn").click(function() {
        //need to load findings based on search criteria here...
    });

    $("#signUp_Done").click(function() {
        $("#overlay").fadeIn(500);
    })

    $("#providerPanelBox").click(function() {
        window.location.href = "map_pg.html";

    });

    $("#mapsBack_btn").click(function(e) {
        window.location.href = "search_pg.html";
        e.preventDefault()
    });



});