const contador = document.querySelector('#cantidad');
const mensaje = document.querySelector('#mensaje');
let cantidad = 0;

document.querySelectorAll('.agregar').forEach((boton) => {
  boton.addEventListener('click', () => {
    cantidad += 1;
    contador.textContent = cantidad;
    mensaje.textContent = `${boton.dataset.producto} se agregó al carrito.`;
  });
});

document.querySelector('#comprar-todo').addEventListener('click', () => {
  cantidad += document.querySelectorAll('.producto').length;
  contador.textContent = cantidad;
  mensaje.textContent = 'Se agregaron los cuatro productos al carrito.';
});

document.querySelectorAll('.foto img').forEach((imagen) => {
  const mostrarPendiente = () => imagen.parentElement.classList.add('sin-imagen');
  imagen.addEventListener('error', mostrarPendiente);
  if (imagen.complete && imagen.naturalWidth === 0) mostrarPendiente();
});
