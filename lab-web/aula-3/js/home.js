function initHome() {
  highlightFeaturedCard();
  bindRecipeCardClicks();
}

function highlightFeaturedCard() {
  const featuredCard = document.querySelector(".home__featured-card");

  if (!featuredCard) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(featuredCard);
}

function bindRecipeCardClicks() {
  const recipesContainer = document.querySelector(".home__recipes");

  if (!recipesContainer) return;

  recipesContainer.addEventListener("click", (event) => {
    const card = event.target.closest(".recipe-card");

    if (!card) return;

    const recipeId = card.dataset.id;

    onRecipeCardClick(recipeId, card);
  });
}

function onRecipeCardClick(recipeId, cardElement) {
  console.log(`[Home] Receita selecionada: ${recipeId}`);

  setActiveRecipeCard(cardElement);
}

function setActiveRecipeCard(activeCard) {
  const allCards = document.querySelectorAll(".home__recipes .recipe-card");

  allCards.forEach((card) => card.classList.remove("is-active"));

  activeCard.classList.add("is-active");
}
