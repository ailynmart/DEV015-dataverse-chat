const footer = () => {
    const footerElement = document.createElement("footer");
    footerElement.innerHTML = `
      <p class="footer"> &copy; by Ailyn y Brigid</p>
      <p class="footer">Bootcamp de Laboratoria DEV015 3° proyecto</p>  
      `;
  
    return footerElement;
    //console.log(footer); como poder ver si esta funcionando?
  };
  
  export default footer;