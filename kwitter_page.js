var firebaseConfig = {
    apiKey: "AIzaSyAiZLgMdUmm0iqPGw4GlIKKcCnnHbSj5Bo",
    authDomain: "kwitter-f318b.firebaseapp.com",
    databaseURL: "https://kwitter-f318b-default-rtdb.firebaseio.com",
    projectId: "kwitter-f318b",
    storageBucket: "kwitter-f318b.appspot.com",
    messagingSenderId: "23718488610",
    appId: "1:23718488610:web:c891cf188bb139225bb87b",
    measurementId: "G-QXSFZH9TBC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log(firebase_message_id);
   console.log(message_data);
   varname = message_data['name'];
   message = message_data['message'];
   like = message_data['like'];
   name_with_tag = "<h4>"+ varname +"<img class = 'user_trick' src = 'tick.png'</h4>";
   message_with_tag = "<h4> class = message_h4'>"+ message +"<h4>";
   like_button = "<button class= 'btn btn-warning' id="+firebase_message_id+"value="+like+"onclick= updatelike(this.id)'>";
   span_with_tag = "<span class= 'glyphicon glyphicon-thumps-up'>like: "+ like +"</span></button><hr>";

   console.log("Room Name - " + Room_names);
   row = "div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+Room_names+"<div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}

var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");
function send() {
    var  msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name, message:msg, like:0
        
    });
}

function updatelike(message_id) {
    console.log("clicked on like button -"+ message_id);
    button_id = message_id;
    like = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);

    firebase.database().ref(room_name).child(message_id).update({
          like : updated_likes
    });
}