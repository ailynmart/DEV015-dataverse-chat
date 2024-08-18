/*HITI 3.5 Integración con Open AI --> Para obtener respuestas de cada elementos o personaje 
y poder interactuar  es esencial realizar una solicitud HTTP a OpenAI. En este proceso,
 es recomendable familiarizarse con los conceptos de promesas y considerar la utilización 
 de fetch o axios para llevar a cabo la petición.*/
 /*openAIApi.js,contendrá una función específica. Esta función debe recibir un parámetro
  que almacena los mensajes; ten presente que dichos mensajes deben seguir una estructura
   específica, la cual puedes comprender mejor consultando la documentación proporcionada por OpenAI.*/ 


//Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

const enviarMENSAJE = [];// Este array almacenará todos los mensajes enviados y recibidos durante la comunicación
// con OpenAI, actuando como un historial de conversación.

export const communicateWithOpenAI = (elementOPersonaje, message) => {
  const obtenerApikey = getApiKey(); //1° obtenemos la APIKEY (que si lo tenemos en el GETAPIKEY)
  const urlAPIopenAI = "https://api.openai.com/v1/chat/completions";//2°endpoint(solicitud -->respuesta)apartir de los mensaje

  if (!obtenerApikey) {
    return Promise.reject(new Error("No se encontró una API key"));
  }

  // Agrega el mensaje del usuario al historial
  enviarMENSAJE.push({ role: "user", content: message });

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${obtenerApikey}`
  };

  const data = {
    model: "gpt-4",
    messages: [
      {
        role: "system", content: `Eres ${elementOPersonaje.name}, tu personalidad se basa en ${elementOPersonaje.description}; vas a responder a toos los mensajes y preguntas del usuario y tus respuestas no van a tener más de 30 palabras`
      }, ...enviarMENSAJE // Incluye todo el historial de mensajes
    ]
  };

  return fetch(urlAPIopenAI, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(data)
  })
    .then(response => {
      if (!response.ok) {
        return response.json().then(error => {
          throw new Error(`Error: ${response.status} - ${error.error.message}`);
        });
      }
      return response.json();
    })
    .then(data => {
      const reply = data.choices[0].message.content;
      // Agrega la respuesta del asistente al historial
      enviarMENSAJE.push({ role: "assistant", content: reply });

      return reply;
    })
    .catch(error => console.error("Error de OpenAI:", error));
}


/*
export const communicateWithOpenAI = (messages) => {
   //Aquí es donde debes implementar la petición con fetch o axios
   //1° obtenemos la APIKEY (que si lo tenemos en el GETAPIKEY)
   const obtenerApikey = getApiKey();
   const urlAPIopenAI ="https://api.openai.com/v1/chat/completions"; //2°endpoint(solicitud -->respuesta)apartir de los mensaje*

   if (! obtenerApikey) {//(!obtenerApiker) seria nuestro error
      return Promise.reject(new Error("No se obtuvo la APIKEY"));
    }
};
const data = {
  model: "gpt-4", // Modelo de OpenAI a utilizar
  messages: messages // Historial de mensajes que se envía
};

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${obtenerApikey}`
};

return fetch(urlAPIopenAI, {
  method: "POST",
  headers: headers,
  body: JSON.stringify(data)
})
  .then(response => {
     if (!response.ok) {
        return response.json().then(error => {
           throw new Error(`Error: ${response.status} - ${error.error.message}`);
        });
     }
     return response.json();
  })
  .then(data => {
     return data.choices[0].message.content; // Devuelve el mensaje generado por OpenAI
  })
  .catch(error => console.error("Error de OpenAI:", error));
*/




/*return fetch (urlAPIopenAI,{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${obtenerApikey}`
  },
  body: JSON.stringify({
    model: "gpt-4", // modelo que se esta usando
    messages: messages,
    max_tokens: 150
  })

})*/



  









/*
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (message) => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('API Key is missing');

  const url = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const body = JSON.stringify({
    prompt: message,
    max_tokens: 150
  });

  try {
    const response = await fetch(url, { method: 'POST', headers, body });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data.choices[0].text.trim(); // Ajusta según la respuesta de OpenAI
  } catch (error) {
    console.error('Error en la comunicación con OpenAI:', error);
    throw error;
  }
};*/

