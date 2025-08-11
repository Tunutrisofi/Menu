document.addEventListener('DOMContentLoaded', () => {
  const toggleText = document.getElementById('toggle-text');
  const toggleBtn = document.getElementById('toggle-register');
  const formTitle = document.getElementById('form-title');
  const loginFormDiv = document.getElementById('login-form');
  const registerFormDiv = document.getElementById('register-form');
  const loginForm = document.getElementById('form-login');
  const registerForm = document.getElementById('form-register');

  let showingLogin = true;

  // Función para crear o actualizar mensaje de error en un contenedor
  function showError(formDiv, message) {
    let errorEl = formDiv.querySelector('.error-msg');
    if (!errorEl) {
      errorEl = document.createElement('div');
      errorEl.className = 'error-msg';
      errorEl.style.color = 'red';
      errorEl.style.marginTop = '10px';
      errorEl.style.fontWeight = '600';
      formDiv.appendChild(errorEl);
    }
    errorEl.textContent = message;
  }

  // Quitar mensaje de error si existe
  function clearError(formDiv) {
    const errorEl = formDiv.querySelector('.error-msg');
    if (errorEl) {
      errorEl.remove();
    }
  }

  toggleBtn.addEventListener('click', () => {
    if (showingLogin) {
      // Mostrar registro
      formTitle.textContent = 'Crea tu cuenta';
      toggleText.textContent = '¿Ya tienes cuenta?';
      toggleBtn.textContent = 'Iniciar sesión';
      loginFormDiv.classList.add('oculto');
      registerFormDiv.classList.remove('oculto');
      clearError(loginFormDiv);
      clearError(registerFormDiv);
      showingLogin = false;
    } else {
      // Mostrar login
      formTitle.textContent = 'Iniciar sesión';
      toggleText.textContent = '¿Eres nuevo en este sitio?';
      toggleBtn.textContent = 'Regístrate';
      loginFormDiv.classList.remove('oculto');
      registerFormDiv.classList.add('oculto');
      clearError(loginFormDiv);
      clearError(registerFormDiv);
      showingLogin = true;
    }
  });

  // Validar login al enviar
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError(loginFormDiv);

    const email = loginForm['login-email'].value.trim();
    const password = loginForm['login-password'].value.trim();

    if (!email || !password) {
      showError(loginFormDiv, 'Por favor completa todos los campos para iniciar sesión.');
      return;
    }

    // Si todo bien, eliminar error y puedes hacer el envío real aquí
    clearError(loginFormDiv);
    alert('Inicio de sesión exitoso (aquí va tu lógica real)');
    loginForm.reset();
  });

  // Validar registro al enviar
  registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearError(registerFormDiv);

    const campos = [
      'reg-rut', 'reg-nombre', 'reg-apellidoP', 'reg-apellidoM',
      'reg-sexo', 'reg-telefono', 'reg-fechaNac', 'reg-direccion',
      'reg-ciudad', 'reg-pais', 'reg-email', 'reg-password', 'reg-password2'
    ];

    let faltantes = campos.filter(id => {
      const val = registerForm[id].value.trim();
      return !val;
    });

    if (faltantes.length > 0) {
      showError(registerFormDiv, 'Por favor completa todos los campos para crear cuenta.');
      return;
    }

    // Validar que las contraseñas coincidan
    if (registerForm['reg-password'].value !== registerForm['reg-password2'].value) {
      showError(registerFormDiv, 'Las contraseñas no coinciden.');
      return;
    }

    // Si todo bien, eliminar error y continuar
    clearError(registerFormDiv);
    alert('Cuenta creada con éxito (aquí va tu lógica real)');
    registerForm.reset();
  });
});
