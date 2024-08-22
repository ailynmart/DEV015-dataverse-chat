
import  header  from "../components/header.js"
import data from "../data/dataset.js";
//import { communicateWithOpenAI } from "../lib/openAIApi.js";

export function chatGrupal () {
  document.title=`CHAT GRUPAL`;
  const contentHome = document.createElement('div');
  
  contentHome.appendChild(header());
  //const participantes = data.filter(item => props.ids.includes(item.id));
  //para poder cambiar la imagen de fondo//
  //document.title = `Chat Grupal con ${participantes.map(p => p.name).join(', ')}`;

  const htmlChatGroup = document.createElement('div');
  htmlChatGroup.innerHTML = `
      <div class='barra-perfil'>
          <h2 class='estilo-titledelCHAT'>Info Chat Grupal</h2>
          
      </div>
      <div class= 'contenedor-principal'>
          <div class ='espacio-delCHAT'>
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
  const listadeParticipantes = document.createElement("div");
  listadeParticipantes.setAttribute("class", "side-container");
  listadeParticipantes.innerHTML =
   `<div class= "titulo-lateral">
     <h3>CONECTADOS AL CHAT:</h3>
     <p class="status">   🟢En Línea</p>
   </div>
   `;
  
  data.forEach((item) => {
    const littleCard = document.createElement("li");
    littleCard.setAttribute("class", "info-individual");
    littleCard.innerHTML = `<div class="info-individual">
        <img src="${item.imageUrl}" alt="${item.name}" class="each-image"/>
        <p class="nombreParticipante">${item.name}</p>
        <p class ='grup-shorDescrip'>${item.shortDescription}</p>
      </div>`;
    listadeParticipantes.appendChild(littleCard); //meter cada card al contenedor lateral//
  });
  htmlChatGroup.appendChild(listadeParticipantes);
  contentHome.appendChild(htmlChatGroup);
  
  /*const personajes = data.find((item) => item.id === props.id);
  console.log(personajes);

  const a = document.createElement('div');
  a.innerHTML="BIENVENIDO AL CHAT GRUPAL ENCONTRARAS A TODOS NUESTROS PLATILLO";
  contentHome.appendChild(a);*/
   
  return contentHome;

}

export default chatGrupal;