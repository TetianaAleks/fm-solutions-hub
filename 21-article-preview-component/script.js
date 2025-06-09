const footerButton = document.getElementById("footer-button");
const cardShare = document.getElementById("card-share");
const cardSvg = document.getElementById("card-svg");
const cardFooter = document.getElementsByClassName("card__footer")[0];

const showShare = (e) => {
  e.stopPropagation();

  if (!footerButton.classList.contains("clicked")) {
    footerButton.classList.add("clicked");
    cardSvg.classList.add("clicked");
    cardShare.style.display = "block";
    if (innerWidth <= 900) cardFooter.style.marginBottom = "1.2rem";

    document.addEventListener("click", closeShareOnOutsideClick);
  } else {
    closeShare();
  }
};

const closeShare = () => {
  footerButton.classList.remove("clicked");
  cardSvg.classList.remove("clicked");
  cardShare.style.display = "none";
  if (innerWidth <= 900) cardFooter.style.marginBottom = "2rem";

  document.removeEventListener("click", closeShareOnOutsideClick);
};

const closeShareOnOutsideClick = (e) => {
  if (!footerButton.contains(e.target) && !cardShare.contains(e.target)) {
    closeShare();
  }
};

footerButton.onclick = showShare;
