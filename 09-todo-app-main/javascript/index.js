let isSun = true;

const themeIcon = document.querySelector("#theme-icon");
const themeBackground = document.querySelector("#theme-background");

themeIcon.addEventListener("click", () => {
  if (isSun) {
    themeIcon.src = "./images/icon-moon.svg";
    themeBackground.src = "./images/bg-desktop-light.jpg";
  } else {
    themeIcon.src = "./images/icon-sun.svg";
    themeBackground.src = "./images/bg-desktop-dark.jpg"
  }
  isSun = !isSun;
});
