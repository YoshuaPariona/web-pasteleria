import { loadRoute } from "./router.js";
import { initTopProducts, initProductsPage } from "./products-controller.js";
import { renderCart, updateCartCounter } from "./cart.js";

const cargarApp = async () => {
  const ruta = await loadRoute();

  if (ruta === "/home") {
    initTopProducts();
  } else if (ruta === "/products") {
    initProductsPage();
  } else if (ruta === "/shopping-cart") {
    const waitForCart = setInterval(() => {
      if (document.getElementById("cart-items")) {
        clearInterval(waitForCart);
        renderCart();
      }
    }, 10); // Chequea cada 10ms hasta que el DOM esté listo
  }
};

window.addEventListener("hashchange", () => {
  cargarApp();
  updateCartCounter();
});

window.addEventListener("DOMContentLoaded", () => {
  cargarApp();
  updateCartCounter();
});