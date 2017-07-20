<template>

	<div id="reg">
    <!-- nav begin -->
        <header class="Insidheader">
            <section class="InsidheaderCon">
              <a href="#" class="logonIn"></a>
              <font class="textlogin">
                登录
              </font>
              <div class="rightText">
                <router-link to="/index" class="home">返回首页</router-link>
                <a href="#" class="help">帮助</a>
                <p>服务热线  400 668 2202</p>
              </div>
            </section>
        </header>

    <!-- nav End -->
		<section class="regMarCon">
        
        <section class="regcon">
            <div class="loginTit">
              <span>注册</span>
              
            </div>
            <form action="#" autocomplete="off">
                <ul>
                  <li>
                    <section class="errorDiv">
                        <input type="text" maxlength="50"  placeholder="输入用户名" class="userName"
                        :class="{'addBorlor':userError.bolorFocus,'bolorError':userError.hasError}"
                        v-model="userName">
                    </section>
                    <p class="errInfo" v-if="userError.state">{{userError.errorText}}</p>
                  </li>
                  <li>
                    <section class="errorDiv">
                        <input type="password" maxlength="35" placeholder="设置密码" class="password"
                         :class="{'addBorlor':passError.bolorFocus,'bolorError':passError.hasError}"
                        v-model="password">
                    </section>
                    <p class="errInfo" v-if="passError.state">{{passError.errorText}}</p>
                  </li>
                   <li>
                    <section class="errorDiv">
                        <input type="password" maxlength="35" placeholder="确认密码" class="passWordAgain"
                        :class="{'addBorlor':passConError.bolorFocus,'bolorError':passConError.hasError}"
                        v-model="passWordAgain">
                    </section>
                    <p class="errInfo" v-if="passConError.state">{{passConError.errorText}}</p>
                  </li>
                   <li>
                    <section class="errorDiv">
                        <input type="text" placeholder="图形验证码" maxlength="4" class="tuXingCode">
                        <div class="codeBt">ssss</div>
                    </section>
                  </li>
                  <li>
                    <section class="errorDiv">
                        <input type="text" maxlength="11" placeholder="输入手机号" class="phoneNum"
                        :class="{'addBorlor':phoneInfo.bolorFocus,'bolorError':phoneInfo.state}"
                        v-model="phoneNum"
                        ref="phoneNum"
                        @input="phoneCheck"
                        :readonly="readonlyFlag" 
                        >
                        <input type="button" class="daojishi" :value="codeText" :style="styleObject"  @click="daojishi">
                    </section>
                    <p class="errInfo" v-if="phoneInfo.state">{{phoneInfo.errorText}}</p>
                  </li>
                  <li>
                    <section class="errorDiv">
                        <input type="text" maxlength="4" placeholder="输入验证码" class="verCode"
                         :class="{'addBorlor':verCodeError.bolorFocus,'bolorError':verCodeError.hasError}"
                        v-model="verCode">
                    </section>
                     <p class="errInfo" v-if="verCodeError.state">{{verCodeError.errorText}}</p>
                   
                  </li>
                  <li style="height:30px;" class="xieyi">
                  <section type="checkbox"  class="checkSel" checkTure="true"></section>
                    <a href="xieyi.html" target="_blank">《速贷邦网站用户服务协议》</a>
                  </li>
                  <li style="height:50px;">
                    <input type="button" class="subReg"  value="登录">
                  </li>

                </ul>
                <div class="yiyou">已有账户?<router-link to="/login">立即登录</router-link></div>
            </form>
        </section>
    </section>
	</div>

