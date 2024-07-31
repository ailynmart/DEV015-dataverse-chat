import { filterData, sortData } from '../src/lib/dataFunctions.js'; // Asegúrate de la ruta correcta
import { data as fakeData } from '../src/data/dataset.js'; // Asegúrate de la ruta correcta

describe('filterData', () => {
  it('debería retornar los platos que cumplan el filtro "Postres"', () => {
    const tipodePlato = filterData(fakeData, 'mainField', 'Postres'); // Cambié el parámetro a 'mainField'
    expect(tipodePlato.length).toBe(2); // Ajusta según la cantidad esperada
  });
});

describe('sortData', () => {
  it('debería ordenar los platos de forma ascendente por nombre', () => {
    const ordenAscen = sortData([...fakeData], 'name', true); // Usa 'true' para ascendente
    expect(ordenAscen[0].name).toBe('Micheladas');
  });

  it('debería ordenar los platos de forma descendente por nombre', () => {
    const ordenDesc = sortData([...fakeData], 'name', false); // Usa 'false' para descendente
    expect(ordenDesc).toEqual([...fakeData].sort((a, b) => b.name.localeCompare(a.name)));
  });
});
