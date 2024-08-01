import header from "../components/header.js";
import footer from "../components/footer.js";
import divfiltros from "../components/div.js";
import card from "../components/card.js";
import data from "../data/dataset.js";
import { filterData, sortData,
computeAverageSpiciness,
computeHottestDish,
computeMildestDish,
computeSpicinessLevels } from "../lib/dataFunctions.js";

  export function Home() {
    const homeDiv = document.createElement('div');
    //...header
    const headerElemen = header();
    homeDiv.appendChild(headerElemen);
    // div
    const divElemen = divfiltros();
    homeDiv.appendChild(divElemen);
    //...card
    //const cardElemen = card();
    //homeDiv.appendChild(cardElemen);
    const filtroPedido = homeDiv.querySelector('[data-testid="select-filter"]');
    filtroPedido.addEventListener("change", (e) => {          
      const platoPrincipal = e.target.value;                 
      filtrosPlato = filterData(data, "mainField", platoPrincipal);     
      rootH.innerHTML = "";    
      rootH.appendChild(renderItems(filtrosPlato));
    });
    /*¿? por preguntar como se harian las funciones de datafuncion se 
    dataFunctions....SI COPIAMOS Y PEGAMOS EL MAIN.JS del DV PEROOO 
    NO TENEMOS UN DOM para llamar al documente.queryselector?¡que estan en main.js
    como llamamos o usamos los selectores si no tenemos nada en el DOM-HTML?
    -mmm... podria ser crear un archivo DIV y ahi podemos hacer el mismos procedimiento 
    que hicimos para el archivo FOOTER?¿

    */


    //---N O T A--
    //AAAAAYAAAAA EN CADA ARCHIVO DE COMPONENTS AGREGAREMOS PARTE DE NUESTRO HTML DE LA SIGUIENTE MANERA COMO EN FOOTER:
    /*const footer = () => {
    const footerElement = document.createElement("footer");
    footerElement.innerHTML = `
      <p class="footer"> &copy; by Ailyn y Brigid</p>
      <p class="footer">Bootcamp de Laboratoria DEV015 3° proyecto</p>  
      `;
  
    return footerElement;
  }; DE ESTA MANERA AÑADIMOS AL HTML EL FOOTER ENTONCES
  IGUAL PODRIAMOS HACER CON LOS DIV DE FILTOR  */










    //...footer
    //const footerElem = footer(footerElem);
   // homeDiv.appendChild(footerElem);
   

    return homeDiv
  };
  export default Home;
  



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