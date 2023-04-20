<template>
    <div class="text-bg-light">
        <Line :data="data" :options="options" />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend)

export default {
    name: 'Chart',
    components: {
        Line
    },
    data() {
        return {
            data: {
                labels: ['0.0', '0.5', '1.0', '2.0', '2.5', '3.0'],
                datasets: [
                    {
                        label: 'Fuerza x?',
                        backgroundColor: 'darkmagenta',
                        data: [0.00, 0.15, 0.25, 0.55, 0.7, 1.3, 4]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                y: {
                    min: 0.0,
                    max: 2.0,
                },
                x: {
                    min: 0.0,
                    max: 7.0,
                }
            }
        }
    },
    computed: {
    }
}
</script>

<style></style>
