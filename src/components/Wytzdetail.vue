<template>
	<div id="datail">
		<!-- 产品列表详情 Begin -->
        <section class="marTit">
            <article class="marCon">
                <div class="xinshou"></div>
                <!-- <div class="huodong"></div> -->
                <div class="marConLeft">
                    <div class="nameInfo">
                         <span class="name">{{formdata.articleTitlt}}</span>
                         <i class="zhi">质</i>
                         <!-- <i class="xu">续</i> -->
                     </div>
                     <section class="nianlilv">
                         <div class="xinxi">
                             <span class="n1">年化利率</span>
                             <p class="k1 yearlilv">19%</p>
                             <em class="jiaxi">+1%</em>
                         </div>
                          <div class="xinxi">
                             <span>融资金额(元)</span>
                             <p class="k2">500,000</p>
                         </div>
                          <div class="xinxi">
                             <span>项目期限(天)</span>
                             <p class="k3 tianshu">100</p>
                         </div>
                     </section>
                     <ul>
                          <li>项目起息日：{{formdata.beginTime | timeFun}}</li>
                         <li>项目结束日：{{formdata.endTime | timeFun}}</li>
                         <li>起投金额：<span class="qitou">100</span>元</li>
                         <li>合同范本：<a href="#" class="detail">>查看详情</a></li>
                         <li>还款方式：按天计息，按月付息，到期还本。</li>
                         <li class="tiexi">贴息规则：凡用户在募集期内成功认购项目标的，即可享受贴息奖励      <a href="gmgz.html">>查看详情</a></li>                         
                     </ul>
                </div>
                <div class="marConRight">
                    <div class="ketou">
                        <div class="comCfur comCfur_25">
                          {{formdata.num}}
                        </div>
                        <div class="ketoujine">
                            <p>可投金额</p>
                            <p><span class="ketouPrice">150,0</span>元</p>
                        </div>
                    </div>
                    <form action="#">
                        <ul>
                            
                            <li>
                                <span>账户余额：</span>
                                <div class="loginNo">
                                  <a href="#">登录</a>后可见

                                </div>
                                <div class="loining" style="display: none;">
                                  <em style="color:#999;">
                                  <strong class="zhanghuyue">500</strong>&nbsp;元</em>
                                  <a href="#" class="chongzhi n1">充值</a>
                                </div>
                            </li>
                            <li>
                                <section class="InputDiv">
                                  <span>购买金额：</span>
                                  <em class="danwei">&nbsp;元</em>
                                  <div class="shuru">
                                    <div class="priceJian">-</div>
                                    <input autocomplete="off" type="text"  class="goumai"> 
                                    <div class="priceAdd">+</div>
                                  </div> 
                                </section>                               
                            </li>
                            <li>                                
                                <div class="shouyi"><i class="shouyiPrice">4794.52</i>&nbsp;元</div>
                                <b>预期收益：</b>
                            </li>
                            <li style="margin-top:14px;height:40px;"><div class="bgTranBlue subshouyi">购买</div></li>
                        </ul>
                    </form>
                </div>
            </article>
        </section>
<section class="menuWid defaultStyle">
  <section class="menuConSec">
    <ul>
      <li class="selectLi" attrName="xmxq"><a href="javascript:void(0);">项目详情</a></li>
      <li attrName="xmtp"><a href="javascript:void(0);">项目图片</a></li>
      <li attrName="fkxx"><a href="javascript:void(0);">风控信息</a></li>
      <li attrName="tbjl"><a href="javascript:void(0);">投标记录</a></li>
      <li attrName="fkjh"><a href="javascript:void(0);">还款计划</a></li>
    </ul>
    <section class="menuBt">
      <a href="#">购买</a>
      <p>年化利率&nbsp;&nbsp;12%</p>
    </section>
  </section>
