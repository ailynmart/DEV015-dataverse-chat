import { navigateTo } from "../router.js";
export const header =() => {
  // Crear el elemento del encabezado
  // eslint-disable-next-line indent
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
  const bottonApikey = elemtHeader.querySelector("#buttonApiKey");
  bottonApikey.addEventListener("click", () => {
    navigateTo("/api-key");
  });
  const homeBoton = elemtHeader.querySelector("#buttonHome");
  homeBoton.addEventListener("click",() =>{
    navigateTo("/");
  });
  const grupalBoton = elemtHeader.querySelector("#buttonGrupal");
  grupalBoton.addEventListener("click",() =>{
    navigateTo("/chatGrupal");
  });








  return elemtHeader;
};
export default header;