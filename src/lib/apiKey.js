//Dentro de apiKey.js, implementa dos funciones esenciales:

// src/lib/apiKey.js

export const getApiKey = () => {
    // Implementa el código para obtener la API KEY desde Local Storage
    const apiKeiy = localStorage.getItem('apikeiy');
    return apiKeiy;
};

export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  localStorage.setItem('apikeiy', key);
};

//ESTO LO IMPORTAMOS EN UNA VISTA por ejemplo cuando iniciemos en home 
// o cuando inicien los chat con la IA ..A ELECCION CREO??