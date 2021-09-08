<template>
  <q-page class="row col-12 q-pa-md q-col-gutter-md">
    <div class="col-6">
      <q-card>
        <q-card-section>
          <apexchart
            type="bar"
            :options="chartOptions"
            :series="series">
          </apexchart>
        </q-card-section>
      </q-card>
    </div>
    <div class="col-6">
      <q-card>
        <q-card-section>
          <apexchart
            type="bar"
            :options="chartOptions"
            :series="series">
          </apexchart>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import VueApexCharts from 'vue3-apexcharts'

export default defineComponent({
  name: 'PageIndex',
  components: {
    apexchart: VueApexCharts
  },
  data () {
    return {
      series: [
        {
          name: 'Net Profit',
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
          name: 'Revenue',
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
          name: 'Free Cash Flow',
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
      chartOptions: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
        },
        yaxis: {
          title: {
            text: 'R$ (milhares)'
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return 'R$ ' + val + ' mil'
            }
          }
        }
      }
    }
  }
})
</script>
