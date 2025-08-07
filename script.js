// Alerta para función de agendar (puedes vincularlo a un botón si lo necesitas)
function agendar() {
  alert("¡Pronto podrás agendar tu cita online!");
}

// Envío del formulario de contacto
document.querySelector('.contacto-form').addEventListener('submit', function (e) {
  e.preventDefault();

  alert("Gracias por tu mensaje. Te responderé pronto 😊");

  // Limpiar campos del formulario
  this.reset();
});

// Scroll suave hacia la sección de contacto
document.querySelector('.scroll-contacto').addEventListener('click', function (e) {
  e.preventDefault();

  const seccionContacto = document.getElementById('contacto');
  seccionContacto.scrollIntoView({ behavior: 'smooth' });
});

// Scroll lento hacia el inicio (cuando se hace clic en "Inicio")
document.querySelector('.scroll-inicio').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Evita que otros enlaces hagan scroll o recarguen
document.querySelectorAll('.no-scroll').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});
