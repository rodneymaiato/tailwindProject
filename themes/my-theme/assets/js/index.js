// Declare variables
const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");
const navLinks = document.querySelectorAll("#contact-button");
// Make menu visible after clicking on the hamburger icon
burger.addEventListener("click", () => {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
// Make menu hidden after clicking on a menu item
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    menu.classList.add("hidden");
  });
});
