//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBLRdMYreqQwo2G81HKiKZCx_RCaTFlOzo",
    authDomain: "kwitter-practise-e2f25.firebaseapp.com",
    databaseURL: "https://kwitter-practise-e2f25-default-rtdb.firebaseio.com",
    projectId: "kwitter-practise-e2f25",
    storageBucket: "kwitter-practise-e2f25.appspot.com",
    messagingSenderId: "1058824872059",
    appId: "1:1058824872059:web:5dc871052c5d67a50cc2de"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      var user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }