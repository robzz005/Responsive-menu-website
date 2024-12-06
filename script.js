const menu = document.querySelector(".menu");
const offMenu = document.querySelector(".menu-off");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  offMenu.classList.toggle("active");
});