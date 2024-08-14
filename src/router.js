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
  const viewRoute = ROUTES[pathname] || ROUTES['/error'];
  const componentHtml = viewRoute(props);
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
