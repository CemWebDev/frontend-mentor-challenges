let isSun = true;

const themeIcon = document.querySelector("#theme-icon");
const themeBackground = document.querySelector("#theme-background");

const todoInput = document.querySelector("#todo-input");

themeIcon.addEventListener("click", () => {
  if (isSun) {
    themeIcon.src = "./images/icon-moon.svg";
    themeBackground.src = "./images/bg-desktop-light.jpg";
    todoInput.classList.remove("dark");
    todoInput.classList.add("light");
  } else {
    themeIcon.src = "./images/icon-sun.svg";
    themeBackground.src = "./images/bg-desktop-dark.jpg";
    todoInput.classList.remove("light");
    todoInput.classList.add("dark");
  }
  isSun = !isSun;
});
