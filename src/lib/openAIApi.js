// src/lib/openAIApi.js
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (message) => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error('API Key is missing');

  const url = 'https://api.openai.com/v1/engines/davinci-codex/completions';
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
  };

  const body = JSON.stringify({
    prompt: message,
    max_tokens: 150
  });

  try {
    const response = await fetch(url, { method: 'POST', headers, body });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.choices[0].text.trim(); // Ajusta según la respuesta de OpenAI
  } catch (error) {
    console.error('Error en la comunicación con OpenAI:', error);
    throw error;
  }
};



