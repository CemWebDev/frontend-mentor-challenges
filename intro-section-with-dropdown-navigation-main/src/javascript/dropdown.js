/* const Dropdown = () => {
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const dropdownLists = document.querySelectorAll(".dropdown-list");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");
      const targetDropdown = document.getElementById(targetId);

      dropdownLists.forEach((list) => {
        list.style.opacity = "0";
        list.style.visibility = "hidden";
      });

      if (targetDropdown.style.opacity !== "1") {
        targetDropdown.style.opacity = "1";
        targetDropdown.style.visibility = "visible";
      } else {
        targetDropdown.style.opacity = "0";
        targetDropdown.style.visibility = "hidden";
      }
    });
  });
};
 */

const Dropdown = () => {
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");
      const targetDropdown = document.getElementById(targetId);
      
      
    });
  });
};

export default Dropdown;
