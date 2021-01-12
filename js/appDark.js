var i = 1; 
var correct_awnsers = 0; 
var wrong_awnsers = 0; 
var questions = [
    document.getElementById("spm1"),
    document.getElementById("spm2"),
    document.getElementById("spm3")
];


function openBurger() {
    document.getElementById("burgers").style.width = "300px";
    document.getElementById("burgers").style.backgroundColor = "black";
    // document.getElementById("bar").style.backgroundColor = "#3A3A3A";
    // document.getElementById("bar").style.color = "white";
    document.getElementById("bar").style.boxShadow = "1px 5px 5px #000000";
    document.getElementById("burgerIkon").style.display = "none";
    document.getElementById("lukkeMuskelaturen").style.display = "block";
}


function closeburger() {
    document.getElementById("burgers").style.width = "0";
    // document.getElementById("bar").style.backgroundColor = "white";
    // document.getElementById("bar").style.color = "#759ECD";
    document.getElementById("bar").style.boxShadow = "1px 5px 5px #000000";
    document.getElementById("burgerIkon").style.display = "block";
    document.getElementById("lukkeMuskelaturen").style.display = "none";
}


function correct() {
    if(i === questions.length) {
        window.location.reload();
    }
    else {
        correct_awnsers++; 
        questions[i-1].style.display = "none";
        questions[i].style.display = "block";
        i++;
        console.log(correct_awnsers);
        console.log(i);
    }
}


function wrong() {
    if(i === questions.length) {
        window.location.reload();
    }
    else {
        wrong_awnsers++;
        questions[i-1].style.display = "none";
        questions[i].style.display = "block";
        i++;
        console.log(correct_awnsers);
        console.log(i);
    }
}