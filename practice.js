
//ADD YOUR FIREBASE LINKS
const firebaseConfig = {
    apiKey: "AIzaSyAfg7BDVQ0muFUD4BYbeE6uNJF_AzzcJFM",
    authDomain: "kwitterapp-3e3d7.firebaseapp.com",
    databaseURL: "https://kwitterapp-3e3d7-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-3e3d7",
    storageBucket: "kwitterapp-3e3d7.appspot.com",
    messagingSenderId: "947895259306",
    appId: "1:947895259306:web:9c3adf696428af4f4740d3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}