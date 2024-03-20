Promise.resolve()//(1)
  .then(() => console.log('promise'))//(2)
  .then(() => console.log('another promise'))//(3)
  .then(() => console.log('third'))//(4)


  /**
   * Se crea un objecto promesa que se ejecuta inmediatamente anadidiendolo al micro-task , 
   * y se resuelve las funciones callback anadiendolas en orden por el encadenado al task-queue  
   */ 
