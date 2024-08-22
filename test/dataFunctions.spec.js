import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('filterData', () => {
  it('debería retornar los platos que cumplan el filtro "Postres"', () => {
    const tipoDePlato = filterData(fakeData, "Postres");
    expect(tipoDePlato.every(plato => plato.facts.mainField === "Postres")).toBe(true);
  });
});

describe('sortData', () => {
  it('debería ordenar los platos de forma ascendente por nombre', () => {
    const ordenAscen = sortData(fakeData, 'name', 'asc');
    const nombresOrdenados = fakeData.map(plato => plato.name).sort();
    expect(ordenAscen.map(plato => plato.name)).toEqual(nombresOrdenados);
  });

  it('debería ordenar los platos de forma descendente por nombre', () => {
    const ordenDesc = sortData(fakeData, "name", "desc");
    const nombresOrdenadosDesc = fakeData.map(plato => plato.name).sort().reverse();
    expect(ordenDesc.map(plato => plato.name)).toEqual(nombresOrdenadosDesc);
  });
});


