// let cardInfo = {
//   card1: {
//     index: 1,
//     name: "Don't Forget About Me, Demos",
//     artist: "Dominic Fike",
//     genre: "Indie",
//   },
//   card2: {
//     index: 2,
//     name: "Mr. Morale & the Big Steppers",
//     artist: "Kendrick Lamar",
//     genre: "Hip Hop",
//   },
//   card3: {
//     index: 3,
//     name: "The Melodic Blue",
//     artist: "Baby Keem",
//     genre: "Hip Hop",
//   },
//   card4: {
//     index: 4,
//     name: "Scum F*** Flower Boy",
//     artist: "Tyler, The Creator",
//     genre: "Hip-Hop",
//   },
//   card5: {
//     index: 5,
//     name: "Ready To Die",
//     artist: "The Notorious B.I.G",
//     genre: "Hip Hop",
//   },
//   card6: {
//     index: 6,
//     name: "Stories",
//     artist: "Avicii",
//     genre: "Pop",
//   },
// };

// let card1 = document.getElementById("card1")
// card1.innerHTML = cardInfo.card1.name

// let card2 = document.getElementById("card2")
// card2.innerHTML = cardInfo.card2.name

// let card3 = document.getElementById("card3")
// card3.innerHTML = cardInfo.card3.name

// let card4 = document.getElementById("card4")
// card4.innerHTML = cardInfo.card4.name

// let card5 = document.getElementById("card5")
// card5.innerHTML = cardInfo.card5.name

// let card6 = document.getElementById("card6")
// card6.innerHTML = cardInfo.card6.name

// if (!cardInfo.card1.genre.includes("Indie")) {
//     card1.classList += "hidden"

const genreFilter = document.getElementById("genre-filter");
const productCards = document.querySelectorAll(".card");

genreFilter.addEventListener("change", () => {
  productCards.forEach((card) => {
    const genres = card
      .querySelector(".genre")
      .textContent.toLowerCase()
      .trim()
      .slice("genre:".length)
      .split(", ");
    const selectedGenre = genreFilter.value.toLowerCase();
    if (genres.includes(selectedGenre)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});

// function searchProduct() {
//   const input = document.getElementById("filter").value.toUpperCase();
//   const cardContainer = document.getElementById("card-lists");
//   console.log(cardContainer);
//   const cards = cardContainer.querySelectorAll(".card");
//   console.log(cards);

//   for (let i = 0; i < cards.length; i++) {
//     let title = cards[i].querySelector(".card-body h5.card-title");
//     console.log(title);

//     if (title.innerText.toUpperCase().indexOf(input) > -1) {
//       cards[i].style.display = "";
//     } else {
//       cards[i].style.display = "none";
//     }
//   }
// }
