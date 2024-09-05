let isSun = localStorage.getItem("theme") === "sun";

if (localStorage.getItem("theme") === null) {
  isSun = true;
  localStorage.setItem("theme", "sun");
}

const themeIcon = document.querySelector("#theme-icon");
const themeBackground = document.querySelector("#theme-background");

const body = document.body;

const applyTheme = () => {
  if (isSun) {
    themeIcon.src = "./images/icon-sun.svg";
    themeBackground.src = "./images/bg-desktop-dark.jpg";
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    themeIcon.src = "./images/icon-moon.svg";
    themeBackground.src = "./images/bg-desktop-light.jpg";
    body.classList.remove("light");
    body.classList.add("dark");
  }
};

themeIcon.addEventListener("click", () => {
  isSun = !isSun;
  if (isSun) {
    themeIcon.src = "./images/icon-sun.svg";
    themeBackground.src = "./images/bg-desktop-dark.jpg";
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "sun");
  } else {
    themeIcon.src = "./images/icon-moon.svg";
    themeBackground.src = "./images/bg-desktop-light.jpg";
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "moon");
  }
});

applyTheme();
