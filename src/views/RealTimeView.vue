<template>
    <NavBar></NavBar>
    <div class="container" style="margin-left=0px; margin-right=0px;">
        <h1>Gráfico RealTime</h1>
        <div class="row">
            <div class="col-8">
                <Chart></Chart>
                <div class="botones">
                    <button @click="move(100)">+100</button>
                    <button @click="move(100)">+10</button>
                    <button @click="move(100)">+1</button>
                    <button @click="move(-1)">-1</button>
                    <button @click="move(-10)">-10</button>
                    <button @click="move(-100)">-100</button>
                </div>
                <div class="valores">
                    <input style="color:blue;" value="1000.01" size="5"/>
                    <input style="color:orange;" value="1000.01" size="5"/>
                    <input style="color:green;" value="1000.01" size="5"/>
                    <input style="color:red;" value="1000.01" size="5"/>
                </div>
            </div>
            <div class="col-2">
                <h4>PARAMETERS</h4>
                <label>
                    <p>Load cell multiplier
                        <select v-model="cell">
                            <option v-for="option in options.cell" :value="option">
                                {{ option }}
                            </option>
                            <option></option>
                        </select>
                    </p>
                </label>
                <label>
                    <p>Manual motion commands on axes:
                        <select v-model="commands">
                            <option v-for="option in options.command" :value="option">
                                {{ option }}
                            </option>
                        </select>
                    </p>
                </label>
                <label>
                    <p>Maximum elongation(mm): <input type="number" v-model="elongation" style="width:100px;" />
                    </p>
                </label>
                <label>
                    <p>Speed(mm/min): <input type="number" v-model="speed" style="width:70px;" />
                    </p>
                </label>
            </div>
            <div class="col-2">
                <h4>RUN A TEST</h4>
                <button>Start Constant Elongation Test</button>
                <button>Start Peel Test</button>
                <button>Start Break Test</button>
                <button>Pre-tensioning</button>
                &nbsp;
                <input value="1" size="1"/>
            </div>
        </div>
    </div>
</template>

<script>
import Chart from '@/components/Chart.vue'
import NavBar from '@/components/NavBar.vue'
import { defineComponent } from 'vue'

export default defineComponent({
    components: {
        Chart,
        NavBar,
    },
    props: {
    },
    data() {
        return {
            elongation: 0,
            speed: 0,
            distance: 0,
            commands: 0,
            cell: 0,
            options: {
                command: [0, 1, 2, 3, 12, 30, -1, 255],
                cell: [5, 50, 100]
            }
        }
    },
    mounted() {
    },
    computed: {
    },
    methods: {
        move : function( valor) {
            this.distance += valor;
            return this.distance;
        }
    }
})

</script>

<style scoped>
.botones {
    display: flex;
    text-align: center;
    padding: 10px;
    justify-content: space-between;
}

.botones button {
    width: 55px;
}

.valores {
    display: flex;
    /* text-align: center; */
    padding: 10px;
    justify-content: space-evenly;
}
</style>
