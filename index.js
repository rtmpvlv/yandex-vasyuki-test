/* Participants Carousel */

document.addEventListener("DOMContentLoaded", () => {
  const participantsList = document.getElementById("participantsList");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const pageIndicator = document.getElementById("pageIndicator");
  const cardsPerPage = 3;
  const totalCards = participantsList.children.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  let currentPage = 1;

  function updateCarousel() {
    const offset = (currentPage - 1) * cardsPerPage * 414;
    participantsList.style.transform = `translateX(-${offset}px)`;
    pageIndicator.textContent = `${currentPage * 3}/${totalPages * 3}`;
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
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

  // Initial update
  updateCarousel();

  // interval update
  setInterval(() => {
    if (currentPage < totalPages) {
      currentPage++;
      updateCarousel();
    } else {
      currentPage = 1;
      updateCarousel();
    }
  }, 4000);
});
