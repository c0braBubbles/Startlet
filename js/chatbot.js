var know = {
    "Hello" : "Hi",
    "How are you?" : "Good",
    "O.K" : ":)"
};


function talk() {
    var user = document.getElementById("inpTekst").value;
    document.getElementById("visMld").innerHTML += user + "<br>";
    if(user in know) {
        document.getElementById("visMld").innerHTML += know[user] + "<br>";
    }
    else {
        document.getElementById("visMld").innerHTML += "I don't understand... <br>";    
    }
}