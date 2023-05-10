const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menuBurger = document.querySelector(".menu-burger");
const imgCoffee = document.querySelector("#coffee")

function burger() {
  openMenu.classList.toggle('hide');
  menuBurger.classList.toggle('hide');
  closeMenu.classList.toggle('hide');
  imgCoffee.classList.toggle('hide');
};

openMenu.onclick = burger
closeMenu.onclick = burger