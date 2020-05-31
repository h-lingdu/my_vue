<template>
  <div class="about">
    <div>
      <h3>中国省份</h3>
      <ul>
        <li v-for="(item,i) in list" :key="i">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import jsonp from "jsonp";
export default {
  data() {
    return {
      list: []
    };
  },
  methods: {
    getData() {
      jsonp(
        "https://interface.sina.cn/news/wap/fymap2020_data.d.json?_=1580892522427",
        (err, res) => {
          console.log(res.data.list);
          this.list = res.data.list;
        }
      );
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style scoped>
li {
  list-style: none;
  width: 10rem;
  height: 5rem;
  line-height: 5rem;
}
li:nth-child(2n+1){
  color: red;
  background-color: antiquewhite;
}
ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  padding-inline-start: 0;
}
</style>
