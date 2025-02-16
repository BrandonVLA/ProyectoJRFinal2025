console.log(`Funcionando Archivo: Practica_Calculadora`);

function enviarDatos(dato1) {
  let nombre = document.getElementById("nombre").value;
  let edad = document.getElementById("edad").value;

  //Mostrar datos al cliente
  //Alert/Console log / Inner
  console.log("Mostrar nombre:", nombre);
  console.log("Mostrar edad:", edad);
  alert(`Nombre: ${nombre} Edad:${edad}`);
}

function realizarSuma() {
  console.log("Funcionando realizar suma");
  let numero1 = document.getElementById("numero1").value; // Snippet gi para crear estructura
  let numero2 = document.getElementById("numero2").value;
  console.log(numero1);
  console.log(numero2);

  //LS, LS, LA creacion de variables snippets
  //Suma de Numeros
  //ParseIntes para convertir variables de texto a numericas,ya que todo en JS es texto hay que convertirlas
  let suma = parseInt(numero1) + parseInt(numero2);
  document.getElementById("resultado").innerText = suma;
}