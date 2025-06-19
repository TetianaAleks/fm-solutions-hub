const ratingButtons = document.querySelectorAll(".rating-card__option");
const submitBtn = document.querySelector(".rating-card__submit");
const ratingCard = document.querySelector(".rating-card");
const thankYouCard = document.querySelector(".thankyou-card");
const scoreOutput = document.querySelector(".thankyou-card__score");

let selectedRating = null;

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedRating = btn.textContent;
    ratingButtons.forEach((b) =>
      b.classList.remove("rating-card__option--active")
    );
    btn.classList.add("rating-card__option--active");
  });
});

submitBtn.addEventListener("click", () => {
  if (!selectedRating) return;
  ratingCard.style.display = "none";
  thankYouCard.classList.add("thankyou-card--visible");
  scoreOutput.textContent = selectedRating;
});
