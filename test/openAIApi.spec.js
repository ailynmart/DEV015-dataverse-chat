import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
import { getApiKey } from '../src/lib/apiKey.js';

jest.mock('../src/lib/apiKey.js', () => ({
  getApiKey: jest.fn()
}));

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    window.fetch = jest.fn();
  });

  test('comunicación exitosa con OpenAI', async () => {
    // Simula una respuesta exitosa de la API
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({
        choices: [
          {
            message: {
              content: 'example response'
            }
          }
        ]
      })
    });

    // Simula que getApiKey devuelve una API Key válida
    getApiKey.mockReturnValue('mocked-api-key');

    const elementoPersonaje = { name: 'Asistente', description: 'ayudante inteligente' };
    const message = 'Hola, ¿cómo estás?';

    const response = await communicateWithOpenAI(elementoPersonaje, message);
    console.log(response); // Añade un log para ver la respuesta

    expect(response).toBe('example response');
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  test('fallo en la comunicación con OpenAI por API Key ausente', async () => {
    console.error = jest.fn(); // Evitar que se muestre el error en la consola durante la prueba

    // Simula que getApiKey devuelve null (API Key ausente)
    getApiKey.mockReturnValue(null);

    try {
      await communicateWithOpenAI(null, 'Hola');
    } catch (error) {
      console.log(error); // Añade un log para ver el error
      expect(error).toEqual(new Error('No se encontró una API key'));
      expect(window.fetch).not.toHaveBeenCalled();
    }
  });
});
