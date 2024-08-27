//Importa la función para obtener la API KEY desde apiKey.js
import { getApiKey } from './apiKey.js';

const enviarMensaje = [];// Este array almacenará todos los mensajes enviados y recibidos durante la comunicación
// con OpenAI, actuando como un historial de conversación.

export const communicateWithOpenAI = (elementOPersonaje, message) => {
  const obtenerApikey = getApiKey(); //1° obtenemos la APIKEY (que si lo tenemos en el GETAPIKEY)
  const urlAPIopenAI = "https://api.openai.com/v1/chat/completions";//2°endpoint(solicitud -->respuesta)apartir de los mensaje

  if (!obtenerApikey) {
    // eslint-disable-next-line no-console
    console.error('No se encontro una API KEY')
    return Promise.reject(new Error("No se encontró una API key"));
  }

  // Agrega el mensaje del usuario al historial
  enviarMensaje.push({ role: "user", content: message });

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${obtenerApikey}`
  };

  const data = {
    model: "gpt-4",
    messages: [
      {
        role: "system", 
        content: `Eres ${elementOPersonaje.name}, tu personalidad se basa en ${elementOPersonaje.description}. Vas a responder a todos los mensajes y preguntas del usuario y tus respuestas no van a tener más de 30 palabras.`
      }
      
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
      enviarMensaje.push({ role: "assistant", content: reply });

      return reply;
    })
    // eslint-disable-next-line no-console
    .catch(error => console.error("Error de OpenAI:", error));
}



