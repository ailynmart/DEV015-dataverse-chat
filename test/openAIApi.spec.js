import { communicateWithOpenAI } from '../src/utils/openAIApi.js';

describe('communicateWithOpenAI', () => {
  test('Debe devolver una respuesta de OpenAI basada en el mensaje y el carácter proporcionados.', () => {
    const mockCharacter = {
      name: 'TestCharacter',
      description: 'Test description for the character.'
    };
    const message = 'Hola, como estas?';

    return communicateWithOpenAI(mockCharacter, message).then(data => {
      // Verifica que la respuesta sea una cadena de texto
      expect(typeof data).toBe('string');
      // También puedes verificar si la respuesta incluye algunas palabras clave esperadas
      expect(data.length).toBeGreaterThan(0);
    });
  });
});
