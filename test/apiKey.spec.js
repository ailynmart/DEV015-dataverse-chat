// test/apiKey.spec.js
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('API Key Management', () => {

  beforeEach(() => {
    localStorage.clear(); // Limpiar antes de cada prueba si se usa localStorage
  });

  it('debería devolver el valor de la API Key', () => {
    setApiKey('test-api-key');
    expect(getApiKey()).toBe('test-api-key');
  });

  it('debería establecer correctamente la API Key', () => {
    setApiKey('test-api-key');
    expect(getApiKey()).toBe('test-api-key');
  });

  it('debería almacenar la API Key en localStorage', () => {
    setApiKey('test-api-key');
    expect(localStorage.getItem('apiKey')).toBe('test-api-key');
  });
});
