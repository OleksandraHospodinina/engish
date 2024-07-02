function toggleBurgerMenu() {
    const menu = document.querySelector(".navbar__menu");
    menu.classList.toggle("navbar__menu--active");
  }

  function closeNavbarMenu() {
    let navbarMenu = document.querySelector(".navbar__menu");
    navbarMenu.classList.remove("navbar__menu--active");
  }

  document.addEventListener("click", function (event) {
    let isClickInside = document
      .querySelector(".navbar")
      .contains(event.target);
    if (!isClickInside) {
      closeNavbarMenu();
    }
  });