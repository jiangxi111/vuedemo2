<template>
	<div id="content">
        <!-- banner Begin -->
           <BannerView></BannerView>
        <!-- banner End -->
        <section class="Introduction">
            <article class="topOneCon">
                <ul>
                    <li>
                        <a href="ptts.html" class="n1"></a>
                        <p>轻松投资 高收益</p>
                    </li>
                    <li>
                        <a href="ptts.html" class="n2"></a>
                        <p>严谨风控 真合规</p>
                    </li>
                    <li>
                        <a href="ptts.html" class="n3"></a>
                        <p>资金安全 有保障</p>
                    </li>
                </ul>
                <div class="mediaCnt">
                    <video width="280" height="200" data-setup="{}" poster="http://www.sudaibang.com/css/img/videoImg.jpg" preload="none" controls class="video-js vjs-default-skin" "video-js"="" loop="loop">
                        <source type="video/mp4" src="https://test-sudaibang-pic.b0.upaiyun.com/carousel/1442807965721.mp4"></source>
                        <source type="video/webm" src="https://test-sudaibang-pic.b0.upaiyun.com/carousel/1442807965721.mp4"></source>
                        <source type="video/ogg" src="https://test-sudaibang-pic.b0.upaiyun.com/carousel/1442807965721.mp4"></source>
                        <track label="English" srclang="en" src="https://img3-itzcdn-com.alikunlun.com/static/third/videoPlayer/demo.captions.vtt" kind="captions"></track><!-- Tracks need an ending tag thanks to IE9 -->
                        <track label="English" srclang="en" src="https://img3-itzcdn-com.alikunlun.com/static/third/videoPlayer/demo.captions.vtt" kind="subtitles"></track><!-- Tracks need an ending tag thanks to IE9 -->
                        <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a target="_blank" href="http://videojs.com/html5-video-support/">supports HTML5 video</a></p>
                    </video>
                </div>
            </article>
            <section class="gonggao">
                <h3>最新公告：</h3>
                <div class="gongList">
                    <!-- 代码 开始 -->
                    <div class="demo demo2">
                        <div class="BreakingNewsController easing" id="breakingnews2">
                            <!-- <div class="bn-title"></div> -->
                            <ul id="abc">
                                <li v-for="data in arrlist">
                                    <a href="#" target="_blank" v-text="data.articleTitlt">
                                    </a>
                                </li>
                                                            
                            </ul>
                        </div>
                    </div>
                   <!-- 代码 结束 -->
                </div>
                <div class="shouyi">
                    <p><i>融通资金:</i> 196,591,700.00 <i>元</i></p>
                    <p><i>融通资金:</i> 196,591,700.00 <i>元</i></p>
                </div>
            </section>
        </section>
            
         <section class="proList">
             <div class="titltTop">
                 <p></p>
                 <a href="#" target="_blank">更多</a>
             </div>
             <ul>
                <li v-for="data in arrlist">
                    <router-link :to="'/wytzdetail/'+data.id">
                     <section class="proLeft">
                         <div class="nameInfo">
                             <p class="name">{{data.articleTitlt}}</p>
                             <i class="zhi">质</i>
                             <i class="xu">续</i>
                         </div>
                         <dl>
                             <dd><em>年化利率</em><i class="touzhiColor">12%</i></dd>
                             <dd><em>融资金额(元)</em><b class="touzhiColor">500,000</b></dd>
                             <dd><em>项目期限(天)</em><b class="touzhiColor">90</b></dd>
                         </dl>
                     </section>
                      <div class="comCfur comCfur_50" v-if="data.num<=50" >
                         {{data.num}}%
                      </div>
                      <div class="comCfur comCfur_100_suc" v-if="data.num>50" >
                         {{data.num}}%
                      </div>
                     <div class="xinshoubiao"></div>
                     <div class="touzi">立即投资</div>
                     </router-link>
                 </li>
                 
             </ul>
         </section>
        
        <section class="coludeCode">
            <article class="coludeCodeCon">               
            </article>
        </section>

        <section class="newList">
            <article class="newListLeft">
                <div class="newsCon">
                    <dl class="dl_div">
                        <dd class="hoverNews"><a href="#">速代公告</a></dd>
                        <dd><a href="#">媒体动态</a></dd>
                        <dd><a href="#">行业动态</a></dd>
                    </dl>
                    <div style="clear:both;"></div>
                    <section class="ul_div">
                    <ul class="common">
                        <li>
                            <a href="#">1关于部分银行借记卡实名验证暂停一晚的通知</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分关于部分银行银</a>
                            <i>尊敬的速贷邦用户接联动优势通知，尊敬的速贷邦用户接联动优势通知，联动优势将于联动优势将于联动优势将于联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分银行关于部分银行借记卡实</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，接联动优势通知，联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分关于部分银行银</a>
                            <i>尊敬的速贷邦用户接联动优势通知，尊敬的速贷邦用户接联动优势通知，联动优势将于联动优势将于联动优势将于联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分银行关于部分银行借记卡实</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，接联动优势通知，联动优势将于</i>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">2关于部分银行借记卡实名验证暂停一晚的通知</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分关于部分银行银</a>
                            <i>尊敬的速贷邦用户接联动优势通知，尊敬的速贷邦用户接联动优势通知，联动优势将于联动优势将于联动优势将于联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分银行关于部分银行借记卡实</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，接联动优势通知，联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分关于部分银行银</a>
                            <i>尊敬的速贷邦用户接联动优势通知，尊敬的速贷邦用户接联动优势通知，联动优势将于联动优势将于联动优势将于联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分银行关于部分银行借记卡实</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，接联动优势通知，联动优势将于</i>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <a href="#">3关于部分银行借记卡实名验证暂停一晚的通知</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分关于部分银行银</a>
                            <i>尊敬的速贷邦用户接联动优势通知，尊敬的速贷邦用户接联动优势通知，联动优势将于联动优势将于联动优势将于联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分银行关于部分银行借记卡实</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，接联动优势通知，联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分关于部分银行银</a>
                            <i>尊敬的速贷邦用户接联动优势通知，尊敬的速贷邦用户接联动优势通知，联动优势将于联动优势将于联动优势将于联动优势将于</i>
                        </li>
                        <li>
                            <a href="#">关于部分银行关于部分银行借记卡实</a>
                            <i>尊敬的速贷邦用户：接联动优势通知，接联动优势通知，联动优势将于</i>
                        </li>
                    </ul>
                    </section>
                </div>
            </article>
            <article class="newListRight">
                <div class="newTit"><span>最新投标</span></div>
                 
            <div class="list_lh">
            <ul>
                <li><a href="#">WU**E 刚刚投资了刚刚投资了</a><i>30000元30000元30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li><li><a href="#">WU**E 刚刚投资了刚刚投资了</a><i>30000元30000元30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li><li><a href="#">WU**E 刚刚投资了刚刚投资了</a><i>30000元30000元30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
                        <li><a href="#">WU**E 刚刚投资了</a><i>30000元</i></li>
             
            </ul>
        </div>
            </article>
        </section>

        <section class="Partners">
            <div class="parTit"></div>
            <ul>
                <li><img src="../assets/images/logo1.png"></li>
                <li><img src="../assets/images/logo2.png"></li>
                <li><img src="../assets/images/logo3.png"></li>
                <li><img src="../assets/images/logo4.png"></li>
                <li><img src="../assets/images/logo5.png"></li>
                <li><img src="../assets/images/logo7.png"></li>
                
                <li><img src="../assets/images/logo8.png"></li>
                <li><img src="../assets/images/logo9.png"></li>
                <li><img src="../assets/images/logo10.png"></li>
                <li><img src="../assets/images/logo6.png"></li>
            </ul>
        </section>
	</div>
