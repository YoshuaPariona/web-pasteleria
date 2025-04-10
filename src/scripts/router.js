const routes = {
  "/home": "src/pages/home.html",
  "/products": "src/pages/products.html",
  "/about-us": "src/pages/about-us.html",
  "/shopping-cart": "src/pages/shopping-cart.html",
};

export const loadRoute = async () => {
  const hash = window.location.hash || "#/home";
  const route = hash.replace("#", "");
  const file = routes[route] || routes["/home"];
  const app = document.getElementById("app");

  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error("No se pudo cargar la vista");
    const html = await res.text();
    app.innerHTML = html;

    return route;
  } catch (error) {
    app.innerHTML = "<p class='text-red-600'>Error al cargar la vista.</p>";
    return null;
  }
};
