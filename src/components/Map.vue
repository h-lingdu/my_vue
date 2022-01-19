<template>
  <div class="map">
    <div id="echart" style="width: 100%;height:400px;"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import "echarts/map/js/china"; //引入中国地图
import jsonp from "jsonp";

let option = {
  title: {
    text: "中国地图",
    left: "center",
    textStyle: {
      color: "red"
    }
  },
  tooltip: {
    trigger: "item",
    formatter: "地区：{b}<br/>数据：{c}"
  },
  visualMap: [
    {
      type: "piecewise",
      pieces: [
        { min: 10001 },
        { min: 1001, max: 10000 },
        { min: 101, max: 1000 },
        { min: 11, max: 100 },
        { min: 1, max: 10 },
        { value: 0 }
      ],
      itemWidth: 12,
      itemHeight: 12,
      inRange: {
        color: ["#eee", "#ffaa85", "red"],
        symbolSize: [30, 100]
      }
    }
  ],
  series: [
    {
      type: "map",
      map: "china",
      // data: [],
      label: {
        show: true,
        fontSize: 8,
        color: "#000"
      },
      zoom: 1.2 //缩放
    }
  ]
};
export default {
  name: "Map",
  data() {
    return {};
  },
  methods: {
    init() {
      this.myChart = echarts.init(document.getElementById("echart"));
      // let myChart = echarts.init(document.getElementById("echart"));
      // myChart.setOption(option);
    },
    getData() {
      jsonp(
        "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
        (err, res) => {
          // console.log(res.data.list);
          let list = res.data.list.map(item => {
            return { name: item.name, value: item.value };
          });
          // console.log(list);
          option.series[0].data = list;
          this.myChart.setOption(option);
        }
      );
    }
  },
  mounted() {
    this.getData();
    this.init();
  }
};
</script>

<style scoped>
.map {
  width: 500px;
  margin: 30px auto;
}
</style>
