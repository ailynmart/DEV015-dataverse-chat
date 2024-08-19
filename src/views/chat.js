/* eslint-disable no-console */
import header from "../components/header.js";
import data from "../data/dataset.js";

export function chat(props) {
  const chatVista = document.createElement('div');
  chatVista.appendChild(header());

  // Verificar si props.id está definido y es válido
  if (!props.id) {
    console.error("ID del personaje no proporcionado");
    return chatVista;
  }

  // Vinculamos el id del chat con el objeto correspondiente
  const elementOPersonaje = data.find((item) => item.id === props.id);
  if (!elementOPersonaje) {
    console.error("Personaje no encontrado");
    return chatVista;
  }
  
  document.title = `Chat con ${elementOPersonaje.name}`;

  // Creación de la estructura del chat
  const htmlChat = document.createElement('div');
  htmlChat.innerHTML = `
    <div class='barra-perfil'>
      <h2 class='estilo-titledelCHAT'>${elementOPersonaje.name}</h2>
      <p class ='estilo-Descripcion'>${elementOPersonaje.description}</p>
    </div>
    <div class='contenedor-principal'>
      <div class='espacio-delCHAT'>
        <span class="contacto-status">🟢 En línea</span>
        <div class='perfil'>
          <img class='foto-perfil' src='${elementOPersonaje.imageUrl}' alt='Perfil de ${elementOPersonaje.name}'>
          <div class='descripcion-perfil'>
            <h4 class='nombre-dePERFIL'>${elementOPersonaje.name}</h4>
            <p class='estilo-shorDescrip'>${elementOPersonaje.shortDescription}</p>
          </div>
        </div>
        <div id='mensajes'></div>
        <div id='chatde-USUARIO'>
          <textarea class="chat-User" id="textarea-usuario" placeholder="ESCRIBE AQUÍ..."></textarea>
          <div id='envio-mensaje'>
            <button type="submit" id="boton-enviar">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  `;
  chatVista.appendChild(htmlChat);

  // Seleccionar elementos del DOM
  const botonEnviar = chatVista.querySelector("#boton-enviar");
  const textaUSUARIO = chatVista.querySelector("#textarea-usuario");
  const areaDEmensajes = chatVista.querySelector("#mensajes");

  // Función para añadir el mensaje
  function mensajeAÑADIDO() {
    const userMessage = document.createElement('div');
    userMessage.textContent = textaUSUARIO.value;
    areaDEmensajes.appendChild(userMessage);
    textaUSUARIO.value = ''; // Limpiar el campo de texto
  }

  botonEnviar.addEventListener("click", mensajeAÑADIDO);

  return chatVista;
}

export default chat;
