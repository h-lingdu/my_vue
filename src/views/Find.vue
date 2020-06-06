<template>
  <div>
    <el-button @click="visibed = true">Dialog</el-button>
    <el-dialog title="提示框" :visible.sync="visibed" @open='open' @close='close'>
      <span>Welcome! this is find page.</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="visibed = false">取 消</el-button>
        <el-button type="primary" @click="visibed = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Find",
  data() {
    return {
      visibed: false
    };
  },
  computed: {},
  watch: {},
  methods: {
      open(){
          console.log('Dialog 已弹出！')
      },
      close(){
          console.log('Dialog 已关闭！')
      }
  }
};
</script>

<style scoped>
</style>
