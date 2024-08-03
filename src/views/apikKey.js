import header from "../components/header.js";
import { getApiKey, setApiKey } from "../lib/apiKey.js";


function apikKey() {
    const vistaApi = document.createElement('div');
    vistaApi.appendChild(header());
    
    vistaApi.innerHTML = `
  <p class = "title.input"> Conversa con Mexico Picante ingresando tu APIKEY</p>
  <label for="apikey" class="label-api">API KEY</label>
  <input id="input-apikey" type="text" class="input-api"  placeholder="Ingresa tu APIKEY 🔑" </input>
  <div class="botones-apiKey">
  <button id="borrar-apiKey">Borrar ❌​</button>
  <button id="guardar-apiKey" type="submit" > GUARDAR API KEY🔒</button>
  </div>

    `;
  //dando funcionalidad al boton (tipo lo que hicimos en main del DV)
  const guardarBoton = vistaApi.querySelector('#guardar-apiKey');
  const borrarBoton = vistaApi.querySelector('#borrar-apiKey');
  const inputApiKey = vistaApi.querySelector('#input-apikey');

  guardarBoton.addEventListener("click", () => {
    const valueApiKEY = inputApiKey.value;
    setApiKey(valueApiKEY); //DEVUELVE UNDEFINDED
    getApiKey("apikeiy"); //DEVUELVE LA APIKEY DEL INPUT por revisar mas creo??
  });

  borrarBoton.addEventListener("click", () => {
    inputApiKey.value ="";
    localStorage.removeItem("apikeiy");
    //inputApiKey.value ="";
  });
  
  return vistaApi;


};

export default apikKey;

//PARA EL INPUT HITO3.MANEJOAPIKEY
/* <form id="apiKeyForm">
<label for="apiKey">Enter your API Key:</label>
<input type="text" id="apiKey" name="apiKey">
<button type="submit">Save</button>
</form>

ooooooo.....

<input id="apiKey-input" placeholder="Ingresa tu APIKEY 🔑​"></input>
<div class="button-apiKey">
<button id="borrar-apiKey">Borrar ❌​</button>
<button id="guardar-apiKey"type="submit" > GUARDAR API KEY🔒</button>
</div>     creo que debemos implementar un boton si
 no tinenn APIKEY Y QUE LOS ENVIE AL INICIO*/