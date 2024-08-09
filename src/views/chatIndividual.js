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

  const sendButton = viewEl.querySelector('#send');
  sendButton.addEventListener('click', async () => {
    const message = viewEl.querySelector('#message').value.trim();
    const responseEl = viewEl.querySelector('#response');
    responseEl.textContent = '';

    if (message === '') {
      alert('Por favor, escribe un mensaje.');
      return;
    }

    const apiKey = getApiKey();
    if (!apiKey) {
      alert('Por favor, introduce una API Key.');
      return;
    }

    sendButton.disabled = true;
    sendButton.textContent = 'Enviando...';

    try {
      const response = await communicateWithOpenAI([{ role: 'user', content: message }]);
      responseEl.textContent = response;
    } catch (error) {
      responseEl.textContent = 'Error al comunicarse con OpenAI. Por favor, intenta nuevamente.';
      console.error('Error:', error);
    } finally {
      sendButton.disabled = false;
      sendButton.textContent = 'Enviar';
    }
  });

  return viewEl;
}

