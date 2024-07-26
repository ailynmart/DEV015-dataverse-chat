import header from "../components/header.js";
import footer from "../components/footer.js";
import card from "../components/card.js";
import data from "../data/dataset.js";
import { filterData, sortData,
computeAverageSpiciness,
computeHottestDish,
computeMildestDish,
computeSpicinessLevels } from "../lib/dataFunctions";

  export function Home() {
    const homeDiv = document.createElement('div');
    //...header
    const headerElemen = header();
    homeDiv.appendChild(headerElemen);
    //...card
    const cardElemen = card();
    homeDiv.appendChild(cardElemen);

    //¿? por preguntar como se harian las funciones de datafuncion se 








    //...footer
    const footerElem = footer(footerElem);
    homeDiv.appendChild(footerElem);
   

    return homeDiv
  };



  //export default Home;
  /*const Home = () => {
    const homeDiv = document.createElement('div');
    homeDiv.innerHTML = `
      <h1>Bienvenido a la Página de Inicio</h1>
      <p>Esta es la vista principal de tu aplicación.</p>
    `;
    return homeDiv;
  };*/
  //const rootElement = document.getElementById('root');