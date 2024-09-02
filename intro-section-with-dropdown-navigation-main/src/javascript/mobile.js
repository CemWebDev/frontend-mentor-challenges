const Mobile = () => {
  ToggleMobileMenu();
};

const ToggleMobileMenu = () => {
  const openMobileMenu = document.querySelector("#open-mobile");
  const closeMobileMenu = document.querySelector("#close-mobile");
  const mobileMenu = document.querySelector(".mobile-menu");
  const overlay = document.querySelector(".overlay");

  openMobileMenu.addEventListener("click", () => {
    mobileMenu.style.right = "0";
    overlay.classList.add("active");
  });

  closeMobileMenu.addEventListener("click", () => {
    mobileMenu.style.right = "-100%";
    overlay.classList.remove("active");
  });

  overlay.addEventListener("click", () => {
    mobileMenu.style.right = "-100%";
    overlay.classList.remove("active");
  });
};

export default Mobile;
