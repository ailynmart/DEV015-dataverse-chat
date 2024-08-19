import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (message) => {
  const apiKey = getApiKey();
  if (!apiKey || apiKey.trim() === '') throw new Error('API Key is missing or empty');

  const url = 'https://api.openai.com/v1/chat/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const body = JSON.stringify({
    model: 'gpt-4', // Especifica el modelo que estás usando
    messages: [{ role: 'user', content: message }],
    max_tokens: 150
  });

  try {
    const response = await fetch(url, { method: 'POST', headers, body });
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error(`HTTP error! Status: ${response.status}, Details: ${JSON.stringify(errorDetails)}`);
    }
    const data = await response.json();
    return data.choices[0].message.content.trim(); // Asegúrate de devolver el contenido correcto
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error en la comunicación con OpenAI:', error);
    throw error;
  }
};



