function addUser() {
    locSt = document.getElementById("user_name").value;
    localStorage.setItem("userName- ", locSt);
}

var firebase = {
    apiKey: "AIzaSyD-G2C-KGTPeDLgKXkqSE626jbRnIAR3sU",
    authDomain: "letschat-da2fc.firebaseapp.com",
    projectId: "letschat-da2fc",
    storageBucket: "letschat-da2fc.appspot.com",
    messagingSenderId: "877301376796",
    appId: "1:877301376796:web:262156ab696afcac1c3cd9"
  };

firebase.initializeApp(firebaseConfig);