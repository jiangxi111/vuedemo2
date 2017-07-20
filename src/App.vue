<template>
  <div id="app" class=" fluid-container">
    <ul class="list-group container">
      <li class="list-group-item"> <router-link to="/home">主页</router-link></li>
      <li class="list-group-item"> <router-link to="/news">新闻</router-link></li>
      <li class="list-group-item"> <router-link to="/element">Element-ui</router-link></li>
      <li class="list-group-item"> <router-link to="/zhujian">自定义组件</router-link></li>
      <li class="list-group-item"><router-link to="/zhujiantongxin">组件之间的通信</router-link></li>
      <li class="list-group-item"><router-link to="/jisuanshuxing">计算属性</router-link></li>
      <li class="list-group-item"><router-link to="/vuex">vuex普通做法</router-link></li>
      <li class="list-group-item"><router-link to="/vuexfile">vuex文件做法</router-link></li>
      <li class="list-group-item"><router-link to="/shopCar">购物车</router-link></li>
      <li class="list-group-item"><router-link to="/todomvc">TodoMVC (本地储存,自定义指令)</router-link></li>
      <li class="list-group-item"><router-link to="/baidumap">baidu地图</router-link></li>
      <li class="list-group-item"><router-link to="/website">网站</router-link></li>
      
    </ul>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">内容</h3>
      </div>
      <div class="panel-body">
        <transition enter-active-class="animated zoomInLeft" leave-active-class="animated zoomOutRight">
           <keep-alive>
                <router-view></router-view>
           </keep-alive>
        </transition>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{

  },
  mounted:function(){


  }
}
</script>

<style scoped>

#app {

}
.router-link-active{
  color:#f00;
}
</style>
