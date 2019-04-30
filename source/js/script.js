var menuButton = document.querySelector(".header__toggle");
var overlay = document.querySelector(".overlay");
var menu = document.querySelector(".header__menu-list");
var modalCart = document.querySelector(".modal-cart");
var weekOrderBtn = document.querySelector(".week-product__order");

if (menuButton.classList.contains("header__toggle--hide")) {
  menuButton.classList.remove("header__toggle--hide");
}

menuButton.addEventListener("click", function (event) {
  event.preventDefault();
  menu.classList.toggle("header__menu-list--close");
  menuButton.classList.toggle("header__toggle--close");
  menuButton.classList.toggle("header__toggle--open");
});

weekOrderBtn.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.add("overlay--show");
  modalCart.classList.add("modal-cart--show");
});

overlay.addEventListener("click", function (event) {
  overlay.classList.remove("overlay--show");
  modalCart.classList.remove("modal-cart--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode === 27) {
    event.preventDefault();
    if (modalCart.classList.contains("modal-cart--show")) {
      modalCart.classList.remove("modal-cart--show");
      overlay.classList.remove("overlay--show");
    }
  }
});
