
// src/views/chatGrupal.js
export function chatgrupal() {
  const container = document.createElement('div');
 
  container.innerHTML = `
    <h1>Chat Grupal</h1>
    <button id="home-btn">Back to Home</button>
    <button id="chat-btn">Go to Chat</button>
  `;
  
  // Asignar eventos a los botones
  /*container.querySelector('#home-btn').addEventListener('click', () => {
    window.history.pushState({}, '', '/');
    onUrlChange();
  });

  container.querySelector('#chat-group-btn').addEventListener('click', () => {
    window.history.pushState({}, '', '/chat-grupal');
    onUrlChange();
  });*/


  return container;
};
export default chatgrupal;
