console.log("Cześć wędrowny developerze!");

let image = document.querySelector(".js-image");

let btn = document.querySelector(".js-button");

let btnChange = document.querySelector(".js-btnColor");

let bodyColor = document.querySelector(".body");

let pink = document.querySelector(".js-normal");

btn.addEventListener("click", () => {
    image.remove();
});

btnChange.addEventListener("click", () => {
    bodyColor.classList.toggle("background");
    pink.innerText = bodyColor.classList.contains("background") ? "normalne" : "pstrokate";

});

