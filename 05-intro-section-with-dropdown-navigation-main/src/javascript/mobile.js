const Mobile = () => {
  ToggleMobileMenu();
  DropdownMobile();
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

const DropdownMobile = () => {
  const dropdownItems = document.querySelectorAll(".dropdown-item-mobile");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");
      const targetDropdown = document.getElementById(targetId);
      if (targetDropdown.classList.contains("hidden")) {
        targetDropdown.classList.remove("hidden");
        targetDropdown.classList.add("visible");
      } else {
        targetDropdown.classList.add("hidden");
        targetDropdown.classList.remove("visible");
      }
    });
  });
};

export default Mobile;
