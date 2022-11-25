console.log("Cześć!");

let buttonElement = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".button__text");

buttonElement.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});
