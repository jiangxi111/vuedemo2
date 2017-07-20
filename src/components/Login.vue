<template>
	<div id="login">
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
    
    <section class="loginCon">
        <section class="leftImg">
          <!--Luara图片切换骨架begin-->
          <div class="example2">
              <ul>
                  <li><img src="../assets/images/leftImg.png" alt="1"/></li>
                  <li><img src="../assets/images/leftImg.png" alt="2"/></li>
                  <li><img src="../assets/images/leftImg.png" alt="3"/></li>
              </ul>
              <ol>
                  <li></li>
                  <li></li>
                  <li></li>
              </ol>
          </div>
          <!--Luara图片切换骨架end-->

        </section>
        <section class="rightLogin">
            <div class="loginTit">
              <span>登录</span>

              <router-link to="/reg">免费注册</router-link>
            </div>
            <form action="#" autocomplete="off">
                <ul>
                  <li>
                    <section class="InputDiv">
                        <input tabIndex="1" v-model="userNamephone" @blur="userBlur" @focus="userFocus" ref="user" type="text"  placeholder="请输入手机号" class="userNamephone">
                    </section>
                    <p class="errorP" v-if="userInfo.state">
                    	{{userInfo.errorText}}
                    </p>
                  </li>
                  
                  <li>
                    <section class="InputDiv">
                        <input tabIndex="2" v-model="passWord" type="password" maxlength="35" placeholder="请输入密码" class="passWord" @blur="passBlur" @focus="passFocus">
                    </section>
                     <p class="errorP" v-if="passInfo.state" >
                    	{{passInfo.errorText}}
                    </p>
                  </li>
                   <li>
                    <section class="InputDiv">
                        <input tabIndex="3" v-model="code" type="text" ref="coderef" @keyup="inputCode" @blur="blurCode" @focus="focusCode"  placeholder="请输入验证码" maxlength="4" class="code">
                        <div class="codeBt"></div>
                    </section>
                    <p class="errorP" v-if="codeInfo.state" >
                    	{{codeInfo.errorText}}
                    </p>
                  </li>
                  <li style="height:30px;">
                    <a href="#" class="forgetPass" tabIndex="5" >忘记密码</a>
                  </li>
                  <li>
                    <input tabIndex="4" type="button" class="subLogin" value="登录" @click.enter="subLogin($event)">
                  </li>
                </ul>
            </form>
        </section>
        
        
    </section>
	</div>
</template>
<script>
	import  "../assets/js/jquery.luara.0.0.1.min.js"

	// import  "../assets/js/login.js"
	export default{
		data(){
			return{
				userNamephone:"",
				passWord:"",
				code:"",
				userInfo:{
					state:false,
					errorText:""
				},
				passInfo:{
					state:false,
					errorText:""
				}
				,
				codeInfo:{
					state:false,
					errorText:""
				}
			}
		},
		methods:{
			load(){
				 $(".example2").luara({width:"500",height:"334",interval:4500,selected:"seleted",deriction:"left"});
			},
			inputCode(){
				IsNum($(this.$refs.coderef))			
			},
			//验证码得到焦点
			focusCode(){
					this.codeInfo.state=false;
					this.codeInfo.errorText="";
			},
			//验证码失去焦点
			blurCode(){
				if(this.code==""||this.code==null){
					this.codeInfo.state=true;
					this.codeInfo.errorText="验证码不得为空";
				}
				else if(this.code.length!=4){
					this.codeInfo.state=true;
					this.codeInfo.errorText="验证码必须4位";
				}
				else{
					this.codeInfo.state=false;
					this.codeInfo.errorText="";
				}
			},
			//密码得到焦点
			passFocus(){
					this.passInfo.state=false;
					this.passInfo.errorText="";
			},
			//密码失去焦点
			passBlur(){
				if(this.passWord==""||this.passWord==null){
					this.passInfo.state=true;
					this.passInfo.errorText="密码不得为空";
				}
				else if(this.passWord.length<5||this.passWord.length>10){
					this.passInfo.state=true;
					this.passInfo.errorText="密码个数大于5位小于10位";
				}
				else{
					this.passInfo.state=false;
					this.passInfo.errorText="";
				}
			},
			//用户名得到焦点
			userFocus(){
				  this.userInfo.state=false;
				  this.userInfo.errorText="";
			},
			//用户名失去焦点
			userBlur(el){
				  //获得元素dom
				  // ref="user"
				  //$(this.$refs.user).val()
				  if(this.userNamephone==""||this.userNamephone==null){
				  		this.userInfo.state=true;
				  		this.userInfo.errorText="手机号不得为空";
				  		return false;
				  }
				  else if(!valiMobilePhone($(this.$refs.user))){
				  		this.userInfo.state=true;
				  		this.userInfo.errorText="请填写正确的手机号";
				  }
				  else{
				  		this.userInfo.state=false;
				  		this.userInfo.errorText="";
				  }
			},
			subLogin(event){
				// console.log(this.userInfo.state+"=="+this.passInfo.state+"==="+this.codeInfo.state)
					this.userBlur();
					this.passBlur();
					this.blurCode();
				if(!(this.userInfo.state || this.passInfo.state || this.codeInfo.state)){
					var user = this.userNamephone+";"+this.passInfo;
					setCookie("userData",user,"h1");
					this.$router.push("/index");
				}
				
				
			}
		},
		mounted(){
			this.load();
       		
		}
	}
</script>
<style scoped>
	@import  "../assets/css/login.css";
	@import  "../assets/css/luara.left.css";
</style>