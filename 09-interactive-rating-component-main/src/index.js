let selectedRating = null;

const stars = document.querySelectorAll(".star");
const submitButton = document.querySelector("#submit-btn");
const rate = document.querySelector(".rate > span");
const container = document.querySelector(".container");
const thankYou = document.querySelector(".thank-you");

stars.forEach((star, index) => {
  star.addEventListener("click", () => {
    selectedRating = index + 1;
    stars.forEach((star) => star.classList.remove("active"));

    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("active");
    }
  });
});

submitButton.addEventListener("click", () => {
  if (selectedRating !== null) {
    rate.innerHTML = `${selectedRating}`
    container.classList.add("hidden");
    thankYou.classList.add("visible");
  } else {
    alert("Please select a rating before submitting.");
  }
});
