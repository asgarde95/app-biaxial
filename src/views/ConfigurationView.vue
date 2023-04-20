<template>
    <NavBar></NavBar>
    <div class="container">
        <h1>Configuración</h1>
        <div class="row">
            <div id="options" :class="{ start: !connection.messages.length, open: connection.open }">
                <h2>
                    <strong v-if="connection.open">Conectado a:</strong>
                    <label v-else-if="connection.physicallyConnected">Enchufado</label>
                    <strong v-else>No conectado</strong>
                    {{ info() }}
                </h2>
                <fieldset>
                    <legend>Opciones</legend>
                    <dl>
                        <dt>Baud Rate</dt>
                        <dd><input :value="connection.options.baudRate" type="number"></dd>
                    </dl>
                    <button v-if="!connection.id || !connection.physicallyConnected"
                        @click="connection.selectPort">Seleccionar
                        puerto</button>
                    <button v-else-if="connection.open" @click="connection.close">Desconectar</button>
                    <button v-else @click="connection.connect">Conectar</button>
                </fieldset>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'

import { useConnectionStore } from '@/store/connection'
const connection = useConnectionStore()

const info = () => {
    if (!connection.id) return ''
    return ` - ${connection.product || connection.vendor || 'Unknown Device'} (${connection.id})`
}
</script>

<style></style>
