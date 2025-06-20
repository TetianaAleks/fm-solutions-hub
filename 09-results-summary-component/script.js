document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".results__container");
      container.innerHTML = "";

      const colorClasses = ["red", "orange", "teal", "blue"];

      data.forEach((item, index) => {
        const row = document.createElement("div");
        row.className = `results__row results__row--${colorClasses[index]}`;

        row.innerHTML = `
          <div class="results__left">
            <img
              src="${item.icon}"
              alt="${item.category} icon"
              class="results__icon"
              loading="lazy"
            />
            <p class="results__name">${item.category}</p>
          </div>
          <div class="results__right">
            <p class="results__score"><strong>${item.score}</strong> / 100</p>
          </div>
        `;

        container.appendChild(row);
      });
    })
    .catch((error) => console.error("Error loading data:", error));
});
