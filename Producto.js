class Producto {
  constructor(codigo, nombre, cantidad, costo) {
    this.codigo = Number(codigo);
    this.nombre = nombre;
    this.cantidad = Number(cantidad);
    this.costo = Number(costo);
  }

  info() {
    return "Codigo: " + this.codigo + ", Nombre: " + this.nombre + ", Cantidad: " + this.cantidad + ", Costo: " + this.costo;
  }

  infoHtml() {
    return "<div>Codigo: " + this.codigo + ", Nombre: " + this.nombre + ", Cantidad: " + this.cantidad + ", Costo: " + this.costo + "</div>";
  }
}