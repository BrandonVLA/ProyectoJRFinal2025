console.log(`Funcionando Archivo: Inicio`);

document.addEventListener("DOMContentLoaded", (e) => {
  Mostrar_Testimonios();
  Mostrar_Articulos();
});

function Mostrar_Testimonios() {
  let Contenedor_IdFooter = document.getElementById("Testimonios"); //gi ls

  Contenedor_IdFooter.innerHTML = `

   <div class="container">
        <p class="h2 mb-2">
        Las sombras son cada vez más largas, asegúrate de cuidarte las espaldas porque no sabes lo que puede estar acechando... En esta temporada de alto riesgo, cada movimiento es importante y cada giro de esquina podría ser el último.  
        </p>
        <p class="h4 lead">- Autor: © 2025 Activision Publishing, Inc. </p>
    </div>
`;
}

function Mostrar_Articulos() {
  let Contenedor_IdFooter = document.getElementById("Articulos"); //gi ls

  Contenedor_IdFooter.innerHTML = `

                <div class="container">

                    <div class="fondo-informacion">
                        <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6">
                           <img src="/Assets/cod2012.png" class="w-100 h-80" alt="html">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6">
                            <h2>Call of Duty: Black Ops II:</h2>
                            <p>
                                Call of Duty: Black Ops II es un videojuego de disparos en primera persona desarrollado por Treyarch y distribuido por Activision. Fue lanzado para Microsoft Windows, PlayStation 3, y Xbox 360 el 12 de noviembre de 2012, y para el Wii U el 18 de noviembre en América del Norte y el 30 de noviembre en las regiones PAL. Un juego correspondiente para la PlayStation Vita, Call of Duty: Black Ops: Declassified, fue desarrollado por nStigate Games y también se lanzó el 13 de noviembre. 
                            </p>
                            <p>
                                La campaña del juego sigue la historia de Black Ops y tiene lugar a finales de la década de 1980 y en 2025. En la década de 1980, el jugador cambia el control entre Alex Mason y Frank Woods, dos de los protagonistas de Black Ops, mientras que en 2025, el jugador asume el control del hijo de Mason, David (nombre en código "Sección"). Ambos períodos de tiempo involucran a los personajes que persiguen a Raúl Menéndez, un traficante de armas de Nicaragua y más tarde terrorista, que es responsable del secuestro de David en los años 80 y más tarde de provocar una Segunda Guerra Fría en 2025. La campaña presenta juego no lineal y tiene múltiples finales.​ Las ubicaciones en el juego incluyen Angola, Myanmar, Afganistán, Nicaragua, Pakistán, las Islas Caimán, Panamá, Yemen, Estados Unidos y Haití. 
                            </p>
                            <a class="btn btn-info btn-lg" href="https://es.wikipedia.org/wiki/Call_of_Duty:_Black_Ops_II" target="_blank">Mas sobre Call Of Duty Black Ops II</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>

                    <div class="row">

                        <!-- Inicio: Contenedor 1  -->
                        <div class="col-md-6 col-sm-6 mt-4 mb-4">
                           <img src="/Assets/portadacod.png" class="w-100 h-80" alt="css">
                        </div>
                        <!-- Fin: Contenedor 1 -->

                        <!-- Inicio: Contenedor 2  -->
                        <div class="col-md-6 col-sm-6 mt-4 mb-4">
                            <h2>Call of Duty: Modern Warfare(2019):</h2>
                            <p>
                                Call of Duty: Modern Warfare es un videojuego de acción de disparos en primera persona desarrollado por Infinity Ward y publicado por Activision. Sirviendo como la decimosexta entrega general de la serie Call of Duty, así como un reinicio de la subserie Modern Warfare, se lanzó el 25 de octubre de 2019 para PlayStation 4, Windows y Xbox One. 
                            </p>
                            <p>
                                El juego se desarrolla en un entorno realista y moderno. La campaña sigue a un oficial de la CIA y a las fuerzas británicas del SAS mientras se unen a los rebeldes de la ficticia República de Urzikstan, luchando juntos contra las Fuerzas Armadas rusas que han invadido el país y el grupo terrorista Urzik Al-Qatala, mientras buscan un cargamento robado de cloro gaseoso. El modo multijugador admite el modo multijugador multiplataforma y la progresión multiplataforma por primera vez en la serie.
                            </p>
                            <a class="btn btn-info btn-lg" href="https://es.wikipedia.org/wiki/Call_of_Duty:_Modern_Warfare_(videojuego_de_2019)" target="_blank">Mas sobre Modern Warfare(2019)</a>
                        </div>
                        <!-- Fin: Contenedor  2-->
                    </div>
                    
                    </div>

                </div>

`;
}
