function Carrito() {
  this.productos = []; 
  this.total = 0;      
 
  this.agregarProducto = function(nombre, precio) {
    this.productos.push({ nombre: nombre, precio: precio });
    this.total += precio;
    console.log(`Producto agregado: ${nombre} - $${precio}`);
  };

  this.calcularDescuento = function() {
    if (this.total > 100) {
      let descuento = this.total * 0.10;
      let totalConDescuento = this.total - descuento;
      console.log(`Total: $${this.total} - Descuento: 10%`);
      console.log(`Total a pagar: $${totalConDescuento}`);
    } else if (this.total > 50 && this.total <= 100) {
      let descuento = this.total * 0.05;
      let totalConDescuento = this.total - descuento;
      console.log(`Total: $${this.total} - Descuento: 5%`);
      console.log(`Total a pagar: $${totalConDescuento}`);
    } else {
      console.log(`Total a pagar: $${this.total} (sin descuento)`);
    }
  };
}

let miCarrito = new Carrito();

miCarrito.agregarProducto("Camisa", 30);
miCarrito.agregarProducto("Zapatos", 40);
miCarrito.agregarProducto("Pantalón", 50);

miCarrito.calcularDescuento(); 
