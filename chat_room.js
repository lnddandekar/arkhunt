const firebaseConfig = {
    apiKey: "AIzaSyAlH7uUCo7skC7tuEAWFIyIYk71cYf5R94",
    authDomain: "chatt-c2e59.firebaseapp.com",
    databaseURL: "https://chatt-c2e59-default-rtdb.firebaseio.com",
    projectId: "chatt-c2e59",
    storageBucket: "chatt-c2e59.appspot.com",
    messagingSenderId: "1030276219488",
    appId: "1:1030276219488:web:083d0f8fa2cd2a6ee2b905",
    measurementId: "G-5VSQLY2885"
  };
firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome"     +user_name +"!";
    function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
    }


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name-"+ Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
     getData();
     function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location= "kwitter_page.html"
     }
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location="qwitter.html";
}
user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    
    function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
       name:user_name,
       message : msg,
       like:0    
      });
      document.getElementById("msg").value="";



    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name= message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>" + name +"</h4>";
message_with_tag = "<h4> class='message_h4'>" + message + "</h4>";
like_button="<button class='btn btn-warning' id="+ firebase_message_id+"value=" +like+"onclick='updateLike(this.id)>Likes :" + like+"</button>";
row = name_with_tag+message_with_tag+like_button;
document.getElementById("output").innerHTML+= row;
//End code
      } });  }); }
getData();
function updateLike(message_id){
      console.log("clicked on like button -" + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).ariaValueMax;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name")
window.location.replace("qwitter.html");
}




