"use strict";

/* Actionable interactions with interface
*/




// chat button

var chat_btn = document.getElementById("chat_knp").onclick = function() {
    window.open("chat.html", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=500, left=500, width=400, height=400");
}




//burger meny

function openBurger() {
    document.getElementById("bar").style.color = "white";
    var color1 = "#759ECD";
    const theme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (theme){
        if(theme === "dark"){
            color1 = "#E1306C";
            document.getElementById("bar").style.backgroundColor = color1;
            
        }else{
            document.getElementById("bar").style.backgroundColor = color1;
        }
    }

    document.getElementById("burgers").style.width = "300px";
    document.getElementById("bar").style.boxShadow = "1px 5px 5px lightblue";
    document.getElementById("burgerIkon").style.display = "none";
    document.getElementById("lukkeMuskelaturen").style.display = "block";

}

function closeburger() {

    document.getElementById("burgers").style.width = "";
    document.getElementById("bar").style.backgroundColor = "";
    document.getElementById("bar").style.color = "";
    document.getElementById("burgerIkon").style.display = "";
    document.getElementById("lukkeMuskelaturen").style.display = "";
    document.getElementById("bar").style.boxShadow = "";

}







