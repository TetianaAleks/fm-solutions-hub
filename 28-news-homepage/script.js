const menuToggle = document.querySelector(".header__menu-toggle");
const menu = document.querySelector(".menu");
const menuClose = document.querySelector(".menu__close");
const body = document.body;
const menuLinks = document.querySelectorAll(".menu__link");

function closeMenu() {
  menu.classList.remove("menu--visible");
  menu.classList.add("menu--hidden");
  body.classList.remove("no-scroll");
}

menuToggle.addEventListener("click", () => {
  menu.classList.remove("menu--hidden");
  menu.classList.add("menu--visible");
  body.classList.add("no-scroll");
});

menuClose.addEventListener("click", closeMenu);

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("click", (event) => {
  const isClickInsideMenu = menu.contains(event.target);
  const isClickOnToggle = menuToggle.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnToggle &&
    menu.classList.contains("menu--visible")
  ) {
    closeMenu();
  }
});
