<template>
	<div>


		<!-- 搜索条件Begin -->
        <section class="selectDiv">
            <article class="selectMar">
                <div class="selectTit">
                    <p>按条件筛选</p>
                    <form action="#">
                        <input type="text" class="searchPro" placeholder="搜索产品名称">
                        <div class="btsearch"></div>
                    </form>
                </div>
                <div class="tijiao">
                    <p>项目类别：</p>
                    <a href="#" class="clickSelect">全部</a>
                    <a href="#">优车宝</a>
                    <a href="#">优房宝</a>
                    <a href="#">优票宝</a>
                    <a href="#">优银宝</a>
                </div>
                <div class="tijiao">
                    <p>当前状态：</p>
                    <a href="#" class="clickSelect">全部</a>
                    <a href="#">募集中</a>
                    <a href="#">募集成功</a>
                    <a href="#">还款中</a>
                    <a href="#">还款完成</a>
                </div>
                <div class="tijiao">
                    <p>标的类型：</p>
                    <a href="#" class="clickSelect">全部</a>
                    <a href="#">新手标</a>
                    <a href="#">活动标</a>                    
                </div>
            </article>
        </section>
    <!-- 搜索条件End -->
    <!-- 产品列表 Begin -->
         <section class="proList">
             <ul>
                <li v-for="data in arrlist" @click="modalSub(data)">
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
                     
                 </li>
             </ul>
             <section class="pagination">
                 <a href="#" class="pagePrev">上一页</a>
                 <a href="#" class="active">1</a>
                 <a href="#">2</a>
                 <a href="#">3</a>
                 <span>...</span>
                 <a href="#">87</a>
                 <a href="#">88</a>
                 <a href="#">89</a>
                 <a href="#" class="pageNext">下一页</a>
                 <p>转到<input type="text" class="numPage" maxlength="4">页</p>
             </section>
         </section>
    <!-- 产品列表 End -->
    <modal title="产品标题"  modalId="myModal" @backTrue="getTrue" @backCance="getCance">
        <h2 slot="conTitle">内容{{id}}</h2>
        <div slot="content">{{modalText}}</div>
    </modal>
	</div>
</template>
<script>
    import modal from "./modal.vue"
    export default{
          data(){
             return{
                arrlist:[],
                modalText:"",
                id:""
             }
          },
          created(){
           
          },
          mounted(){
            this.fetchData();
            
          },
          components:{
                modal
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
            modalSub(obj){
                this.modalText=obj.articleTitlt;
                this.id=obj.id;
                $('#myModal').modal('show');
            },
            getTrue(){
                this.$router.push({path:"/wytzdetail/"+this.id})
            },
            getCance(modalid){
                $(modalid).modal("hide")
            }
        }
    }

</script>
<style scoped>
	@import "../assets/css/wytz.css";
</style>