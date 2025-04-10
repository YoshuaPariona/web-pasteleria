import { loadRoute } from "./router.js";
import { initProductosPage } from "./products-controller.js";

const cargarApp = async () => {
  const ruta = await loadRoute();

  if (ruta === "/products") {
    initProductosPage();
  }

  // podrías añadir más controladores aquí si necesitas
};

window.addEventListener("hashchange", cargarApp);
window.addEventListener("DOMContentLoaded", cargarApp);


/*


document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll('.tabs button');
  const items = document.querySelectorAll('.gallery .item');

  botones.forEach(boton => {
    boton.addEventListener('click', () => {
      const categoria = boton.dataset.categoria.toLowerCase();

      botones.forEach(b => b.classList.remove('active'));
      boton.classList.add('active');

      items.forEach(item => {
        if (categoria === 'todos' || item.classList.contains(categoria)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

// Inicializamos el carrito vacío
let carrito = [];
let totalCarrito = 0;

// Función para agregar productos al carrito
const agregarAlCarrito = (producto) => {
// Buscamos si el producto ya está en el carrito
const productoExistente = carrito.find(item => item.id === producto.id);

if (productoExistente) {
  // Si el producto ya está, aumentamos la cantidad
  productoExistente.cantidad++;
} else {
  // Si no está, lo agregamos al carrito
  carrito.push({ ...producto, cantidad: 1 });
}

// Actualizamos la vista del carrito
actualizarCarrito();
};

// Función para actualizar el carrito
const actualizarCarrito = () => {
const listaCarrito = document.getElementById('lista-carrito');
listaCarrito.innerHTML = '';  // Limpiamos el carrito

// Calculamos el total del carrito
totalCarrito = 0;
carrito.forEach(producto => {
  totalCarrito += producto.precio * producto.cantidad;

  // Creamos un nuevo elemento para cada producto
  const li = document.createElement('li');
  li.textContent = `${producto.nombre} x${producto.cantidad} - S/ ${producto.precio * producto.cantidad}`;
  listaCarrito.appendChild(li);
});

// Actualizamos el total
document.getElementById('total-carrito').textContent = totalCarrito.toFixed(2);
};

// Función para vaciar el carrito
const vaciarCarrito = () => {
carrito = [];
actualizarCarrito();
};

// Añadir los eventos a los botones de "Agregar al carrito"
const botonesAgregar = document.querySelectorAll('.agregar-carrito');
botonesAgregar.forEach(boton => {
boton.addEventListener('click', (e) => {
  const card = e.target.closest('.card');
  const producto = {
    id: card.dataset.id,
    nombre: card.dataset.nombre,
    precio: parseFloat(card.dataset.precio)
  };
  agregarAlCarrito(producto);
});
});

// Evento para vaciar el carrito
document.getElementById('vaciar-carrito').addEventListener('click', vaciarCarrito);

// Evento para finalizar la compra (puedes agregar la lógica de la compra aquí)
document.getElementById('finalizar-compra').addEventListener('click', () => {
if (carrito.length === 0) {
  alert('El carrito está vacío. Por favor, agrega productos antes de finalizar.');
} else {
  alert('¡Gracias por tu compra! Tu pedido será procesado.');
  carrito = [];
  actualizarCarrito();
}
});
*/