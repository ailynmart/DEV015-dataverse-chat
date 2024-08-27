
import { filterData, sortData } from '../src/lib/dataFunctions.js';
import { data as fakeData} from "../test/data.js";


describe('filterData', () => {
  it('debería retornar los platos que cumplan el filtro "Plato Principal"', () => {
    const tipodePlato = filterData(fakeData, "name", "Plato Principal");
    expect(tipodePlato.length).toBe(0);
 
  });
});

describe('sortData', () => {
  it('debería ordenar los platos de forma ascendente por nombre', () => {
    const ordenAscen = sortData(fakeData, 'name', 'asc');
    expect(ordenAscen[0].name).toBe('Chocolate con chile'); // Ajusta el valor según los datos de prueba
  });

  it('debería ordenar los platos de forma descendente por nombre', () => {
    const ordenDesc = sortData(fakeData, 'name', 'desc');
    expect(ordenDesc[0].name).toBe('Chocolate con chile');
  });
});

