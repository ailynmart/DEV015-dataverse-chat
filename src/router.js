
let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el; // asignar rootEl
}

export const setRoutes = (routes) => {
/* if (typeof routes !== 'object' || routes === null) { // arroja errores si las rutas no son un objeto
    throw new Error('ROUTES must be an object');
  }
  if (!routes['/error']) { //arrojar errores si las rutas no definen una ruta/error
    throw new Error('A route for /error must be defined');
  }*/
  ROUTES = routes; // asignar ROUTES
}

const queryStringToObject = (queryString) => {
  const urlParams = new URLSearchParams(queryString); // convertir query string a URLSearchParams
  const objectParams = Object.fromEntries(urlParams); // convertir URLSearchParams a objetos
  return objectParams; // retornar objetos
}

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = ''; // Limpiar el elemento raíz

  const viewFunction = ROUTES[pathname] || ROUTES['/error']; // Encuentra la vista correcta o la de error

  const viewElement = viewFunction(props); // Renderizar la vista correcta pasando el valor de props
  rootEl.appendChild(viewElement); // Añadir el elemento de vista al elemento raíz del DOM
};


export const navigateTo = (pathname, props = {}) => {
  window.history.pushState( // actualizar el historial con pushState
    {}, // el estado asociado con la nueva entrada de historial
    '', // el título de la página (normalmente se deja vacío)
    pathname // la nueva URL que aparece en la barra de direcciones
  );
  renderView(pathname, props); // renderizar la vista de pathname y props
}

export const onURLChange = (location) => {
  const { pathname, search } = location; // encontrar la ubicación de pathname y los parámetros de search
  const queryParams = queryStringToObject(search); // convertir search params a un objeto
  renderView(pathname, queryParams); // renderizar la nueva vista de pathname y el objeto
}


























/*let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
  rootEl = el;
};

export const setRoutes = (routes) => {
  ROUTES = routes;
};

const renderView = (pathname, props = {}) => {
  rootEl.innerHTML = '';

  // Obtener la función de vista correspondiente a la ruta
  const viewRoute = ROUTES[pathname] || ROUTES['/error'];

  // Verificar si viewRoute es una función
  if (typeof viewRoute !== 'function') {
    // eslint-disable-next-line no-console
    console.error(`No function found for route: ${pathname}`);
    return;
  }

  const componentHtml = viewRoute(props);

  // Verificar que componentHtml sea un nodo HTML válido
  if (!(componentHtml instanceof HTMLElement)) {
    // eslint-disable-next-line no-console
    console.error(`The route function did not return a valid HTML element for: ${pathname}`);
    return;
  }

  return rootEl.appendChild(componentHtml);
};

export const navigateTo = (pathname, props = {}) => {
  const propsUrl = new URLSearchParams(props);
  const URL = `${pathname}?${propsUrl.toString()}`;
  window.history.pushState({}, '', URL);
  return renderView(pathname, props);
};

export const onUrlChange = () => {
  const { pathname, search } = window.location;
  const props = queryStringToObject(search);
  renderView(pathname, props);
};

const queryStringToObject = (queryString) => {
  const urlParams = new URLSearchParams(queryString);
  const objectParams = Object.fromEntries(urlParams);
  return objectParams;
}; */
