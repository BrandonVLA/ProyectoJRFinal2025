console.log(`Funcionando Archivo: Practica_CICLO`);
let personas = [
  { nombre: "Juan", edad: 25, activo: true },
  { nombre: "Ana", edad: 17, activo: false },
  { nombre: "Carlos", edad: 30, activo: true },
  { nombre: "Laura", edad: 16, activo: true },
  { nombre: "Pedro", edad: 40, activo: false },
];

let Clientes = [
  { nombre: "Juan", edad: 25, activo: true },
  { nombre: "Ana", edad: 17, activo: false },
  { nombre: "Carlos", edad: 30, activo: true },
  { nombre: "Laura", edad: 16, activo: true },
  { nombre: "Pedro", edad: 40, activo: false },
];

//console.log(personas[3]);
//console.log(personas[1].nombre);

//ForEach
////array quitelo y coo que su array
//element serian las posiciones en el array

personas.forEach((element) => {
  console.log(element);
});

Clientes.forEach((element) => {
  if (element.activo === true) {
    console.log(element.nombre, element.activo);
  }
});

//cantidad de elementos que tiene un arreglo
console.log(personas.length);

let buscarnombre = personas.find((x) => x.nombre === "Ana");
console.log(buscarnombre);

let buscaractivos = personas.find((x) => x.activo === true);
console.log(buscaractivos);

//--------------------------inicio Filtrar-----------------------------

function Filtrar() {
  let valor = document.getElementById("sensitivo").value;
  console.log(valor);
}

//--------------------------fin Filtrar-----------------------------

//------------------------Caso #1-----------------------------------
function buscarDesdeInput() {
  let input1 = document.getElementById("buscarNombre").value.trim();
  let resultado = document.getElementById("resultadoBusqueda");

  // Busca en el arreglo
  let busqueda = personas.find(
    (x) => x.nombre.toUpperCase() === input1.toUpperCase()
  ); // nombre == pepe

  //Aqui indicamos si el resultado es verdadero o falso
  if (busqueda) {
    resultado.innerHTML = `Encontrada a la persona ${busqueda.nombre}`;
  } else {
    resultado.innerHTML = `No encontrado a la persona`;
  }
}

//Crear la funcion de onclick
//Input Id value
//// Cualquier etiqueta mostrar el resultado inner
//------------------------Caso #2-----------------------------------

function primeraPersonaActiva() {
  let resultado = document.getElementById("resultadoActivo");
  let busqueda = personas.find((x) => x.activo === true); //busca en el arreglo y el nuevo arreglo con los objetos que cumplan la condicion es la variable busqueda

  if (busqueda) {
    resultado.innerHTML = `Primera persona activa encontrada ${busqueda.nombre}`;
  } else {
    resultado.innerHTML = `No se encontro nadie activo`;
  }
}

//Crear la funcion de onclick
//Input Id value
//Cualquier etiqueta mostrar el resultado inner
//------------------------Caso #3-----------------------------------
function primeraMayorDeEdad() {
  let resultado = document.getElementById("resultadoMayor");
  let busqueda = personas.find((x) => x.edad >= 18);

  if (busqueda) {
    resultado.innerHTML = `La primera persona mayor de edad es: ${busqueda.nombre}`;
  } else {
    resultado.innerHTML = `No se encontro nadie mayor de edad`;
  }
}

//Crear la funcion de onclick
//Input Id value
//Cualquier etiqueta mostrar el resultado inner
//------------------------Caso #4-----------------------------------
function mostrarTodasLasPersonas() {
  let resultado = document.getElementById("listaPersonas");

  personas.forEach((element) => {
    resultado.innerHTML += `<li> - Nombre: ${element.nombre}, - Edad: ${element.edad}, - Activo: ${element.activo}. </li>`;
  });
}

//Crear la funcion de onclick
//Input Id value
//Cualquier etiqueta mostrar el resultado inner
//------------------------Caso #5-----------------------------------
function mayoresDeEdad() {
  let valor1 = document.getElementById("listaMayores");

  personas.forEach((element) => {
    if (element.edad >= 18) {
      valor1.innerHTML += `<li>- Nombre: ${element.nombre}. - Edad: ${element.edad}</li>`;
    }
  });
}

//Crear la funcion de onclick
//Input Id value
//Cualquier etiqueta mostrar el resultado inner
//------------------------Caso #6-----------------------------------

function personasActivas() {
  let resultado = document.getElementById("listaActivos");

  personas.forEach((element) => {
    if (element.activo == true) {
      resultado.innerHTML += `<li>nombre: ${element.nombre}</li>`;
    }
  });
}

//Ejercicios Adicionales para Logica

//Ejercicio Adicional #1

// function personasActivas() {
//   let valor1 = document.getElementById('listaActivos');

//   personas.forEach(element => {
//     if (element.activo === true) {
//       valor1.innerHTML += `<li> Edad: ${element.nombre} , Estado: ${element.activo}.</li>`;
//     }
//   });
// }

//Ejercicio Adicional #2

// function personasActivas() {
//   let valor2 = document.getElementById("listaActivos");
//   personas.forEach((element) => {
//     if (element.edad <= 18) {
//       valor2.innerHTML += `<li> Edad: ${element.edad}, Estado: ${element.activo}.</li>`;
//     }
//   });
// }

//Ejercicio Adicional #3
// function personasActivas() {
//   valor3 = document.getElementById('listaActivos');

//   personas.forEach(element => {
//     if (element.activo === false) {
//       valor3.innerHTML += `<li> Nombre: ${element.nombre}. Esta Activo? :${element.activo}.</li>`
//     }
//   });
// }
