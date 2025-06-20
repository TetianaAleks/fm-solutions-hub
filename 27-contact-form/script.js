const form = document.querySelector(".form__body");
const toast = document.querySelector(".form__toast");
const submitBtn = form.querySelector(".form__submit");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let valid = true;

  form
    .querySelectorAll(".form__error")
    .forEach((err) => (err.textContent = ""));

  form.querySelectorAll("[required]").forEach((input) => {
    const group = input.closest(
      ".form__group, .form__group--inline, .form__group--checkbox"
    );
    const error = group.querySelector(".form__error");

    if (!input.checkValidity()) {
      error.textContent =
        input.type === "email"
          ? "Please enter a valid email address, like example@domain.com"
          : input.type === "checkbox"
          ? "To submit this form, please consent to being contacted"
          : "This field is required";
      input.classList.add("form__input--invalid");
      valid = false;
    } else {
      input.classList.remove("form__input--invalid");
    }
  });

  const queryTypeChecked = form.querySelector(
    'input[name="queryType"]:checked'
  );
  const queryTypeError = form.querySelector(
    ".form__group--inline .form__error"
  );
  if (!queryTypeChecked) {
    queryTypeError.textContent = "Please select a query type";
    valid = false;
  }

  if (valid) {
    submitBtn.disabled = true;
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Sending...";

    toast.hidden = false;
    toast.focus();

    setTimeout(() => {
      toast.hidden = true;
      form.reset();
      document.querySelectorAll(".form__radio").forEach((label) => {
        label.classList.remove("form__radio--selected");
      });
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
      form.querySelector("input").focus();
    }, 4000);
  }
});

form.querySelectorAll("[required]").forEach((input) => {
  input.addEventListener("input", () => {
    const group = input.closest(
      ".form__group, .form__group--inline, .form__group--checkbox"
    );
    const error = group.querySelector(".form__error");
    if (input.checkValidity()) {
      error.textContent = "";
      input.classList.remove("form__input--invalid");
    }
  });
});

const radios = document.querySelectorAll('input[name="queryType"]');
radios.forEach((radio) => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".form__radio").forEach((label) => {
      label.classList.remove("form__radio--selected");
    });
    radio.closest(".form__radio").classList.add("form__radio--selected");
  });
});
