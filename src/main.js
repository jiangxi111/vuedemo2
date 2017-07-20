import Vue from 'vue'
// import store from './store.js'//vuex普通做法
import store2 from './store2/index.js'//vuex最终做法
import VueRouter from 'vue-router'
import axios from "axios"
import App from './App.vue'
import routerConfig from './router.config.js'
import './assets/css/animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import loading from './components/loading/index.js'
import loading2 from './components/loading2/index.js'
import filters from "./filters/index.js"
Vue.config.devtools = true
// Object.keys(filters).forEach((key){ Vue.filter(key,filters[key])})
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))
// console.log(filters)
//引入外部js文件两种方法 (vue文件中也可以引用)
//require('./assets/js/scroll.js')
//import './assets/js/scroll.js'

Vue.use(VueRouter);
Vue.use(ElementUI);

Vue.use(loading);
Vue.use(loading2);
const router =new VueRouter(routerConfig)
router.beforeEach((to,from,next)=>{
  if (to.matched.some(record => record.meta.login)) {
        if (getCookie("userData")==null) {
           next({path:"/login"})
        } 
        else {
          next()
        }
    }
  else{
    next()
  }
  
})




//=======axios配置=========
axios.defaults.timeout = 5000;//响应时间
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';           //配置请求头
//axios.defaults.baseURL = 'http://localhost:8080';   //配置接口地址
Vue.prototype.$http = axios;//把axios对象挂在Vue原型上
//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  alert(1)
	//在发送请求之前做某件事
    store2.dispatch("showLoading");
    return config;
},(error) =>{
    
    return Promise.reject(error);
});
//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
	//对响应数据做些事
    store2.dispatch("hideLoading");
    return res;
}, (error) => {
   
    return Promise.reject(error);
});

//==================

var vm = new Vue({
  router,
  // store,
  store:store2,
  el: '#app',
  data:{
  	
  },
  render: h => h(App)
})
 // console.dir(document)
 // console.log(vm)
// router.beforeEach((to, from, next) => {
//   next(true)
// })