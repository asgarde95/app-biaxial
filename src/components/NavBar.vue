<template>
    <div class="logo-connect">
        <div class="logo">
            <h3>BIAXIAL</h3>
            <label v-if="connection.open" class="connected">Conectado</label>
            <label v-else-if="connection.physicallyConnected">Enchufado</label>
            <label v-else class="desconnected">Desconectado</label>
        </div>
        <div class="connection">
            <button class="btn btn-secondary" v-if="!connection.id || !connection.physicallyConnected"
                            @click="connection.selectPort">Seleccionar
                            puerto</button>
                        <button class="btn btn-danger" v-else-if="connection.open" @click="connection.close">Desconectar</button>
                        <button class="btn btn-success" v-else @click="connection.connect">Conectar</button>
        </div>
    </div>
        <div class="menu-trad">
        <div class="traduccion">
            <button class="btn btn-secondary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" class="bi bi-translate"
                    viewBox="0 0 16 16">
                    <path
                        d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z">
                    </path>
                    <path
                        d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z">
                    </path>
                </svg>
            </button>
        </div>
        <div class="menu" @click="toggleMenu">
            <button class="btn" style="background-color: darkmagenta; color: white;" href='#'>MENÚ</button>
            <transition name="fade" apear>
                <div class="sub-menu" v-if="openMenu">
                    <button class="btn btn-light">
                        <RouterLink class="link" to="/RealTime">RealTime</RouterLink>
                    </button>
                    <button class="btn btn-light">
                        <RouterLink class="link" to="/Offline">Offline</RouterLink>
                    </button>
                    <button class="btn btn-light">
                        <RouterLink class="link" to="/Console">Terminal</RouterLink>
                    </button>
                    <button class="btn btn-light">
                        <RouterLink class="link" to="/About">Información</RouterLink>
                    </button>
                    <button class="btn btn-light">
                        <RouterLink class="link" to="/">Salir</RouterLink>
                    </button>
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
    color: black;
}
.btn {
    margin-top: 3%;
}


.sub-menu {
    position: absolute;
    right: -5%;
    text-align: right;
}

.menu-trad {
    display: inline-flex;
    position: absolute;
    z-index: 100;
    right: 12px;
}
.logo-connect {
    display: inline-flex;
    position: absolute;
    z-index: 100;
    left: 0%;
}

.connection {
    margin-left: 5px;
}

.traduccion {
    margin: 2%;
}

.menu {
    margin: 2%;
}
</style>
