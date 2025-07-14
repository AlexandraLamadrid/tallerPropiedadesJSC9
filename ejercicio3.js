function Reproductor() {
  this.estado = "detenido";

  this.play = function() {
    if (this.estado === "detenido" || this.estado === "pausado") {
      this.estado = "reproduciendo";
      console.log("Reproduciendo música...");
    } else if (this.estado === "reproduciendo") {
      console.log("Ya se está reproduciendo música.");
    }
  };

  this.pausar = function() {
    if (this.estado === "reproduciendo") {
      this.estado = "pausado";
      console.log("Música pausada.");
    } else {
      console.log("No hay música reproduciéndose.");
    }
  };

  this.detener = function() {
    this.estado = "detenido";
    console.log("Música detenida.");
  };
}

let miReproductor = new Reproductor();

miReproductor.play();     
miReproductor.play();     
miReproductor.pausar();   
miReproductor.pausar();   
miReproductor.detener();