</template>
<script>
    import Vue from 'vue'
    import BannerView from "./BannerView.vue"
    import '../assets/js/scroll.js'
    import "../assets/js/breakingnews.js"
    import "../assets/js/index.js"
    var vm =new Vue({})
    Vue.filter("numquan", function(classname){
        return classname
    });
      
    export default{
          data(){
             return{
                arrlist:[]
             }
          },
          mounted(){
            this.scroll();
            this.fetchData();
            //鼠标经过新闻特效
            var $ddhover = $(".dl_div dd");
                $ddhover.hover(function (e) {
                    $(this).addClass('hoverNews').siblings().removeClass("hoverNews");
                    var indexLi = $ddhover.index(this);      
                    $(".ul_div > ul").eq(indexLi).show().siblings().hide();
                });


          },
          components:{
                BannerView
          },
          methods:{
            fetchData(){
                this.$http.get("src/assets/datajson/articlelist.json")
                .then((res)=>{
                    this.arrlist = res.data;
                })
                .catch((err)=>{
                   console.log("home"+err)
                })
            },
            scroll(){
                  $("div.list_lh").myScroll({
                        speed:40, //数值越大，速度越慢
                        rowHeight:68 //li的高度
                    });
              
            }
        }
    }
</script>
<style scoped>
    @import "../assets/css/index.css"
</style>
