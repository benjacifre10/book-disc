import { login } from './authController.js';

export const renderLogin = (app) => {
  const loginForm = `
    <h2>Login</h2>
    <form id="login-form">
      <input type="email" placeholder="Email" autocomplete="off" required />
      <input type="password" placeholder="Contraseña" autocomplete="current-password" required />
      <button type="submit">Iniciar sesión</button>
      <div id="error-message" style="color:red;"></div>
  `;

  app.innerHTML = loginForm;

  document
    .getElementById('login-form')
    .addEventListener('submit', (e) => {
      e.preventDefault();

      const email = e.target[0].value;
      const password = e.target[1].value;

      try {
        login(email, password);
        window.location.hash = '#/home';
      }  catch (error) {
        document.getElementById('error-message').textContent = error.message;
      }
    });
};
