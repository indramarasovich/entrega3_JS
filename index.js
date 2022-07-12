let planes = [  { nombre: "Plan x2 semanas", precio: 500, clases: 4, descuento: 0.90},
                { nombre: "Plan x4 semanas", precio: 500, clases: 8, descuento: 0.85},
                { nombre: "Plan x8 semanas", precio: 500, clases: 12, descuento: 0.80}
            ];

const botones = ["botonUno", "botonDos", "botonTres"];

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre.toUpperCase();
        this.edad = edad;
    }
}

function inicio() {
    let opcion = alert("¡Bienvenido a Meta Movimiento!");
}


let secTitulo = document.getElementById("seccionTitulo")

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
<div>
    <h3>Bienvenido ${cliente.nombre}</h3>
</div>`;

secTitulo.append(encabezado);
   

let segSeccion = document.getElementById("segundaSeccion")
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
            <button id="${botones[i]}"> Conoce más </button>
        </div>
    </div>`;
    i++;
    segSeccion.append(columna);
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
