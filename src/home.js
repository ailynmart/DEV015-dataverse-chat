// src/views/Home.js

const Home = () => {
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
      <h1>Bienvenido a la Página de Inicio</h1>
      <p>Esta es la vista principal de tu aplicación.</p>
    `;
    return homeDiv;
  };
  
  export default Home;
  