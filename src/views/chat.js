/*HITO 3.4.-Creación de una vista para interactuar con cada elemento del conjunto de datos-->Dentro de este archivo, 
desarrolla la vista que te permitirá chatear con los elementos del conjunto de datos. Puedes incluir componentes como
 botones, formularios o cualquier otro elemento necesario para lograr el objetivo específico de tu aplicación.
 3.4.-3Puedes obtener este identificador (id) de dos maneras: incluyéndolo como argumento
  (props) en la función que te llevará a esta vista o recibiendo los datos como search params. */
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
    <div class='estilo-tarjeta-chatIndiv' >
     <div class='barra-perfil'>
        <div class= 'contenedor-titulo'>
         <h2 class='estilo-titledelCHAT'>${elementOPersonaje.name} </h2>
        </div>
        <img class = 'foto-perfil' src='${elementOPersonaje.imageUrl}'>
        <p class ='estilo-shorDescrip'>${elementOPersonaje.shortDescription}</p>
     </div>
     <div class="mensajes-delChat" id="mensajedelchat">
        <!-- Aquí se mostrarán los mensajes -->
     </div>

      <div class="chatUSER-textarea"> 
        
       <textarea class="chat-User" id="chat-usuario" placeholder="ESCRIBE AQUI..."></textarea>
       <button type="submit">Enviar</button>
      </div>
      
    </div>


    `;

    





    chatVista.appendChild(htmlChat);
    /*NOTAAA
    1..PARA EL INPUT TEXTAREA --FUNCION DE ENVIAR DEBEMOS LLAMAR AL OPENWITHIAI*/

 return chatVista;
};

export default chat;