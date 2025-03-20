import { Disc } from './discModel.js';

let discs = [];

const validateDisc = (name, author, gender, year) => {
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

export const addDisc = (name, author, gender, year) => {
  const validation = validateDisc(name, author, gender, year);
  if (!validation.valid) {
    throw new Error(validation.message);
  }

  const newDisc = new Book(name, author, gender, year);
  discs.push(newDisc);

  return discs;
}

export const getDiscs = () => discs;
