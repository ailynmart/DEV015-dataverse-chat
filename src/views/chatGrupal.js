
/*export function chatGrupal() {
    //crearmos la vista
    const vistaChatGrupal = document.createElement("div");
    //vistaChatGrupal.classList.add("chat-grupal"); de esta manera creamos una class al css para poder llamarlo en un archivo de chatGrupa.css tal como si estaria en el html lo mismo podemos implementarlo en los demas archivos para el estilo.
    

}*/
import  header  from "../components/header.js"

export function chatGrupal () {
  document.title=`CHAT GRUPAL`;
  const contentHome = document.createElement('div');
  
  contentHome.appendChild(header());

  const a = document.createElement('h2');
  a.innerHTML="BIENVENIDO AL CHAT GRUPAL ENCONTRARAS A TODOS NUESTROS PLATILLO";
  contentHome.appendChild(a);
   
  return contentHome;

}

export default chatGrupal;