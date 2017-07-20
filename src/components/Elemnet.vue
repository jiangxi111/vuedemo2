<template>
    <div>
        <h3>element-ui练习</h3>
         <span class="wrapper">
           
            <el-button type="info" @click="getAxios">axios获得信息</el-button>
            {{getData}}
            <hr>
            <el-button type="success" @click="dianji">别人的组件可以加事件</el-button>
            <MyButton @click.native="zhiji"></MyButton>
          </span>
          <el-row>
              <el-col :span="8">
                  <div class="grid-content bg-purple">
                        <p>组件导入的日期插件</p>
                        <date></date>
                  </div>
              </el-col>
              <el-col :span="8"><div class="grid-content bg-purple-light">
                    <div class="bor">sdsfd</div>
              </div></el-col>
              <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
          </el-row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import date from "./Date.vue"
    import MyButton from "./MyButton.vue"
    import axios from 'axios';
    //全局组件
    //Vue.component("date",date)
    export default{
         data(){
            return{
                getData:"默认数据"
            }
         },
         components:{
           //局部组件
           date:date,
           //date  简写
           MyButton
         },
         methods:{
            dianji(){
                alert("别人的组件可以加事件")
            },
            zhiji(){
                alert("自己的定义组件要加事件必须加native")
            },
            getAxios(){
                axios.get("http://localhost:8080/src/components/b.txt").then(function(rep){
                    this.getData=rep.data;
                }.bind(this)).catch(function(res){
                    alert(res)
                })
                /*axios.get("a.txt").then(function(rep){
                    this.getData=rep.data;
                }.bind(this)).catch(function(res){
                    alert(res)
                })
                */
            }
         }
    }
</script>

<style scoped lang="less">
     @color:#f00;
    .bor{
        border:solid @color 1px;
        height:60px;
    }
</style>