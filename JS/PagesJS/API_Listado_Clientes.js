console.log('Funcionando Archivo: API_Listado_Clientes');

const Api_Usuarios = "https://jsonplaceholder.typicode.com/users"


// Datos locales simulando la API
let Datos_Locales = [];

let DatosFiltrados = [];
let contenedor = document.getElementById('tbody');


//Se guardan los datos de Datos_Locales que s donde se simula la API al arreglo de DatosFiltrados para que si cambia el numbre en un futuro no se tengan que cambiar muchos numbres de arreglos y solo el que se le asigna a la variable
DatosFiltrados = Datos_Locales;


//aela
//manera profesional
//Importante el DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  consultarDatos();
  ConsultarApiClientes();
});

function consultarDatos() {
  //fetchget
  fetch(Api_Usuarios)

    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      // common error
      return null;
    });
}

function ConsultarApiClientes() {
  fetch(Api_Usuarios)
    .then(response => response.json())
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      // common error
      return null;
    });
}