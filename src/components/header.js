import { navigateTo } from "../router.js";
import { onUrlChange } from "../router.js";
export const header =() => {
    // Crear el elemento del encabezado
    const elemtHeader = document.createElement('header');
    elemtHeader.innerHTML = `
    <h1 class="title-header">MEXICO PICANTE</h1>
    </div>
     <div class='container-button-header' id='container-buttons'>
      <button class="buttonHeader" id="buttonHome"> HOME</button>
      <button class="buttonHeader" id="buttonGrupal"> CHAT GRUPAL</button>
      <button class="buttonHeader" id="buttonApiKey"> API KEY</button>
    </div>

  `;
  elemtHeader.querySelector('#buttonHome').addEventListener('click', () => {
    window.history.pushState({}, '', '/');
    onUrlChange();
    //navigateTo("/home") podemos migrar la infomacion a home para tener una vista como la del prototipo
  });

  elemtHeader.querySelector('#buttonGrupal').addEventListener('click', () => {
    window.history.pushState({}, '', '/chat-group');
    onUrlChange();
  });
  const bottonApikey = elemtHeader.querySelector("#buttonApiKey");
  bottonApikey.addEventListener("click", () => {
    navigateTo("/api-key")
    
  });

 return elemtHeader;
};
export default header;
    //aun falta