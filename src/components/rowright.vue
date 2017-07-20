<template>
<section>
                        <div class="topMenu">
                            <router-link to="/grxx" class="clickActive">个人信息</router-link>
                            <a  href="zjzh.html">资金账户</a>                              
                        </div>
                       <ul class="grxx">
                           <li>
                               <i class="tit">登录账号</i>
                               <p class="grInfo comonG">有人说我帅</p>
                               <a href="javascript:void(0 );" class="caozuo" @click="editUser">修改</a>
                           </li>
                           <li>
                               <i class="tit">登录密码</i>
                               <p class="grInfo comonG">******</p>
                               <a href="editPass.html" class="caozuo">修改登录密码</a>
                           </li>
                           <li>
                               <i class="tit">注册日期</i>
                               <p class="grInfo">2015-06-17 00:00:00</p>
                           </li>
                           <li>
                               <i class="tit">真实姓名</i>
                               <p class="grInfo">张裕生</p>
                           </li>
                           <li>
                               <i class="tit">绑定手机</i>
                               <p class="grInfo">187******18</p>
                           </li>
                           <li>
                               <i class="tit">绑定邮箱</i>
                               <p class="grInfo comonG">未绑定</p>
                               <a href="javascript:void(0 );" class="caozuo" onclick="platBt('bingEmail');">马上绑定</a>
                           </li>
                           <li>
                               <i class="tit">身份证号</i>
                               <p class="grInfo">320*************56</p>
                           </li>
                           <li>
                               <i class="tit">风险评估</i>
                                <a href="fxpg.html" class="caozuo">去评估</a>
                           </li>
                           <li>
                               <i class="tit">风险评估</i>
                               <p class="style">稳健性</p>
                                <a href="#" class="caozuo">查看报告</a>
                           </li>
                          
                           <li>
                               <i class="tit">联系地址</i>
                               <a href="javascript:void(0 );" class="caozuo addFormAddres">添加</a>
                               <div class="addAddress">
                                   <form>
                                       <input type="text" class="addText">
                                       <input type="button" class="subAddress bgTran" value="添加">
                                       <input type="button" class="quxiao bgTran" value="取消">
                                   </form>
                               </div>
                           </li>                           
                       </ul>
                       <popmodal :isShow="isShow" widthCon="400" titltPop="修改登录账号" @closePop="closePop" @sureSub="comfrim">
                          <ul class="popUl">
                              <li>
                                  <section class="InputDiv">
                                      <input autocomplete="off" type="text" class="newZhangHao" placeholder="输入新账号名" maxlength="35">
                                  </section>
                              </li>
                              <li>
                                 
                              </li>
                          </ul>
                       </popmodal>
                    </section>
</template>

<script>
	import Popmodal from "./PopModal.vue"
	export default{
		data(){
			return{
				isShow:false
			}
		},
		methods:{
			  editUser(){
			  	this.isShow=true;
			  },
			  closePop(){
			  	this.isShow=false;
			  },
        comfrim(){

        }
		},
		components:{
			Popmodal
		}
	}
</script>

<style>
	
</style>