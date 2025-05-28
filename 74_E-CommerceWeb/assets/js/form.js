// js for toggle form

var loginForm = document.querySelector("#loginForm");
var registerForm = document.querySelector("#registerForm");
var indicator = document.querySelector("#indicator");

function register() {
    registerForm.style.transform = "translateX(0px)";
    loginForm.style.transform = "translateX(0px)";
    indicator.style.transform = "translateX(100px)";
}
function login() {
    registerForm.style.transform = "translateX(300px)";
    loginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0px)";
}