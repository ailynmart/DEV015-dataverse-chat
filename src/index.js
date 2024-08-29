import Home from '../src/views/home.js';
// ... import other views
import { setRootEl, setRoutes, onURLChange } from '../src/router.js';
import chat from '../src/views/chat.js';
import aPikey from '../src/views/aPikey.js';
import chatGrupal from '../src/views/chatGrupal.js';
import ErrorView from './views/error.js';
// Define your routes and their associated views
const routes = {
  '/': Home,
  "/chat": chat,
  "/api-key": aPikey,
  "/chat-Grupal": chatGrupal,
  '/error': ErrorView, // Ruta para la vista de error
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById('root');
  setRootEl(rootElement);

  onURLChange(window.location);//invoque onURLChange
});

// Manejar los cambios de URL cuando el usuario usa los botones de retroceso o avance
window.addEventListener('popstate', () => {
  onURLChange(window.location);
});



































/*import { setRootEl, setRoutes, onUrlChange } from './router.js';
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
});*/
