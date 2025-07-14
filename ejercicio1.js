function Libro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
  this.prestado = false; 


  this.prestar = function() {
    if (this.prestado === false) {
      this.prestado = true;
      console.log(`El libro "${this.titulo}" ha sido prestado.`);
    } else {
      console.log(`El libro "${this.titulo}" ya está prestado.`);
    }
  };
}

let miLibro = new Libro("Cien Años de Soledad", "Gabriel García Márquez");

miLibro.prestar();
miLibro.prestar();
