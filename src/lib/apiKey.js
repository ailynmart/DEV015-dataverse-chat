//Dentro de apiKey.js, implementa dos funciones esenciales:
//HITO 3.2-Almacenamiento Seguro de la API KEY con Local Storage
// src/lib/apiKey.js
// RECUPERA/OBTIENE
export const getApiKey = () => {
// Implementa el código para obtener la API KEY desde Local Storage
  const apiKeiy = localStorage.getItem('apikeiy');
  return apiKeiy;
};
// GUARDA / ALMACENA 
export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  const apikeiy = localStorage.setItem('apikeiy', key);
  return apikeiy;
};
