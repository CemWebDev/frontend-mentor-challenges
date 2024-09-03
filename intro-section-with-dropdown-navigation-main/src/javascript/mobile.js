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
  const dropdownLists = document.querySelectorAll(".dropdown-list-mobile");
  const dropdownItems = document.querySelectorAll(".dropdown-item-mobile");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      console.log("hello");

      const targetId = item.getAttribute("data-target");

      console.log(targetId);

      const targetDropdown = document.getElementById(targetId);

      console.log(targetDropdown);
      
      
/*       const targetDropdown = document.getElementById(targetId);

      dropdownLists.forEach((list) => {
        list.style.display = "none";
      });

      if (targetDropdown.style.display !== "none") {
        targetDropdown.classList.add("visible");
      } else {
        targetDropdown.classList.remove("visible");
      } */
    });
  });
};

export default Mobile;
