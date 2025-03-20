import { Book } from './bookModel.js';

let books = [];

const validateBook = (name, author, gender, year) => {
  if (!name || !author || !gender || !year) {
    return {
      valid: false,
      message: "Todos los campos son obligatorios."
    };
  }

  if (isNaN(year) || year <= 0) {
    return {
      valid: false,
      message: "El año de publicacion debe ser un numero valido."
    };
  }

  return {
    valid: true
  };
}

export const addBook = (name, author, gender, year) => {
  const validation = validateBook(name, author, gender, year);
  if (!validation.valid) {
    throw new Error(validation.message);
  }

  const newBook = new Book(name, author, gender, year);
  books.push(newBook);

  return books;
}

export const getBooks = () => books;
