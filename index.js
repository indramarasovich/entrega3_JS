let planes = [  { nombre: "Plan x2 semanas", precio: 500, clases: 4, descuento: 0.90},
                { nombre: "Plan x4 semanas", precio: 500, clases: 8, descuento: 0.85},
                { nombre: "Plan x8 semanas", precio: 500, clases: 12, descuento: 0.80}
            ];

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
    }
}

function inicio() {
    let opcion = alert("¡Bienvenido a Meta Movimiento!");
}


let contenedor = document.getElementById("container")

inicio()
let nombre = prompt("Ingrese su nombre: ");
    let edad = prompt("Ingrese su edad: ");
    let cliente = new Persona(
        nombre,
        edad
        );

let encabezado = document.createElement("div")
encabezado.className = "text-center"
encabezado.innerHTML = `
<div class="card">
    <h3>Bienvenido ${cliente.nombre}
</div>`;

contenedor.append(encabezado);
   
for (const plan of planes) {
    let columna = document.createElement("div")
    columna.className = "col-md-3 m-3"
    columna.innerHTML = `
    <div class="card">
        <div class="card-body">
            <p class="card-text">${plan.nombre}</p>
            <p class="card-text"> Cantidad de clases: ${plan.clases}</p>
            <p class="card-text"> Precio final: ${plan.precio*plan.clases*plan.descuento}</p>
        </div>
    </div>`;

    contenedor.append(columna);
}

