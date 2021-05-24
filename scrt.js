 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCjH-v25EifbW6AHHreZfFd54DNEConVEA",
    authDomain: "my-school-a3237.firebaseapp.com",
    projectId: "my-school-a3237",
    storageBucket: "my-school-a3237.appspot.com",
    messagingSenderId: "330949662335",
    appId: "1:330949662335:web:3d51a35bc6732315a7914a",
    measurementId: "G-SSTW6QX7Y7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;

  $("#login_btn").click(function () 
  {  
      console.log("Button clicked");
      var emailID = $("#emailID").val();
      var password = $("#password").val();


      if(emailID != "" && password != "")
      {
          var result = firebase.auth().signInWithEmailAndPassword(emailID, password);
        console.log("emailID : "+emailID);
        console.log("password : "+password);

          result.catch(function (error) 
          {
              var errorCode = error.code;
              var errorMessage = error.message;

              window.alert("Message : " + errorMessage);

          });
      }
      
  });

  $("#logout_btn").click(function () 
  {  
      console.log("LoggedOut");
      firebase.auth().signOut();
  })