const loadStyles = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = './src/modules/home/homeStyles.css';

  link.onload = () => {
    console.log('Estilo cargado');
  }
  document.head.appendChild(link);
}

export const renderHome = (app) => {
  loadStyles();
  
  const homeMenu = `
    <h2>Pagina Principal</h2>
    <nav><a href="#/books">Books</a></nav>
    <nav><a href="#/discs">Discs</a></nav>
  `;

  app.innerHTML = homeMenu;
};
