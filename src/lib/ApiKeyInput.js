// src/views/ApiKeyInput.js
import { setApiKey } from '../lib/apiKey.js';

export function ApiKeyInput() {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Ingresar API Key</h1>
    <input type="text" id="api-key" placeholder="Introduce tu API Key" />
    <button id="save-api-key">Guardar</button>
    <p id="save-message" style="display: none; color: green;">API Key guardada con éxito</p>
  `;

  viewEl.querySelector('#save-api-key').addEventListener('click', () => {
    const key = viewEl.querySelector('#api-key').value.trim();

    if (key === '') {
      alert('Por favor, introduce una API Key válida.');
      return;
    }

    setApiKey(key);
    const messageEl = viewEl.querySelector('#save-message');
    messageEl.style.display = 'block';
    setTimeout(() => {
      messageEl.style.display = 'none';
    }, 3000);
  });

  return viewEl;
}
