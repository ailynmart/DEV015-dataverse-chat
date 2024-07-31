// test/apiKey.spec.js
import { getApiKey, setApiKey } from '../src/lib/apiKey.js';

describe('API Key Management', () => {

  it('debería devolver el valor de la API Key', () => {
    setApiKey('test-api-key');
    expect(getApiKey()).toBe('test-api-key');
  });

  it('debería establecer correctamente la API Key', () => {
    setApiKey('test-api-key');
    expect(getApiKey()).toBe('test-api-key');
  });

});
