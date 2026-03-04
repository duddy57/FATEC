function initDiet() {
  bindDietCardClicks();
  observeDietCards();
}

function bindDietCardClicks() {
  const dietGrid = document.querySelector(".diet__grid");

  if (!dietGrid) return;

  dietGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".diet__card");

    if (!card) return;

    const recipeId = card.dataset.id;

    onDietCardClick(recipeId, card);
  });
}

function onDietCardClick(recipeId, cardEl) {
  console.log(`[Diet] Receita saudável selecionada: ${recipeId}`);

  setActiveDietCard(cardEl);
}

function setActiveDietCard(activeCard) {
  const allDietCards = document.querySelectorAll(".diet__card");

  allDietCards.forEach((card) => card.classList.remove("is-active"));

  activeCard.classList.add("is-active");
}

function observeDietCards() {
  const dietCards = document.querySelectorAll(".diet__card");

  if (!dietCards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.25,
    },
  );

  dietCards.forEach((card) => observer.observe(card));
}
