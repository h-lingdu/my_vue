import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.axios = axios
// axios.defaults.baseURL = "https://douban.uieee.com/v2/movie"



// 使用时执行：E:\project\node\movie>node app.js 不然接口不能使用
axios.defaults.baseURL = "http://localhost:5000/movie/getdata"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
