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
