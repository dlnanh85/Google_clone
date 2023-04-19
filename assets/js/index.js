const appMenuButton = document.querySelector(".app-menu-button");
const appMenu = document.querySelector(".app-menu");
const header = document.querySelector(".header");
const wholePage = document.querySelector("body");

appMenuButton.addEventListener("click", function (event) {
    event.stopPropagation();
    if (header.style.overflow === "visible") header.style.overflow = "hidden";
    else header.style.overflow = "visible";
});

appMenu.addEventListener("click", function (event) {
    event.stopPropagation();
});

wholePage.addEventListener("click", function () {
    if (header.style.overflow === "visible") header.style.overflow = "hidden";
});