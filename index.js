const PHRASES = [
  "Дело помощи утопающим — дело рук самих утопающих!",
  "Шахматы двигают вперед не только культуру, но и экономику!",
  "Лед тронулся, господа присяжные заседатели!",
];

document.addEventListener("DOMContentLoaded", () => {
  // Participants Carousel
  const participantsList = document.getElementById("participantsList");
  const prevButton = document.getElementById("prevButton");
  prevButton.disabled = true;
  const nextButton = document.getElementById("nextButton");
  const pageIndicator = document.getElementById("pageIndicator");
  const cardsPerPage = 3;
  const totalCards = participantsList.children.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const tickers = document.querySelectorAll(".ticker");

  let currentPage = 1;
  let counter = 0;

  function updateCarousel() {
    const offset = (currentPage - 1) * cardsPerPage * 414;
    participantsList.style.transform = `translateX(-${offset}px)`;
    pageIndicator.textContent = `${currentPage * 3}/${totalPages * 3}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
    counter = 0;
  }

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updateCarousel();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updateCarousel();
    }
  });

  // interval update
  setInterval(() => {
    counter++;

    if (counter > 4) {
      if (currentPage < totalPages) {
        currentPage++;
        updateCarousel();
      } else {
        currentPage = 1;
        updateCarousel();
      }
    }
  }, 1000);

  // Tickers

  function addPhrases(phrase) {
    tickers.forEach((ticker) => {
      const newPhrase = document.createElement("span");
      newPhrase.classList.add("ticker__phrase");
      newPhrase.innerHTML = `${phrase}&nbsp;&#x2022;&nbsp;`;
      ticker.appendChild(newPhrase);
    });
  }

  PHRASES.concat(PHRASES).forEach((phrase) => {
    addPhrases(phrase);
  });
});
