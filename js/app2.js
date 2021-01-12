/* FIREBASE INITIALISERING */
var config = {
    apiKey: "AIzaSyDsMTfE8vkgE6CsUHLtK7mqVif0xpAual4",
    authDomain: "the-cuban.firebaseapp.com",
    databaseURL: "https://the-cuban.firebaseio.com",
    projectId: "the-cuban",
    storageBucket: "the-cuban.appspot.com",
    messagingSenderId: "646336027967"
};
firebase.initializeApp(config);
/* SLUTT */


/* NØDVENDIGE VARIABLER */
var awns1 = document.getElementById("spm1");
var result = document.getElementById("resultat");
var reusltTxt = document.getElementById("resultatTxt");
var score_squence = [];
var question = [
    document.getElementById("spm1"),  document.getElementById("spm2"),  document.getElementById("spm3"),  document.getElementById("spm4"),
    document.getElementById("spm5"),  document.getElementById("spm6"),  document.getElementById("spm7"),  document.getElementById("spm8"),
    document.getElementById("spm9"),  document.getElementById("spm10"), document.getElementById("spm11"), document.getElementById("spm12"),
    
    document.getElementById("spm13"), document.getElementById("spm14"), document.getElementById("spm15"), document.getElementById("spm16"),
    document.getElementById("spm17"), document.getElementById("spm18"), document.getElementById("spm19"), document.getElementById("spm20")
];
var i = 0; 
var test;
/* SLUTT */ 


var quizScore = firebase.database().ref().child('quiz_score');
quizScore.on("child_added", function(snapshot) {
    var message = snapshot.val();
    if(message.awnser_bit == 1) {
        question[i].style.backgroundColor = "lightgreen";
        i++
    }
    else if(message.awnser_bit == 0) {
        question[i].style.backgroundColor = "#FF6961";
        i++;
    }

    result.innerHTML = `Result: ${message.right} out of 20`;
    if(message.right <= 10) {
        reusltTxt.innerHTML = "You need more practice...";
    }
    else if(message.right <= 15) {
        reusltTxt.innerHTML = "Good work, but study harder!";
    }
    else if(message.right > 15) {
        reusltTxt.innerHTML = "Almost there";
    }
    else if(message.right = 20) {
        reusltTxt.innerHTML = "Good work!";
    }
});


/*var finish_btn = document.getElementById("exit_knp").onclick = function() {
    quizScore.collection("quiz_score").doc("DC").delete().then(function() {
        console.log("Yes");
    }).catch(function(error) {
        console.error("Error ", error);
    });
    location.replace("main.html");
}*/


function exit() {
    location.replace("main.html");
}