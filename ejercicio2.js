function ListaCompras() {
  this.productos = []; 

  this.agregar = function(producto) {
    this.productos.push(producto);
  };


  this.mostrar = function() {
    console.log("Lista de compras:");
    for (let i = 0; i < this.productos.length; i++) {
      console.log(`${i + 1}. ${this.productos[i]}`);
    }
  };
}

let miLista = new ListaCompras();
miLista.agregar("Manzanas");
miLista.agregar("Pan");
miLista.agregar("Leche");

miLista.mostrar();
