import { addDisc, getDiscs } from './discController.js';

const loadStyles = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.ref = './modules/books/discStyles.css';
  document.head.appendChild(link);
}

export const renderDiscs = (app) => {
  loadStyles();
  
  const discForm = `
    <h2>Gestion de Discos</h2>
    <form id="disc-form">
      <input type="text" placeholder="Nombre" required />
      <input type="text" placeholder="Autor" required />
      <input type="text" placeholder="Genero" required />
      <input type="number" placeholder="Año" required />
      <button type="submit">Agregar Disco</button>
      <div id="disc-error-message" style="color:red;"></div>
    </form>
    <ul id="disc-list"></ul>
  `;

  app.innerHTML = discForm;

  const discList = document.getElementById('disc-list');

  const displayDiscs = () => {
    discList.innerHTML = '';
    const discs = getDiscs();

    discs.forEach((disc) => {
      const li = document.createElement('li');
      li.textContent = `${disc.name} - ${disc.author} (${disc.gender}, ${disc.year})`;
      discList.appendChild(li);
    });
  }

  document.getElementById('disc-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const author = e.target[1].value;
    const gender = e.target[2].value;
    const year = e.target[3].value;

    try {
      addDisc(name, author, gender, year);
      displayDiscs();
      e.target.reset();
      document.getElementById('disc-error-message').textContent = '';
    } catch (error) {
      document.getElementById('disc-error-message').textContent = error.message;
    }
  });
};
