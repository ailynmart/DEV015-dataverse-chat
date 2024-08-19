import header from "../components/header.js";
//import footer from "../components/footer.js";
import {labels} from "../components/div.js";
import {renderItems } from "../components/card.js";
import data from "../data/dataset.js";
//import { main } from "../components/mainDV.js";
import { filterData, sortData,
/*computeAverageSpiciness,
computeHottestDish,
computeMildestDish,
computeSpicinessLevels*/ } from "../lib/dataFunctions.js";
//import { updateResult } from "../card.js";
  export function home() {
    document.title=`HOME`;
    const homeDiv = document.createElement("div");
    //...HEADER
    const headerElemen = header();
    homeDiv.appendChild(headerElemen);
    // trae los selectores LABELS
    const divFiltross = document.createElement('nav');
    homeDiv.appendChild(divFiltross);
    divFiltross.innerHTML = `
   <div class="flex-container">
      <label for="filtro-pedido">TIPO DE PEDIDO</label>
      <select data-testid="select-filter" name="pedido" id="filtro-pedido">
        <option value="Bebidas Picantes">Bebidas</option>
        <option value="Plato Principal">Plato Principal</option>
        <option value="Sopas y Caldos">Sopas y Caldos</option>
        <option value="Antojitos y Botanas">Antojitos y Botanas</option>
        <option value="Postres">Postres</option>
        <option value="Salsa y guarniciones">Salsas y Guarniciones</option>
      </select>
      <label for="filtro-picante">NIVEL DE PICANTE</label>
      <select data-testid="select-filterPicante" name="picante" id="filtro-picante">
        <option value="Alto"> :guindilla::guindilla::guindilla: </option>
        <option value="Medio"> :guindilla::guindilla:</option>
        <option value="Bajo">:guindilla:</option>
      </select>
      <label for="filtro-alfabetica"> Ordenar de manera </label>
      <select data-testid="select-sort" name="alfabetica" id="filtro-alfabetica">
        <option value="asc">A - Z</option>
        <option value="desc">Z - A</option>
      </select>
    </div>
     <button data-testid="button-clear">Limpiar Pedido</button>
    <div id="root"></div>
    <div id="resultado-container"></div>
    <label for="calculationType">Tipo de Cálculo</label>
    <select id="calculationType" name="calculationType">
      <option value="averageSpiciness">Promedio de picante</option>
      <option value="hottestDish">Platillo más picante</option>
      <option value="mildestDish">Platillo menos picante</option>
      <option value="spicinessLevels">Niveles de picante</option>
    </select>
    <button id="calculateButton">Calcular</button>
    <div id="result"></div>
    <ul id="data-list">
    </ul>
   
    `; 
    
    ///trae las tarjetars
    const cardsDatosrender = document.createElement("div"); 
    cardsDatosrender.appendChild(renderItems(data));
    homeDiv.appendChild(cardsDatosrender); 
     cardsDatosrender.addEventListener('click',() =>{// ya noPREGUNTAR SI DESDE AQUI SE LE PUEDE HACER CLICK A LAS TARJETAS??
   

    });
    

    let filtrosPlato = data;
    //filtro plato principal
    divFiltross.querySelector('[data-testid="select-filter"]').addEventListener("change", (e) => {
      //console.log('cambiar')
      const platoPrincipal = e.target.value;
      filtrosPlato = filterData(data, "mainField", platoPrincipal);
      homeDiv.innerHTML = "";
      homeDiv.appendChild(renderItems(filtrosPlato));
      
    });
    //filtro picante
    divFiltross.querySelector('[data-testid="select-filterPicante"]').addEventListener("change",(e) =>{
      const nivelPicante = e.target.value;
      const platosFiltrados = filterData(data, "nivelSpicy", nivelPicante);
      homeDiv.innerHTML = "";
      homeDiv.appendChild(renderItems(platosFiltrados));
    });
    //filtro ALfabetica
    divFiltross.querySelector('[data-testid="select-filterPicante"]').addEventListener("change",(e) =>{
      const orden = e.target.value;
      const platosOrdenados = sortData(filtrosPlato, "name", orden === "asc");
      homeDiv.innerHTML = "";
      homeDiv.appendChild(renderItems(platosOrdenados));
    });
    divFiltross.querySelector('[data-testid="button-clear"]').addEventListener("click",() =>{
      homeDiv.innerHTML = "";
      homeDiv.appendChild(renderItems(data));
    });

  
    
   /*ejemplo de marcia*/
    //homeDiv.appendChild(divFiltross);
    divFiltross.querySelector('#calculationType').addEventListener('change', () =>{
     console.log('hola') //renderitems
    } ) ;
    
    //...footer
   // homeDiv.appendChild(footer);


    return homeDiv;
  };
  export default home;
/*
export default () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h1>Home</h1>
    <button id="chat-btn">Go to Chat</button>
    <button id="chat-group-btn">Go to Chat Group</button>
  `;
  
  // Asignar eventos a los botones
  container.querySelector('#chat-btn').addEventListener('click', () => {
    window.history.pushState({}, '', '/chat');
    onUrlChange();
  });

  container.querySelector('#chat-group-btn').addEventListener('click', () => {
    window.history.pushState({}, '', '/chat-group');
    onUrlChange();
  });

  return container;
}; */
