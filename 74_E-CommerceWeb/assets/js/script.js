// js for toggle menu
var menuItems = document.querySelector("#menuItems");
var menu_icon = document.querySelector(".menu-icon");

menuItems.style.maxHeight = "0px";
menu_icon.addEventListener("click")
function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px"
    }
    else {
        menuItems.style.maxHeight = "0px"
    }
}
