// src/views/aPikey.js

export default () => {
  const container = document.createElement('div');
  container.innerHTML = `
    <h1>API KEY</h1>
    <input type="text" id="api-key-input" placeholder="Enter API Key" />
    <button id="api-key">Save API Key</button>
    <button id="home">Back to Home</button>
  `;
  
  // Asignar eventos a los botones
  container.querySelector('#api-key').addEventListener('click', () => {
    const apiKey = document.querySelector('#api-key').value;
    localStorage.setItem('apiKey', apiKey);
  });

  container.querySelector('#home').addEventListener('click', () => {
    window.history.pushState({}, '', '/');
    onUrlChange();
  });

  return container;
};
