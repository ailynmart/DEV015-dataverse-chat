// src/index.js
import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Home } from './views/home.js';
import { ChatIndividual } from './views/chatIndividual.js';
import { ApiKeyInput } from './views/apikKey.js';

const root = document.getElementById('root');
setRootEl(root);

setRoutes({
  '/': Home,
  '/chat/:id': (params) => ChatIndividual({ id: params.id }),
  '/api-key': ApiKeyInput,
});

// Inicializa la vista cuando se carga la página
onURLChange();

// Escucha los cambios en la URL cuando el usuario navega con el historial del navegador
window.addEventListener('popstate', onURLChange);
