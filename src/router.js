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

const matchRoute = (path) => {
  for (const route in routes) {
    const regex = new RegExp(`^${route.replace(/:\w+/g, '(\\w+)')}$`);
    const match = path.match(regex);
    if (match) {
      const params = {};
      route.replace(/:(\w+)/g, (match, key, index) => {
        params[key] = match[index + 1];
      });
      return [route, params];
    }
  }
  return [null, null];
};
