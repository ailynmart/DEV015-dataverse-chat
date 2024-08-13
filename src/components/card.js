//view.js del DV
import { navigateTo } from "../router.js";
export const renderItems = (data) => {
  
  if (!Array.isArray(data)) {
    console.error('Los datos proporcionados no son un array');
    return null; 
    return null; 
  }

  
  const itemsHTML = data.map(item => {
   
    const li = document.createElement('li');
    li.setAttribute('itemtype','food')
    li.setAttribute('itemscope',true)
 
    li.innerHTML = 
    '<div>' +
    '<p>Nombre: ' + (item.name || 'Sin nombre') + '</p>' +
    '<p>Descripción corta: ' + (item.shortDescription || 'Sin descripción corta') + '</p>' +
    
    '<img src="' + (item.imageUrl || '') + '" alt="' + (item.name || 'Imagen sin nombre') + '">' +
    '<button class="boton-car"> InfoCHAT </button>' +
    '<p>Nivel de picante: ' + (item.facts.nivelSpicy || 'Sin nivel de picante') + '</p>' +
    '<p>Lugar de origen: ' + (item.facts.placeOrigen || 'Sin lugar de origen') + '</p>' +
    '<p>Tipo de carne: ' + (item.facts.typeOfMeat || 'Sin tipo de carne') + '</p>' +
    '<p>Categoría: ' + (item.facts.mainField || 'Sin categoría') + '</p>' +
    
  '</div>';
  const buttonElement = li.querySelector(".boton-car"); //se añadio linea 28 bueno ahora lo pase a linea 24 y se selecciona e hizo eveto para que a cada click a una tarjeta abra un chat
  buttonElement.addEventListener("click", () => {
    navigateTo("/chat", { id: item.id });
  });
    /*
    EJEMPLO DE MARIANA
    const buttonElement = li.querySelector(“.boton”-car);
    buttonElement.addEventListener("click", () => {
      navigateTo("/chat", { id: objeto.id });
    }); */
    
    // '<p>Descripción: ' + (item.description || 'Sin descripción') + '</p>' +  (---->SE QUITO DE LA LINEA 22

    return li;
  });

 
  const ul = document.createElement('ul');
 
 
  itemsHTML.forEach(item => ul.appendChild(item));

  
  
  return ul;
};


export function updateResult(result) {
  document.querySelector('#result').textContent = result;
};

export default renderItems;