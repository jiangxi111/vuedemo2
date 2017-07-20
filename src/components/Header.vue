<template>
	<div  id="header">
	<header class="header">
            <section class="headerCon">
                <div class="callPhone">服务热线  400 668 2202</div>
                <div class="iconOper">
                    <a href="#" target="_blank" class="weiboTop"></a>
                    <p class="weixinTop"></p>
                    <p class="phoneTop"></p>
                    <div class="weixinTopCon">
                    </div>
                </div>
                <div class="helpRight">
                    
                    <a href="wzzf.html" class="helpCenter comA">帮助中心</a>
                    <!-- 未登录状态Begin -->
                    <div style="float:left;" v-if="!isLogin">
                    	<router-link to="/reg" class="regTop comA">注册</router-link>
                        <router-link to="/login" class="regTop comA">登录</router-link>
                    </div>
                    <!-- 未登录状态End -->

                    <!-- 登录状态Begin -->
                        <div class="loginInfo" v-if="isLogin">
                            <div class="TheNews comA">
                                <img src="../assets/public/commonImg/headInfo.png">
                                <div class="TheNewsList">
                                    <div class="msg">
                                        <p>消息<i>99+</i></p>
                                        <a href="weidu.html" class="moreMsg">更多</a>
                                    </div>
                                    <div class="msgCon">
                                        <a href="weidu.html">加送贴息奖励</a>
                                        <a href="weidu.html">加送贴息奖励</a>
                                        <a href="weidu.html">加送贴息奖励</a>
                                    </div>
                                </div>
                            </div>
                            <div class="HeadPor comA">
                                <img src="../assets/public/commonImg/headEg.png">
                                <div class="HeadPorList">
                                    <router-link to="/grxx" class="icon1">个人中心</router-link>
                                    <a href="congzhi.html" class="icon2">充值</a>
                                    <a href="tixian.html" class="icon3">提现</a>
                                    <a href="javascript:;" @click="outLogin" class="icon4">退出</a>
                                </div>
                            </div>
                            
                        </div>
                    <!-- 登录状态End -->
                </div>
            </section>
        </header>
         <article class="menu">
            <section class="menuCon">
                <a href="#" class="logo"></a>
                <ul class="menuNav">
                    <router-link to="/index" tag="li" active-class="activeClick"> <a href="javascript:void(0);">首页</a></router-link>
                    <li><router-link to="/wytz" tag="li" active-class="activeClick"> <a href="javascript:void(0);">我要投资</a></router-link></li>
                    <li><router-link to="/xszn" tag="li" active-class="activeClick"> <a href="javascript:void(0);">新手指南</a></router-link></li>
                    <li><router-link to="/wdzh" tag="li" active-class="activeClick"> <a href="javascript:void(0);">我的账户</a></router-link></li>
                    <li><router-link to="/gywm" tag="li" active-class="activeClick"> <a href="javascript:void(0);">关于我们</a></router-link></li>
                    
                </ul>
            </section>
        </article>
       </div>

</template>


<script>
    export default{
        data(){
            return {
                isLogin:false
            }
        },
        methods:{
            getLogin(){
                if(getCookie("userData")!=null){
                    this.isLogin = true;
                }
                else{
                    this.isLogin = false;
                }
            },
            outLogin(){
                delCookie("userData");
                this.$router.push("/index");
                 this.isLogin = false;
            },
            toolsRight(){
                
            },
            headerErji(){
              
            $('.TheNewsList').hide();
    
            $('.TheNews')
                .mouseenter(function(e) {
                    var $elm = $(this);
                    $elm.data('mouseover', true);
                    setTimeout(function(){if($elm.data('mouseover'))$elm.find('.TheNewsList:hidden').slideDown();},100);
                })
                .mouseleave(function(e) {
                    var $elm = $(this);
                    $elm.data('mouseover', false);
                    $elm.children('.TheNewsList:visible').slideUp();
                });

            $('.HeadPorList').hide();
            $('.HeadPor')
                .mouseenter(function(e) {
                    var $elm = $(this);
                    $elm.data('mouseover', true);
                    setTimeout(function(){if($elm.data('mouseover'))$elm.find('.HeadPorList:hidden').slideDown();},100);
                })
                .mouseleave(function(e) {
                    var $elm = $(this);
                    $elm.data('mouseover', false);
                    $elm.children('.HeadPorList:visible').slideUp();
                });
                            
            }
        },
        mounted(){
            this.getLogin();
           
            this.$nextTick(()=>{
                 this.headerErji();
                 this.toolsRight();
            })

        }
    }
</script>