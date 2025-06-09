const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailValidation = document.getElementById("email__validation");

const card = document.getElementById("card");
const success = document.getElementById("success");
const setEmail = document.getElementById("set-email");

const dismiss = document.getElementById("dismiss");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function handleSubmit(e) {
  e.preventDefault();

  const email = emailInput.value.trim();

  if (!isValidEmail(email)) {
    emailValidation.style.display = "block";
    emailInput.classList.add("invalid");
  } else {
    emailValidation.style.display = "none";
    emailInput.classList.remove("invalid");

    card.style.display = "none";
    success.style.display = "block";

    setEmail.innerText = email;

    form.reset();
  }
}

function dismissButton(e) {
  if (innerWidth >= 900) card.style.display = "flex";
  else card.style.display = "block";
  success.style.display = "none";
}

function handleResize() {
  if (innerWidth >= 900) card.style.display = "flex";
  else card.style.display = "block";
}

form.addEventListener("submit", handleSubmit);
dismiss.addEventListener("click", dismissButton);
window.addEventListener("resize", handleResize);
