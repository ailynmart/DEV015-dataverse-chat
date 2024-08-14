import { getApiKey, setApiKey } from '../src/lib/apiKey.js';
describe('getApiKey', () => {
    it('should return the value of the API Key', () => {
        localStorage.setItem('apiKey', 'test-key');
        expect(getApiKey()).toBe('test-key');
    });
});
describe('setApiKey', () => {
    it('should set the API Key correctly', () => {
        setApiKey('new-key');
        expect(localStorage.getItem('apiKey')).toBe('new-key');
    });
});
/*HITO3.3Pruebas para funciones de API Key --->En este archivo, desarrolla los tests
 correspondientes. Puedes utilizar el siguiente esquema como punto de partida:*/
/* test/apiKey.spec.js

import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {

  it('debería devolver el valor de la API Key', () => {
    // Desarrolla el test correspondiente aquí
  });
});

describe('setApiKey', () => {

  it('debería establecer correctamente la API Key', () => {
   // Desarrolla el test correspondiente aquí
  });
});*/