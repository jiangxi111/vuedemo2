<template>
	<div id="grxx">
		<!-- 中心内容 Begin -->
        <article class="container">
            <div class="containerCon">
                <section class="userInfo">
                    <div class="changeHead">
                        <img src="../assets/public/commonImg/head.png" class="userhead">
                        <div class="changeHeadBt">更换</div>
                    </div>
                    <div class="infoDetail">
                        <div class="userName">
                            <p>有人说我帅</p>
                            
                        </div>
                        <div class="infoStae">
                            <p class="phoneIcon"></p>
                            <!-- 已实名认证状态 <p class="nameIcon"></p> -->
                            <p class="nameIconNo" onclick="platBt('realNamePop');"></p>
                            <!-- 已邮箱认证状态<p class="emailIcon"></p> -->
                            <p class="emailIconNo" onclick="platBt('emailPop');"></p>
                            <a href="congzhi.html" class="n1">充值</a>
                            <a href="tixian.html" class="n2">提现</a>
                        </div>
                    </div>
                    <div class="amountRight">
                        <div class="yue">
                            <span>总资产：</span>
                            <p>268888866600.00</p>
                            <i>元</i>
                        </div>
                        <div class="zong">
                            <span>可用余额：</span>
                            <p>310210.00</p>
                            <i>元</i>
                        </div>
                        <div class="shouyi">
                            <span>累计收益：</span>
                            <p>620000.00</p>
                            <i>元</i>
                        </div>
                    </div>
                </section>
                </div>                

        
        </article>
        <div class="comList">
			<rowleft></rowleft>
            <section class="rowRight">
			     <router-view></router-view>
            </section>
        </div>
    <!-- 中心内容 End -->
	</div>
</template>
<script>
import rowleft from "../components/rowLeft.vue"
 export default{
 	 data(){
 	 	return{
 	 		
 	 	}
 	 },
 	
 	 components:{
 	 	     rowleft
 	 	     
 	 }
 }
</script>
<style scope>
	@import "../assets/css/grxx.css";
</style>