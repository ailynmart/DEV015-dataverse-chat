// src/views/Home.js
import { data } from '../data/dataset.js';
import { filterData } from '../lib/dataFunctions.js';

export function Home() {
  const filteredData = filterData(data);

  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1 class="title">DataVerse</h1>
    <ul class="data-list">
      ${filteredData.length > 0 
        ? filteredData.map(item => `<li class="data-item">${item.name}</li>`).join('') 
        : '<li>No data available</li>'
      }
    </ul>
  `;
  return viewEl;
}
