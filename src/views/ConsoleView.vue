<template>
    <NavBar></NavBar>
    <div class="container" style="margin-left=0px; margin-right=0px;">
        <h1>Consola</h1>
        <div class="row">
            <div style="background-color: white;">
                <!-- <pre v-for="message in connection.messages" v-html="encodeWithHtml(message)"></pre> -->
                <main id="console" :style="{left:left+'px'}" @scroll="consoleScroll">
                  <section id="output" :class="{ newlines:newlines }">
                    <pre v-for="message in connection.messages" v-html="encodeWithHtml(message)"></pre>
                  </section>
                </main>
            </div>
            <div>
                <input type="text" v-model="consoleInput"/>
                <button @click="sendToArduino(consoleInput)">Enviar</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import {decode, encode, encodeWithHtml} from '@/util/asciiEncoder';
import { useConnectionStore } from '@/store/connection'
import { onMounted, ref } from 'vue';
const connection = useConnectionStore()
let newlines = ref(true)
let left = ref(0)
let prepend = ref('')
let append = ref('\n')
let scrolledToBottom = true
let consoleInput = ref('')

onMounted(async () => {
  const consoleDiv = document.querySelector('#console')
  const outputDiv = document.querySelector('#output')
  const resizeObserver = new ResizeObserver(entries => {
    if (scrolledToBottom) {
      window.setTimeout(() => {
        consoleDiv.scrollTop = Number.MAX_SAFE_INTEGER
      },100)
    }
  });
  resizeObserver.observe(outputDiv);
})

function sendToArduino(consoleInput) {
  const cmd = prepend.value + consoleInput + append.value
  connection.write(decode(cmd));
  console.log('Envio: ' + consoleInput);
}

function consoleScroll(e) {
  const scrollPoint = e.target.scrollTop + e.target.clientHeight
  scrolledToBottom = scrollPoint+10 >= e.target.scrollHeight
}

</script>

<style scoped>
 #output {
    background-color: #fcfcfc;
    min-height: 100%;
  }
  #output > pre {
    word-break: break-all;
    overflow-wrap: break-word;
    white-space: pre-wrap;
    display: inline;
  }
  #output > pre > br {
     display: none;
  }
  #output.newlines > pre > br {
     display: initial;
  }
  #prepend, #append {
    min-width: 2ch;
    width: fit-content;
    font-size: 22px;
  }
</style>
