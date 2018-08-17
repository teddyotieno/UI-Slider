import styles from "../sass/app.scss";

window.onload = function() {
  // prevent FOUC phenomena
  document.querySelector(".no-fouc").classList.remove("no-fouc");

  const cards = document.querySelectorAll("div.card-wrapper");
  const cardWidth = document.getElementById("container").offsetWidth;
  let counter = 1;

  // create initial state for the elements
  cards.forEach((item, index) => {
    item.style.transform = `translateX(${cardWidth * index}px)`;
  });

  function toggleCardsFunctionality() {
    const rightAngleButton = document.getElementById("right-angle");
    const leftAngleButton = document.getElementById("left-angle");

    rightAngleButton.addEventListener("click", () => {
      if (counter > 1) {
        cards.forEach(item => {
          let newTranslateXValue =
            parseInt(item.style.transform.replace(/[^\d.-]/g, ""), 10) +
            cardWidth;
          item.style.transform = `translateX(${newTranslateXValue}px)`;
        });
        counter--;
        showCurrentCardNumber(counter);
      }
    });

    leftAngleButton.addEventListener("click", () => {
      if (counter < cards.length) {
        cards.forEach((item, index) => {
          let newTranslateXValue =
            parseInt(item.style.transform.replace(/[^\d.-]/g, ""), 10) -
            cardWidth;
          item.style.transform = `translateX(${newTranslateXValue}px)`;
          if (index === counter) {
            item.classList.add("activate");
          }
        });
        counter++;
        showCurrentCardNumber(counter);
      }
    });
  }

  function showCurrentCardNumber(counter) {
    const el = document.getElementById("card-number");
    el.innerHTML = `0${counter}`;
  }

  showCurrentCardNumber(counter);
  toggleCardsFunctionality();
};
