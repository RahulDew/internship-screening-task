const allCards = document.querySelectorAll(".card");
console.log(allCards);

//perform a loop for each card in allCards
allCards.forEach((card) => {
  //select top area of card
  var cardTop = card.querySelector(".card-top");

  console.log(card);
  //adding a click event listener
  cardTop.addEventListener("click", () => {

    // nested looping in allCards
    allCards.forEach((cardItem) => {

    //checking if this cardItem is not equal to card in parent loop 
      if (cardItem != card) {
        cardItem.classList.remove("active"); //removing active class
        cardItem.querySelector("#radio-button").checked = false;
      } else {
        card.classList.add("active"); //adding active class
        card.querySelector("#radio-button").checked = true;
      }

    });
  });
});
