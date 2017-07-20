<template>
	<div>
		
			<div class="topMenu">
                            <form action="#">
                                <input type="text" placeholder="搜索产品名称" class="searText">
                                <input type="button" class="button">
                            </form>
                            <input id="demo" placeholder="按日期查询" class="laydate-icon" onClick="laydate({istime: true, format: 'YYYY-MM-DD hh:mm:ss'})">
                        </div>
                        <dl>
                            <dt>
                                <p class="time">时间</p>
                                <p class="jine">购买金额</p>
                                <p class="xiangmu">交易项目</p>
                                <p class="leixing">产品状态</p>
                                <p class="state">
                                    <select class="selState">
                                        <option value="">全部</option>
                                        <option value="">已支付</option>
                                        <option value="">待支付</option>
                                        <option value="">已过期</option>
                                    </select>
                                </p>
                            </dt>
                            <dd>
                                <p class="timeCon">2015-11-08 16:01:21</p>
                                <p class="jineCon">-10000000.00</p>
                                <p class="xiangmuCon">房产抵押融资项目H1509261-3</p>
                                <p class="leixingCon">还款中</p>
                                <p class="stateCon daizhifu">待支付<a href="noPaid.html">查看</a></p>
                            </dd>
                            <dd>
                                <p class="timeCon">2015-11-08 16:01:21</p>
                                <p class="jineCon">-10000000.00</p>
                                <p class="xiangmuCon">房产抵押融资项目H1509261-3</p>
                                <p class="leixingCon">还款中</p>
                                <p class="stateCon">已支付<a href="ddglDetail.html">查看</a></p>
                            </dd>
                            <dd>
                                <p class="timeCon">2015-11-08 16:01:21</p>
                                <p class="jineCon">-10000000.00</p>
                                <p class="xiangmuCon">房产抵押融资项目H1509261-3</p>
                                <p class="leixingCon">还款中</p>
                                <p class="stateCon daizhifu">待支付<a href="noPaid.html">查看</a></p>
                            </dd>
                            <dd>
                                <p class="timeCon">2015-11-08 16:01:21</p>
                                <p class="jineCon">-10000000.00</p>
                                <p class="xiangmuCon">房产抵押融资项目H1509261-3</p>
                                <p class="leixingCon">还款中</p>
                                <p class="stateCon">已支付<a href="ddglDetail.html">查看</a></p>
                            </dd>
                            <dd>
                                <p class="timeCon">2015-11-08 16:01:21</p>
                                <p class="jineCon">-10000000.00</p>
                                <p class="xiangmuCon">房产抵押融资项目H1509261-3</p>
                                <p class="leixingCon">还款中</p>
                                <p class="stateCon"><em>已过期</em></p>
                            </dd>
                            <dd>
                                <p class="timeCon">2015-11-08 16:01:21</p>
                                <p class="jineCon">-10000000.00</p>
                                <p class="xiangmuCon">房产抵押融资项目H1509261-3</p>
                                <p class="leixingCon">还款中</p>
                                <p class="stateCon">已支付<a href="ddglDetail.html">查看</a></p>
                            </dd>
                            <dd>
                                <p class="timeCon">2015-11-08 16:01:21</p>
                                <p class="jineCon">-10000000.00</p>
                                <p class="xiangmuCon">房产抵押融资项目H1509261-3</p>
                                <p class="leixingCon">还款中</p>
                                <p class="stateCon daizhifu">待支付<a href="noPaid.html">查看</a></p>
                            </dd>
                            
                        </dl>
                        <section class="page">
                            <a href="#" class="prev">上一页</a>
                            <a href="#" class="active">1</a>
                            <a href="#">2</a>
                            <a href="#">3</a>
                            <span>...</span>
                            <a href="#" class="next">下一页</a>
                        </section>


	</div>
</template>
<script>
 export default{
 	 data(){
 	 	return{
 	 		
 	 	}
 	 },
 	
 	 components:{
 	 	     
 	 	     
 	 }
 }
</script>
<style scope>
	@import "../assets/css/ddgl.css";
	@import "../assets/js/need/laydate.css";
	
	
</style>