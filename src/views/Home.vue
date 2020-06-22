<template>
  <div class="home">
    <HelloWorld :msg="this.$store.state.msg" />
    <el-button type="primary" @click="modify" :disabled="this.$store.state.flag">点击修改</el-button>
    <el-alert :title="this.$store.state.txt" center type="error"></el-alert>
    <!--第一步-->
    <el-button type="primary" @click="modifyWeather('今天天气很凉爽，适合跑步！！！')">点击修改描述</el-button>
    <h4>{{msg}}</h4>
    <h4>数字-----{{num}}</h4>
    <el-button type="primary" @click="add(10)">数字+10</el-button>
    <el-button type="success" @click="reduce(10)">数字-10</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HelloWorld
  },
  computed: {
    ...mapState(["msg", "num"])
  },
  methods: {
    modify() {
      this.$store.dispatch("modify", {
        msg: "中国少年，你好！！！",
        flag: true
      });
    },
    // modifyWeather() {
    //   this.$store.dispatch("modifyWeather", "今天天气很凉爽！要下雨的样子!!!");
    // },
    ...mapActions([
      "reduce",
      "add",
      "modifyWeather" //第二步  进入store/index.js文件中
    ]),
    ...mapMutations([])
  }
};
</script>
