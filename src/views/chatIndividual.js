// src/views/ChatIndividual.js
import { getApiKey } from '../lib/apiKey.js';
import { communicateWithOpenAI } from '../lib/openAIApi.js';

export function ChatIndividual({ id }) {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Chat con ${id}</h1>
    <textarea id="message" placeholder="Escribe tu mensaje aquí"></textarea>
    <button id="send">Enviar</button>
    <div id="response"></div>
  `;

  viewEl.querySelector('#send').addEventListener('click', async () => {
    const message = viewEl.querySelector('#message').value;
    const apiKey = getApiKey();

    if (!apiKey) {
      alert('Por favor, introduce una API Key.');
      return;
    }

    try {
      const response = await communicateWithOpenAI([{ role: 'user', content: message }]);
      viewEl.querySelector('#response').textContent = response;
    } catch (error) {
      console.error('Error:', error);
    }
  });

  return viewEl;
}

