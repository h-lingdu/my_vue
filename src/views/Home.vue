<template>
  <div class="home">
    <HelloWorld :msg="this.$store.state.msg" />
    <el-button type="primary" @click="modify" :disabled="this.$store.state.flag">点击修改</el-button>
    <el-alert :title="this.$store.state.txt" center type="error"></el-alert>
    <el-button type="primary" @click="modifyWeather">点击修改描述</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HelloWorld
  },
  methods: {
    modify() {
      this.$store.dispatch("modify", {
        msg: "中国少年，你好！！！",
        flag: true
      });
    },
    modifyWeather() {
      this.$store.dispatch("weather", "今天天气很凉爽，");
    }
  }
};
</script>
