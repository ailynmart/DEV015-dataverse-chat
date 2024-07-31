import { communicateWithOpenAI } from '../src/lib/openAIApi.js';

describe('communicateWithOpenAI', () => {
  test('should return a response from OpenAI API', async () => {
    const mockMessages = [{ role: 'user', content: 'Hello, how are you?' }];
    const response = await communicateWithOpenAI(mockMessages);
    
    expect(response).toHaveProperty('choices');
    expect(response.choices[0]).toHaveProperty('message');
    expect(response.choices[0].message).toHaveProperty('content');
  });
});
