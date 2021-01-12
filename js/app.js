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
var i = 1; 
var count = 1;
var correct_awnsers = 0; 
var wrong_awnsers = 0; 
var quizScore = firebase.database().ref().child('quiz_score');      // referansen til tabell i database
var form_quiz = document.getElementById("quiz");                    // dette er siste spørsmål fra quiz.html
var form_quiz2 = document.getElementById("quiz2");                  // dette er alle andre spørsmål for å sende 0 eller 1 til DB
var indication = document.getElementById("indikasjon");
indication.innerHTML = count + "/20";

var what_right = [];
var what_wrong = [];
var awnser_sequence = 0;
var questions = [
    document.getElementById("spm1"),  document.getElementById("spm2"),  document.getElementById("spm3"),  document.getElementById("spm4"), 
    document.getElementById("spm5"),  document.getElementById("spm6"),  document.getElementById("spm7"),  document.getElementById("spm8"), 
    document.getElementById("spm9"),  document.getElementById("spm10"), document.getElementById("spm11"), document.getElementById("spm12"),

    document.getElementById("spm13"), document.getElementById("spm14"), document.getElementById("spm15"), document.getElementById("spm16"), 
    document.getElementById("spm17"), document.getElementById("spm18"), document.getElementById("spm19"), document.getElementById("spm20"),
];
console.log(questions.length);
/* SLUTT */

/*
function openBurger() {
    document.getElementById("burgers").style.width = "300px";
    document.getElementById("bar").style.backgroundColor = "#759ECD";
    document.getElementById("bar").style.color = "white";
    document.getElementById("bar").style.boxShadow = "1px 5px 5px lightblue";
    document.getElementById("burgerIkon").style.display = "none";
    document.getElementById("lukkeMuskelaturen").style.display = "block";
}

function closeburger() {
    document.getElementById("burgers").style.width = "0";
    document.getElementById("bar").style.backgroundColor = "white";
    document.getElementById("bar").style.color = "#759ECD";
    document.getElementById("bar").style.boxShadow = "1px 5px 5px lightgray";
    document.getElementById("burgerIkon").style.display = "block";
    document.getElementById("lukkeMuskelaturen").style.display = "none";
}
*/

function showRes() {
    document.getElementById("resultat").style.display = "block";
    document.getElementById("laster").style.display = "none";
}


function correct() {
    // Denne if-stm er til hvis du er ferdig med oppgavesettet og svaret er riktig
    if(i === questions.length) {
        awnser_sequence = 1;
        questions[i-1].style.display = "none";
        document.getElementById("laster").style.display = "block";
        location.replace("https://pineconedownload.azurewebsites.net/quizScore.html");
    }
    // Denne er til hvis du ikke er ferdig
    else {
        awnser_sequence = 1;
        correct_awnsers++; 
        questions[i-1].style.display = "none";
        questions[i].style.display = "block";
        count++;
        indication.innerHTML = count + "/20";
        i++;
    }
}


function wrong() {
    if(i === questions.length) {
        awnser_sequence = 0;
        questions[i-1].style.display = "none";
        document.getElementById("laster").style.display = "block";
        location.replace("https://pineconedownload.azurewebsites.net/quizScore.html");
    }
    else {
        awnser_sequence = 0;
        wrong_awnsers++;
        questions[i-1].style.display = "none";
        questions[i].style.display = "block";
        count++;
        indication.innerHTML = count + "/20";
        i++;
    }
}


form_quiz.onsubmit = function(evt) {
    evt.preventDefault();
    quizScore.push({
        "right": correct_awnsers,
        "wrong": wrong_awnsers,
        "awnser_bit": awnser_sequence
    });
};

form_quiz2.onsubmit = function(evt) {
    evt.preventDefault();
    quizScore.push({
        "awnser_bit": awnser_sequence
    });
};


console.log(window.innerWidth);


function exitQuiz() {
    var affirmative = confirm("Sure you want to exit this quiz?");
    if(affirmative == true) {
        location.replace("main.html");
    }
} 