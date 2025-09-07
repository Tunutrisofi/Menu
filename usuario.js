// Verifica sesión al cargar la página
if (!localStorage.getItem('usuarioLogueado')) {
  window.location.href = '../login/login.html';
} else {
  const email = localStorage.getItem('usuarioLogueado');
  document.getElementById('nombre-usuario').textContent = email;
  document.getElementById('correo-usuario').textContent = email;
}

// Botón cerrar sesión
document.getElementById('cerrar-sesion').addEventListener('click', e => {
  e.preventDefault();
  localStorage.removeItem('usuarioLogueado');
  window.location.href = '../login/login.html';
});
