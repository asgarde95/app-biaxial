<template>
    <h1><span>Bienvenidos a <span id="biaxial">Biaxial</span></span></h1>
    <div class="container">
        <div class="row">
            <div class="col-5">
                <h2>¿Eres nuev@?</h2>
                <p class="text-justify">Esta es una aplicación para el control de una máquina de ensayos biaxial para
                    realizar
                    pruebas
                    de estrés sobre tejidos.
                    <br/>
                    Debes de tener una placa arduino con el sketch necesario para poder utilizar esta aplicación.
                    <br/>
                    Más información acerca de los requerimientos software y hardware a continuación:
                </p>
                <p class="text-justify">
                    <RouterLink to="/About" class="btn btn-lg btn-light fw-bold border-white bg-white">Información
                    </RouterLink>
                </p>
            </div>
            <div class="col-2">
            </div>
            <div class="col-5">
                <h2>Configura tu conexión</h2>
                <p class="text-justify">Accede directamente a la configuración para conectar la app con tu arduino para
                    comenzar:
                </p>
                <p class="text-justify">
                    <RouterLink to="/RealTime" class="btn btn-lg btn-light fw-bold border-white bg-white">Comencemos
                    </RouterLink>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup></script>

<style></style>
