<template>
  <div>
    <div id="myChart" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
export default {
  name:'test',
  data() {
    return {

    };
  },
  mounted() {
    this.drawLine();
  },
  methods:{
  drawLine(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('myChart'));
            // 绘制图表
            myChart.setOption({
                title: { text: '24323' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: '羊毛衫',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
        }
    }
}
</script>

<style lang="scss" scoped>
</style>