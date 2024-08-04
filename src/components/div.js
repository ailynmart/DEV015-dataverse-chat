export const divfiltros = () => {
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
return divFiltross;
};
export default divfiltros;