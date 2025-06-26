document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("emailInput");
  const emailError = document.getElementById("emailError");
  const warningLabel = document.getElementById("warningLabel");
  const emailValue = emailInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    emailInput.classList.add("is-invalid");
    emailError.classList.remove("d-none");
    warningLabel.style.display = "block";
  } else {
    emailInput.classList.remove("is-invalid");
    emailError.classList.add("d-none");
    warningLabel.style.display = "none";

    alert("Thanks for subscribing!");
    emailInput.value = "";
  }
});
