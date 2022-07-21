let planes = [  { nombre: "Plan x2 semanas", precio: 500, clases: 4, descuento: 0.90},
                { nombre: "Plan x4 semanas", precio: 500, clases: 8, descuento: 0.85},
                { nombre: "Plan x8 semanas", precio: 500, clases: 12, descuento: 0.80}
            ];

const botones = ["botonUno", "botonDos", "botonTres"];

let clientes = [];
let formulario;
let seccion;
let inputNombre;
let inputEdad;
let inputEmail;
let tabla;

class Clientes {
    constructor(nombre, edad, email, pack) {
      this.nombre = nombre.toUpperCase();
      this.edad = edad;
      this.email = email;
      this.pack = pack;
    }
  }

function inicializar() {
    formulario = document.getElementById("formulario");
    seccion = document.getElementById("seccion")
    inputNombre = document.getElementById("inputNombre");
    inputEdad = document.getElementById("inputEdad");
    inputEmail = document.getElementById("inputEmail");
    tabla = document.getElementById("tablaClientes");
}

function mostrarPlanes() {
    let i = 0
for (const plan of planes) {
    let columna = document.createElement("div")
    columna.className = "col-md-3 m-3"
    columna.innerHTML = `
    <div class="card">
        <div class="card-body">
            <p class="card-text">${plan.nombre}</p>
            <p class="card-text"> Cantidad de clases: ${plan.clases}</p>
            <p class="card-text"> Precio final: ${plan.precio*plan.clases*plan.descuento}</p>
            <button id="${botones[i]}"> + INFO </button>
        </div>
    </div>`;
    i++;
    seccion.append(columna);
}

let btnUno = document.getElementById("botonUno")
btnUno.addEventListener("click", () => {
    alert("Este plan cuenta con un 10% de descuento. Trabajaremos flexibilidad y aeróbico dos veces por semana, por dos semanas")
})

let btnDos = document.getElementById("botonDos")
btnDos.addEventListener("click", () => {
    alert("Este plan cuenta con un 15% de descuento. Trabajaremos flexibilidad, resistencia, aeróbico y fuerza tres veces por semana, por cuatro semanas")
})

let btnTres = document.getElementById("botonTres")
btnTres.addEventListener("click", () => {
    alert("Este plan cuenta con un 20% de descuento. Trabajaremos flexibilidad, resistencia, aeróbico, fuerza y estabilidad tres veces por semana, por ocho semanas")
})
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
  }

function validarFormulario(event) {
    event.preventDefault();
    let nombre = inputNombre.value;
    nombre || alert("No ingresó nombre")
    let edad = parseInt(inputEdad.value);
    edad || alert("No ingresó edad")
    let email = inputEmail.value;
    email || alert("No ingresó email")
    let cliente  = new Clientes(nombre, edad, email);
    clientes.push(cliente) 
    formulario.reset();
  
    limpiarTabla();
    agregarClientesTabla();
    almacenarClientesSessionStorage();
  }
  
  function agregarClientesTabla() {
    clientes.forEach((cliente) => {
      let filaTabla = document.createElement("tr");
      filaTabla.innerHTML = `
        <td>${cliente.nombre}</td>
        <td>${cliente.edad}</td>
        <td>${cliente.email}</td>`;
      tabla.tBodies[0].append(filaTabla);
    });
  }
  
  function limpiarTabla() {
    while (tabla.rows.length > 1) {
      tabla.deleteRow(1);
    }
  }
  
  function almacenarClientesSessionStorage() {
    sessionStorage.setItem("listaClientes", JSON.stringify(clientes));
  }
  
  function obtenerClientesSessionStorage() {
    let clientesAlmacenados = sessionStorage.getItem("listaClientes");
    console.log(typeof clientesAlmacenados)
    if (clientesAlmacenados !== null) {
      clientes = JSON.parse(clientesAlmacenados);
    }
  }


function main() {
    inicializar();
    mostrarPlanes();
    inicializarEventos();
    obtenerClientesSessionStorage();
    agregarClientesTabla();
}

main();

