
const firebaseConfig = {
      apiKey: "AIzaSyBX3OLN9P8Cq_EyGtUFKvfQp08vMCIt1rQ",
      authDomain: "kwitter-3c72c.firebaseapp.com",
      databaseURL: "https://kwitter-3c72c-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c72c",
      storageBucket: "kwitter-3c72c.appspot.com",
      messagingSenderId: "361056303774",
      appId: "1:361056303774:web:8df7c59f1f373f917dd98f"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
