import { renderLogin } from './modules/auth/authView.js';
// import { renderHome } from './modules/books/bookView.js';
import { renderBooks } from './modules/books/bookView.js';
import { renderDiscs } from './modules/discs/discView.js';

export const router = () => {
  const app = document.getElementById('app');
  const hash = window.location.hash;

  app.innerHTML = '';

  switch (hash) {
    case '#/login':
      renderLogin(app);
      break;
    case '#/home':
      app.innerHTML = '<h2>Pagina Principal</h2><nav><a href="#/books">Books</a><a href="#/discs">Discs</a></nav>';
      break;
    case '#/books':
      renderBooks(app);
      break;
    case '#/discs':
      renderDiscs(app);
      break;
    default:
      app.innerHTML = '<h1>Pagina no encontrada</h1>';
      break;
  }
};
