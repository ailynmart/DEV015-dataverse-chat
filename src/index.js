// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
// src/index.js
import { setRootEl, setRoutes, onURLChange } from './router';
import Home from './views/Home';
import Example from './views/Example.js';

// Define las rutas de tu aplicación
const routes = {
  '/': Home,
  // Agrega otras rutas aquí, por ejemplo:
  // '/about': About,
  // '/contact': Contact,
};

// Obtén el elemento raíz
const rootElement = document.getElementById('root');

// Configura el elemento raíz y las rutas
setRootEl(rootElement);
setRoutes(routes);

// Gestiona la carga de la página inicial
onURLChange();
