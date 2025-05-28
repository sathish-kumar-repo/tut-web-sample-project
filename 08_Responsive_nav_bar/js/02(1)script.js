const btn = document.getElementsByClassName('btn')[0];
const navbar = document.getElementsByClassName('nav-link')[0];
// [0] represent first btn class name

// add event in button
btn.addEventListener('click',()=>{
    navbar.classList.toggle('active')
})