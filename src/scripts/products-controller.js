import { renderCardsFromJSON, filtrarPorCategoria } from "./product-card.js";

export const initProductsPage = async () => {
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

export const initTopProducts = () => {
  fetch("src/data/products.json")
    .then(res => res.json())
    .then(data => {
      const aleatorios = [...data]
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

      renderCardsFromJSON(aleatorios);
    });
}