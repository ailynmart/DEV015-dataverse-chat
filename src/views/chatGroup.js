import { data } from '../data/dataset.js';

export function ChatGroup() {
  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1>Group Chat</h1>
    <div>
      ${data.map(item => `<p>Chat with ${item.name}</p>`).join('')}
    </div>
  `;
  return viewEl;
}
