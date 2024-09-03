const Dropdown = () => {
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  dropdownItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetId = item.getAttribute("data-target");
      const targetDropdown = document.getElementById(targetId);
      if (targetDropdown.classList.contains("non-active")) {
        targetDropdown.classList.add("active");
        targetDropdown.classList.remove("non-active");
      }
      else {
        targetDropdown.classList.add("non-active")
        targetDropdown.classList.remove("active")
      }
    });
  });
};

export default Dropdown;
