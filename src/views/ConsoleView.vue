<template>
  <NavBar></NavBar>
  <div class="container" style="margin-left=0px; margin-right=0px;">
    <h1>{{ $t(20) }}</h1>
    <div class="row">
      <div style="background-color: white;">
        <main id="console">
          <section id="output" :class="{ newlines: newlines }">
            <pre v-for="message in connection.messages" v-html="encodeWithHtml(message)"></pre>
          </section>
        </main>
      </div>
    </div>
    <div class="row">
      <input class="form-control" type="text" v-model="consoleInput" />
      &nbsp;
      <button class="btn btn-secondary" @click="sendToArduino(consoleInput)" style="width:100px;">{{ $t(23) }}</button>
    </div>
  </div>
</template>

<script setup>
import NavBar from '@/components/NavBar.vue'
import { decode, encodeWithHtml } from '@/util/asciiEncoder';
import { useConnectionStore } from '@/store/connection'
import { ref } from 'vue';
const connection = useConnectionStore()
let newlines = ref(true)
let prepend = ref('')
let append = ref('\n')
let consoleInput = ref('')

function sendToArduino(consoleInput) {
  const cmd = prepend.value + consoleInput + append.value
  connection.write(decode(cmd));
  console.log('Envio: ' + consoleInput);
}

</script>

<style scoped>
#output {
  background-color: #fcfcfc;
  min-height: 100%;
}

#output>pre {
  word-break: break-all;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  display: inline;
}

#output>pre>br {
  display: none;
}

#output.newlines>pre>br {
  display: initial;
}

#prepend,
#append {
  min-width: 2ch;
  width: fit-content;
  font-size: 22px;
}

#console {
  overflow-y: scroll;
  height: 500px;
}</style>
