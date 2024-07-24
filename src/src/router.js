// src/router.js

let rootEl = null;
let routes = {};

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routeMap) => {
  routes = routeMap;
};

export const renderView = (view) => {
  rootEl.innerHTML = '';
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
