const titulo = document.querySelector('.animar');
const modal = document.getElementById('modal');
const mensaje = document.getElementById('mensaje');
const cerrar = document.getElementById('cerrar');

titulo.addEventListener('click', () => {
  mensaje.textContent = '¡Bienvenido a la Repostería Sandra Repos!';
  modal.style.display = 'flex';
});

titulo.addEventListener('contextmenu', (e) => {
  e.preventDefault();