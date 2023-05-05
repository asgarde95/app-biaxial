<template>
    <NavBar></NavBar>
    <div class="container" style="margin-left=0px; margin-right=0px;">
        <h1>{{ $t(24) }}</h1>
        <div class="row">
            <div class="col-10 text-bg-light">
                <Line :data="data" :options="options" />
            </div>
            <div class="col-2">
                <p>{{ $t(25) }}</p>
                <input type="file" ref="file" style="display: none" />
                <button class="btn btn-secondary" @click="$refs.file.click()">{{ $t(26) }}</button>
                <p>{{ $t(27) }}</p>
                <div class="valores">
                    <input style="color:blue;" value="1000.01" size="5" />
                    <input style="color:orange;" value="1000.01" size="5" />
                </div>
                <div class="valores">
                    <input style="color:green;" value="1000.01" size="5" />
                    <input style="color:red;" value="1000.01" size="5" />
                </div>
                <button class="btn btn-secondary" @click="putChartData()">{{ $t(28) }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { ref } from 'vue';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

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
                label: '-x',
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
</script>

<style scoped>
.valores {
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
}
</style>
