// frontend/js/dashboard.js
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');

  if (!token) {
    // No hay token, redirigir al login
    window.location.href = '/login';
  }

  // Aquí podrías hacer una verificación opcional al backend si deseas validar el token
  // Ejemplo:
  // fetch('/api/protected', { headers: { Authorization: 'Bearer ' + token } })
});


/* if (!localStorage.getItem('token')) {
  window.location.href = 'login.html';
} */

function logout() {
  localStorage.removeItem('token');
  window.location.href = '/login';
}
