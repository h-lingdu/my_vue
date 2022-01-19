<template>
  <div>
    <h3>电影列表</h3>
    <!-- 电影数据 -->
    <el-table
      :data="tableData"
      v-loading="loading"
      element-loading-text="数据加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.1)"
      stripe
      fit
      style="width: 100%"
      :header-cell-style="{ 'text-align': 'center' }"
      :cell-style="{ 'text-align': 'center' }"
    >
      <el-table-column prop="id" label="电影ID"></el-table-column>
      <el-table-column prop="title" label="电影名"></el-table-column>
      <el-table-column prop="img" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" width="40" height="40" />
        </template>
      </el-table-column>
      <el-table-column prop="year" label="年份"></el-table-column>
      <el-table-column prop="genres" label="类型"></el-table-column>
      <el-table-column prop="rating" label="评分"></el-table-column>
      <el-table-column prop="directors" label="导演"></el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import { getMovieData } from "../api/api";

export default {
  name: "Find",
  data() {
    return {
      visibed: false,
      tableData: [],
      loading: true,
      total: 0, //总数
      currentPage: 1, //当前页
      pageSize: 10, //每页多少条
    };
  },
  computed: {},
  watch: {},
  methods: {
    //电影数据
    getData(params) {
      getMovieData(params)
        .then((res) => {
          let list = [];
          for (let item of res.data.result) {
            let obj = {};
            obj.id = item.id;
            obj.title = item.title;
            obj.year = item.year;
            obj.genres = item.genres.join(",");
            obj.rating = item.rating.average;
            obj.img = item.images.small;
            obj.directors = item.directors[0].name;
            list.push(obj);
          }
          this.tableData = list;
          this.loading = false;
          this.total = res.data.total;
        })
        .catch((err) => {
          this.loading = false;
        });
    },
    // 改变每页条数
    handleSizeChange(value) {
      this.pageSize = value;
      this.currentPage = 1;
      let params = {
        pagenum: this.currentPage - 1,
        pagesize: this.pageSize,
      };
      this.tableData = [];
      this.loading = true;
      this.getData(params);
    },
    // 改变页数
    handleCurrentChange(value) {
      let params = {
        pagenum: value- 1,
        pagesize: this.pageSize,
      };
      this.tableData = [];
      this.loading = true;
      this.getData(params);
    },
  },
  mounted() {
    let params = {
      //后台数据：pagenum表示从哪一条数据查（默认为0）pagesize表示查多少条
      pagenum: this.currentPage - 1,
      pagesize: this.pageSize,
    };
    this.getData(params);
  },
};
</script>

<style scoped></style>
