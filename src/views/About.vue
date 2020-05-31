<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
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
}
</style>
