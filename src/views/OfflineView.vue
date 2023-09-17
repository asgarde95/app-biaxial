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
                <input type="file" id="file" ref="file" style="display: none" accept=".csv" @change="leer()" />
                <button class="btn btn-secondary" @click="$refs.file.click()">{{ $t(26) }}</button>
                <p>{{ $t(27) }}</p>
                <p>{{ $t(47) }}</p>
                <select class="col-4 form-control" v-model="testOption" style="width: 200px">
                    <option disabled value="">{{ $t(51) }}</option>
                    <option value="0">{{ $t(48) }}</option>
                    <option value="1">{{ $t(49) }}</option>
                    <option value="2">{{ $t(50) }}</option>
                </select>
                <button class="btn btn-secondary" @click="writeOnCanvas()">{{ $t(46) }}</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
import { ref, reactive } from 'vue';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const options = {
    responsive: true,
    maintainAspectRatio: true,
    y: {
        min: -0.15,
        max: 0.15,
    },
    x: {
        min: 0.0,
    }
}

const arrayData = reactive({
    data: [],
})

let testOption = ref(null);

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

function leer() {
    let input = document.getElementById("file");
    const file = input.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (e) {
        const text = e.target.result;
        const array = csvToArray(text);
        console.log(array);
        arrayData.data = array;
    }
};

function csvToArray(str) {
    let array = str.split("\r\n").map(function (line) {
        return line.split("\t");
    });
    return array;
};

function writeOnCanvas() {
    if (this.testOption === '2') {
        let array = arrayData.data;
        console.log('parametros: ' + array[0]);
        let time = [0];
        let displacement = [0];
        let cell0 = [0];
        let cell1 = [0];
        let cell2 = [0];
        let cell3 = [0];

        for (let i = 2; i < (array.length / 100); i++) {
            time.push(array[i][0]);
            displacement.push(array[i][1].replace(/,/, '.'));
            cell0.push(parseFloat(array[i][2].replace(/,/, '.')));
            cell1.push(parseFloat(array[i][3].replace(/,/, '.')));
            cell2.push(parseFloat(array[i][4].replace(/,/, '.')));
            cell3.push(parseFloat(array[i][5].replace(/,/, '.')));
        }
        data.value = {
            labels: displacement,
            datasets: [
                {
                    label: '+x',
                    backgroundColor: 'orange',
                    data: cell0
                },
                {
                    label: '-x',
                    backgroundColor: 'blue',
                    data: cell2
                },
                {
                    label: '+y',
                    backgroundColor: 'red',
                    data: cell1
                },
                {
                    label: '-y',
                    backgroundColor: 'green',
                    data: cell3
                },
            ]
        }
    } else if (this.testOption === '1') {
        alert("NOT IMPLENTED, SORRY");
    } else if (this.testOption === '0') {
        alert("NOT IMPLENTED, SORRY");
    } else {
        alert("NO se ha seleccionado ningún test");
    }
}

</script>

<style scoped>
.valores {
    display: flex;
    padding: 10px;
    justify-content: space-evenly;
}
</style>
