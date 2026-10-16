const inventario = new Inventario();

const txtCod = document.getElementById("txtCod");
const txtNom = document.getElementById("txtNom");
const txtCan = document.getElementById("txtCan");
const txtPre = document.getElementById("txtPre");
const txtPos = document.getElementById("txtPos");
const detalles = document.getElementById("detalles");

function crearProducto() {
  let cod = Number(txtCod.value);
  let nom = txtNom.value;
  let can = Number(txtCan.value);
  let pre = Number(txtPre.value);
  let pos = Number(txtPos.value);
  return new Producto(cod, nom, can, pre);
}

document.getElementById("btnAdd").addEventListener("click", () => {
  let prod = crearProducto();
  inventario.agregar(prod);
  detalles.innerHTML = "Producto agregado correctamente.";
});

document.getElementById("btnBus").addEventListener("click", () => {
  let cod = Number(txtCod.value);
  let prod = inventario.buscar(cod);
  if(prod) {
    detalles.innerHTML = "Producto encontrado: " + prod.infoHtml();
  } else {
    detalles.innerHTML = "Producto NO encontrado";
  }
});

document.getElementById("btnEli").addEventListener("click", () => {
  let cod = Number(txtCod.value);
  let prod = inventario.eliminar(cod);
  if (prod) {
    detalles.innerHTML = "Producto eliminado correctamente";
  } else {
    detalles.innerHTML = "Producto NO encontrado";
  }
});

document.getElementById("btnIns").addEventListener("click", () => {
  let prod = crearProducto();
  let Pos = Number(txtPos.value);
  let resultado = inventario.insertar(Pos, prod);
  if (resultado) {
    detalles.innerHTML = "Producto insertado en la posicion " + Pos;
  } else {
    detalles.innerHTML = "Posición NO valida jajaj"
  }
});

document.getElementById("btnExt").addEventListener("click", () => {
let prod = inventario.extraerPrimero();
  if (prod) {
    detalles.innerHTML = "Producto extraído: " + prod.infoHtml();
  } else {
    detalles.innerHTML = "El inventario está vacío";
  }
});

document.getElementById("btnInc").addEventListener("click", () => {
  let prod = crearProducto();
  inventario.agregarInicio(prod);
  detalles.innerHTML = "Producto agregado al inicio correctamente.";
});

document.getElementById("btnList").addEventListener("click", () => {
  detalles.innerHTML = inventario.listar();
});

document.getElementById("btnListInverso").addEventListener("click", () => {
  detalles.innerHTML = inventario.listarInverso();
});