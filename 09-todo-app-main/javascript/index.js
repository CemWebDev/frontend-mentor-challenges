let isSun = localStorage.getItem("theme") === "sun";

if (localStorage.getItem("theme") === null) {
  isSun = true;
  localStorage.setItem("theme", "sun");
}


const themeIcon = document.querySelector("#theme-icon");
const themeBackground = document.querySelector("#theme-background");
const todoInput = document.querySelector("#todo-input");

const applyTheme = () => {
  if (isSun) {
    themeIcon.src = "./images/icon-sun.svg";
    themeBackground.src = "./images/bg-desktop-dark.jpg";
    todoInput.classList.remove("dark");
    todoInput.classList.add("light");
  } else {
    themeIcon.src = "./images/icon-moon.svg";
    themeBackground.src = "./images/bg-desktop-light.jpg";
    todoInput.classList.remove("light");
    todoInput.classList.add("dark");
  }
};

themeIcon.addEventListener("click", () => {
  isSun = !isSun;
  if (isSun) {
    themeIcon.src = "./images/icon-sun.svg";
    themeBackground.src = "./images/bg-desktop-dark.jpg";
    todoInput.classList.remove("dark");
    todoInput.classList.add("light");
    localStorage.setItem("theme", "sun");
  } else {
    themeIcon.src = "./images/icon-moon.svg";
    themeBackground.src = "./images/bg-desktop-light.jpg";
    todoInput.classList.remove("light");
    todoInput.classList.add("dark");
    localStorage.setItem("theme", "moon");
  }
});

applyTheme();
