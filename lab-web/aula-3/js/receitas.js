function initReceitas() {
  bindRecipeRowClicks();
  observeRecipeRows();
}

function bindRecipeRowClicks() {
  const receitasGrid = document.querySelector(".receitas__grid");

  if (!receitasGrid) return;

  receitasGrid.addEventListener("click", (event) => {
    const row = event.target.closest(".recipe-row");

    if (!row) return;

    const recipeId = row.dataset.id;

    onRecipeRowClick(recipeId, row);
  });
}

function onRecipeRowClick(recipeId, rowElement) {
  console.log(`[Receitas] Receita selecionada: ${recipeId}`);

  setActiveRecipeRow(rowElement);
}

function setActiveRecipeRow(activeRow) {
  const allRows = document.querySelectorAll(".receitas__grid .recipe-row");

  allRows.forEach((row) => row.classList.remove("is-active"));

  activeRow.classList.add("is-active");
}

function observeRecipeRows() {
  const rows = document.querySelectorAll(".receitas__grid .recipe-row");

  if (!rows.length) return;

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
      threshold: 0.2,
    },
  );

  rows.forEach((row) => observer.observe(row));
}
