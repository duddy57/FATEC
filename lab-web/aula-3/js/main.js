document.addEventListener("DOMContentLoaded", () => {
  try {
    bootstrap();
  } catch (error) {
    console.error("[Main] Falha crítica na inicialização da aplicação:", error);
  }
});

function bootstrap() {
  initHome();
  initReceitas();
  initDiet();

  console.info("[Main] Aplicação inicializada com sucesso.");
}
