<template>
  <NavBar></NavBar>
  <div class="container" style="margin-left=0px; margin-right=0px;">
    <h1>Gráfico RealTime</h1>
    <div class="row">
      <div class="col-md-8">
        <Chart></Chart>
      </div>
      <div class="col-md-4" style="color:white;">
        Distancia:
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
              <input class="form-check-input" type="checkbox" id="top-axis" v-model="axis.top">
            </div>
            <div></div>
            <div>
              <input style="color: blue" value="1000.01" size="5" />
              <input class="form-check-input" type="checkbox" id="left-axis" v-model="axis.left">
            </div>
            <div>
              <img src="@/assets/planar-biaxial-arrow.png" alt="Biaxial axis" width="150" height="150" />
            </div>
            <div>
              <input style="color: orange" value="1000.01" size="5" />
              <input class="form-check-input" type="checkbox" id="right-axis" v-model="axis.right">
            </div>
            <div></div>
            <div>
              <input class="row" style="color: green" value="1000.01" size="5" />
              <input class="form-check-input" type="checkbox" id="bottom-axis" v-model="axis.bottom">
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
          <input class="form-control" type="number" style="width: 15%;" />
        </div>
      </div>
      <div class="col-md-6">
        <h4>PARAMETERS</h4>
        <div class="row params">
          Load cell multiplier
          &nbsp;
          <select class="col-4 form-control" v-model="cell" style="width: 125px">
            <option v-for="option in options.cell" :value="option">
              {{ option }}
            </option>
            <option></option>
          </select>
          &nbsp;
          Speed(mm/min):
          &nbsp;
          <input class="col-3 form-control" type="number" v-model="speed" style="width: 70px" />
        </div>
        <div class="row params">
          Maximum elongation(mm):
          &nbsp;
          <input class="col-3 form-control" type="number" v-model="elongation" style="width: 70px" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/Chart.vue";
import NavBar from "@/components/NavBar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Chart,
    NavBar,
  },
  props: {},
  data() {
    return {
      elongation: 0,
      speed: 0,
      distance: 0,
      commands: 0,
      cell: 0,
      options: {
        command: [0, 1, 2, 3, 12, 30, -1, 255],
        cell: [5, 50, 100],
      },
      axis: {
        top: false,
        left: false,
        right: false,
        bottom: false,
      }
    };
  },
  mounted() { },
  computed: {},
  methods: {
    move: function (valor) {
      this.distance += valor;
      return this.distance;
    },
  },
});
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

.layout div{
  align-self: center;
  text-align: center;
  justify-self: center;
}
</style>
