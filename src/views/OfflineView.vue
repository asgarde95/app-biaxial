<template>
    <NavBar></NavBar>
    <div class="container" style="margin-left=0px; margin-right=0px;">
        <h1>Gráfico Offline</h1>
        <div class="row">
            <div class="col-10">
                <Chart></Chart>
            </div>
            <div class="col-2">
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Chart from '@/components/Chart.vue'
import NavBar from '@/components/NavBar.vue'
</script>

<style scoped></style>
