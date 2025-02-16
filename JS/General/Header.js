import { nombrePagina } from "../Datos/ConsultaDatos.js";

//aela
document.addEventListener("DOMContentLoaded", (e) => {
  Mostrar_Footer();
});

function Mostrar_Footer() {
  let Contenedor_IdFooter = document.getElementById("Header"); //gi ls

  Contenedor_IdFooter.innerHTML = `

  <div class="container">
                <div class="row">
                    <!-- Inicio: Contenedor 1  -->
                    <div class="col-md-6 col-sm-6 mt-2">
                        <img src="/Assets/Call-of-Duty-Emblem.png" class="w-100 mt-3 mb-3" alt="">
                    </div>
                    <!-- Fin: Contenedor 1 -->

                    <!-- Inicio: Contenedor 2  -->
                    <div class="col-md-6 col-sm-6">

                        <!-- b4-jumbotron-default -->
                        <div class="">
                            <h3 class="lead text-center">Página  ${nombrePagina}</h3>
                            <p class="lead mt-4">
                                Serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision. La franquicia comenzó para computadora personal y posteriormente fue expandiéndose hacia videoconsolas de sexta y séptima generación, tanto de sobremesa como portátiles, llegando así a lanzar varios juegos derivados de forma paulatina con la serie principal. La serie inicialmente se ambientaba en la Segunda Guerra Mundial, retratando personajes y combates acaecidos durante dicho conflicto bélico.
                            </p>


                            <a class="btn btn-info btn-lg mt-2 mb-2 d-flex justify-content-center" href="https://es.wikipedia.org/wiki/Call_of_Duty" target="_blank"  role="button">Mas Sobre Call Of Duty</a>


                        </div>
                    </div>
                    <!-- Fin: Contenedor  2-->
                </div>
            </div>

`;
}
