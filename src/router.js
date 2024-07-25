// src/router.js

let ROUTES = {};
let rootEl ;

export const setRootEl = (el) => {
  rootEl = el;// assign rootEl
};

export const setRoutes = (routes) => {
  ROUTES = routes;// assign ROUTES
};

export const renderView = (view) => {
  rootEl.innerHTML = "";// clear the root element RAIZ
  rootEl.appendChild(view());
};

export const onURLChange = () => {
  const path = window.location.pathname;
  const view = routes[path] || routes['/']; // Ruta por defecto
  renderView(view);
};

// Maneja el cambio de URL cuando el usuario navega usando el navegador
window.addEventListener('popstate', onURLChange);

// Inicializa el enrutador cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', onURLChange);
