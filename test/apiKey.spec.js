// test/apiKey.spec.js
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {
  beforeEach(() => {
    localStorage.clear(); // Limpiar el localStorage antes de cada test
  });

  it('debería devolver el valor de la API Key', () => {
    const testKey = 'test-api-key';
    setApiKey(testKey);
    expect(getApiKey()).toBe(testKey);
  });

  it('debería devolver null si no hay API Key almacenada', () => {
    expect(getApiKey()).toBeNull();
  });
});
