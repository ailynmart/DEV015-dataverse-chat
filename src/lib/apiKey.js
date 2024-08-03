//Dentro de apiKey.js, implementa dos funciones esenciales:

// src/lib/apiKey.js
  //  obtener la API KEY
export const getApiKey = () => {
    // Implementa el código para obtener la API KEY desde Local Storage
    const apiKeiy = localStorage.getItem('apikeiy');
    return apiKeiy;
};
//  guardar la API KEY 
export const setApiKey = (key) => {
  // Implementa el código para guardar la API KEY en Local Storage
  const apikeiy = localStorage.setItem('apikeiy', key);
  return apikeiy;
};

//ESTO LO IMPORTAMOS EN UNA VISTA por ejemplo cuando iniciemos en home 
// o cuando inicien los chat con la IA ..A ELECCION CREO??