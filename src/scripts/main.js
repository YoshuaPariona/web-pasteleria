import { loadRoute } from "./router.js";
import { initTopProducts, initProductsPage } from "./products-controller.js";
import { renderCart } from "./cart.js";

const cargarApp = async () => {
  const ruta = await loadRoute();

  if (ruta === "/home") {
    initTopProducts();
  } else if (ruta === "/products") {
    initProductsPage();
  } else if (ruta === "/shopping-cart") {
    renderCart();
  } 
};

window.addEventListener("hashchange", cargarApp);
window.addEventListener("DOMContentLoaded", cargarApp);
