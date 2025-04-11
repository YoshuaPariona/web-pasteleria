import { addToCart } from "./cart.js";

export const renderCardsFromJSON = (data) => {
  const contenedor = document.getElementById("products-container");
  contenedor.innerHTML = "";

  data.forEach(prod => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-xl shadow-md w-52 text-center p-4";

    card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}" class="w-full h-36 object-cover rounded-xl mb-2" />
      <h2 class="text-lg font-semibold text-gray-800">${prod.name}</h2>
      <p class="text-sm text-gray-500 mb-1">Stock: ${prod.stock}</p>
      <p class="text-lg font-bold text-orange-600">$${prod.price.toFixed(2)}</p>
      <button class="mt-3 bg-orange-400 hover:bg-orange-500 text-white px-4 py-1 rounded-md transition">
        Agregar
      </button>
    `;

    const addButton = card.querySelector("button");
    addButton.addEventListener("click", () => {
      addToCart(prod);
      //document.getElementById('cart-count').textContent = localStorage.getItem('cartCount')
    });

    contenedor.appendChild(card);
  });
};

export const filtrarPorCategoria = (productos, categoria) => {
  if (categoria === "todos") {
    return productos;
  }
  return productos.filter(prod => prod.category === categoria);
};