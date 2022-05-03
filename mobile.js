//importar a função outsideClick

function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ["click", "touchstart"];

  if (menuButton) {
    function openMenu(event) {
      menuList.classList.toggle("active");
      menuButton.classList.toggle("active");
    }

    eventos.forEach((evento) => {
      menuButton.addEventListener("click", openMenu);
    });
  }
}

initMenuMobile();
