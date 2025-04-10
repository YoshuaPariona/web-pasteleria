import { renderCardsFromJSON, filtrarPorCategoria } from "./products.js";

export const initProductosPage = async () => {
  const res = await fetch("src/data/products.json");
  const data = await res.json();
  renderCardsFromJSON(data);

  const buttons = document.querySelectorAll(".tabs button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const categoria = button.getAttribute("data-categoria");
      const filtrados = filtrarPorCategoria(data, categoria);
      renderCardsFromJSON(filtrados);
    });
  });
};