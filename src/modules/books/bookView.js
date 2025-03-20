import { addBook, getBooks } from './bookController.js';

const loadStyles = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './src/modules/books/bookStyles.css';
  document.head.appendChild(link);
}

export const renderBooks = (app) => {
  loadStyles();
  
  const bookForm = `
    <h2>Gestion de Libros</h2>
    <form id="book-form">
      <input type="text" placeholder="Nombre" required />
      <input type="text" placeholder="Autor" required />
      <input type="text" placeholder="Genero" required />
      <input type="number" placeholder="Año" required />
      <button type="submit">Agregar Libro</button>
      <div id="book-error-message" style="color:red;"></div>
    </form>
    <ul id="book-list"></ul>
  `;

  app.innerHTML = bookForm;

  const bookList = document.getElementById('book-list');

  const displayBooks = () => {
    bookList.innerHTML = '';
    const books = getBooks();

    books.forEach((book) => {
      const li = document.createElement('li');
      li.textContent = `${book.name} - ${book.author} (${book.gender}, ${book.year})`;
      bookList.appendChild(li);
    });
  }

  document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const author = e.target[1].value;
    const gender = e.target[2].value;
    const year = e.target[3].value;

    try {
      addBook(name, author, gender, year);
      displayBooks();
      e.target.reset();
      document.getElementById('book-error-message').textContent = '';
    } catch (error) {
      document.getElementById('book-error-message').textContent = error.message;
    }
  });
};
