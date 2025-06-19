const billInput = document.getElementById("bill");
const peopleInput = document.getElementById("people");
const tipButtons = document.querySelectorAll(".calculator__tip-btn");
const customTipInput = document.getElementById("customTip");
const tipAmountDisplay = document.getElementById("tipAmount");
const totalAmountDisplay = document.getElementById("totalAmount");
const resetBtn = document.getElementById("reset");

let tipPercent = 0;

function calculate() {
  const bill = parseFloat(billInput.value);
  const people = parseInt(peopleInput.value);

  const errorMsg = document.getElementById("peopleError");

  const billValid = bill > 0 && !isNaN(bill);
  const peopleValid = people > 0 && !isNaN(people);

  if (!peopleValid) {
    peopleInput.classList.add("error");
    errorMsg.style.display = "block";
  } else {
    peopleInput.classList.remove("error");
    errorMsg.style.display = "none";
  }

  const hasAnyInput =
    billInput.value.trim() !== "" ||
    peopleInput.value.trim() !== "" ||
    customTipInput.value.trim() !== "" ||
    tipPercent > 0;

  resetBtn.disabled = !hasAnyInput;

  if (!billValid || !peopleValid) {
    tipAmountDisplay.textContent = "$0.00";
    totalAmountDisplay.textContent = "$0.00";
    return;
  }

  const totalTip = (bill * tipPercent) / 100;
  const tipPerPersonRaw = totalTip / people;
  const billPerPerson = bill / people;
  const totalPerPerson = billPerPerson + tipPerPersonRaw;

  tipAmountDisplay.textContent = `$${formatTip(tipPerPersonRaw)}`;
  totalAmountDisplay.textContent = `$${formatTotal(totalPerPerson)}`;
}

function formatTip(value) {
  return (Math.floor(value * 100) / 100).toFixed(2);
}

function formatTotal(value) {
  return value.toFixed(2);
}

tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    tipPercent = parseFloat(btn.textContent);
    customTipInput.value = "";
    customTipInput.classList.remove("error");
    const errorMsg = document.getElementById("tipError");
    errorMsg.style.display = "none";
    calculate();
  });
});

customTipInput.addEventListener("input", () => {
  tipButtons.forEach((b) => b.classList.remove("active"));
  tipPercent = parseFloat(customTipInput.value) || 0;
  calculate();
});

customTipInput.addEventListener("keydown", function (e) {
  if (e.key === "-" || e.key === "e" || e.key === "+") {
    e.preventDefault();
  }
});
billInput.addEventListener("keydown", function (e) {
  if (e.key === "-" || e.key === "e" || e.key === "+") {
    e.preventDefault();
  }
});
peopleInput.addEventListener("keydown", function (e) {
  if (e.key === "-" || e.key === "e" || e.key === "+") {
    e.preventDefault();
  }
});

billInput.addEventListener("input", calculate);
peopleInput.addEventListener("input", calculate);

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";
  customTipInput.value = "";
  tipButtons.forEach((b) => b.classList.remove("active"));
  tipAmountDisplay.textContent = "$0.00";
  totalAmountDisplay.textContent = "$0.00";
  resetBtn.disabled = true;
});