</template>
<script>
	// require ('../assets/js/reg.js')
 export default{
    data() {
      return {
        
          userName:"",
          password:"",
          passWordAgain:"",
          phoneNum:"",
          verCode:"",
          phoneInfo:{
            state:false,
            errorText:""
          },
          codeText:"获取验证码",
          styleObject:{},
          readonlyFlag:false,
          validCode:true// //判断是否重复点击倒计时 (默认可点击)
      }
    },
    methods:{
       phoneCheck(){
          if(this.phoneNum=="" || this.phoneNum == null){
              this.phoneInfo.state=true;
              this.phoneInfo.errorText="手机号不得为空";
          }
          else if(!valiMobilePhone($(this.$refs.phoneNum))){
              this.phoneInfo.state=true;
              this.phoneInfo.errorText="手机号格式错误";
          }
          else{
              this.phoneInfo.state=false;
              this.phoneInfo.errorText="";
          }
               
       },
       daojishi(){
           if (this.validCode) {
             this.phoneCheck();
             if(this.phoneInfo.state){
                return false;
             }
            this.styleObject={
                  "color":'#ff4141'
            }
             this.readonlyFlag=true;
             this.validCode=false;       
            var codeObj=$(".Countdown");
            var times=6;
            var t=setInterval(()=>{
                   times--;
                   this.codeText=times+"s后重新获取";
                   //codeObj.html(times+"s后重新获取");
                   if (times==0) {
                       clearInterval(t);
                       this.codeText="获取验证码";
                       this.validCode=true;
                       this.readonlyFlag=false;
                       this.styleObject={
                              "color":'#02adea'
                        }
                   }
             },1000)
          }
       }


    },
    computed:{
            verCodeError(){
              
                      let errorText,state,hasError
                      if(this.verCode=="" || this.verCode == null){
                        state=true;
                        errorText="验证码不得为空";
                        hasError=true;
                      }
                      else{
                         state=false;
                         errorText="";
                         hasError=false;
                      }
                      if(!this.codeFlag){//初始化清空错误信息
                        errorText="";
                        this.codeFlag=true;
                        hasError=false;
                      }
                      return {
                         state,
                         errorText,
                         hasError
                      }
                  },
         
          passConError(){
                let errorText,state,hasError
               
                if(this.passWordAgain=="" || this.passWordAgain == null){
                  state=true;
                  errorText="确认密码不得为空";
                  hasError=true;
                }
                else if(this.passWordAgain.length<5 ||this.passWordAgain.length>10){
                  state=true;
                  errorText="确认密码必须大于5位小于10位";
                  hasError=true;
                }
                else if(this.passWordAgain!=this.password){
                    state=true;
                    errorText="确认密码与密码不一致";
                    hasError=true;
                }
                else{
                   state=false;
                   errorText="";
                   hasError=false;
                }
                if(!this.passConFlag){//初始化清空错误信息
                  errorText="";
                  this.passConFlag=true;
                  hasError=false;
                }
                return {
                   state,
                   errorText,
                   hasError
                }
            },
        userError(){
            let errorText,state,hasError
           
            if(this.userName=="" || this.userName == null){
              state=true;
              errorText="用户名不得为空";
              hasError=true;
            }
            else if(this.userName.length<5 ||this.userName.length>10){
              state=true;
              errorText="用户名必须大于5位小于10位";
              hasError=true;
            }
            else{
               state=false;
               errorText="";
               hasError=false;
            }
            if(!this.userFlag){//初始化清空错误信息
              errorText="";
              this.userFlag=true;
              hasError=false;
            }
            return {
               state,
               errorText,
               hasError
            }
        },
        passError(){
            let errorText,state,hasError
           
            if(this.password=="" || this.password == null){
              state=true;
              errorText="密码不得为空";
              hasError=true;
            }
            else if(this.password.length<5 ||this.password.length>10){
              state=true;
              errorText="密码必须大于5位小于10位";
              hasError=true;
            }
            else{
               state=false;
               errorText="";
               hasError=false;
            }
            if(!this.passFlag){//初始化清空错误信息
              errorText="";
              this.passFlag=true;
              hasError=false;
            }
            return {
               state,
               errorText,
               hasError
            }
        }
    }
 }
</script>
<style scoped>
	@import "../assets/css/reg.css";
  .regcon ul li .addBorlor{
    border: solid 1px #0395e3;
  }
  .regcon ul li .bolorError{
    border: solid 1px #f3696e;
  }
  .regcon ul li input.daojishi {
    border:none;
  }

</style>