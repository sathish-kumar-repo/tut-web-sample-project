// js for product gallery

var productImg = document.querySelector("#product-img");
var smallImg = document.querySelectorAll(".small-img");

smallImg.forEach(eachSmallImg => {
    eachSmallImg.addEventListener("click", () => {
        productImg.src = eachSmallImg.src;
    })
})