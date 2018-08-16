import styles from "../sass/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("div.card-wrapper");
  const cardWidth = document.getElementById("container").offsetWidth;
  let counter = 1;

  // create initial state for the elements
  cards.forEach((item, index) => {
    item.style.transform = `translateX(${cardWidth * index}px)`;
    // if (index !== 0) {
    //   item.style.paddingLeft = "200px";
    // }
  });

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
    }
  });

  leftAngleButton.addEventListener("click", () => {
    if (counter < cards.length) {
      cards.forEach((item, index) => {
        let newTranslateXValue =
          parseInt(item.style.transform.replace(/[^\d.-]/g, ""), 10) -
          cardWidth;
        item.style.transform = `translateX(${newTranslateXValue}px)`;
        // if (index === counter) {
        //   item.style.paddingLeft = "0px";
        // }
      });
      counter++;
    }
  });
});
