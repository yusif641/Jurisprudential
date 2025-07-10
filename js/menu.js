const menu = document.querySelector(".header-mobile");
const menuButton = document.querySelector(".info-mobile__burger");
const body = document.querySelector("body");
const navigationLink = document.querySelectorAll(".nav-link")
const nav = document.querySelector(".nav-header")

navigationLink.forEach(el => el.addEventListener("click", (e) => {
    e.preventDefault();
    nav.classList.toggle("active")
    body.classList.add("active")
}))

menuButton.addEventListener("click", (e) => {
    menuButton.classList.toggle("active")
    menu.classList.toggle("active")
    body.classList.toggle("active")
    nav.classList.remove("active")
});

if (menu.classList.contains("active")) {
    document.addEventListener("click", (e) => {
        if (e.target !== menu) {
            menuButton.classList.remove("active")
            menu.classList.remove("active")
            body.classList.toggle("active")
        }
    })
}