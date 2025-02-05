console.log(`Funcionando Archivo: Practica_IF`);
// Caso 1
function verificarEdad() {
  let edad = document.getElementById("edad").value;
  let pais = document.getElementById("pais").value;

  console.log(edad);
  console.log(pais);

  //IFELSE
  if (edad >= 18) {
    alert(`Eres mayor de edad en ${pais}. `);
  } else {
    alert(`No eres mayor de edad en ${pais}. `);
  }
}
//Pregunta de Entrevista
function verificarParImpar() {
  let numero3 = document.getElementById("numero3").value;
  console.log(numero3);

  let numeroConvertido = parseInt(numero3);

  if (numeroConvertido % 2 === 0) {
    document.getElementById(
      "mensajeParImpar"
    ).innerText = `${numeroConvertido} Es Par `;
  } else {
    document.getElementById(
      "mensajeParImpar"
    ).innerText = `${numeroConvertido} Es Impar `;
  }
}

//Evaluar Nota
function evaluarNota() {
  let nota = document.getElementById("nota").value;
  let notaConvertida = parseInt(nota);
  if (notaConvertida >= 90) {
    document.getElementById(
      "mensajeNota"
    ).innerText = `El resultado ${notaConvertida} es Excelente Nota`;
  } else if (notaConvertida >= 70) {
    document.getElementById(
      "mensajeNota"
    ).innerText = `El resultado es Aprobado`;
  } else {
    document.getElementById(
      "mensajeNota"
    ).innerText = `El resultado es Reprobado`;
  }
}
//Tarea Ejercicio #1
function calcularDescuento() {
  let monto = document.getElementById("monto").value;
  console.log(monto);
  let montoConvertido = parseFloat(monto);
  console.log(montoConvertido);

  if (montoConvertido >= 100) {
    let montoDescuento = montoConvertido * 0.09;
    let montoTotal = montoConvertido - montoDescuento;

    console.log(montoTotal);

    document.getElementById("mensajeDescuento").innerText = `Aplicas para un descuento de $${montoDescuento} por que tu compra es mayor o igual a $100! El total a pagar es de $${montoTotal}.`;
  } else {
    document.getElementById("mensajeDescuento").innerText = `No aplicas para el descuento por que tu compra es de $${montoConvertido} y necesita ser de $100 o mas!`;
  }
}
//----------------------------------------

//Tarea Ejercicio #2
function verificarMayorMenor() {
  let edad = document.getElementById("edadSimple").value;
  console.log(edad);
  let edadConvertida = parseInt(edad);
  console.log(edadConvertida);

  if (edadConvertida >= 18) {
    document.getElementById(
      "mensajeEdadSimple"
    ).innerText = `Eres mayor de edad por que tienes ${edadConvertida} años.`;
  } else {
    document.getElementById(
      "mensajeEdadSimple"
    ).innerText = `Eres menor de edad por que tienes ${edadConvertida} años.`;
  }
}
//----------------------------------------
