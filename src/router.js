//HITO 1-3Para enlazar las rutas y vistas en una aplicación, necesitaremos definir algunas funciones en un nuevo 
//archivo src/router.js. Estas funciones ayudarán a manejar la navegación entre páginas.Para el propósito de este hito, 
//recomendamos utilizar cuatro de ellas: setRootEl, setRoutes, renderView y onURLChange.

let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  // assign rootEl
  rootEl = el;
  return rootEl;
};

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
  ROUTES = routes;
  return ROUTES;
};
//HITO3.CREACION .3
export const queryStringToObject = (queryString) => {//location.search EXTRAE el QUERYSTRING de la pagina
  
  const urlParams = new URLSearchParams (queryString);// convert query string to URLSearchParams
  
  const objectParams = Object.fromEntries(urlParams);//convert URLSearchParams to an object
  
  return objectParams;// return the object 
  
};

const renderView = (pathname, props = {}) => { //props son los search params
  
  rootEl.innerHTML = ""; // clear the root element RAIZ
  // find the correct view in ROUTES for the pathname (encuentre la vista correcta en ROUTES para pathname)
  const viewRoute = ROUTES[pathname] || ROUTES["/error"];  // in case not found render the error view
  
  const componentHtml = viewRoute(props); // render the correct view passing the value of props
  //agregamos viewrouter al component
  return rootEl.appendChild(componentHtml);// add the view element to the DOM root element(APPENCHILD)
}; 
//HITO3.CREACION .3
export const navigateTo = (pathname, props={}) => {
  const propsUrl = new URLSearchParams(props);
  const URL =  `${pathname}?${propsUrl.toString()}`;
  // update window history with pushState
  window.history.pushState({}, "", URL); 
  // render the view with the pathname and props
  return renderView(pathname, props);
};

export const onUrlChange = () => {
  const { pathname, search } = window.location;
  //console.log("cambio de url", pathname, search);
  const props = queryStringToObject(search);
  renderView(pathname, props);
};


/*export const onURLChange = (location) => {
  // parse the location for the pathname and search params(analizar la ubicación del pathname ylos parámetros de búsqueda)
  const pathnameLocat = window.location.pathname;
  //parse the location for the search params
  const paramSearch = location.search;
  // convert the search params to an object with queryToObject
  const paramsObject = queryStringToObject(paramSearch);
  // render the view with the pathname and object
  return renderView(pathnameLocat,paramsObject);
};*/


/*/ src/router.js

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
document.addEventListener('DOMContentLoaded', onURLChange);*/
