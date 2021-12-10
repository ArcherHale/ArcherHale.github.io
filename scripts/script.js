/*
Student Name: Archer Hale
File Name: script.js

*/

//Hamburger menu function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("fcs-logo");
    if (menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else {
        style.display = "block";
        logo.style.display = "none";
    }
}