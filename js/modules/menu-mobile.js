export default function initMenuMobile() {
  const menu = document.querySelector(".menu-hamburguer");
  const links = document.querySelectorAll(".menu ul li");
  const toggleMenu = ({ currentTarget }) => {
    menu.classList.toggle("ativo");
    const isActive = menu.classList.contains("ativo");
    isActive
      ? (currentTarget.src = "img/icones/close.png")
      : (currentTarget.src = "img/icones/menu-hamburguer.png");
  };
  menu.addEventListener("click", toggleMenu);
  links.forEach((el) => {
    el.addEventListener("click", (e) => {
      menu.classList.remove("ativo");
      menu.src = "img/icones/menu-hamburguer.png";
    });
  });

}