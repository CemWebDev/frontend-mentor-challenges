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

import Dropdown from "./dropdown.js";
import Mobile from "./mobile.js";
Dropdown();
Mobile();
