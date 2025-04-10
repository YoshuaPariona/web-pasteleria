export const getCartFromLocalStorage = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    return cart;
};

export const saveCartToLocalStorage = (cart) => {
localStorage.setItem("cart", JSON.stringify(cart));
};

export const addToCart = (product) => {
let cart = getCartFromLocalStorage();

const productIndex = cart.findIndex((item) => item.name === product.name);
if (productIndex !== -1) {
cart[productIndex].quantity += 1;
} else {
cart.push({ ...product, quantity: 1 });
}

saveCartToLocalStorage(cart);
};

export const renderCart = () => {
    const cart = getCartFromLocalStorage();
    const cartContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    cartContainer.innerHTML = "";
  
    if (cart.length === 0) {
      cartContainer.innerHTML = "<p>Tu carrito está vacío.</p>";
      totalPriceElement.textContent = "$0.00";
      return;
    }
    
    let total = 0;
    cart.forEach(item => {
      const cartCard = document.createElement("div");
      cartCard.className = "bg-white rounded-xl shadow-md p-4 flex justify-between items-center";
  
      cartCard.innerHTML = `
        <div class="flex items-center">
          <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-xl mr-4" />
          <div>
            <h3 class="text-lg font-semibold text-gray-800">${item.name}</h3>
            <p class="text-sm text-gray-500">Cantidad: ${item.quantity}</p>
            <p class="text-lg font-bold text-orange-600">$${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
        <button class="text-red-500 hover:text-red-700" data-name="${item.name}">Eliminar</button>
      `;
      
      const removeButton = cartCard.querySelector("button");
      removeButton.addEventListener("click", (event) => {
        const productName = event.target.dataset.name;
        removeFromCart(productName);
      });
  
      cartContainer.appendChild(cartCard);
      
      total += item.price * item.quantity;
    });
  
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  };
  
  export const removeFromCart = (productName) => {
    let cart = getCartFromLocalStorage();
    
    cart = cart.filter(item => item.name !== productName);
    
    saveCartToLocalStorage(cart);
    
    renderCart();
  };
  