/* const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownLists = document.querySelectorAll(".dropdown-list");

dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    dropdownLists.forEach((list) => {
      list.style.opacity = "0";
      list.style.visibility = "hidden";
    });

    const targetId = item.getAttribute("data-target");
    const targetDropdown = document.getElementById(targetId);

    if (targetDropdown) {
      targetDropdown.style.opacity = "1"
      targetDropdown.style.visibility = "visible"
    }
  });
});

 */

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
