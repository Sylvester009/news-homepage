const menu = document.getElementById("menu");
const mobileNav = document.getElementById("mobile-nav");
const menuClose = document.getElementById("menu-close");
const main = document.getElementById("main");

menu.addEventListener("click", () => {
  mobileNav.style.display = "flex";
  main.style.opacity = "0.4";
});

menuClose.addEventListener("click", () => {
  mobileNav.style.display = "none";
  main.style.opacity = "1";
});
