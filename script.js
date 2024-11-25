const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('activo');  // Añadir clase 'activo'
      } else {
        entry.target.classList.remove('activo');  // Eliminar clase si sale de pantalla
      }
    });
  });
  
  // Observar el elemento
  const element = document.getElementsByClassName('.project');
  observer.observe(element);