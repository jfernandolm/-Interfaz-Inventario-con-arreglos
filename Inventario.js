class Inventario {
  static listar() {
      throw new Error("Method not implemented.");
  }
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    return this.productos.push(producto);
  }

  buscar(codigo) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        return this.productos[i];
      }
    }
    return null;
  }

  eliminar(codigo) {
    for (let i = 0; i < this.productos.length; i++) {
      if (this.productos[i].codigo === codigo) {
        let borrado = this.productos[i];
        for (let j = i; j < this.productos.length - 1; j++) {
          this.productos[j] = this.productos[j + 1];
        }
        this.productos.pop();
        return borrado;
      }
    }
    return null;
  }

  insertar(posicion, producto) {
    if (posicion < 0 || posicion > this.productos.length) {
      return false;
    }
    this.productos.push(producto);
    for (let i = this.productos.length - 1; i > posicion; i--) {
      this.productos[i] = this.productos[i - 1];
    }
    this.productos[posicion] = producto;
    return true;
  }

  extraerPrimero() {
    if (this.productos.length === 0) {
      return null;
    }
    let primero = this.productos[0];
    for (let i = 0; i < this.productos.length - 1; i++) {
      this.productos[i] = this.productos[i + 1];
    }
    this.productos.pop();
    return primero;
  }

  agregarInicio(producto) {
    return this.insertar(0, producto);
  }

  listar() {
    let texto = "";
    for (let i = 0; i < this.productos.length; i++) {
      texto += this.productos[i].infoHtml();
    }
    return texto;
  }

  listarInverso() {
    let texto = "";
    for (let i = this.productos.length - 1; i >= 0; i--) {
      texto += this.productos[i].infoHtml();
    }
    return texto;
  }
}