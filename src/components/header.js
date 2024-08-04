//import { navigateTo } from "../router.js";
export const header =() => {
    // Crear el elemento del encabezado
    const elemtHeader = document.createElement('header');
    elemtHeader.innerHTML = ` 
    <h1 class="title-header">MEXICO PICANTE</h1>
      
    </div>
     <div class='container-button-header' id='container-buttons'>
      <button class="buttonHeader" id="buttonHome"> HOME</button>
      <button class="buttonHeader" id="buttonChatGrupal"> MEXICO PICANTE CHAT</button>
      <button class="buttonHeader" id="buttonApiKey"> API KEY</button>
    
    </div>
       
   
    
`;
return elemtHeader;
};
export default header;
   
    //aun falta