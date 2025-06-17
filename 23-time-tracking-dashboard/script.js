const links = document.querySelectorAll(".first-card__link");
let currentPeriod = "weekly";

fetch("data.json")
  .then((res) => res.json())
  .then((data) => {
    generateCards(data);
    updateView(currentPeriod);
  });

function generateCards(data) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  data.forEach((item, index) => {
    const title = item.title;
    const timeframes = item.timeframes;

    const titleClass = title.toLowerCase().replace(" ", "-");
    const colors = {
      Work: "orange",
      Play: "blue",
      Study: "pink",
      Exercise: "green",
      Social: "purple",
      "Self Care": "yellow",
    };

    const card = document.createElement("div");
    card.className = `card card--${colors[title] || "default"}`;
    card.innerHTML = `
      <div class="card__header"></div>
      <div class="card__container">
        <div class="card__block">
          <h2 class="card__title">${title}</h2>
          <img src="./images/icon-ellipsis.svg" alt="Icon ellipsis" class="card__dots" />
        </div>
        <div class="card__content">
          <div class="card__hours">
            <span class="card__hours--daily">${timeframes.daily.current}hrs</span>
            <span class="card__hours--weekly">${timeframes.weekly.current}hrs</span>
            <span class="card__hours--monthly">${timeframes.monthly.current}hrs</span>
          </div>
          <div class="card__previus">
            <span class="card__previus--daily">Last Day - ${timeframes.daily.previous}hrs</span>
            <span class="card__previus--weekly">Last Week - ${timeframes.weekly.previous}hrs</span>
            <span class="card__previus--monthly">Last Month - ${timeframes.monthly.previous}hrs</span>
          </div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function updateView(period) {
  currentPeriod = period;

  document
    .querySelectorAll(".card__hours span")
    .forEach((el) => el.classList.remove("active"));
  document
    .querySelectorAll(".card__previus span")
    .forEach((el) => el.classList.remove("active"));

  document
    .querySelectorAll(`.card__hours--${period}`)
    .forEach((el) => el.classList.add("active"));
  document
    .querySelectorAll(`.card__previus--${period}`)
    .forEach((el) => el.classList.add("active"));
}

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    links.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");

    const period = this.textContent.trim().toLowerCase();
    updateView(period);
  });
});
