// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.
import { setRootEl, setRoutes, onURLChange } from './router.js';
import home from './views/home.js';
import chat from './views/chat.js';
import apiKey from './views/apiKey.js';


// Obtén el elemento raíz
const rootElement = document.getElementById('root');
//Ejemplo de rutas:
const routes = {
    "/": home ,
    "/chat": chat,//lo que este dentro de view debemos llamarlo aqui y arriba en las importaciones
    "/apiKey": apiKey,

  }; 
  
  setRoutes(routes);//asignar las routes
// Handle initial URL load hito1.5 Set the root element where views will be rendered
  window.addEventListener("DOMContentLoaded", () => {
  setRootEl(rootElement);// set root element
  onURLChange(window.location); // invoke onURLChange 
  });


/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
// src/index.js
/*import { setRootEl, setRoutes, onURLChange } from './router';
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
onURLChange();*/
