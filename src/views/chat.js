/*HITO 3.4.-Creación de una vista para interactuar con cada elemento del conjunto de datos-->Dentro de este archivo, 
desarrolla la vista que te permitirá chatear con los elementos del conjunto de datos. Puedes incluir componentes como
 botones, formularios o cualquier otro elemento necesario para lograr el objetivo específico de tu aplicación.
 3.4.-3Puedes obtener este identificador (id) de dos maneras: incluyéndolo como argumento
  (props) en la función que te llevará a esta vista o recibiendo los datos como search params. */
import header  from "../components/header.js";
import data from "../data/dataset.js";
import { communicateWithOpenAI } from "../lib/openAIApi.js";


export function chat (props){//obtener un identificador con props ..para renderizar vista?
 // communicateWithOpenAI("hola");
    
   
    const chatVista = document.createElement('div');
    chatVista.appendChild(header());
      //Vinculamos el id del chat con el objeto correspondiente
    const elementOPersonaje = data.find((item) => item.id === props.id);
   // console.log(elementOPersonaje);
    
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
            <span class="contacto-status"> 🟢En linea</span>
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
                <button type="submit" id="boton-enviar">Enviar ➤</button>
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

    function agregamosREPLY (reply) {
      const userMessages = document.createElement('div');
      userMessages.innerHTML = reply;
      areaDEmensajes.appendChild(userMessages);
    }

    botonEnviar.addEventListener("click",() => {
      mensajeAÑADIDO();
      communicateWithOpenAI(elementOPersonaje, textaUSUARIO.value).then(reply => {
        agregamosREPLY(reply)

      }) 
      textaUSUARIO.value='';

    });
    return chatVista;
  }
    
export default chat;