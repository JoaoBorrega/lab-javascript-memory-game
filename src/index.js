const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      // TODO: write some code here

      // Flip the card:
      card.classList.add("turned");

      // Add card to the pickedCards array:
      memoryGame.pickedCards.push(card);

      // If two cards have been picked, check if they are pair:
      if (memoryGame.pickedCards.length === 2) {
        const card1 = memoryGame.pickedCards[0];
        const card2 = memoryGame.pickedCards[1];
        const isPair = memoryGame.checkIfPair(
          card1.dataset.cardName,
          card2.dataset.cardName
        );

        // Update the score on the screen:
        document.querySelector("#pairs-clicked").innerText =
          memoryGame.pairsClicked;
        document.querySelector("#pairs-guessed").innerText =
          memoryGame.pairsGuessed;

        if (isPair) {
          // if is pair keep the cards flipped and clear the pickedCards array:
          card1.classList.add("blocked");
          card2.classList.add("blocked");
          memoryGame.pickedCards = [];

          // Check if the game is finished
          if (memoryGame.checkIfFinished()) {
            setTimeout(() => {
              alert("Congratulations!! You won!");
            }, 500);
          }
        }
        else {
          // If not pair, flip the cards back
          setTimeout(() => {
            card1.classList.remove('turned');
            card2.classList.remove('turned');
            memoryGame.pickedCards = [];
          }, 1000)
        }
      }

      console.log(`Card clicked: ${card}`);
    });
  });
});