</section>
<section class="xiangmuInfo">
  <div class="borderColor" id="xmxq">
    <section class="jibie">
        <h4>银行级别安全审核</h4>
        <ul>
            <li>
                <img src="../assets/images/level1.png" >
                <p>身份证</p>
            </li>
            <li>
                <img src="../assets/images/level2.png" >
                <p>户口本</p>
            </li>
            <li>
                <img src="../assets/images/level3.png" >
                <p>证信报告</p>
            </li>
            <li>
                <img src="../assets/images/level4.png" >
                <p>收入证明</p>
            </li>
           
            <li>
                <img src="../assets/images/level5.png" >
                <p>婚姻证</p>
            </li>
            <li>
                <img src="../assets/images/level6.png" >
                <p>在执行案件查询</p>
            </li>
            <li>
                <img src="../assets/images/level7.png" >
                <p>房产证</p>
            </li>
           
            <li>
                <img src="../assets/images/level8.png" >
                <p>土地使用证</p>
            </li>
            <li>
                <img src="../assets/images/level9.png" >
                <p>他项权证</p>
            </li>
            <li>
                <img src="../assets/images/level10.png" >
                <p>房屋权属登记信息</p>
            </li>
        </ul>
    </section>
    <div class="line"></div>
    <section class="infoListCon">
        <h2>融资人信息</h2>
        <div class="hoverCon">
            <p class="topCion"></p>
            <p class="LineCion">
              1. 款人介绍：李先生，杭州XX汽车服务有限公司法人；
    2. 借款人征信情况：征信情况良好，近12个月无逾期记录 ；
    3. 涉诉情况：个人及其企业皆无涉诉情况。
            </p>
            <p class="bottomCion"></p>
        </div>
      </section>
      <section class="infoListCon">
        <h2>抵/质押物信息</h2>
        <div class="hoverCon">
            <p class="topCion"></p>
            <p class="LineCion">
              1. 车辆型号：福克斯牌CAF7163B4；
    2. 车辆权属情况：借款人个人所有；
    3. 市场评估价：130000元整；
    4. 本次融资金额为人民币96500元整。
            </p>
            <p class="bottomCion"></p>
        </div>
      </section>
      <section class="infoListCon">
        <h2>企业信息</h2>
        <div class="hoverCon">
            <p class="topCion"></p>
            <p class="LineCion">
              1. 企业详细介绍.：杭州XX汽车服务有限公司、注册资金100万。 分别在杭州、台州等地区设立分公司，以经营中高端二手车，提供汽车金融服务，
代理保险、验车、过户等为核心业务，业务辐射华东四省一市。
    2. 企业经营范围：汽车事务代理，汽车租赁，汽车内装饰用品，汽车及摩托车配件，二手车，汽车的技术开发。技术咨询 汽车维修保养服务等业务
    3. 企业经营情况：企业经营状况良好，月均营业额在500余万元左右。
            </p>
            <p class="bottomCion"></p>
        </div>
      </section>
      <section class="infoListCon">
        <h2>资金用途</h2>
        <div class="hoverCon">
            <p class="topCion"></p>
            <p class="LineCion">
              此次借款主要用于二手车车辆收购，以及车辆后续整备销售。
            </p>
            <p class="bottomCion"></p>
        </div>
      </section>
      <section class="infoListCon">
        <h2>还款来源</h2>
        <div class="hoverCon">
            <p class="topCion"></p>
            <p class="LineCion">
              该辆二手车的销售回款。
            </p>
            <p class="bottomCion"></p>
        </div>
      </section>
  </div>
  
  <h1 id="xmtp">项目图片</h1>
  <article class="InfoCon">
    <h2>项目资料</h2>
    <div class="titImg">他项权证</div>
    <img src="../assets/images/img1.png" class="imgList">
    <div class="titImg">房产证</div>
    <img src="../assets/images/img2.png" class="imgList">
    <h2>现场照片</h2>
    <div class="titImg">房屋照片1</div>
    <img src="../assets/images/img3.png" class="imgList">
    <div class="titImg">房屋照片2</div>
    <img src="../assets/images/img4.png" class="imgList">
  </article>
  <h1 id="fkxx">风控信息</h1>
  <article class="InfoList">
      <section class="infoListCon">
        <h2>风险评估</h2>
        <div class="hoverCon">
            <p class="topCion"></p>
            <p class="LineCion">
              1. 质押物情况：高尔夫牌FV7164FG，至今累计行驶60708公里，车辆状况良好，原车购入于2010年，车辆相关手续齐全，质押物市场价值100000元；
              2. 财务状况：客户月营业收入500万元左右，且二手车销售率达85%；
              3. 经营情况：借款人为企业法人，借款人企业月销售车量40余辆，公司收入稳定，具有一定的抗风险能力；
              4. 偿还能力：客户具备良好、稳定的偿还能力，根据借款人二手车去化率及销售情况具备在借款期限内清偿此次借款的能力
              。
            </p>
            <p class="bottomCion"></p>
        </div>
      </section>
      <section class="infoListCon">
        <h2>风险防范措施</h2>
        <div class="hoverCon">
            <p class="topCion"></p>
            <p class="LineCion">
            1. 车辆已在本次借款的汽车服务有限公司做质押，保障融资项目及融资方式的合法性；
            2. 质押物价值均已在二手交易市场评估认可，且该车在二手车市场具有较好的流动性；
            3. 二手车交易所需的相关资料（车辆登记证，行驶证，车辆钥匙，二手车买卖合同）均由平台保管；
            4. 车辆质押于平台指定的第三方场所有效托管，第三方对车辆保管承担相关责任；
            5. 合同到期后，若借款人违约不偿还借款，债权出让人承担赎回责任，最大程度保护投资人资金安全。
           </p>
            <p class="bottomCion"></p>
        </div>
      </section>
      <section class="infoListCon">
        <h2>风控意见</h2>
        <div class="hoverCon">
           <p class="topCion"></p>
            <p class="LineCion">
            当借款人因不可控因素导致无力清偿借款时，需要通过处置质押车辆清偿本次借款。
           </p>
            <p class="bottomCion"></p>
        </div>
      </section>
  </article>
  <h1 id="tbjl">投标记录</h1>
  <article class="InfoCon">
      <dl>
        <dt>
          <span class="n1">成交时间</span>
          <span>投标人</span>
          <span>投资金额</span>
        </dt>
        <dd>
          <span class="n1">2015-11-08 16:01:21</span>
          <span>li*****ng</span>
          <span>13800元</span>
        </dd>
        <dd>
          <span class="n1">2015-11-08 16:01:21</span>
          <span>li*****ng</span>
          <span>13800元</span>
        </dd>
        <dd>
          <span class="n1">2015-11-08 16:01:21</span>
          <span>li*****ng</span>
          <span>13800元</span>
        </dd>
        <dd>
          <span class="n1">2015-11-08 16:01:21</span>
          <span>li*****ng</span>
          <span>13800元</span>
        </dd>
        <dd>
          <span class="n1">2015-11-08 16:01:21</span>
          <span>li*****ng</span>
          <span>13800元</span>
        </dd>
        <dd>
          <span class="n1">2015-11-08 16:01:21</span>
          <span>li*****ng</span>
          <span>13800元</span>
        </dd>
        <dd>
          <span class="n1">2015-11-08 16:01:21</span>
          <span>li*****ng</span>
          <span>13800元</span>
        </dd>
        <dd>
          <span class="n1">2015-11-08 16:01:21</span>
          <span>li*****ng</span>
          <span>13800元</span>
        </dd>
      </dl>
  </article>
  <h1 id="fkjh">还款计划</h1>
  <article class="InfoCon">
      <dl>
        <dt>
          <span class="n1">预计还款时间</span>
          <span>类型</span>
          <span>还款金额（元）</span>
        </dt>
        <dd>
          <span class="n1">2016-02-02</span>
          <span>利息</span>
          <span>138.08</span>
        </dd>
        <dd>
          <span class="n1">2016-02-02</span>
          <span>加送利息</span>
          <span>138.08</span>
        </dd>
        <dd>
          <span class="n1">2016-02-02</span>
          <span>本金</span>
          <span>138.08</span>
        </dd>
      </dl>
  </article>
