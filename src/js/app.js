import styles from "../sass/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll("div.card");
  const parentContainerWidth = document.getElementById("container").offsetWidth;
  let counter = 1;

  // create initial state for the elements
  cards.forEach((item, index) => {
    if (index === 0) {
      item.style.left = "0px";
    } else if (index === 1) {
      item.style.left = `${parentContainerWidth}px`;
    } else {
      item.style.left = `${parentContainerWidth * 2}px`;
    }
  });

  const rightAngleButton = document.getElementById("right-angle");
  const leftAngleButton = document.getElementById("left-angle");

  rightAngleButton.addEventListener("click", () => {
    if (counter > 1) {
      cards.forEach(item => {
        item.style.left = `${parseInt(item.style.left, 10) +
          parentContainerWidth}px`;
      });
      counter--;
    }
  });

  leftAngleButton.addEventListener("click", () => {
    if (counter < cards.length) {
      cards.forEach(item => {
        item.style.left = `${parseInt(item.style.left, 10) -
          parentContainerWidth}px`;
      });
      counter++;
    }
  });
});
