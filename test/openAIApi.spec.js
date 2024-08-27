// test/openAIApi.spec.js
import { communicateWithOpenAI } from '../src/lib/openAIApi.js';
import { data } from './data.js';

describe('communicateWithOpenAI', () => {
  beforeEach(() => {
    // Resetea el mock de fetch antes de cada prueba
    data.fetch = jest.fn();
  });

  test('comunicación exitosa con OpenAI', async () => {
    // Configurar el mock de fetch para que devuelva una respuesta simulada
    data.fetch.mockResolvedValueOnce({
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

    const elementoPersonaje = { name: 'Asistente', description: 'ayudante inteligente' };
    const message = 'Hola, ¿cómo estás?';

    const response = await communicateWithOpenAI(elementoPersonaje, message);
    expect(response).toBe('example response');
    expect(data.fetch).toHaveBeenCalledTimes(1);
  });

  test('fallo en la comunicación con OpenAI por API Key ausente', async () => {
    jest.spyOn(console, 'error').mockImplementation(() => {}); // Evitar que se muestre el error en la consola durante la prueba

    try {
      await communicateWithOpenAI(null, 'Hola');
    } catch (error) {
      expect(error).toEqual(new Error('No se encontró una API key'));
      expect(data.fetch).not.toHaveBeenCalled();
    }
  });
});