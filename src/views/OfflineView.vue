<template>
    <NavBar></NavBar>
    <div class="container" style="margin-left=0px; margin-right=0px;">
        <h1>Gráfico Offline</h1>
        <div class="row">
            <div class="col-10">
                <Chart></Chart>
            </div>
            <div class="col-2">
                <p>Para comenzar la visualización es necesario que se elija un archivo compatible primero:</p>
                <input type="file" ref="file" style="display: none" />
                <button @click="$refs.file.click()">Seleccionar archivo...</button>
                <p>Las extensiones .csv, .blabla y .txt son compatibles con la aplicación.</p>
                <div class="valores">
                    <input style="color:blue;" value="1000.01" size="5" />
                    <input style="color:orange;" value="1000.01" size="5" />
                </div>
                <div class="valores">
                    <input style="color:green;" value="1000.01" size="5" />
                    <input style="color:red;" value="1000.01" size="5" />
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import Chart from '@/components/Chart.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
.valores {
    display: flex;
    /* text-align: center; */
    padding: 10px;
    justify-content: space-evenly;
}
</style>
