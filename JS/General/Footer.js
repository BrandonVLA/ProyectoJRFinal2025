console.log("Archivo: Footer");
//aela
document.addEventListener("DOMContentLoaded", (e) => {
  Mostrar_Footer();
});

function Mostrar_Footer() {
  let Contenedor_IdFooter = document.getElementById("IdFooter"); //gi ls

  Contenedor_IdFooter.innerHTML = `

    <!-- Inicio: footer-informacion    -->
        <div class="container">
            <div class="row">
                <!-- Inicio: Contenedor 1 5 columnas  -->

                <div class="col-md-5 col-sm-6 pt-2">
                    <!-- Fin: Contenedor 1 -->
                    <p class="text-muted"> Esta página es una creación fanmade y no está afiliada a Activision ni a Call of Duty. Todos los derechos de autor y marcas registradas son propiedad de sus respectivos dueños.</p>
                </div>
                <!-- Fin: footer-mensaje -->

                <!-- Inicio: Contenedor 2 5 columnas  -->

                <div class="col-md-5 col-sm-6">

                    <!-- Fin: Contenedor 2 -->

                </div>
                <!-- Inicio: Contenedor 3 2 columnas  -->
                <div class="col-md-2 col-sm-6 iconos pt-2">
                    <i class="fab fa-facebook-f"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-youtube"></i>
                    <!-- Fin: Contenedor 3 -->
                </div>

            </div>
            <!-- Inicio: Contenedor 1 12 columnas  -->
            <div class="col-md-12 pb-2">
                <p class="text-muted"> Copyright @2025 VLA| Front L-M Brandon B.</p>
            </div>
            <!-- Fin: footer-mensaje -->

        </div>
`;
}
