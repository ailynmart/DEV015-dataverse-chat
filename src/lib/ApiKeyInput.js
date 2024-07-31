// src/views/ApiKeyInput.js
import { setApiKey } from '../lib/apiKey.js';

export function ApiKeyInput() {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Ingresar API Key</h1>
    <input type="text" id="api-key" placeholder="Introduce tu API Key" />
    <button id="save-api-key">Guardar</button>
  `;

  viewEl.querySelector('#save-api-key').addEventListener('click', () => {
    const key = viewEl.querySelector('#api-key').value;
    setApiKey(key);
    alert('API Key guardada con éxito');
  });

  return viewEl;
}
