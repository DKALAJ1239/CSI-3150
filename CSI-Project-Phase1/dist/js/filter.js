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