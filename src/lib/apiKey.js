//Dentro de apiKey.js, implementa dos funciones esenciales:
//HITO 3.2-Almacenamiento Seguro de la API KEY con Local Storage
// src/lib/apiKey.js
  // RECUPERA/OBTIENE
export const getApiKey = () => {
  try {
    return localStorage.getItem('apiKey');
  } catch (error) {
    console.error('Error al obtener la API Key:', error);
    return null;
  }
};

// Establece la API Key en el localStorage
export const setApiKey = (key) => {
  if (typeof key !== 'string' || key.trim() === '') {
    console.error('API Key inválida.');
    return;
  }
  
  try {
    localStorage.setItem('apiKey', key);
  } catch (error) {
    console.error('Error al establecer la API Key:', error);
  }
};

// Elimina la API Key del localStorage
export const removeApiKey = () => {
  try {
    localStorage.removeItem('apiKey');
  } catch (error) {
    console.error('Error al eliminar la API Key:', error);
  }
};
