const boton = document.getElementById('Dark-mode');

boton.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');

  // Cambiar el texto del botón según el modo
  if (document.body.classList.contains('modo-oscuro')) {
    boton.textContent = 'Modo claro';
  } else {
    boton.textContent = 'Modo oscuro';
  }
});