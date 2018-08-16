import styles from "../sass/app.scss";

document.addEventListener("DOMContentLoaded", () => {
  let cards = document.querySelectorAll("div.card");
  let parentContainerWidth = document.getElementById("container").offsetWidth;

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
    cards.forEach(item => {
      item.style.left = `${parseInt(item.style.left, 10) +
        parentContainerWidth}px`;
    });
  });

  leftAngleButton.addEventListener("click", () => {
    cards.forEach(item => {
      item.style.left = `${parseInt(item.style.left, 10) -
        parentContainerWidth}px`;
    });
  });
});
