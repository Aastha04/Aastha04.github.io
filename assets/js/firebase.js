var firebaseConfig = {
    apiKey: "AIzaSyAi-t5F5ZQ-cO1lc3uP13SeslYOOlNF13Q",
    authDomain: "aastha-portfolio.firebaseapp.com",
    databaseURL: "https://aastha-portfolio.firebaseio.com",
    projectId: "aastha-portfolio",
    storageBucket: "aastha-portfolio.appspot.com",
    messagingSenderId: "347692863350",
    appId: "1:347692863350:web:5b0371557551851916f457"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

var username = document.querySelector("#username");
var email = document.querySelector("#email");
var subject = document.querySelector("#subject");
var message = document.querySelector("#message");
var submitButton = document.querySelector("#submitButton");
var form = document.querySelector("#form");
var sentMessage = document.querySelector("#sentMessage");

submitButton.addEventListener("click",function() {

    const savedName = username.value;
    const savedEmail = email.value;
    const savedSubject = subject.value;
    const savedMessage = message.value;
    
    username.value = null;
    email.value = null;
    subject.value = null;
    message.value = null;

    db.collection('users').doc("contacts").set({
        name : savedName,
        email: savedEmail,
        subject: savedSubject,
        message : savedMessage,

    }).then(function(){
        alert('message has been sent')
        console.log("status saved!");    
    }).catch(function(error){
        console.log("Got an error",error);
    });
})