import styles from "../sass/app.scss";

window.onload = function() {
  // prevent FOUC phenomena
  document.querySelector(".no-fouc").classList.remove("no-fouc");

  // global variables
  const cards = document.querySelectorAll("div.card-wrapper");
  const cardWidth = document.getElementById("container").offsetWidth;
  let counter = 1;

  function setInitialStateForCards() {
    // tranlslate/spread cards on the x plane by multiplying the card width by the index of the card
    cards.forEach((item, index) => {
      item.style.transform = `translateX(${cardWidth * index}px)`;
    });
  }

  function toggleCardsFunctionality() {
    const rightAngleButton = document.getElementById("right-angle");
    const leftAngleButton = document.getElementById("left-angle");

    function shuffleCards(movementDirection) {
      if (movementDirection === "rightToLeft") {
        cards.forEach(function(card, index) {
          translateCard(card, index, function(a, b) {
            return a - b;
          });
        });
      } else {
        cards.forEach(function(card, index) {
          translateCard(card, index, function(a, b) {
            return a + b;
          });
        });
      }
    }

    function translateCard(card, index, cb) {
      let newTranslateXValue = cb(
        parseInt(card.style.transform.replace(/[^\d.-]/g, ""), 10),
        cardWidth
      );
      card.style.transition = "transform 1000ms cubic-bezier(0.82, 0, 0, 0.96)";
      card.style.transform = `translateX(${newTranslateXValue}px)`;
      // if (index === counter) {
      //   card.classList.add("activate");
      // }
    }

    rightAngleButton.addEventListener("click", () => {
      if (counter > 1) {
        shuffleCards("leftToRight");
        counter--;
      }
      showCurrentCardNumber(counter);
    });

    leftAngleButton.addEventListener("click", () => {
      if (counter < cards.length) {
        shuffleCards("rightToLeft");
        counter++;
      }
      showCurrentCardNumber(counter);
    });
  }

  function showCurrentCardNumber(counter) {
    const el = document.getElementById("card-number");
    el.innerHTML = `0${counter}`;
  }

  setInitialStateForCards();
  showCurrentCardNumber(counter);
  toggleCardsFunctionality();
};
