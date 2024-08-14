import { filterData, sortData, calculateStatistics } from '../src/lib/dataFunctions.js';

describe('Data Functions', () => {
  // Datos de ejemplo para usar en las pruebas
  const sampleData = [
    { name: 'Jalapeño', spiciness: 5 },
    { name: 'Habanero', spiciness: 10 },
    { name: 'Poblano', spiciness: 3 },
    { name: 'Serrano', spiciness: 7 },
  ];

  test('filterData should filter elements by spiciness', () => {
    const result = filterData(sampleData, 5);
    expect(result).toEqual([
      { name: 'Habanero', spiciness: 10 },
      { name: 'Serrano', spiciness: 7 },
    ]);
  });

  test('sortData should sort elements by spiciness in ascending order', () => {
    const result = sortData(sampleData, 'asc');
    expect(result).toEqual([
      { name: 'Poblano', spiciness: 3 },
      { name: 'Jalapeño', spiciness: 5 },
      { name: 'Serrano', spiciness: 7 },
      { name: 'Habanero', spiciness: 10 },
    ]);
  });

  test('calculateStatistics should return average spiciness', () => {
    const result = calculateStatistics(sampleData);
    expect(result.averageSpiciness).toBe(6.25);
  });
});
