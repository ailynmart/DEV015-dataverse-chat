//import { renderItems } from './card.js'
export const labels = () => {
    const divFiltross = document.createElement('div')
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
        <option value="Alto"> 🌶️🌶️🌶️ </option>
        <option value="Medio"> 🌶️🌶️</option>
        <option value="Bajo">🌶️</option>
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
    /*
      let filtrosPlato = data;

      // Controladores de eventos para los selectores
      const filtroPedido = divFiltross.querySelector('[data-testid="select-filter"]');    
      const filtroPicante = divFiltross.querySelector('[data-testid="select-filterPicante"]');      
      const filtroAlfabetica = divFiltross.querySelector('[data-testid="select-sort"]');
      const botonLimpiar = divFiltross.querySelector('[data-testid="button-clear"]');
      
      filtroPedido.addEventListener("change", (e) => {          
        const platoPrincipal = e.target.value;                 
        filtrosPlato = filterData(data, "mainField", platoPrincipal);     
        divFiltross.innerHTML = "";    
        divFiltross.appendChild(renderItems(filtrosPlato));
      });
      
      filtroPicante.addEventListener("change", (e) => {
        const nivelPicante = e.target.value;
        const platosFiltrados = filterData(data, "nivelSpicy", nivelPicante);
        divFiltross.innerHTML = "";
        divFiltross.appendChild(renderItems(platosFiltrados));
      });
      
      filtroAlfabetica.addEventListener("change", (e) => {
        const orden = e.target.value;
        const platosOrdenados = sortData(filtrosPlato, "name", orden === "asc");
        divFiltross.innerHTML = "";
        divFiltross.appendChild(renderItems(platosOrdenados));
      });
      
      botonLimpiar.addEventListener("click", () => {
        divFiltross.innerHTML = "";
        divFiltross.appendChild(renderItems(data));
      });
      
      
      
      const spicyDishes = [
        { name: 'Aguachile Verde', spiciness: 8 },
        { name: 'Mole Negro', spiciness: 6 },
        { name: 'Chiles en Nogada', spiciness: 4 },
        { name: 'Birria de Res', spiciness: 5 },
        { name: 'Cochinita Pibil', spiciness: 6 },
        { name: 'Tacos al pastor', spiciness: 3 },
        { name: 'Tacos de cochinita pibil', spiciness: 6},
        { name: 'Coctel de camarón', spiciness: 4 },
        { name: 'Ceviche', spiciness: 3},
        { name: 'Tamal oaxaqueño', spiciness: 5 },
        { name: 'Pozole Rojo', spiciness: 7 },
        { name: 'Caldo Tlalpeño', spiciness: 7 },
        { name: 'Menudo', spiciness: 8 },
        { name: 'Tostada de Tinga', spiciness: 7 },
        { name: 'Sopes', spiciness: 4 },
        { name: 'Tlacoyos con Salsa de Chile Morita', spiciness: 8 },
        { name: 'Tostadas de camarón', spiciness: 4 },
        { name: 'Salsa Roja', spiciness: 9 },
        { name: 'Salsa verde', spiciness: 9 },
        { name: 'Guacamole', spiciness: 7 },
        { name: 'Pico de gallo', spiciness:89 },
        { name: 'Chocolate con chile', spiciness: 7 },
        { name: 'Frutas con chile', spiciness: 8 },
        { name: 'Micheladas', spiciness: 9 }
       
      ];
      
      
      const select = divFiltross.querySelector('#calculationType'); 
      const button = divFiltross.querySelector('#calculateButton'); 
      
      // Vincular eventos a los elementos del DOM
      button.addEventListener('click', () => {  
        const calculationType = select.value; 
        let result;  
        if (calculationType === 'averageSpiciness') { 
          result = computeAverageSpiciness(spicyDishes); 
        } else if (calculationType === 'hottestDish') { 
          result = computeHottestDish(spicyDishes).name; 
        } else if (calculationType === 'mildestDish') {  
          result = computeMildestDish(spicyDishes).name;  
        } else if (calculationType === 'spicinessLevels') {
          const levels = computeSpicinessLevels(spicyDishes);
          result = `Picante: ${levels.mild}, Medio Picante: ${levels.medium}, Muy Picante: ${levels.hot}`; 
        }
        updateResult(result); 
      });*/
     


return divFiltross;
};
export default labels;