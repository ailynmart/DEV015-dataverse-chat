// src/router.js
let rootEl = null;
let routes = {};

export const setRootEl = (element) => {
  rootEl = element;
};

export const setRoutes = (newRoutes) => {
  routes = newRoutes;
};

export const renderView = (path) => {
  const [route, params] = matchRoute(path);
  if (route && routes[route]) {
    const view = routes[route](params);
    rootEl.innerHTML = '';
    rootEl.appendChild(view);
  } else {
    rootEl.innerHTML = '<h1>404 - Not Found</h1>';
  }
};

export const onURLChange = () => {
  renderView(window.location.pathname + window.location.search);
};

const match = path.match(regex);
if (match) {
  const params = {};
  const keys = route.match(/:(\w+)/g);
  if (keys) {
    keys.forEach((key, index) => {
      params[key.slice(1)] = match[index + 1];
    });
  }
  return [route, params];
}
