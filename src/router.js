let ROUTES = {};
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
    console.error(`No function found for route: ${pathname}`);
    return;
  }

  const componentHtml = viewRoute(props);

  // Verificar que componentHtml sea un nodo HTML válido
  if (!(componentHtml instanceof HTMLElement)) {
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
};
