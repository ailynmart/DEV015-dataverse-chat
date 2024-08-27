//view.js del DV
import { navigateTo } from "../router.js";


export const renderItems = (data) => {
  if (!Array.isArray(data)) {
    // eslint-disable-next-line no-console
    console.error('Los datos proporcionados no son un array');
    return null;

  }

  const itemsHTML = data.map(item => {

    const li = document.createElement('li');
    li.setAttribute('itemtype', 'food');
    li.setAttribute('itemscope', true);

    li.innerHTML = `
      <div>
        <p>${item.name || 'Sin nombre'}</p>
        <p>${item.shortDescription || 'Sin descripción corta'}</p>
        <img src="${item.imageUrl || ''}" alt="${item.name || 'Imagen sin nombre'}">
        <button class="boton-car"> InfoCHAT </button>
        <p>Nivel:${item.facts.nivelSpicy || 'Sin nivel de picante'}</p>
        <p>Origen:${item.facts.placeOrigen || 'Sin lugar de origen'}</p>
        <p>Carne:${item.facts.typeOfMeat || 'Sin tipo de carne'}</p>
        <p>${item.facts.mainField || 'Sin categoría'}</p>
      </div>
    `;

    const buttonElement = li.querySelector(".boton-car");
    buttonElement.addEventListener("click", () => {
      navigateTo("/chat", { id: item.id });
    });

    return li;
  });

  const ul = document.createElement('ul');
  itemsHTML.forEach(item => ul.appendChild(item));
  return ul;
};

export function updateResult(result) {
  document.querySelector('#result').textContent = result;
}
export default renderItems;

// cards.js
export function ChatCard() {
  return `
      <div class="contenedor-principal">
          <div id="mensajes">
              <div class="mensaje-enviado">Mensaje del usuario</div>
              <div class="mensaje-recibido">Respuesta de la IA</div>
              <!-- Más mensajes aquí -->
          </div>
          <textarea class="chat-User" placeholder="Escribe tu mensaje..."></textarea>
          <button id="boton-enviar">Enviar</button>
      </div>
  `;
}
