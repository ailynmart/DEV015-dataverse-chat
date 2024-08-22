import { setRootEl, setRoutes, onUrlChange } from './router.js';
import home from './views/home.js';
import chat from './views/chat.js';
import aPikey from './views/aPikey.js';
import chatGrupal from './views/chatGrupal.js';



const rootElement = document.getElementById('root');

const routes = {
  "/": home,
  "/chat": chat,
  "/api-key": aPikey,
  "/chat-Grupal": chatGrupal, 
};

setRoutes(routes);

window.addEventListener('DOMContentLoaded', () => {
  setRootEl(rootElement);// set root element
  onUrlChange(window.location); // invoke onURLChange
});

window.addEventListener('popstate', () => {
  onUrlChange();
});
