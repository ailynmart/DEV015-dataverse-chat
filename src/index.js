import { setRootEl, setRoutes, onURLChange } from './router.js';
import { Home } from './views/home.js';
import { ChatIndividual } from './views/chatIndividual.js';
import { ApiKeyInput } from './views/apikKey.js';

const root = document.getElementById('root');
setRootEl(root);

setRoutes({
  '/': Home,
  '/chat/:id': (params) => ChatIndividual({ id: params.id }),
  '/api-key': apikKey,
});

onURLChange();
