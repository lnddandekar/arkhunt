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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    localStorage.setItem("user_name", user_name);
    window.location = "chat_room.html";
}



