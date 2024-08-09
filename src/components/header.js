//import { navigateTo } from "../router.js";
export const header =() => {
    // Crear el elemento del encabezado
    const elemtHeader = document.createElement('header');
    elemtHeader.innerHTML = ` 
    <h1 class="title-header">MEXICO PICANTE</h1>
      
    </div>
     <div class='container-button-header' id='container-buttons'>
      <button class="buttonHeader" id="buttonHome"> HOME</button>
      <button class="buttonHeader" id="buttonIndividual"> MEXICO PICANTE CHAT</button>
      <button class="buttonHeader" id="buttonApiKey"> API KEY</button>
    
    </div>

  `;
  const bottonApikey = elemtHeader.querySelector("#buttonApiKey");
  bottonApikey.addEventListener("click", () => {
    navigateTo("/api-key")
  })
  /*
 const bottonHome = elemtHeader.querySelector("#buttonHome");
 //const bottonIndividual = elemtHeader.querySelector("#buttonIndividual");
 const bottonApikey = elemtHeader.querySelector("#buttonApiKey");*/


 /* bottonHome.addEventListener("click", () => {
    navigateTo("/")
  }),
  /*bottonIndividual.addEventListener("click", () => {
    navigateTo("/panel") DEBEMOS CREAR UN PANEL
  }),*/
  /*bottonApikey.addEventListener("click", () => {
    navigateTo("/aPikey")
  })*/


 return elemtHeader;
};
export default header;
   
    //aun falta