<template>
    <div class="navBar">
        <div class="logo">
            <h3>BIAXIAL</h3>
            <label v-if="connection.open" class="connected">Conectado</label>
            <label v-else-if="connection.physicallyConnected">Enchufado</label>
            <label v-else class="desconnected">Desconectado</label>
        </div>
        <div class="menu menu-item" @click="toggleMenu">
            <a class="link" style="background-color: darkmagenta; color: white;" href='#'>MENÚ</a>
            <transition name="fade" apear>
                <div class="sub-menu" v-if="openMenu">
                    <div class="menu-item">
                        <RouterLink class="link" to="/RealTime">RealTime</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink class="link" to="/Offline">Offline</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink class="link" to="/Console">Consola</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink class="link" to="/Configuration">Configuración</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink class="link" to="/About">Información</RouterLink>
                    </div>
                    <div class="menu-item">
                        <RouterLink class="link" to="/">Salir</RouterLink>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useConnectionStore } from '@/store/connection.js'
const connection = useConnectionStore();
const openMenu = ref(false)

// functions that mutate state and trigger updates
function toggleMenu() {
    openMenu.value = !openMenu.value;
}

</script>

<style>
.link {
    text-decoration: none;
    background-color: white;
    color: black;
    border-radius: 10px;
    border: 2px solid black;
    padding: 2px;
    margin: 10px;
}

.menu {
    display: inline-block;
    position: absolute;
    z-index: 100;
    right: 0%;
}
.menu-item{
    padding-top: 5px;
}
</style>
