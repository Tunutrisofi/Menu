// Funciones generales
function agendar() {
  alert("¡Pronto podrás agendar tu cita online!");
}

// Contacto - manejo del formulario
const contactoForm = document.querySelector('.contacto-form');
if (contactoForm) {
  contactoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te responderé pronto 😊");
    this.reset();
  });
}

// Scroll suave al contacto
const scrollContacto = document.querySelector('.scroll-contacto');
if (scrollContacto) {
  scrollContacto.addEventListener('click', function (e) {
    e.preventDefault();
    const seccionContacto = document.getElementById('contacto');
    if (seccionContacto) seccionContacto.scrollIntoView({ behavior: 'smooth' });
  });
}

// Scroll suave al inicio
const scrollInicio = document.querySelector('.scroll-inicio');
if (scrollInicio) {
  scrollInicio.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Prevenir scroll para enlaces sin acción
document.querySelectorAll('.no-scroll').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});
