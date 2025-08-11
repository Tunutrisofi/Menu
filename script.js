// --------- Funciones generales ---------
function agendar() {
  alert("¡Pronto podrás agendar tu cita online!");
}

/* Contacto: enviar */
const contactoForm = document.querySelector('.contacto-form');
if (contactoForm) {
  contactoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Gracias por tu mensaje. Te responderé pronto 😊");
    this.reset();
  });
}

/* Scroll suave a contacto (si existe) */
const scrollContacto = document.querySelector('.scroll-contacto');
if (scrollContacto) {
  scrollContacto.addEventListener('click', function (e) {
    e.preventDefault();
    const seccionContacto = document.getElementById('contacto');
    if (seccionContacto) seccionContacto.scrollIntoView({ behavior: 'smooth' });
  });
}

/* Scroll al inicio */
const scrollInicio = document.querySelector('.scroll-inicio');
if (scrollInicio) {
  scrollInicio.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* Evitar comportamiento de enlaces sin función */
document.querySelectorAll('.no-scroll').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
  });
});


// --------- Lógica de la página login.html (si existe) ---------
const toggleLoginBtn = document.getElementById('toggle-login');
const toggleRegisterBtn = document.getElementById('toggle-register');
const loginFormContainer = document.getElementById('login-form');
const registerFormContainer = document.getElementById('register-form');

if (toggleLoginBtn && toggleRegisterBtn && loginFormContainer && registerFormContainer) {
  toggleLoginBtn.addEventListener('click', () => {
    toggleLoginBtn.classList.add('active');
    toggleRegisterBtn.classList.remove('active');
    loginFormContainer.classList.remove('oculto');
    registerFormContainer.classList.add('oculto');
  });

  toggleRegisterBtn.addEventListener('click', () => {
    toggleRegisterBtn.classList.add('active');
    toggleLoginBtn.classList.remove('active');
    registerFormContainer.classList.remove('oculto');
    loginFormContainer.classList.add('oculto');
  });
}

/* Manejo de submit de login */
const formLogin = document.getElementById('form-login');
if (formLogin) {
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    // Aquí va la lógica real de autenticación (API). Por ahora:
    const email = document.getElementById('login-email').value;
    alert(`Sesión iniciada (simulado) para: ${email}`);
    // opcional: redirigir al index
    window.location.href = 'index.html';
  });
}

/* Manejo de submit de registro */
const formRegister = document.getElementById('form-register');
if (formRegister) {
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-nombre').value;
    const email = document.getElementById('reg-email').value;
    const p1 = document.getElementById('reg-password').value;
    const p2 = document.getElementById('reg-password2').value;

    if (p1 !== p2) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    // Aquí va la lógica real de registro (API). Por ahora:
    alert(`Cuenta creada (simulado) para: ${name} — ${email}`);
    window.location.href = 'index.html';
  });
}
