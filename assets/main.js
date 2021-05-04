
//select
const navBarToggler = document.querySelector(".btn");
//select navbar menu
const navBarMenu = document.querySelector(".item");
//const navBarMenu = document.querySelector("nav ul li.item");

//add eventlistener
navBarToggler.addEventListener("click", navBarTogglerClick)

function navBarTogglerClick(){
 navBarMenu.classList.toggle("show");
 navBarToggler.classList.toggle("hide");
}