i// test/apiKey.spec.js
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('getApiKey', () => {
  it('debería devolver el valor de la API Key', () => {
    const testKey = 'test-api-key';
    setApiKey(testKey);
    expect(getApiKey()).toBe(testKey);
  });
});

describe('setApiKey', () => {
  it('debería establecer correctamente la API Key', () => {
    const testKey = 'test-api-key';
    setApiKey(testKey);
    expect(localStorage.getItem('apiKey')).toBe(testKey);
  });
});
