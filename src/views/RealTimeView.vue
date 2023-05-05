<template>
  <NavBar></NavBar>
  <div class="container" style="margin-left=0px; margin-right=0px;">
    <h1>Gráfico RealTime</h1>
    <div class="row">
      <div class="col-md-8 text-bg-light">
        <Line :data="data" :options="options" />
      </div>
      <div class="col-md-4" style="color:white;">
        Mover motores:
        <div class="botones">
          <button class="btn btn-secondary" @click="move(100)">+100</button>
          <button class="btn btn-secondary" @click="move(100)">+10</button>
          <button class="btn btn-secondary" @click="move(100)">+1</button>
        </div>
        <div class="botones">
          <button class="btn btn-secondary" @click="move(-1)">-1</button>
          <button class="btn btn-secondary" @click="move(-10)">-10</button>
          <button class="btn btn-secondary" @click="move(-100)">-100</button>
        </div>
        <div class="col-md-12" style="margin-top: 35px;">
          <section class="layout">
            <div></div>
            <div>
              <input class="row" style="color: red" value="1000.01" size="5" />
              <input class="form-check-input" type="checkbox" id="top-axis" v-model="positiveY">
            </div>
            <div></div>
            <div>
              <input style="color: blue" value="1000.01" size="5" />
              <input class="form-check-input" type="checkbox" id="left-axis" v-model="minusX">
            </div>
            <div>
              <img src="@/assets/planar-biaxial-arrow.png" alt="Biaxial axis" width="150" height="150" />
            </div>
            <div>
              <input style="color: orange" value="1000.01" size="5" />
              <input class="form-check-input" type="checkbox" id="right-axis" v-model="positiveX">
            </div>
            <div></div>
            <div>
              <input class="row" style="color: green" value="1000.01" size="5" />
              <input class="form-check-input" type="checkbox" id="bottom-axis" v-model="minusY">
            </div>
            <div></div>
          </section>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 tests">
        <h4>RUN A TEST</h4>
        <div class="row">
          <button class="col-4 btn btn-light">Start Constant Elongation Test</button>
          <button class="col-4 btn btn-light">Start Peel Test</button>
        </div>
        <div class="row">
          <button class="col-4 btn btn-light">Start Break Test</button>
          <button class="col-4 btn btn-light">Pre-tensioning</button>
          <input class="form-control" type="number" style="width: 15%;" :value="option.break"/>
        </div>
      </div>
      <div class="col-md-6">
        <h4>PARAMETERS</h4>
        <div class="row params">
          Load cell multiplier
          &nbsp;
          <select class="col-4 form-control" :v-model="option.cell[0]" style="width: 125px">
            <option v-for="option in option.cell" :value="option">
              {{ option }}
            </option>
            <option></option>
          </select>
          &nbsp;
          Speed(mm/min):
          &nbsp;
          <input class="col-3 form-control" type="number" v-model="option.speed" style="width: 70px"/>
        </div>
        <div class="row params">
          Maximum elongation(mm):
          &nbsp;
          <input class="col-3 form-control" type="number" v-model="option.elongation" style="width: 70px" />
        </div>
        <div class="row params">
          <div col-3>
            <button v-if="!connection.cargandoDatos" class="btn btn-secondary" @click="getDataFromArduino()">Obtener
              Datos</button>
            <button v-else class="btn btn-secondary" @click="connection.stopData()">Parar los Datos</button>
            &nbsp;
            <button class="btn btn-secondary" @click="putChartData()">Datos Prueba</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { useConnectionStore } from '@/store/connection'
import { decode, encode, encodeWithHtml } from '@/util/asciiEncoder';
import { ref, watch, computed } from 'vue';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const connection = useConnectionStore()

let prepend = ref('')
let append = ref('\n')
let minusY = ref(false)
let minusX = ref(false)
let positiveY = ref(false)
let positiveX = ref(false)
let timer = ref(0)
let option = ref({
  cell : [5, 50, 100],
  elongation : 2,
  speed : 10,
  break : 1
})

function move(value) {
  let cmd = prepend.value;
  if(minusY.value && !positiveY.value && !minusX.value && !positiveX.value){
    console.log("Moviendo -y")
  }
  else if (!minusY.value && positiveY.value && !minusX.value && !positiveX.value){
    console.log("Moviendo +y")
  }
  else if (!minusY.value && !positiveY.value && minusX.value && !positiveX.value){
    console.log("Moviendo -x")
  }
  else if (!minusY.value && !positiveY.value && !minusX.value && positiveX.value){
    console.log("Moviendo +x")
  }
  else if (minusY.value && positiveY.value && !minusX.value && !positiveX.value){
    console.log("Moviendo eje y")
  }
  else if (!minusY.value && !positiveY.value && minusX.value && positiveX.value){
    console.log("Moviendo eje x")
  }
  else if (minusY.value && positiveY.value && minusX.value && positiveX.value){
    console.log("Moviendo todos")
  }
  else if (!minusY.value && !positiveY.value && !minusX.value && !positiveX.value){
    alert("NO se ha seleccionado ningún motor");
  }
  else{
    alert("Solo se pueden mover los motores de 1 en 1, por parejas en el mismo eje o todos a la vez");
  }
  cmd += append.value;
  // connection.write(decode(cmd));
  console.log(cmd)
}

const options = {
  responsive: true,
  maintainAspectRatio: true,
  y: {
    min: 0.0,
    max: 5.0,
  },
  x: {
    min: 0.0,
  }
}

const data = ref({
  labels: ['0.0', '0.5', '1.0', '2.0', '2.5', '3.0', '3.5', '4.0'],
  datasets: [{
    data: [0]
  }
  ]
})

function putChartData() {
  data.value = {
    labels: ['0.0', '0.5', '1.0', '2.0', '2.5', '3.0', '3.5', '4.0'],
    datasets: [
      {
        label: '+x',
        backgroundColor: 'orange',
        data: generateData()
      },
      {
        label: '-y',
        backgroundColor: 'blue',
        data: generateData()
      },
      {
        label: '+y',
        backgroundColor: 'red',
        data: generateData()
      },
      {
        label: '-y',
        backgroundColor: 'green',
        data: generateData()
      },
    ]
  }
}

function generateData() {
  let newArray = [0.00];
  newArray.push(0.25 + Math.random() * 1);
  newArray.push(0.5 + Math.random() * 1);
  newArray.push(0.75 + Math.random() * 1);
  newArray.push(1 + Math.random() * 1.0);
  newArray.push(1 + Math.random() * 1.5);
  newArray.push(2 + Math.random() * 2.0);
  newArray.push(2 + Math.random() * 2.5);
  newArray.push(3 + Math.random() * 3.0);
  return newArray;
}

function getDataFromArduino() {
  connection.getData();
}

// function cuentaSegundos(array) {
//   setInterval(function () {
//     array.push(timer++),
//     console.log(array)
//   } , 1000);
//   return array;
// }

</script>

<style scoped>
.botones {
  display: flex;
}

.botones button {
  margin-left: 30px;
}

.valores {
  display: flex;
  /* text-align: center; */
  padding: 10px;
  justify-content: space-evenly;
}

.tests button {
  margin: 3px;
}

.params {
  color: white;
}

.layout {
  width: 10%;
  height: 10%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.layout div {
  align-self: center;
  text-align: center;
  justify-self: center;
}
</style>
