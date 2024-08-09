// src/views/Home.js
import { data } from '../data/dataset.js';
import { filterData, sortData, computeAverageSpiciness, computeHottestDish, computeMildestDish, computeSpicinessLevels } from '../lib/dataFunctions.js';

export function Home() {
  // Aplica las funciones a los datos
  const filteredData = filterData(data, 'mainField', 'Plato Principal');
  const sortedData = sortData(filteredData, 'name', true);
  const averageSpiciness = computeAverageSpiciness(filteredData);
  const hottestDish = computeHottestDish(filteredData);
  const mildestDish = computeMildestDish(filteredData);
  const spicinessLevels = computeSpicinessLevels(filteredData);

  const viewEl = document.createElement('div');
  viewEl.innerHTML = `
    <h1 class="title">DataVerse</h1>
    <p>Average Spiciness: ${averageSpiciness}</p>
    <p>Hottest Dish: ${hottestDish.name}</p>
    <p>Mildest Dish: ${mildestDish.name}</p>
    <ul class="data-list">
      ${sortedData.length > 0 
        ? sortedData.map(item => `<li class="data-item">${item.name} - Spiciness: ${item.facts.nivelSpicy}</li>`).join('') 
        : '<li>No data available</li>'
      }
    </ul>
    <p>Spiciness Levels:</p>
    <ul>
      <li>Mild: ${spicinessLevels.mild}</li>
      <li>Medium: ${spicinessLevels.medium}</li>
      <li>Hot: ${spicinessLevels.hot}</li>
    </ul>
  `;
  return viewEl;
}

