// src/lib/openAIApi.js
import { getApiKey } from './apiKey.js';

export const communicateWithOpenAI = async (messages) => {
  const apiKey = getApiKey();
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: messages,
    }),
  });

  if (!response.ok) {
    throw new Error(`Error en la solicitud: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
};
