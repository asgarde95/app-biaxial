<template>
    <NavBar></NavBar>
    <div class="container" style="margin-left=0px; margin-right=0px;">
        <h1>Consola</h1>
        <div class="row">
            <div style="background-color: white;">
                <!-- <pre v-for="message in connection.messages" v-html="encodeWithHtml(message)"></pre> -->
                <main id="console" :style="{ left: left + 'px' }">
                    <section id="output" :class="{ newlines: true }">
                        <pre v-for="message in connection.messages" v-html="encodeWithHtml(message)"></pre>
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'

import { encodeWithHtml } from '@/util/asciiEncoder'
import { useConnectionStore } from '@/store/connection'
import { ref } from 'vue';
const connection = useConnectionStore()


let left = ref(0)
</script>

<style scoped></style>