// Filtra los datos por una propiedad y valor específicos
export const filterData = (data, property, value) => {   
    return data.filter(item => {
      const propertyValue = item.facts[property];
      return propertyValue && propertyValue.toLowerCase() === value.toLowerCase();
    });   
  };   
  
  // Ordena los datos por una propiedad en orden ascendente o descendente
  export const sortData = (data, property, ascending = true) => {         
    return data.sort((a, b) => {
      if (a[property] < b[property]) return ascending ? -1 : 1;
      if (a[property] > b[property]) return ascending ? 1 : -1;
      return 0;
    });
  };
  
  // Calcula el promedio de picante
  export function computeAverageSpiciness(data) {   
    const totalSpiciness = data.reduce((sum, item) => sum + item.spiciness, 0);     
    return (totalSpiciness / data.length).toFixed(2);                                            
  };
  
  // Encuentra el plato más picante
  export function computeHottestDish(data) {
    return data.reduce((hottest, item) => item.spiciness > hottest.spiciness ? item : hottest, data[0]); 
  };
  
  // Encuentra el plato menos picante
  export function computeMildestDish(data) {   
    return data.reduce((mildest, item) => item.spiciness < mildest.spiciness ? item : mildest, data[0]); 
  };
  
  // Cuenta los niveles de picante
  export function computeSpicinessLevels(data) { 
    return data.reduce((levels, item) => {  
      if (item.spiciness < 3) levels.mild++;   
      else if (item.spiciness < 7) levels.medium++;  
      else levels.hot++; 
      return levels;    
    }, { mild: 0, medium: 0, hot: 0 });
  };
  
  
  