</section>
    <!-- 产品列表详情 End -->
	</div>
</template>
<script>
	require ("../assets/js/wytzDetail2.js")
	export default{
		mounted(){
			// var reg = /\/wytzdetail\/(\d+)/;
			// var id =this.$route.path.match(reg)[1];
			var id = this.$route.params.id
			this.fetchData(id);
      

$.fn.smartFloat = function() {
var position = function(element) {
var top = element.position().top, pos = element.css("position");
$(window).scroll(function() {
    var scrolls = $(this).scrollTop();
    if (scrolls > top) { //如果滚动到页面超出了当前元素element的相对页面顶部的高度
        if (window.XMLHttpRequest) { //如果不是ie6
            $(".menuWid").removeClass('defaultStyle').addClass('addDefault');     
            $(".menuBt").show();

            element.css({
                position: "fixed",
                top: 0
            }).addClass("shadow");
        } else { //如果是ie6
            element.css({
                top: scrolls
            });
        }
    }else {
        $(".menuWid").removeClass('addDefault').addClass('defaultStyle');
        $(".menuBt").hide();
        element.css({
            position: pos,
            top: top
        }).removeClass("shadow");
    }
});
};
return $(this).each(function() {
  position($(this));
  });
};
$(function(){
  $(".menuWid").smartFloat();
});

$(function(){
  $(".menuConSec ul li").bind('click', function() {
      $(this).addClass('selectLi').siblings().removeClass('selectLi');
      var liAttr = $(this).attr("attrName");
      if(liAttr=="xmxq"){
        offsetTop("xmxq");
      }
      else if(liAttr=="xmtp"){
        offsetTop("xmtp");
      }
      else if(liAttr=="fkxx"){
        offsetTop("fkxx");
      }
      else if(liAttr=="tbjl"){
        offsetTop("tbjl");
      }
      else if(liAttr=="fkjh"){
        offsetTop("fkjh");
      }
      
  });
})
function offsetTop(idVal){
         var $id=$("#"+idVal);
         if("" == $id.text() || null == $id.text()){
           return false;
         }else{
             if($(".menuWid").hasClass('defaultStyle')){
               $("html,body").scrollTop($id.offset().top-120);
             }
             if($(".menuWid").hasClass('addDefault')){
               $("html,body").scrollTop($id.offset().top-50);
             }
         }
         
       
}

       
		},
		data(){
			return{
				formdata:{}
			}
		},
		methods:{
			fetchData(id){
				  this.$http.get("src/assets/datajson/articlelist.json")
          .then((res)=>{
              this.formdata=res.data[id-1];
          })
          .catch((error)=>{
            alert("链接失败"+error)
          })
			}
		},
		watch:{
			$route(to,from){
				var id = this.$route.params.id
				this.fetchData(id);
			}
		}
	}
</script>
<style scoped>
	@import "../assets/css/wytzDetail2.css"
</style>