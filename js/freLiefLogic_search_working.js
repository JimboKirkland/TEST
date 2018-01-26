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
var search = $("#categories").val();

//Auto populate
database.ref().limitToLast(10).on("child_added", function(snap) {
    contactName = snap.val().contactName;
    servicesOffered = snap.val().servicesOffered;
    address = snap.val().address;
    userId = snap.key;

   $("#post-container").prepend(
     "<div class='post' value='"+userId+"'>"+
       "<div class='img'></div>"+
       "<div class='data'>"+
         "<p>" + servicesOffered + "</p>"+
         "<p>" + contactName + "</p>"+
         "<p>" + address + "</p>"+
         "</div></div></div>"
       ).slideDown("slow")
});

//Change category
$("#categories").on("change", function(){
 event.preventDefault();
 $("#post-container").html(" ");
 var search = $("#categories").val();

 database.ref().limitToLast(10).on("child_added", function(snap) {
   if (search == "all"){
     contactName = snap.val().contactName;
     servicesOffered = snap.val().servicesOffered;
     address = snap.val().address;
     userId = snap.key;

  $("#post-container").prepend(
    "<div class='post' value='"+userId+"'>"+
      "<div class='img'></div>"+
      "<div class='data'>"+
        "<p>" + servicesOffered + "</p>"+
        "<p>" + contactName + "</p>"+
        "<p>" + address + "</p>"+
        "</div></div></div>"
      )
   } else if (search == snap.val().servicesOffered){
     contactName = snap.val().contactName;
     servicesOffered = snap.val().servicesOffered;
     address = snap.val().address;
     userId = snap.key;
     console.log(userId);
    $("#post-container").prepend(
      "<div class='post' value='"+userId+"'>"+
        "<div class='img'></div>"+
        "<div class='data'>"+
          "<p>" + servicesOffered + "</p>"+
          "<p>" + contactName + "</p>"+
          "<p>" + address + "</p>"+
          "</div></div></div>"
        )
    }
  });
});

//Post click
$(".post").click(function(){
  console.log("hello");
  // sessionStorage.setItem('postId', $(".post").val())
})
