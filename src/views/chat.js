// src/views/chat.js
import header  from "../components/header.js";
import data from "../data/dataset.js";
export function chat (props){//obtener un identificador con props ..para renderizar vista?
    const chatVista = document.createElement('div');
    chatVista.appendChild(header());
      //Vinculamos el id del chat con el objeto correspondiente
    const elementOPersonaje = data.find((item) => item.id === props.id);
    console.log(elementOPersonaje);

    document.title = `Chat con ${elementOPersonaje.name}`;//INTERPOLAMOS TAMBIEN EL NOMBRE DEL PERSONAJE.
    //creacion de LA ESTRUCTURA DEL CHAT
    const htmlChat = document.createElement('div');
    htmlChat.innerHTML=
    `
      <div class='barra-perfil'>
        <h2 class='estilo-titledelCHAT'>${elementOPersonaje.name} </h2>
        <p class ='estilo-Descripcion'>${elementOPersonaje.description}</p>
      </div>
      <div class= 'contenedor-principal'>
       <div class ='espacio-delCHAT'>
            <span class="contacto-status"> :círculo_verde_grande:En linea</span>
           <div class = 'perfil'>
             <img class = 'foto-perfil' src='${elementOPersonaje.imageUrl}'>
             <div class= 'descripcion-perfil'>
               <h4 class= 'nombre-dePERFIL'>${elementOPersonaje.name}</h4>
               <p class ='estilo-shorDescrip'>${elementOPersonaje.shortDescription}</p>
             </div>
           </div>
           <div id='mensajes'> </div>
           <div id='chatde-USUARIO'>
             <textarea class="chat-User" id="textarea-usuario" placeholder="ESCRIBE AQUI..."></textarea>
              <div id = 'envio-mensaje'>
                <button type="submit" id="boton-enviar">Enviar</button>
              </div>
           </div>
        </div>
      </div>
    `;
    chatVista.appendChild(htmlChat);
    //seleccionando
    const botonEnviar = chatVista.querySelector("#boton-enviar");
    const textaUSUARIO = chatVista.querySelector("#textarea-usuario");
    const areaDEmensajes = chatVista.querySelector("#mensajes");
    function mensajeAÑADIDO() {
      const userMessage = document.createElement('div');
      userMessage.innerHTML = textaUSUARIO.value;
      areaDEmensajes.appendChild(userMessage);
    };
    botonEnviar.addEventListener("click",mensajeAÑADIDO );
    
 return chatVista;
};
export default chat;


  
/*export default () => {
   const container = document.createElement('div');
   container.innerHTML = `
     <h1>InfoCHAT</h1>
     <button id="home">Back to Home</button>
     <button id="chatGrupal">Go to Chat Group</button>
   `;

   // Asignar eventos a los botones
   container.querySelector('#home').addEventListener('click', () => {
     window.history.pushState({}, '', '/');
     onUrlChange();
   });
 
   container.querySelector('#InfoCHAT').addEventListener('click', () => {
     window.history.pushState({}, '', '/chat');
     onUrlChange();
   });
 
   return container;
}; */