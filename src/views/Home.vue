<template>
  <div class="home">
    <HelloWorld :msg='this.msg' />
    <el-button type="primary" @click="modify" :disabled='this.flag'>点击修改</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome！ 韩金辉 ",
      flag:false
    };
  },
  components: {
    HelloWorld
  },
  methods: {
    modify(){
      this.msg = '少年，你好！！！！',
      this.flag = true
    }
  }
};
</script>
