<script setup>

import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
const data = [];
for (let i = 0; i <= 100; i++) {
  let theta = (i / 100) * 360;
  let r = 5 * (1 + Math.sin((theta / 180) * Math.PI));
  data.push([r, theta]);
}

const divRef = ref(null)
    onMounted(()=>{

    // 基于准备好的dom，初始化echarts实例(DOM)
    var myChart = echarts.init(divRef.value);
    // 绘制图表
    myChart.setOption({
        title: {
            text: 'Two Value-Axes in Polar'
        },
        legend: {
            data: ['line']
        },
        polar: {},
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross'
            }
        },
        angleAxis: {
            type: 'value',
            startAngle: 0
        },
        radiusAxis: {},
        series: [
            {
            coordinateSystem: 'polar',
            name: 'line',
            type: 'line',
            data: data
            }
        ]
    });
})

</script>

<template>
    <div class = "bit-chart"
         ref="divRef"></div>
</template>


<style lang="scss" scoped>
    .bit-chart{
        width: 800px;
        height: 500px;
        margin: 100px auto;
        border: 3px solid paleviolerted
    }
</style>