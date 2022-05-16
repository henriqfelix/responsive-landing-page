//Menu Show & Hidden
const navMenu = document.querySelector("#nav-menu");
const toggleMenu = document.querySelector("#nav-toggle");
const closeMenu = document.querySelector("#nav-close");

//Show
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//Hidden
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});
