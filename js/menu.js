const navToggle = document.querySelector(".nav__toggle");
const menu = document.querySelector(".menu");


navToggle.addEventListener("click", () => {
    menu.classList.toggle("menu--visible");
});