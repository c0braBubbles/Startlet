// This file interacts content on the site based purly on specific id and class formatting and css code
/* Format need to be: Id on click object need to contain same int as the DOM objekt 
 * you wish to interact with css on, but with highfin(whatever is definded in re objekt betwin / and (\d+)/).
 */ 

const main_content_id = "main_content"
const hide_class = "hide"
const show_class = "show"
const click_class = "click"
const icon_class = "icon"
const icon_open_class = "icon_open"

// if it is a dropdown this function will run
function dropDownIconOpen(id_icon){
    var element, name, arr;
    element = document.getElementById(id_icon);
    name = icon_open_class;
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
      element.className += "" + name;
    }
    
}

// hides child that is visable after
function hideVisableChild() {
    var tableFields = document.getElementById(main_content_id)
    var children = tableFields.children;
    for(var i = 0; i < children.length; i++) {
        if(children[i].classList.contains(show_class) && !children[i].classList.contains(hide_class)) { 
            var tableChild = children[i].id;
            hide(tableChild);
        }
    }
}

var re = new RegExp(/-(\d+)/); /*  String with highfin can be separated 
*  in to diferent variables with running 
*  variable = /-(\d+)/) then 
*  variable.exec(String)
*  when string is "string-13"
*  result wil be. varibaleName{"-13", "13"}
*/

function menuClick(i_d) {
    document.getElementById(i_d).focus();
    var m = re.exec(i_d);
    var stringInt = m[1];
    var firstString = i_d.replace(m[0],'');
    var childsId = firstString + stringInt
    hideVisableChild(childsId);
    var element = document.getElementById(childsId);
    element.className = element.className.replace(/\bhide\b/g, "");
    
}

// main function
function show(obj) {
    var m = re.exec(obj.id);
    var stringInt = m[1];
    var firstString = obj.id.replace(m[0],'');
    var child = firstString + stringInt;
    if(obj.className == click_class) {
        menuClick(obj.id);
    } else {
        var rightClass = document.getElementById(child).classList.contains(hide_class);
        if(!rightClass) {
            hide(child);
            if(
                document.getElementById((icon_class+stringInt)).classList.contains(icon_class) 
                && document.getElementById((icon_class+stringInt)).classList.contains(icon_open_class)
            ) {
                var element = document.getElementById((icon_class+stringInt));
                element.className = element.className.replace(/\bicon_open\b/g, "");
            }
        } else {  
                var element = document.getElementById(child);
                element.className = element.className.replace(/\bhide\b/g, "");
            if(
                document.getElementById((icon_class+stringInt)).classList.contains(icon_class) 
                && !document.getElementById((icon_class+stringInt)).classList.contains(icon_open_class)
            ){
                var id_icon = icon_class + stringInt;
                dropDownIconOpen(id_icon);
            }
        }
    }
}

// will runn when second click is inisiated or diferent button clicked
//depends on objekt cliked
function hide(child) {
    var element, name, arr;
    element = document.getElementById(child);
    name = hide_class;
    arr = element.className.split(" ");
    if (arr.indexOf(name) == -1) {
        element.className += "" + name;
    }
  }