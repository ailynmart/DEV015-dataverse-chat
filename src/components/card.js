export const cards = (data) => {
    const creoUL = document.createElement("ul");
    data.forEach(item => {
        const creoLi = document.createElement("li");
        creoLi.setAttribute('itemtype','food');
        creoLi.setAttribute('itemscope',true);
        creoLi.setAttribute("data-id", item.id)
        creoLi.innerHTML = `
        '<div>' +
     '<p>Nombre: ' + (item.name || 'Sin nombre') + '</p>' +
     '<p>Descripción corta: ' + (item.shortDescription || 'Sin descripción corta') + '</p>' +
     '<p>Descripción: ' + (item.description || 'Sin descripción') + '</p>' +
     '<img src="' + (item.imageUrl || '') + '" alt="' + (item.name || 'Imagen sin nombre') + '">' +
     '<p>Nivel de picante: ' + (item.facts.nivelSpicy || 'Sin nivel de picante') + '</p>' +
     '<p>Lugar de origen: ' + (item.facts.placeOrigen || 'Sin lugar de origen') + '</p>' +
     '<p>Tipo de carne: ' + (item.facts.typeOfMeat || 'Sin tipo de carne') + '</p>' +
     '<p>Categoría: ' + (item.facts.mainField || 'Sin categoría') + '</p>' +
     '</div>';
    
      `
      creoUL.appendChild(creoLi);
        
    });

    return creoUL;
};
export default cards;