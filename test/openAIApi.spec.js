// test/openAIApi.spec.js
import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
import { setApiKey } from '../src/lib/apiKey.js';

describe('communicateWithOpenAI', () => {
  beforeAll(() => {
    // Establecer una API Key de prueba en Local Storage
    setApiKey('test-api-key');
  });

  it('should return a response from OpenAI', async () => {
    const message = 'Hello';
    const apiKey = 'test-api-key';
    const character = 'Character1';
    
    // Mock de la respuesta de OpenAI
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ choices: [{ text: 'Hello from Character1' }] })
      })
    );

    const response = await communicateWithOpenAI(message, apiKey, character);
    expect(response).toBe('Hello from Character1');
  });

  afterAll(() => {
    // Limpiar mocks después de las pruebas
    global.fetch.mockClear();
  });
});
