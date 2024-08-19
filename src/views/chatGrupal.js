export function chatgrupal() {
  const container = document.createElement('div');
 
  container.innerHTML = `
    <h1>Chat Grupal</h1>
    <button id="home-btn">Back to Home</button>
    <button id="chat-btn">Go to Chat</button>
  `;
  
  // Asignar eventos a los botones
  container.querySelector('#home-btn').addEventListener('click', () => {
    window.history.pushState({}, '', '/');
    // eslint-disable-next-line no-undef
    onUrlChange();  // Asegúrate de que esta función esté definida
  });

  container.querySelector('#chat-btn').addEventListener('click', () => {
    window.history.pushState({}, '', '/chat');
    onUrlChange();  // Asegúrate de que esta función esté definida
  });

  return container;
}

export default chatgrupal;
