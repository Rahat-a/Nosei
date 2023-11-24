
// sideBar 

const sideBaron = document.getElementById("sideBar")//child menu
const openSideBar = document.getElementById("sideBar-open-btn")//icon
const closeSideBar = document.getElementById("sideBar-close-btn")

// sideBar open
sideBaron.style.right = "-25rem";

openSideBar.onclick = function(){
    if(sideBaron.style.right == "-25rem"){
        sideBaron.style.right = "0";
    }
    else{
        sideBaron.style.right= "-25rem";
    }
}

// sideBar close
sideBaron.style.right = "-25rem";
closeSideBar.onclick = function () {
    if(sideBaron.style.right == "-25rem"){
        sideBaron.style.right = "0";
    }
    else{
        sideBaron.style.right = "-25rem";
    }
    
}



// sideBar Dropdown

var dropmenuOpen = document.querySelector(".icon")
var dropmenu = document.querySelector(".child-menu")

dropmenu.style.display = "none";
dropmenu.style.transition = ".4s ";

dropmenuOpen.onclick = function() {
    if(dropmenu.style.display == "none"){
        dropmenu.style.display = "block";
    }
    else{
        dropmenu.style.display = "none";
    }
}
var dropmenuOpenn = document.querySelector(".iconn")
var dropmenuu = document.querySelector(".childd-menu")

dropmenuu.style.display = "none";
dropmenuu.style.transition = ".4s ";

dropmenuOpenn.onclick = function() {
    if(dropmenuu.style.display == "none"){
        dropmenuu.style.display = "block";
    }
    else{
        dropmenuu.style.display = "none";
    }
}




